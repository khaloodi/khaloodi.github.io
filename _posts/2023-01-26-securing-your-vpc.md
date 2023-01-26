---
layout: post
title: Securing your VPC using Public and Private Subnets
subtitle: "Part 1"
---

In the associated lab we will step through par one of how to secure your VPC using public and private subnets. The goal of this lab is to become more familiar with VPC and general networking concepts in AWS.

### Video Explanation:

[![IMAGE_ALT](/img/what_is_aws_dms.png)](https://www.youtube.com/watch?v=_sNjCvfjMOY)

A Virtual Private Cloud (VPC) in Amazon Web Services (AWS) allows users to create a virtual network in the cloud, isolated from the rest of the internet. One way to increase the security of a VPC is by using both public and private subnets.

A public subnet is a subnet that has a direct connection to the internet, typically through an Internet Gateway (IGW). This subnet is used for resources that need to be accessible from the internet, such as a web server.

A private subnet, on the other hand, does not have a direct connection to the internet and is used for resources that do not need to be publicly accessible, such as a database.

By using both public and private subnets, the risk of a security breach is greatly reduced. For example, if a hacker were to gain access to a resource in a public subnet, they would not have access to the resources in the private subnet.

Additionally, it is a best practice to use a Network Address Translation (NAT) gateway or a NAT instance in the public subnet to allow outbound internet access for resources in the private subnet. This way, resources in the private subnet can access the internet for updates and patches, but incoming traffic from the internet is blocked.

In summary, using both public and private subnets in a VPC can greatly increase the security of your resources in AWS. By isolating internet-facing resources from those that do not need to be publicly accessible, and by using a NAT gateway or NAT instance, the risk of a security breach is greatly reduced.

### References:

- [What is Amazon VPC](https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html)