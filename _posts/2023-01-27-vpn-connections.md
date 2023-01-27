---
layout: post
title: VPN Connections with an Amazon VPC Using Dynamic Routing
subtitle: "Setting up VPN connections w/Amazon VPC"
---

In the associated lab we will step through how to set up VPN connections with an Amazon Virtual Private Cloud (VPC) using dynamic routing. This is a slightly more advanced lab focusing on networking topics within the AWS space.

### Video Explanation:

[![IMAGE_ALT](/img/amzn_vpn.png)](https://www.youtube.com/watch?v=ODg9o7B_TFw&t=3s)

A Virtual Private Network (VPN) connection allows you to connect your on-premises infrastructure to an Amazon Virtual Private Cloud (VPC) using a secure, encrypted tunnel. One way to set up a VPN connection with an Amazon VPC is by using dynamic routing.

Dynamic routing allows for the automatic exchange of routing information between your on-premises network and your Amazon VPC. This means that any changes to your network topology, such as adding or removing a subnet, will be automatically reflected in the routing table of both your on-premises network and your Amazon VPC.

To set up a VPN connection with dynamic routing, you will first need to create a virtual private gateway (VGW) in your Amazon VPC. This VGW will act as the endpoint for the VPN connection on the Amazon side. Next, you will need to create a customer gateway (CGW) on your on-premises network. This CGW will act as the endpoint for the VPN connection on the on-premises side.

Once the VGW and CGW have been created, you can create the VPN connection itself. This is done by creating a virtual private network (VPN) connection in the Amazon VPC console, and specifying the VGW and CGW as the endpoints for the connection.

Once the VPN connection is established, you can configure dynamic routing by creating a route in the routing table of your Amazon VPC that points to the VGW as the target for all traffic destined for your on-premises network. Similarly, you will need to create a route in the routing table of your on-premises network that points to the CGW as the target for all traffic destined for your Amazon VPC.

With dynamic routing set up, any changes to your network topology will be automatically reflected in the routing tables of both your on-premises network and your Amazon VPC, ensuring that your VPN connection remains up-to-date and functional.

It's worth noting that this is just one way to set up a VPN connection with an Amazon VPC and there are other ways to set up a VPN connection like using static routing or using a hardware VPN device. However, dynamic routing is a popular choice due to its flexibility and ease of use.

### References:

- [AWS Managed VPN](https://docs.aws.amazon.com/whitepapers/latest/aws-vpc-connectivity-options/aws-managed-vpn.html)
- [AWS Site-to-Site VPN](https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html)
- [Your Customer Gateway Device](https://docs.aws.amazon.com/vpn/latest/s2svpn/your-cgw.html#CGRequirements)