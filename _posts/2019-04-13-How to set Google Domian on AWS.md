---
layout: post
title: "How to use Google Domain on AWS(Elastic Beanstalk)"
tags: [Google, AWS, ElasticBeanstalk, Domain]
comments: true
---

> One example that how to configure a third-pard provider domain on AWS

# Configurations on AWS

## Copy Application URL
1.  Open `Elastic Beanstalk` dashboard
2.  Copy application link of Elastic Beanstalk 
     
   ![](https://github.com/Lei1025/ImgRepo/blob/master/myblog/1555728126937.jpg?raw=true)

## Create Hosted Zone
1.  Open the Route 53 console.
2.  Choose Hosted Zones.
3.  Choose Create Hosted Zone.
4.  For Domain Name, type the domain name that you own. For example: example.com.
5.  Choose Create.
   
   ![](https://github.com/Lei1025/ImgRepo/blob/master/myblog/1555728266764.jpg?raw=true)

## Add an alias resource record set in Route 53

1. Open the Route 53 console.
2. Choose Hosted Zones.
3. Choose your hosted zone's name.
4. Choose Create Record Set.
5. For Name, type the subdomain that will redirect to your Elastic Beanstalk application. For example: www.
6. For Type, choose A - IPv4 address.
7. For Alias, choose yes.
8. For Alias Target, choose the domain name of your Elastic Beanstalk environment.
9. Choose Save Record Set.
    
    ![](https://github.com/Lei1025/ImgRepo/blob/master/myblog/1555728600164.jpg?raw=true)

Reference: [Your Elastic Beanstalk Environment's Domain Name](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/customdomains.html)

# Configurations on Google Domain
1. Copy Type NS value of your hosted zones
   ![](https://github.com/Lei1025/ImgRepo/blob/master/myblog/1555728835621.jpg?raw=true)

2. Customize `DNS`
   ![Google Domian Example](https://github.com/Lei1025/ImgRepo/blob/master/myblog/1555733510851.jpg?raw=true)
