---
layout: post
title: Amazon Product Recommendation System
date: 2020-04-18
tags:
  - knn
pin: false
update: 2020-04-18
starMark: false
comments: true
---
## Search Algorithm Choice

### Linear Search VS Binary Search

[Link](https://techdifferences.com/difference-between-linear-search-and-binary-search.html)

Even Binary Search wins at average Time Complexity, O(log2N), but it needs data sorted first and takes extra space in this case. Thus, my choice goes to Linear Search.

# Introduction

![Screenshot](/assets/uploads/5e191dac7cb767d152d97ae9a02bf28.png)

# Tools and Libraries Used

* Java 13
* Weka 3.8.4
* Json simple 1.1.1

# Data Source

[Amazon Review Data (2018)](https://nijianmo.github.io/amazon/index.html)

In my demo, I used `All Beauty - metadata` in Per-category data, since it is large enough for testing result and also small enough to run fast in my PC.

# Code Explanation

Original Source Data Snippet:

# Working Principle
![](/assets/uploads/20200418215012.png)

