---
layout: post
title: Multi Tier Web Application Setup
---

## About the project
Setting up a local multi tier web application stack. This project serves as a baseline for upcoming projects involving AWS and Kubernetes. This will allow a user to perform local setup for R&D.

Generally speaking, the local setup of a stack can be complex, time consuming, and not repeatable. A solution to these problems is implementing an infrastructure as code or IAAC solution.

## Tools
- Hypervisor (Oracle Virtualbox)
- Automation with vagrant
- CLI, Git/Bash
- IDE

## Architecture of project services
- NGINX
- Tomcat
- RabbitMQ
- Memchached
- MySQL

## Execution flow
1. Setup tools
2. Clone source code
3. CD into vagrant dir
4. Bring up VM's
5. Validate
6. Setup services listed above
7. App build and deploy!