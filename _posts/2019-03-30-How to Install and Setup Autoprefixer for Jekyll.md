---
layout: post
title: "How to Install and Setup Autoprefixer for Jekyll" 
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

## Run in Terminal

```
bundle install
bundle exec jekyll build
```
