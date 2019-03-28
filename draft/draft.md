---
layout: post
title: "Implement Scroll Spy in Jekyll without Bootstrap" 
date: 2019-03-24
tags: [jekyll, githubPage]
comments: true
---

Implement Scroll Spy in Jekyll without Bootstrap
# Install `scrollnav.js` Plugin

To simplify this project,I am using [scrollnav.js](http://scrollnav.com/) to help me with. There are a couple of methods to [install](http://scrollnav.com/guide/installing.html) it, but when I tried to host it by myself, an error occurred that it needs one more file end with '.map'. I find it [here](https://unpkg.com/scrollnav@3.0.1/dist/). By the way, if using CDN, exactly working well.

# Setup

## .html

Add a class called `post-article` or any other class name to the section/div in need of scrollspy.

```html
  <div id="post-content" class="post-article">
    <h2>First section</h2>
    ...
    <h2>Second section</h2>
    ...
    <h2>Third section</h2>
    ...
  </div>
```
## .js

> Do not initialize `ScrollNav` in `Ready()`, at least my attempt failed.

Some essential tweaks from original document:
1. First of all, add `subSection` as showing second level of title is a common requirement of a category,
2. By default, `h2` tags are regraded as the first level title of an article. However, in terms of  my situations, sometimes `h1` is my first level and sometimes `h2` is. So I wrote a Binary Operator dealing with this case.
3. Other option see: [All Options](http://scrollnav.com/guide/customizing.html)
   
```javascript
$(function(){
    const content = document.querySelector('.post-article');
    scrollnav.init(content, { 
      debug: false,
      easingStyle: 'linear',
      sections: ($('.post-content > h1').length>0) ? 'h1' : 'h2',
      subSections: ($('.post-content > h1').length>0) ? 'h2' : 'h3'
    });
});
```
## CSS Style .scss

```css
//scroll nav
.scroll-nav {
    color: $white;
    font-weight: bold;
    background-color: rgba(168, 168, 168,0.8);
    //border: 1px solid #a2a9b1;
    padding: 15px 10px;
    position: fixed;
    top: 20vh;

    @media #{$notlarge} {
		display: none;
	}

    a {
        color: $white;
        text-decoration: none;
    }
   
    a:hover {
       color:$red;
    }
    
    &:before {
        content: "CATALOG:";
        font-weight: bold;
    }
}

.scroll-nav__list {
    margin: 0;
    padding-left: 1.4em;
    list-style-type: upper-roman;
}

.scroll-nav__item {
    margin-bottom: 5px;
}

.scroll-nav__item--active > a {
    padding: 5px;
    font-weight: bold;
    position: relative;
    color: $white;
    background: $red;
    text-decoration: none;
    @include transition(0.5s);
    &:hover{
        color:$white
    }
}

.scroll-nav__link {
    color: #0645ad;
    text-decoration: none;
    //display: block;
    //margin: 0 auto;
    //padding-left: 42px;
}
```
For more information: [Styling](http://scrollnav.com/guide/styling.html)
