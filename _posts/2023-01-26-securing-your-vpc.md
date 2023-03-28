---
layout: post
title: Securing your VPC using Public and Private Subnets
subtitle: "VPC with public and private subnets"
---

In the associated lab we will step through how to secure your VPC using public and private subnets. The goal of this lab is to become more familiar with VPC and general networking concepts in AWS.

### Video Explanation:

[![IMAGE_ALT](/img/vpc_with_pub_priv_subnets.png)](https://www.youtube.com/watch?v=ODg9o7B_TFw&t=3s)

A Virtual Private Cloud (VPC) in Amazon Web Services (AWS) allows users to create a virtual network in the cloud, isolated from the rest of the internet. One way to increase the security of a VPC is by using both public and private subnets.

A public subnet is a subnet that has a direct connection to the internet, typically through an Internet Gateway (IGW). This subnet is used for resources that need to be accessible from the internet, such as a web server.

A private subnet, on the other hand, does not have a direct connection to the internet and is used for resources that do not need to be publicly accessible, such as a database.

By using both public and private subnets, the risk of a security breach is greatly reduced. For example, if a hacker were to gain access to a resource in a public subnet, they would not have access to the resources in the private subnet.

Additionally, it is a best practice to use a Network Address Translation (NAT) gateway or a NAT instance in the public subnet to allow outbound internet access for resources in the private subnet. This way, resources in the private subnet can access the internet for updates and patches, but incoming traffic from the internet is blocked.

In summary, using both public and private subnets in a VPC can greatly increase the security of your resources in AWS. By isolating internet-facing resources from those that do not need to be publicly accessible, and by using a NAT gateway or NAT instance, the risk of a security breach is greatly reduced.

### Tool Belt
- [Tesla](https://ts.la/khaled835973)
- [Online School/EdX](https://www.edx.org/?utm_source=google&utm_campaign=18736834479&utm_medium=cpc&utm_term=edx&hsa_acc=7245054034&hsa_cam=18736834479&hsa_grp=140243978342&hsa_ad=631521652739&hsa_src=g&hsa_tgt=kwd-89882436&hsa_kw=edx&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gclid=Cj0KCQiA0oagBhDHARIsAI-BbgfFSx9sQrdOhE0zshO9rXNE6ZsM_6g0CsF0uBeLd3GwriWBoJtxVXwaAqA2EALw_wcB)
- [Liquid I.V. Hydration Multiplier 30 Stick, 16.93 Ounce](https://amzn.to/3ZFDjDq)
- [C4 Energy Drink 12oz (Pack of 12) - Frozen Bombsicle - Sugar Free Pre Workout Performance Drink with No Artificial Colors or Dyes](https://amzn.to/3ZEVtFy)
- [Cellucor C4 Energy Drink, STARBURST Strawberry, Carbonated Sugar Free Pre Workout Performance Drink with no Artificial Colors or Dyes, Pack of 12](https://amzn.to/3y8KJ6m)
- [GHOST ENERGY Sugar-Free Energy Drink - 12-Pack, SOUR PATCH KIDS Redberry, 16oz - Energy & Focus & No Artificial Colors - 200mg of Natural Caffeine, L-Carnitine & Taurine - Soy & Gluten-Free, Vegan](https://amzn.to/3Jeaed7)
- [GHOST Legend Pre-Workout Energy Powder, Sour Patch Kids Redberry - 25 Servings - Caffeine, L-Citrulline, & Beta Alanine Blend for Energy Focus & Pumps - Free of Soy, Sugar & Gluten, Vegan](https://amzn.to/3SOshts)
- [GHOST WHEY Protein Powder, Chips Ahoy! - 2lb, 25g of Protein - Whey Protein Blend - ­Post Workout Fitness & Nutrition Shakes, Smoothies, Baking & Cooking - Cookie Pieces Inside](https://amzn.to/3y8rGtd)
- [GHOST Size Muscle Builder Dietary Supplement - Mango, 30 Servings - Muscle Growth and Strength Building Supplements for Men & Women - Creatine, Betaine & Beta-Alanine - Free of Sugar & Gluten, Vegan](https://amzn.to/3YkH8g8)
- [GHOST Greens Superfood Powder, Guava Berry - 30 Servings - 19 Super Greens & Reds, Fruits, Vegetables, Spirulina, & Chlorella, Prebiotics, 10 Billion CFU Probiotic & Digestive Enzymes - Gluten-Free](https://amzn.to/3J8I0PN)
- [Coding Projects](https://www.buymeacoffee.com/kadad1312d)
- [Lenovo Yoga 7i 16 inch 2.5K Touchscreen 2-in-1](https://amzn.to/41CfSfY)
- [Sour Strips](https://amzn.to/3EDWUM7)

### Make 💰 By Learning Programming:

- [Impractical Python Projects](https://amzn.to/3JpCpWH)
- [Designing Data-Intensive Applications](https://amzn.to/3Hgh5Sj)
- [Python for Data Analysis](https://amzn.to/3D0C8pl)
- [Python for Data Science Handbook](https://amzn.to/3XnZ1ez)
- [Hands-On Machine Learning w/Scikit-Learn & Tensorflow](https://amzn.to/3QTWoyt)

<br>