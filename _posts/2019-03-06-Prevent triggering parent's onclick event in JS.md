---
layout: post
title: Prevent Triggering Parent's onClick Event in JS
tags: [js, javascript, regex]
comments: true
---
>One method to disable child nodes inherit parent's onclick event in JS alone with one Js regex practice.

I do remember I read an article about how to deal with event inheritance situations including their triggered order and different methods of prevention, but I can't find it any more :( 

My current solution is `event.cancelBubble=true`

```html
<td>
    <a href="/admin/zonecard?pid=&#xA;									16747ec3-bc3e-e911-a2c4-000d3a1c82b2&#xA;									&amp;contextname=10 Zone - USPS Based Mapping + Africa"
        onclick="event.cancelBubble=true;">
        <i class="fa fa-cog" alt="Zone Card" title="Zone Card">
        </i>
    </a>
    <a onclick="copyZoneType(this)">
        <i class="fa fa-copy" alt="Copy Zone Card" title="Copy Zone Card"></i>
    </a>
</td>

<script>
    function copyZoneType(srcRow) {
        event.cancelBubble = true;//prevent trigger parent onclick event in the meantime
        let pid = () => {
            var pidStr = srcRow.previousElementSibling.getAttribute('href').replace(/\s/g, '').match(/pid=[A-Za-z0-9-]*/g);
            //result return like "['pid=XXXXXX']"
            return pidStr[0].substring(4);
        };
        console.log(pid);
    }
</script>
```