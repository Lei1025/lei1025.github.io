---
layout: post
title: "How to Install and Setup Autoprefixer for Jekyll" 
date: 2019-03-24
tags: [jekyll, githubPage, css, autoprefixer, plugin, install]
comments: true
---

> One Method to upgrade CSS compatibility  for Jekyll to adpat all sorts of browsers.

## Gemfile

```
gem "autoprefixer-rails"

group :jekyll_plugins do
  gem 'jekyll-assets'
end
```

## Add _config.yml

```
assets:
  compress:
    css:  sass
    js:   uglifier
  autoprefixer:
    browsers:
        - "last 5 versions"
        - "IE > 9"
  plugins:
    css: { autoprefixer: {}}
```
[My _config.yml](https://github.com/Lei1025/lei1025.github.io/blob/master/_config.yml)

## Run in Terminal

```
bundle install
bundle exec jekyll build
```