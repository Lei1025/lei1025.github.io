---
layout: post
title: Ajax Exapmle
date: 2019-02-28
tags: [js, javascript, jquery, ajax, post, get, form, submit,example]
comments: true
---

> It always takes me a long time to find an exactly example what I wannt for Jquery AJAX.  Here I will collect some example I used frequently.

## Submit a form

```js
// this is the id of the form
$("#idForm").submit(function(e) {

    e.preventDefault(); // avoid to execute the actual submit of the form.

    var form = $(this);
    var url = form.attr('action');

    $.ajax({
           type: "POST",
           url: url,
           data: form.serialize(), // serializes the form's elements.
           success: function(data)
           {
               alert(data); // show response from the php script.
           }
         });


});
```

[Reference](https://stackoverflow.com/questions/1960240/jquery-ajax-submit-form)

## Post (with data)

```javascript
$.post(
  "surveypost.aspx",
  {
    name: "data",
    name: "data",
    name: "data"
  },
  //if needed
  function(callback) {
      //do something
  }
).done(function() {
    //do something if needed
});
```

## Get
