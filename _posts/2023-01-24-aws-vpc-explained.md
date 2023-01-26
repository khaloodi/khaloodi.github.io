---
layout: post
title: AWS VPC Explained
subtitle: "Networking basics"
---

In the associated lab we will step through an example of how to set up a VPC in AWS and what that means. The goal of this lab is to become more familiar with VPC and general networking concepts in AWS.

### Video Walkthrough:

[![IMAGE_ALT](/img/aws_vpc_explained/what_is_vpc.png)](https://youtu.be/9l1ADpyy-wk)
<!-- ![](https://youtu.be/_Ayv8p6nyKo) -->
<!-- [![IMAGE_ALT](/img/data_streaming/cover_photo.png)](https://youtu.be/_Ayv8p6nyKo) -->

![](/img/aws_vpc_explained/aws_vpc.gif)

AWS VPC, or Amazon Virtual Private Cloud, is a powerful and flexible network solution that allows you to create and control your own virtual network in the AWS cloud. With VPC, you can launch Amazon Elastic Compute Cloud (EC2) instances, RDS DB instances, and other AWS services in a virtual network that you've defined, giving you complete control over your network and resources.

One of the key benefits of using VPC is that it enables you to control access to your resources, allowing you to create a secure and isolated environment for your applications. You can create custom security groups, which act as virtual firewalls for your instances, and use network ACLs to control access to your subnets. This allows you to easily restrict access to specific IP addresses, ports, and protocols, providing an additional layer of security for your resources.

Another advantage of VPC is that it allows you to leverage the scalability and availability of the AWS infrastructure. With VPC, you can create multiple subnets, and launch instances in different availability zones, providing a high degree of fault tolerance and availability for your applications. Additionally, you can use VPC peering to connect multiple VPCs, allowing you to easily share resources between different environments, and create more complex network architectures.

![](/img/aws_vpc_explained/vpc_peering.png)

In addition to providing security and scalability, VPC also allows you to customize your network settings, such as IP address ranges, DNS settings, and routing tables. This makes it easy to create a network that meets the specific requirements of your applications, and allows you to easily connect to your own data centers, or other networks, via VPN or Direct Connect.

In conclusion, AWS VPC is a powerful and flexible network solution that provides a high degree of control and security over your resources. It enables you to create isolated environments for your applications, control access to your resources, leverage the scalability and availability of the AWS infrastructure, and customize your network settings. With VPC, you can easily create and manage virtual networks that meet the specific requirements of your applications, and help ensure the reliability and security of your resources.

### References:

- [What is Amazon DMS](https://aws.amazon.com/dms/)
- [What is VPC Peering](https://docs.aws.amazon.com/vpc/latest/peering/what-is-vpc-peering.html)
- [Amazon VPC - VPC Peering](https://docs.aws.amazon.com/pdfs/vpc/latest/peering/vpc-pg.pdf#what-is-vpc-peering)

<br>