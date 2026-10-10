---
layout: post
title: "Troubleshooting a Windows Hosts-File Issue: My First IT Support Lab"
subtitle: "A simulated help desk ticket, a wrong hostname mapping, and what I learned about separating name resolution, connectivity, and the app itself."
date: 2026-10-10
author: Khaled Adad
tags:
  - Cybersecurity
  - IT Support
  - Windows
  - PowerShell
  - Networking
  - DNS
  - Troubleshooting
  - Home Lab
permalink: /windows-hosts-file-troubleshooting-lab/
---

In my [last post](/from-software-to-silicon-cybersecurity-roadmap/) I wrote that I'd document the labs and the mistakes along with the plan. This is the first one. It's a small Windows support lab: one broken hostname, one local web page, and a handful of PowerShell commands. Simple as it was, I made a wrong call early on, ran into a problem I didn't plan for, and had to keep two separate issues from blurring together. That turned out to be most of the lesson.

*This was a deliberately simulated incident in a Windows virtual machine running in Parallels on my own computer. It wasn't a production incident, and there was no real user or client. I broke things on purpose so I could practice fixing them.*

**Contents**

* TOC
{:toc}

## The Simulated Ticket

I wrote the scenario as if it had come in through a help desk queue:

> **Ticket:** User reports that the internal "Support Lab Portal" won't load.
> **URL:** `http://portal.support.test:8080`
> **Symptom:** The browser spins and eventually times out. No error page from the portal itself.
> **Expected:** A page that says "Support Lab Portal — Status: Working."

The hostname uses `.test`, a top-level domain [reserved for testing](https://www.rfc-editor.org/rfc/rfc6761) so it won't collide with a real site.

## Step 1: Establish a Baseline (and My First Mistake)

Before touching anything, I wanted to know whether the machine's basic networking worked. I ran checks along these lines:

```powershell
Get-Date                          # timestamp for my notes
Get-NetIPConfiguration            # adapter, IP, gateway, DNS servers
Resolve-DnsName example.com       # can the machine resolve a public name?
Test-NetConnection example.com -Port 443   # can it open a TCP connection?
```

- [`Get-Date`](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/get-date) is there only so my notes have a time attached.
- [`Get-NetIPConfiguration`](https://learn.microsoft.com/en-us/powershell/module/nettcpip/get-netipconfiguration) shows the adapter's IP address, default gateway, and DNS servers. (I'm leaving my VM's output out of this post on purpose.)
- [`Resolve-DnsName`](https://learn.microsoft.com/en-us/powershell/module/dnsclient/resolve-dnsname) asks Windows to turn a name into an address.
- [`Test-NetConnection`](https://learn.microsoft.com/en-us/powershell/module/nettcpip/test-netconnection) checks whether a TCP connection to a given port succeeds.

Then I opened `example.com` in the browser, saw a sparse page saying the domain is for use in documentation examples, and briefly decided something was broken. It wasn't. That *is* the page. It loaded fine, and all the baseline checks passed.

It's a small mistake, but it's worth writing down because it's a very normal one: I judged the result by what I expected to see instead of by what the evidence said. So I moved the lab to a local service I controlled, where "working" would mean something specific.

## Step 2: Build a Known-Good Service

My plan was to serve a tiny page with Python, but Python and the `py` launcher weren't installed in the VM. Instead of installing them, I used a short PowerShell script built on .NET's [`TcpListener`](https://learn.microsoft.com/en-us/dotnet/api/system.net.sockets.tcplistener) class. It listened on `127.0.0.1:8080` and answered every request with a plain HTML page:

**Support Lab Portal — Status: Working.**

Opening `http://127.0.0.1:8080` in the browser showed exactly that. Now I had a clear definition of "working" to test against.

## Step 3: Introduce the Fault

Next I broke name resolution on purpose. I added this line to the Windows hosts file (`C:\Windows\System32\drivers\etc\hosts`):

```text
192.0.2.123 portal.support.test # SUPPORT-LAB
```

Two details were deliberate:

- `192.0.2.123` is in `192.0.2.0/24`, one of the address blocks [reserved for documentation](https://www.rfc-editor.org/rfc/rfc5737). Nothing should be answering there, so it's a safe "wrong" address to use.
- The `# SUPPORT-LAB` comment marks the line as mine, so I can find it and remove it later without touching anything else in the file.

The setup also called for a backup copy of the hosts file before editing. I was instructed to make one, but I didn't confirm that the backup was actually created, so I'm not going to claim it exists. That's part of why the cleanup steps at the end remove only the marked line instead of restoring a whole file.

## Step 4: Reproduce and Diagnose

With the bad entry in place, `http://portal.support.test:8080` timed out in the browser, matching the ticket.

The first question was what that name actually resolved to:

```powershell
Resolve-DnsName portal.support.test
```

It returned `192.0.2.123`, not the local machine. Then I checked the hosts file directly for my marker:

```powershell
Select-String -Path "$env:SystemRoot\System32\drivers\etc\hosts" -Pattern 'SUPPORT-LAB'
```

That showed the incorrect mapping. At this point the cause looked clear: the name was being sent to an address where nothing was listening.

## An Unplanned Problem: The Server Stopped

While I was diagnosing, the local listener stopped. This had nothing to do with the hosts file. A connection timed out while my script was reading from it, the script threw an error it didn't handle, and the loop exited, taking the server down with it.

This is where it would have been easy to get confused. If I'd just retried the browser, I'd have seen another failure and could have blamed it on the hosts entry. Instead, I treated it as a separate issue:

1. I fixed the script so a single bad connection would be caught and logged, and the loop would keep serving. The pattern looked roughly like this (a simplified sketch, not the full script):

   ```powershell
   while ($true) {
       $client = $listener.AcceptTcpClient()
       try {
           # read the request, write the HTML response
       } catch {
           Write-Warning "Connection error: $($_.Exception.Message)"
       } finally {
           $client.Close()
       }
   }
   ```

2. I tested the server **by IP address**, skipping name resolution entirely:

   ```powershell
   curl.exe --noproxy "*" --max-time 10 -i http://127.0.0.1:8080
   ```

   That returned `HTTP/1.1 200 OK` and the expected page.

A few notes on that command. I used `curl.exe` explicitly because in Windows PowerShell 5.1, plain `curl` is an alias for `Invoke-WebRequest`. `--noproxy "*"` makes sure a proxy setting can't get in the way. `--max-time 10` stops it from hanging forever, and `-i` includes the response headers, so I could see the status line. (The options are documented in the [curl manual](https://curl.se/docs/manpage.html).)

That result settled it: the service was healthy. The script bug was real, but it was a separate bug, and it wasn't the cause of the ticket. The ticket was still about the name.

## Step 5: The Fix, and Why It Needed Elevation

My first attempt to edit the hosts file failed with **Access denied**. So I checked whether my PowerShell session was running with administrator rights:

```powershell
([Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole(
    [Security.Principal.WindowsBuiltInRole]::Administrator)
```

It returned `False`. That's expected behavior, not a fault. With [User Account Control](https://learn.microsoft.com/en-us/windows/security/application-security/application-control/user-account-control/), even an administrator account runs everyday programs with a standard token, and the hosts file is a system file that a standard session can't modify.

I opened a new PowerShell window with **Run as administrator**, ran the same check, and it returned `True`. Then I changed the marked line to:

```text
127.0.0.1 portal.support.test # SUPPORT-LAB
```

and cleared the DNS client cache so Windows wouldn't keep serving the old answer:

```powershell
Clear-DnsClientCache
```

([`Clear-DnsClientCache`](https://learn.microsoft.com/en-us/powershell/module/dnsclient/clear-dnsclientcache) clears the contents of the local resolver cache.)

### Least Privilege, in Practice

The Access denied error was a good small example of [least privilege](https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/plan/security-best-practices/implementing-least-privilege-administrative-models): accounts and processes should only have the access they need for the task in front of them. The hosts file can redirect any name on the machine, which is exactly why malware has historically targeted it. Requiring elevation means an ordinary program, or an ordinary mistake, can't quietly rewrite it.

What I took from this as a support person:

- Elevate only for the step that needs it. I did the diagnosis in a normal session and opened an elevated one only for the edit.
- Confirm the privilege level instead of guessing. The role check took two seconds and explained the error.
- When I'm done with the elevated window, I should close it.

## Step 6: Verify at Every Layer

After the fix, I checked each layer separately:

```powershell
Resolve-DnsName portal.support.test
# -> 127.0.0.1

curl.exe --noproxy "*" --max-time 10 -i http://portal.support.test:8080
# -> HTTP/1.1 200 OK
```

Finally, I opened `http://portal.support.test:8080` in the browser. It displayed **"Support Lab Portal — Status: Working."** That's the result the ticket asked for, so the ticket could be closed.

## Evidence: Before and After

<div class="table-responsive" markdown="1">

| Check | Before fix | After fix |
|---|---|---|
| Hosts file entry (marked `# SUPPORT-LAB`) | `192.0.2.123 portal.support.test` | `127.0.0.1 portal.support.test` |
| `Resolve-DnsName portal.support.test` | `192.0.2.123` | `127.0.0.1` |
| `curl.exe` to `http://127.0.0.1:8080` (bypasses name resolution) | `HTTP/1.1 200 OK`, expected page (after the script fix) | Not re-run as a separate step |
| `curl.exe` to `http://portal.support.test:8080` | Not run | `HTTP/1.1 200 OK` |
| Browser at `http://portal.support.test:8080` | Timed out | "Support Lab Portal — Status: Working." |
| Administrator role check | `False` (standard session, edit denied) | `True` (Run as administrator) |

</div>

## Four Different Kinds of "Working"

The most useful idea I took from this lab is that "the site works" is really four separate claims, and each one needs its own evidence:

1. **Hostname resolution.** Does the name turn into the right address? `Resolve-DnsName` answers this. Before the fix it returned an answer, just the wrong one.
2. **TCP connectivity.** Can the client open a connection to that address and port? `Test-NetConnection -Port` checks this. Against `192.0.2.123`, nothing should accept the connection, which fits the timeout.
3. **HTTP success.** Does the service return a valid response? `curl.exe -i` shows the status line (`HTTP/1.1 200 OK`) and the body.
4. **Browser validation.** Does the user actually see the expected page? This is the check that matches the ticket, but on its own it can't tell you *which* layer failed.

Testing by IP address separated layer 1 from layers 2 and 3. That's how I could say with evidence that the service was fine and the name was wrong.

## Why This Isn't a DNS Server Outage

Windows checks the local hosts file before it asks a DNS server, and `Resolve-DnsName` follows the same behavior by default (it even has a [`-NoHostsFile`](https://learn.microsoft.com/en-us/powershell/module/dnsclient/resolve-dnsname) switch to skip it). That leads to some practical differences:

<div class="table-responsive" markdown="1">

| | Hosts-file override | DNS server outage |
|---|---|---|
| Scope | One machine | Usually many machines that use that server |
| Names affected | Only the specific names in the file | Typically many or all names |
| What `Resolve-DnsName` returns | A confident answer, possibly the wrong one | Errors or timeouts |
| Where to fix it | The local hosts file, with admin rights | The DNS server, network, or client DNS settings |

</div>

In this lab, the baseline had already shown that public name resolution worked, and only one name was affected. That pointed at something local rather than a broken DNS server. Next time, I'd also run `Resolve-DnsName portal.support.test -NoHostsFile` to compare the answer with and without the hosts file. I didn't run it this time, but it would make the distinction explicit.

## Cleanup

I was given cleanup steps at the end of the lab, but I haven't confirmed that I completed them, so I'm listing them as instructions rather than as something I did. The goal is to remove **only** the marked lab entry and leave anything else in the hosts file alone.

In an elevated PowerShell window:

```powershell
$hosts = "$env:SystemRoot\System32\drivers\etc\hosts"

# Preview the line(s) that will be removed
Select-String -Path $hosts -Pattern '# SUPPORT-LAB'

# Remove only the marked line(s)
(Get-Content $hosts) | Where-Object { $_ -notmatch '# SUPPORT-LAB' } | Set-Content $hosts -Encoding ascii

Clear-DnsClientCache

# Confirm: this should return nothing
Select-String -Path $hosts -Pattern '# SUPPORT-LAB'
```

To stop the portal, go to the PowerShell window running the listener and press `Ctrl+C`. A listener blocked waiting for a connection may not respond right away, so if it doesn't stop, close that window. Then confirm nothing is still listening on the port:

```powershell
Get-NetTCPConnection -LocalPort 8080 -State Listen -ErrorAction SilentlyContinue
```

No output means the port is free. Finally, close the elevated PowerShell window.

On the backup: if a hosts-file backup was created, check that it exists and what it contains before relying on it. Because I didn't confirm it was made, the cleanup above intentionally doesn't depend on it.

## What I Learned

- **Define "working" before you test.** My `example.com` mix-up happened because I didn't know what a correct result looked like. The local portal fixed that.
- **Test one layer at a time.** Name, connection, HTTP response, and what the user sees are different questions.
- **Keep unrelated problems separate.** The server-script crash was real, but it wasn't the ticket. Fixing it and then testing by IP kept it from muddying the diagnosis.
- **Treat Access denied as information.** It pointed straight to privilege level, and a quick role check confirmed it.
- **Mark your changes.** A comment like `# SUPPORT-LAB` makes it possible to undo exactly what you did and nothing more.
- **Be honest in the notes.** Writing "instructed but not confirmed" for the backup and cleanup felt awkward, but it's the accurate record, and an accurate ticket history is worth more than a tidy one.

## How This Fits My IT Support Path

I'm building toward IT support and, eventually, cybersecurity work, and labs like this are how I'm getting there. I want to be careful about how I describe this one: it's a single simulated lab in a VM, not job experience. What it does show is practice with things that come up in real support work:

- Working from a ticket: reproducing the symptom, gathering evidence, fixing it, and verifying the fix
- Using PowerShell for network diagnostics (`Resolve-DnsName`, `Test-NetConnection`, `Get-NetIPConfiguration`, `Clear-DnsClientCache`)
- Understanding how the Windows hosts file interacts with DNS name resolution
- Working within UAC and least privilege, and elevating only when needed
- Separating an unrelated defect from the reported issue
- Documenting the work, including what wasn't verified

On a résumé, I'd list it under a home lab or projects section, described as a simulated Windows troubleshooting lab, with a link back to this post.

## References

- [**Resolve-DnsName**](https://learn.microsoft.com/en-us/powershell/module/dnsclient/resolve-dnsname): Microsoft Learn, including the `-NoHostsFile` and `-CacheOnly` switches
- [**Test-NetConnection**](https://learn.microsoft.com/en-us/powershell/module/nettcpip/test-netconnection): Microsoft Learn
- [**Get-NetIPConfiguration**](https://learn.microsoft.com/en-us/powershell/module/nettcpip/get-netipconfiguration): Microsoft Learn
- [**Clear-DnsClientCache**](https://learn.microsoft.com/en-us/powershell/module/dnsclient/clear-dnsclientcache): Microsoft Learn
- [**Get-Date**](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/get-date): Microsoft Learn
- [**User Account Control**](https://learn.microsoft.com/en-us/windows/security/application-security/application-control/user-account-control/): Microsoft Learn
- [**Implementing Least-Privilege Administrative Models**](https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/plan/security-best-practices/implementing-least-privilege-administrative-models): Microsoft Learn
- [**WindowsPrincipal.IsInRole**](https://learn.microsoft.com/en-us/dotnet/api/system.security.principal.windowsprincipal.isinrole): Microsoft Learn, the .NET method behind the administrator check
- [**TcpListener Class**](https://learn.microsoft.com/en-us/dotnet/api/system.net.sockets.tcplistener): Microsoft Learn, the .NET class behind the local portal
- [**curl manual**](https://curl.se/docs/manpage.html): `--noproxy`, `--max-time`, and `-i`
- [**RFC 5737: IPv4 Address Blocks Reserved for Documentation**](https://www.rfc-editor.org/rfc/rfc5737): why `192.0.2.123` is a safe "wrong" address
- [**RFC 6761: Special-Use Domain Names**](https://www.rfc-editor.org/rfc/rfc6761): why `.test` is safe for lab hostnames
