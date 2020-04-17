---
layout: post
title: "Implement 'Sleep' in JavaScript with a Time Display Example"
tags: [javaScript, js, setInterval, example]
comments: true
date: 2019-02-02
---


Recently while I am trying to write a infinite loop with an interval like following in `JavaScript`, no `sleep()` function in JS.

```csharp
while(true){
	//dosomething()
    Thread.sleep(1000); //pause for 1 sec
}
```

So, to achieve the same goal, the approach in JavaScript is using `setInterval(function, milliseconds)`

## Example

### Show live time:

```javascript
    //output date and time string
    var dateTime = () => {
        var date = new Date();
        return date.toDateString()+' '+date.toLocaleTimeString();
    }
    
    //refresh each second
    setInterval(function(){
	$('#clock').text(dateTime()); 
}, 1000);
```

## Other methods by Google

1. Write a 'sleep' function
  ```javascript
   const sleep = (milliseconds) => {
     return new Promise(resolve => setTimeout(resolve, milliseconds))
    }
   ```
2. Use `then`
```javascript
    sleep(500).then(() => {
    //do stuff
    })
   ```

3. use `asyn()`
```javascript
    const doSomething = async () => {
  		await sleep(2000)
  		//do stuff
    }
	doSomething()
   ```

Reference:

https://flaviocopes.com/javascript-sleep/
