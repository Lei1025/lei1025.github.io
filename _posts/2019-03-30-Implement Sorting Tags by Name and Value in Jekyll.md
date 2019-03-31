---
layout: post
title: "Implement Sorting Tags by Name and Value in Jekyll" 
tags: [jekyll, githubPage, liquid, sort, tag, javascript ,js]
mark: star
comments: true
---

> Methods of sorting tags order by name in ascending and by counts/numbers in descending, plus showing posts correspond to their tags.

# Tags sorted by name

Tags sorted by names are pretty easy by using Jekyll `variables` and `liquid`.

## List all tags by name in alphabet sequence and its count
{% raw %}
```html
{% capture site_tags %}{% for tag in site.tags %}{{ tag | first }}{% unless forloop.last %},{% endunless %}{% endfor %}{% endcapture %}
{% assign tags_list = site_tags | split:',' | sort_natural %}

<ul id="tag-list" class="entry-meta inline-list">
  {% for item in (0..site.tags.size) %}{% unless forloop.last %}
  {% capture this_word %}{{ tags_list[item] | strip_newlines }}{% endcapture %}
  <li>
    <a class="tag ripple-btn">
      <span class="term">{{ this_word }}</span>
      <span class="count">{{ site.tags[this_word].size }}</span>
    </a>
  </li>
  {% endunless %}{% endfor %}
</ul>
```
{% endraw %}
---
If just need name sort function, stop reading from here as I am not confident the following is a good solution.

---

## List all posts of each tags respectively

{% raw %}
```html
{% for item in (0..site.tags.size) %}{% unless forloop.last %}
{% capture this_word %}{{ tags_list[item] | strip_newlines }}{% endcapture %}
<article id="{{ this_word }}" style="display:none">
  <h2 class="tag-heading tag-name">{{ this_word }}</h2>
  <ul>
    {% for post in site.tags[this_word] %}{% if post.title != null %}
    <li class="entry-title">
      <a href="{{ site.url }}{{ post.url }}" title="{{ post.title }}"
        class="drop-down-underline ripple-btn">{{ post.date | date: '%m/%d/%Y' }} ---- {{ post.title }}</a>
      <span class="tag-archive-item">{% for tag in post.tags %}
        <i class="fas fa-tag"></i>
        <span class='tag-name'>{{ tag }}</span>
        </a>
        {% unless forloop.last %}{% endunless %}{% endfor %}
      </span>
    </li>
    {% endif %}{% endfor %}
  </ul>
</article>
{% endunless %}{% endfor %}
```
{% endraw %}

# Tags sorted by count

I have tried using `liquid` to achieve this goad, but the result is fail that I can neither make an type like arrays in an array nor pass values to `JavaScript`. So I switched to totally using JS as my solution.

> `array.sort(fucntion(a,b))` in JS is exactly what I want, which can compare the value inside the array element. So I can do comparison with either names or counts for each tag.

```javascript
var ary = [];
var tags = $("#tag-list .tag");
for (let i = 0; i < tags.length; i++) {
    tagName = $(tags[i]).find('.term').text();
    tagCount = $(tags[i]).find('.count').text();
    ary.push([tagName, tagCount]);
}

ary.sort((a, b) => b[1] - a[1]);

ary.forEach(function (ele) {
    if (ele[0].toLowerCase() != 'stared')
        $("#tag-list").append('<li><a class="tag ripple-btn"><span class="term">' + ele[0] + '</span> <span class="count">' + ele[1] + '</span></a></li>');
});
```

# Combine two sorts with switch buttons

## Add button into .html file
```html
<div style="text-align:right">
  <button class="btn hover-btn" onclick="sortByName()"><span><i class="fas fa-sort-alpha-down"></i>Name</span></button>
  <button class="btn hover-btn" onclick="sortByNum()"><span><i class="fas fa-sort-amount-down"></i>Count</span></button>
</div>
```
## Add button functions into .js

```javascript
var ary = [];
var tags = $("#tag-list .tag");
for (let i = 0; i < tags.length; i++) {
    tagName = $(tags[i]).find('.term').text();
    tagCount = $(tags[i]).find('.count').text();
    ary.push([tagName, tagCount]);
}

function updateTags() {
    $("#tag-list").children().remove();
    ary.forEach(function (ele) {
          $("#tag-list").append('<li><a class="tag ripple-btn"><span class="term">' + ele[0] + '</span> <span class="count">' + ele[1] + '</span></a></li>');
    });
    btnFunc()
}

function sortByName() {
    ary.sort(function (a, b) {
        if (a[0].toLowerCase() < b[0].toLowerCase()) return -1;
        if (a[0].toLowerCase() > b[0].toLowerCase()) return 1;
        return 0;
    });
    updateTags();
}

function sortByNum() {
    ary.sort((a, b) => b[1] - a[1]);
    updateTags();
}

function btnFunc() {
    $('.entry-meta .tag').click(function () {
        $(this).addClass('hovered animated pulse');
        $(this).parent().siblings().children('a').removeClass('hovered animated pulse');
        var tagName = $(this).find('span.term').text();
        $("article[id=\'" + tagName + "\']").show().addClass('animated fadeIn').siblings('article').hide();
    });
    $('.hover-btn').click(function () {
        $(this).addClass('actived');
        $(this).siblings('.hover-btn').removeClass('actived');
    });
} 
```

# Results

> Ignore the 'Stared' tag

## Sort by name

![](https://github.com/Lei1025/ImgRepo/blob/master/myblog/WX20190331-041828@2x.png?raw=true)

## Sort by count

![](https://github.com/Lei1025/ImgRepo/blob/master/myblog/WX20190331-041840@2x.png?raw=true)