---
layout: post
title: Kinesis Data Streams
subtitle: "Drinking from the firehose"
---

Here's a great first article and example of how to create a useful guide to become more familiar with AWS's Database migration services.

### Video Walkthrough:
<!-- ![](https://youtu.be/_Ayv8p6nyKo) -->
[![IMAGE_ALT](/img/data_streaming/cover_photo.png)](https://youtu.be/_Ayv8p6nyKo)


### Ingest Data from an RDS Instance into S3

![](/img/data_streaming/kinesis_firehose.png)

A detailed walkthrough of the process of using Amazon Kinesis Data Streams to ingress data from an Amazon RDS instance to an Amazon S3 bucket:

First, you'll need to create an Amazon RDS instance and a database within it. To do this, you can use the AWS Management Console.

1.1. Navigate to the Amazon RDS dashboard in the AWS Management Console.

1.2. Click the "Create database" button.

1.3. Choose the database engine you want to use (e.g. MySQL, PostgreSQL, etc.), and follow the prompts to set up your RDS instance and database. Make sure to create a database user with the necessary permissions to read data from the database.

### Steps 1.1 - 1.3:
![](/img/data_streaming/steps_1_3.gif)

Next, you'll need to create an Amazon Kinesis Data Stream. To do this, you can use the AWS Management Console.

2.1. Navigate to the Amazon Kinesis dashboard in the AWS Management Console.

2.2. Click the "Create data stream" button.

2.3. Enter a name for your data stream, and specify the number of shards you want to use. A shard is a unit of capacity in a Kinesis Data Stream, and you can choose the number of shards based on the amount of data you expect to ingest and the rate at which you want to process it.

![](/img/data_streaming/shard_definition.png)

2.4. Click the "Create data stream" button to create your data stream.

### Steps 2.1 - 2.4:
![](/img/data_streaming/step_2.gif)

![](/img/data_streaming/kinesis_data_streams.png)

Now you'll need to set up AWS Database Migration Service (DMS) to replicate data from the RDS instance to the Kinesis Data Stream. To do this, you'll need to create an Amazon DMS task.

![](/img/data_streaming/dms_task.png)

![](/img/data_streaming/dms_service.png)

3.1. Navigate to the AWS Database Migration Service dashboard in the AWS Management Console.

3.2. Click the "Create task" button.

3.3. Choose "Migrate existing data" as the task type, and follow the prompts to specify the RDS instance as the source and the Kinesis Data Stream as the target. Make sure to specify the database user you created earlier as the source endpoint connection user.

3.4. Click the "Create task" button to create your DMS task.

Next, you'll need to create an Amazon S3 bucket to store the data from the Kinesis Data Stream. To do this, you can use the AWS Management Console.

4.1. Navigate to the Amazon S3 dashboard in the AWS Management Console.

4.2. Click the "Create bucket" button.

4.3. Enter a name for your bucket, and choose a region.

4.4. Click the "Create bucket" button to create your bucket.

Finally, you'll need to set up an Amazon Kinesis Data Firehose delivery stream to ingest data from the Kinesis Data Stream and store it in the S3 bucket. To do this, you'll need to create a Kinesis Data Firehose delivery stream.

5.1. Navigate to the Amazon Kinesis Data Firehose dashboard in the AWS Management Console.

5.2. Click the "Create delivery stream" button.

5.3. Enter a name for your delivery stream, and choose "Kinesis Data Stream" as the source.

5.4. Select the Kinesis Data Stream you created earlier as the source stream.

5.5. Choose "Amazon S3" as the destination, and select the S3 bucket you created earlier as the destination bucket.

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