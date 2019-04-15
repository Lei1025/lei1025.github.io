---
layout: post
title: "How to set Google Domian on AWS(Elastic Beanstalk)"
tags: [domain, Google, AWS, ElasticBeanstalk]
comments: true
---

# Configurations on AWS

1.  Open the Route 53 console.
2.  Choose Hosted Zones.
3.  Choose Create Hosted Zone.
4.  For Domain Name, type the domain name that you own. For example: example.com.
5.  Choose Create.

To add an alias resource record set in Route 53

    Open the Route 53 console.

    Choose Hosted Zones.

    Choose your hosted zone's name.

    Choose Create Record Set.

    For Name, type the subdomain that will redirect to your Elastic Beanstalk application. For example: www.

    For Type, choose A - IPv4 address.

    For Alias, choose yes.

    For Alias Target, choose the domain name of your Elastic Beanstalk environment.

    Choose Save Record Set.


Reference: [Your Elastic Beanstalk Environment's Domain Name](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/customdomains.html)
