---
layout: post
title: "Implement Sorting Tags by Name and Value in Jekyll" 
date: 2019-03-24
tags: [jekyll, githubPage, liquid, sort, tag]
comments: true
---

# Tags sorted by name

Tags sorted by names are pretty easy by using Jekyll `variables` and `liquid`.

## List all tags by name in alphabet sequence and its count

```liquid
{% capture site_tags %}{% for tag in site.tags %}{{ tag | first }}{% unless forloop.last %},{% endunless %}{% endfor %}{% endcapture %}
{% assign tags_list = site_tags | split:',' | sort_natural %}

<ul id="tag-list" class="entry-meta inline-list">
  {% for item in (0..site.tags.size) %}{% unless forloop.last %}
  {% capture this_word %}{{ tags_list[item] | strip_newlines }}{% endcapture %}
  <li><a class="tag ripple-btn"><span class="term">{{ this_word }}</span><span
        class="count">{{ site.tags[this_word].size }}</span></a></li>
  {% endunless %}{% endfor %}
</ul>
```

## List all posts of each tags respectively

```liquid
{% for item in (0..site.tags.size) %}{% unless forloop.last %}
{% capture this_word %}{{ tags_list[item] | strip_newlines }}{% endcapture %}
<article id="{{ this_word }}" style="display:none">
  <h2 class="tag-heading tag-name">{{ this_word }}</h2>
  <ul>
    {% for post in site.tags[this_word] %}{% if post.title != null %}
    <li class="entry-title"><a href="{{ site.url }}{{ post.url }}" title="{{ post.title }}"
        class="drop-down-underline ripple-btn">{{ post.date | date: '%m/%d/%Y' }} ---- {{ post.title }}</a>
      <span class="tag-archive-item">{% for tag in post.tags %}<i class="fas fa-tag"></i> <span
          class='tag-name'>{{ tag }}</span></a>
        {% unless forloop.last %}{% endunless %}{% endfor %}</span>
    </li>
    {% endif %}{% endfor %}
  </ul>
</article>
{% endunless %}{% endfor %}
```