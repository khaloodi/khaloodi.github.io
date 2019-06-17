---
layout: post
title: Predicting Rossman Store Sales
subtitle: Yet another Kaggle competition
---


Rossmann operates over 3,000 drug stores in 7 European countries. Currently, Rossmann store managers are tasked with predicting their daily sales for up to six weeks in advance. 

Store sales are influenced by many factors, including promotions, competition, school and state holidays, seasonality, and locality. With thousands of individual managers predicting sales based on their unique circumstances, the accuracy of results can be quite varied.

As a preprocessing step, sales (the variable I am trying to predict) is log transformed. This is done in order to make the y-variable's distribution symmetric. 

![](/img/logging.png)
