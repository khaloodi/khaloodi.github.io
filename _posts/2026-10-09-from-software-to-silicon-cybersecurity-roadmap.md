---
layout: post
title: "From Software to Silicon: My Roadmap to Hardware Hacking, IoT Security, and Cybersecurity Research"
subtitle: "Why I'm pursuing penetration testing, learning Linux, building embedded systems, and weighing industry certifications against a PhD in Cybersecurity."
image: /img/software-to-silicon-cover.svg
date: 2026-10-09
author: Khaled Adad
tags:
  - Cybersecurity
  - Engineering
  - Career Development
  - Penetration Testing
  - IoT Security
  - Hardware Security
  - Embedded Systems
  - Linux
  - Overwatch
permalink: /from-software-to-silicon-cybersecurity-roadmap/
---

For most of my career I've worked on the software side of technology: writing Python, building analytics, and keeping deployments running as a software and DevOps engineer. Lately, though, my attention keeps drifting down the stack, past the operating system and the firmware, toward the circuit board itself. This post is my attempt to write down where that's leading, what I plan to study, and how I'm thinking about certifications versus a doctorate.

![From Software to Silicon: a microcontroller with circuit traces and a terminal prompt](/img/software-to-silicon-cover.svg)

*Estimated reading time: about 11 minutes. This is a living roadmap, not a list of things I've already finished. I'll revisit it as plans change.*

**Contents**

* TOC
{:toc}

## The Big Picture: Separate Interests Starting to Converge

My path into technology hasn't been a straight line. I earned a BBA in Economics from Loyola University Chicago and an MS in Business Analytics, with a concentration in Finance, from Lewis University. I completed Lambda School/BloomTech's Data Science program, and I've worked professionally in software engineering and DevOps.

Outside of that work, my interests have spread in a lot of directions: drone mapping and aerial imaging, CAD and architectural technology, low-voltage systems, fire alarm system design, electronics, networking, embedded computing, Linux, and general research and prototyping. I run [Overwatch Drone Mapping LLC](/case-study-1-drone-mapping/), and I'm gradually widening Overwatch into a broader engineering and technology R&D effort.

For a long time those looked like separate hobbies competing for the same evenings. Recently I've started to see them as parts of one system. A drone is a flying embedded computer with radios, sensors, and a ground-control link. A fire alarm panel is a networked, safety-critical controller. A sensor on a construction site is an IoT device. Every one of them runs firmware, talks over some protocol, and can be attacked.

That's the direction I want to take professionally: **penetration testing that specializes in hardware, IoT, embedded systems, drones, and cyber-physical systems.**

## Why Hardware and IoT Penetration Testing?

Traditional network penetration testing usually starts at an IP address. You enumerate services, look for misconfigurations and vulnerable software, and try to move through a network the way an attacker would. That's a valuable discipline, and it's where I expect to build my foundation.

Embedded-device security research starts somewhere else: with an object you can hold. The questions become physical as well as digital:

- **Physical interfaces.** Does the board expose a UART console that drops you into a root shell? Can the flash chip be read over SPI? What's traveling across the I²C bus between the microcontroller and its sensors?
- **Firmware and operating systems.** What's in the firmware image? Is it a stripped-down embedded Linux, an RTOS, or bare-metal code? Are credentials or keys hardcoded inside it?
- **Boot and update integrity.** Does the device use secure boot? Are firmware updates signed and verified, or will it accept anything that's shaped like an update?
- **Wireless and communication protocols.** How do Wi-Fi, Bluetooth Low Energy, or proprietary radio links authenticate, and what happens when they're interrupted or spoofed?
- **Drones and ground control.** Flight controllers, telemetry links, and ground-control software form a distributed system in which a security failure has physical consequences.
- **Device hardening.** Once a weakness is found, what does a realistic fix look like on a device with limited memory, power, and processing capacity?

What draws me to this work is that it rewards the same curiosity that pulled me into electronics in the first place. I don't just want to use technology. I want to understand how it works, build it myself, find its weaknesses in controlled environments, and help make it more secure.

> **A note on scope:** Every testing example in this post and in my future work involves devices I own, assessments I'm explicitly authorized to perform, or isolated training environments. Hardware hacking without permission isn't research. It's just breaking things that belong to someone else.

The [OWASP IoT Security Testing Guide](https://owasp.org/projects/iot-security-testing-guide) has become my reference point for how this kind of testing can be structured methodically, from the physical interfaces through firmware, communication, and the ecosystem around a device.

## My Cybersecurity Learning Roadmap

This is the plan as it stands in October 2026. Nothing on this list is finished yet, and I expect the timeline to change as I learn more.

### Phase 1: Foundations (October 2026 – May 2027)

The first phase is about fundamentals. Before I can credibly break a device, I need to understand how computers, operating systems, and networks behave when they're working correctly.

My current objectives:

- **Google IT Support Professional Certificate:** troubleshooting, operating systems, system administration, and IT infrastructure basics.
- **Google Cybersecurity Professional Certificate:** security frameworks, SIEM concepts, an introduction to Linux and SQL, and incident response.
- **CompTIA A+:** hardware, operating systems, and support fundamentals.
- **CompTIA Network+:** TCP/IP, routing, switching, and network troubleshooting.
- **CompTIA Security+:** core security principles, threats, architecture, and operations.
- **[TryHackMe](https://tryhackme.com/):** guided, hands-on rooms to put concepts into practice.
- **[LetsDefend](https://letsdefend.io/):** SOC-style labs for practical defensive skills such as alert triage and log analysis.

The certificates provide structure, and the lab platforms make sure I'm actually doing the work rather than just reading about it. Defensive practice matters even for an aspiring attacker: you can't write a useful penetration-test finding if you don't understand how defenders would detect and respond to it.

**Target milestone:** Security+ around May 2027.

### Phase 2: Going Deep on Linux (June – December 2027)

After Security+, I plan to shift most of my study time to Linux. I've used it professionally and kept [Linux notes](/2022-12-26-linux-notes/) on this blog for years, but there's a big difference between being comfortable at a shell and really understanding the system.

Focus areas:

- Linux system administration: users, groups, file permissions, processes, and services
- SSH, `systemd`, logging, and methodical troubleshooting
- Bash scripting and Python automation
- C programming fundamentals
- TCP/IP networking from the packet level up
- Virtualization and containers for building repeatable labs
- Network reconnaissance and vulnerability assessment in authorized lab environments
- Foundations of firmware and embedded Linux

Linux matters for two reasons. First, it's the working environment for most offensive-security tooling, so fluency there directly affects how effective a tester can be. Second, and more important for my goals, a large share of embedded devices, including routers, cameras, gateways, and some drone companion computers, run some form of embedded Linux. When I eventually pull a firmware image off a flash chip and unpack its filesystem, I want to recognize what I'm looking at immediately. C fits here for the same reason: it's still the language much of that firmware is written in.

### Phase 3: Hardware, IoT, and Offensive Security (2028 and beyond)

With the foundations in place, I'll move toward the work that actually motivates all of this:

- Embedded firmware extraction and analysis
- Hardware debugging and working with ARM microcontrollers
- Practical work with UART, SPI, and I²C
- Wireless security fundamentals
- IoT security testing methodology, using the [OWASP ISTG](https://owasp.github.io/www-project-iot-security-testing-guide/) as a framework
- Secure device communication
- Drone cybersecurity
- Hardware penetration-testing projects on devices I own
- Eventually, a practical offensive-security certification such as [OffSec's PEN-200 / OSCP](https://www.offsec.com/courses/pen-200/)

One clarification about OSCP: it's a respected, hands-on certification for general penetration testing, and it would give me a disciplined methodology for network and system attacks. It is **not** a hardware or IoT certification. For the embedded side, I expect most of my credibility to come from documented projects and research rather than from any single exam. OffSec's [PEN-200 onboarding guide](https://help.offsec.com/hc/en-us/articles/4406841351316-PEN-200-Onboarding-A-Learner-Introduction-Guide-to-the-OSCP) is a useful honest check on the prerequisites, and it's part of why Linux and networking come first in my plan.

## The Overwatch Engineering Lab

Alongside all of this, I keep a fixed engineering lab schedule from **Monday through Saturday, 8:00–11:00 PM Central**. This time is mainly for engineering education, not for cybersecurity, and I want to keep it that way.

<div class="table-responsive" markdown="1">

| Day | Focus |
|---|---|
| Monday | Fusion 360 and mechanical design |
| Tuesday | MIT 6.002 circuits and electronics |
| Wednesday | CAD and engineering design |
| Thursday | Hands-on electronics |
| Friday | Systems integration |
| Saturday | Overwatch R&D projects |
| Sunday | Off / recovery |

</div>

Security doesn't need to replace any of these nights. It can work its way into them gradually. A Thursday electronics session can include probing a UART header on a board I own. A Friday integration session can include threat-modeling the system I just built. Saturday R&D is where the two tracks will meet most directly.

### Future Portfolio Project: An ESP32-Based Secure Sensor Network

To make that concrete, here's a project I plan to build. It hasn't been started yet, but it combines nearly everything on this roadmap:

1. **Collect** sensor measurements with an ESP32 microcontroller.
2. **Transmit** those readings to a Linux computer acting as a collector.
3. **Implement** device authentication and encrypted communication.
4. **Provide** a small monitoring dashboard for the incoming data.
5. **Evaluate** the system against an IoT security testing methodology such as the OWASP ISTG.
6. **Introduce** a deliberate, harmless weakness into a lab-only version, such as a debug interface left enabled or a hardcoded credential.
7. **Document** the finding as I would in a real assessment, then implement and verify a fix.
8. **Publish** the diagrams, source code, test results, and security documentation here.

The point isn't to build something novel. It's to go through the whole cycle once (build, test, break, fix, and document) at a scale I can fully understand.

## Certifications vs. a Traditional PhD

This is the question I've spent the most time on recently.

I've been researching doctoral study at National University, focusing on three programs: the [PhD in Cybersecurity](https://www.nu.edu/degrees/cybersecurity-and-technology/programs/doctor-of-philosophy-in-cybersecurity/) (including its [General and Technology specialization](https://www.nu.edu/programs/doctor-of-philosophy-in-cybersecurity/doctor-of-philosophy-in-cybersecurity-general-and-technology-specialization/)), the [PhD in Computer Science](https://www.nu.edu/degrees/computerscienceandinformationsystems/programs/doctor-of-philosophy-in-computer-science/), and the [PhD in Technology Management](https://www.nu.edu/degrees/cybersecurity-and-technology/programs/doctor-of-philosophy-degree-in-technology-management/).

At first Computer Science appealed to me most, because so much of what excites me is software and invention. But my longstanding goal of becoming a penetration tester has moved Cybersecurity back to the top of the list. Here's how I'm weighing the options.

### Industry Certifications

**Advantages:**

- Usually much less expensive than doctoral education
- Faster, more focused skill development
- Some certifications include practical, hands-on assessments
- Can show job-specific knowledge to employers
- Flexible enough to pursue while working full-time

**Limitations:**

- A certification doesn't replace professional experience
- Many exams test knowledge more than practical ability
- Rigor and employer recognition vary widely between certifications
- They don't provide doctoral-level research training
- Many require renewal fees or continuing education to stay active

### PhD in Cybersecurity

**Advantages:**

- Deep training in research methodology
- The chance to pursue original research instead of only applying existing techniques
- A path to academic publishing and possibly teaching
- Preparation for research-oriented roles
- Potential to specialize in firmware security, cyber-physical systems, or IoT

**Limitations:**

- A multi-year commitment
- Potentially substantial cost
- Real opportunity cost in time and delayed earnings
- Research-focused programs don't necessarily prepare you for penetration-testing work
- Program quality and research fit depend heavily on faculty supervision
- Not required for most penetration-testing jobs

### PhD in Computer Science

Computer Science offers the broadest computational foundation of the three: algorithms, AI, software engineering, networking, and security as one research area among many. I still take seriously the possibility that it would be a better long-term base for building security tools and technical inventions, because so much of security research comes down to rigorous computer science. The trade-off is that security would be one focus among many instead of the center of the program.

### PhD in Technology Management

Technology Management is aimed at innovation leadership, organizational strategy, and technology entrepreneurship. Given my business background and Overwatch's direction, that has real appeal. However, it would probably offer the least technical research depth for hands-on penetration testing or hardware security.

### Side-by-Side Comparison

These are general characterizations, not program-specific figures. Structure, cost, and duration vary significantly by university, and a **funded** doctoral program (with tuition covered and a stipend in exchange for research or teaching) is a very different financial proposition from a **tuition-funded** online doctorate. Always check current details directly with each institution.

<div class="table-responsive" markdown="1">

| Factor | Industry Certifications | PhD in Cybersecurity | PhD in Computer Science | PhD in Technology Management |
|---|---|---|---|---|
| Cost | Generally lowest | Can be substantial unless funded | Can be substantial unless funded | Can be substantial unless funded |
| Typical duration | Weeks to months per credential | Multiple years | Multiple years | Multiple years |
| Hands-on technical emphasis | High for practical exams; varies | Varies by program and research | Varies; often theoretical or computational | Generally lower |
| Research emphasis | Minimal | High | High | High, organizational focus |
| Relevance to penetration testing | Direct, especially practical certs | Indirect to moderate | Indirect | Low |
| Relevance to hardware/IoT research | Limited unless specialized | Potentially strong, depending on faculty fit | Potentially strong, depending on research area | Limited |
| Career outcomes | Practitioner roles: SOC, pentesting, security engineering | Research, academia, senior and advisory roles | Research, academia, R&D, tool development | Leadership, strategy, entrepreneurship, academia |

</div>

### My Provisional Conclusion

For now, my plan is to **prioritize hands-on experience, certifications, Linux expertise, and employment in the field first.** A PhD in Cybersecurity remains a serious long-term option, but only if I develop a research question that actually justifies several years of doctoral study.

I want to be clear with myself about one thing: a doctorate isn't a shortcut to being a good penetration tester. The practical skills come from practice. A PhD would only make sense as a step *after* that experience, aimed at questions that practice alone can't answer.

## Research Questions I Might Eventually Explore

If I do pursue doctoral research, these are the kinds of directions that interest me right now:

- **Secure firmware update architectures** for connected devices with limited resources
- **Anomaly detection in autonomous drone telemetry**, distinguishing faults from manipulation
- **Firmware security assessment methodologies** that are repeatable across device types
- **Lightweight authentication** for resource-constrained IoT devices
- **Secure communication between distributed sensors** in field deployments
- **Machine learning for embedded anomaly detection**, running on the device itself
- **Threat modeling of cyber-physical systems**, where digital compromise has physical effects

These are exploratory interests, not approved dissertation topics. Each one would need to be checked for novelty against existing literature, for feasibility within a doctoral timeline, and for fit with available faculty expertise and research infrastructure. Some of them have probably already been studied extensively. Finding out which ones still have open questions is part of the work.

## Closing Thoughts

When I look at this roadmap as a whole, the most encouraging part is that I don't have to give up any of my earlier interests to pursue it. The analytics background helps with research. DevOps taught me how systems fail in production. Drone work, low-voltage design, and electronics give me hands-on familiarity with the physical systems I want to secure. Cybersecurity ties them together.

My goal isn't to collect credentials for their own sake. I want the knowledge and practical ability to understand complex systems, build technologies of my own, find their weaknesses, and make them more secure. Whether that eventually includes a doctorate is still an open question. The work of becoming an engineer and security researcher starts now.

I'll keep documenting the process here, including the labs, the projects, the mistakes, and any changes to this plan.

## Resources and Further Reading

These are the references I'm using to build this roadmap. I'll keep this list updated as it grows.

### 🔌 IoT and Hardware Security

- [**OWASP IoT Security Testing Guide**](https://owasp.org/projects/iot-security-testing-guide): the project home for a structured methodology for testing IoT devices.
- [**OWASP IoT Security Testing Guide on GitHub**](https://github.com/OWASP/owasp-istg): the source repository for the guide.
- [**OWASP IoT Security Testing Guide Documentation**](https://owasp.github.io/www-project-iot-security-testing-guide/): the readable, published version of the guide.

### 🛡️ Offensive Security Training

- [**PortSwigger Web Security Academy**](https://portswigger.net/web-security): free, hands-on web application security training.
- [**OffSec PEN-200 / OSCP**](https://www.offsec.com/courses/pen-200/): the course behind the OSCP certification.
- [**OffSec PEN-200 Prerequisites and Onboarding**](https://help.offsec.com/hc/en-us/articles/4406841351316-PEN-200-Onboarding-A-Learner-Introduction-Guide-to-the-OSCP): OffSec's guide to what to know before starting.
- [**TryHackMe**](https://tryhackme.com/): guided, browser-based security labs.
- [**LetsDefend**](https://letsdefend.io/): SOC analyst and blue-team training labs.

### 🎓 Doctoral Programs

- [**National University PhD in Cybersecurity**](https://www.nu.edu/degrees/cybersecurity-and-technology/programs/doctor-of-philosophy-in-cybersecurity/)
- [**National University PhD in Cybersecurity: General and Technology Specialization**](https://www.nu.edu/programs/doctor-of-philosophy-in-cybersecurity/doctor-of-philosophy-in-cybersecurity-general-and-technology-specialization/)
- [**National University PhD in Computer Science**](https://www.nu.edu/degrees/computerscienceandinformationsystems/programs/doctor-of-philosophy-in-computer-science/)
- [**National University PhD in Technology Management**](https://www.nu.edu/degrees/cybersecurity-and-technology/programs/doctor-of-philosophy-degree-in-technology-management/)

*Listing a program or platform here isn't an endorsement. These are simply the resources I'm evaluating, and I'd encourage anyone on a similar path to compare options for themselves.*
