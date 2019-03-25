---
layout: post
title: "React Study Notes" 
date: 2019-03-01
tags: [react, studynotes]
comments: true
---

>Study notes while learning React.

## VS Code Shortcuts

imrc --  
```jsx
import React, { Component } from 'react'; 
```
cc --
```jsx
class  extends Component {
    state = {  }
    render() { 
        return (  );
    }
}
 
export default ;
```

## Avoid Rendering Root Element

`<React.Fragment>`

JSX can only have one root element

All elements could be put inside a pair of <div> tag or `<React.Fragment>` tag.

if using <React.Fragment>, root element won't be incluede in html

## Get Random Pictures with fixed size

'https://picsum.photos/200'

Return a random picture of 200 by 200

## Add Class in JSX

Class--js = `ClassName`--jsx

```jsx
 <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
```

## Style

```jsx
style = {
    fontSize: 10,
    fontWeight:'bold'
  };

<span style={this.style}> </span>
```

{% raw %}
```jsx
<span style={{fontSize: 10, fontWeight:'bold'}}></span>
```
{% endraw %}

## Quickly create new method in render()
```jsx
  let classes = "badge m-2 ";
  classes += (this.state.count === 0) ? "badge-warning" : "badge-primary";
```
Select and right click, then choose `"Refactor"`. 

Do NOT write variable and do function inside `render()` mehod.

## Loop -- map

**no loop in jsx**

array.map(item => (//do something))
```jsx
tags: ["tag1", "tag2", "tag3"]

......
<ul>
  {this.state.tags.map(tag => (<li key={tag}>{tag}</li>))}
</ul>
```
## no if...else... in jsx

Alternatively, use `:`  operator

```jsx
classes += this.state.count === 0 ? "badge-warning" : "badge-primary";
```

### trick in js

    true && false 
    >false

    true && 'Hi' ==
    >"Hi"

    true && 'Hi' && 1
    >1

## binding event handllers

Do not write function a directly. Using arrow functions instead. Casuse `this` keyword return `undefine` in a function, and what we need is returning an object that should write inside a class or object.

Arrow functions don't rebind `this` keyword. They inherieted.

```jsx
handleIncrement = () =>{
    console.log('Increment Clicked', this);
  }

//this is incorrect
handleIncrement(){
  .....
}
```

## tell React state has been changed

this.setState();

## passing event arguments

jsx don't call function in onClick(Upper case 'C') event, but using reference, which means no `()` when calling a funciton.

So if we need to pass arguments, arrow function comes.

```jsx
handleIncrement = (id) =>{
    console.log(id);
    this.setState({ count : this.state.count + 1});
  }

render(
...
<button onClick={() => this.handleIncrement(id) } className="btn btn-secondary btn-sm">Increament</button>
...
)
```

## Passing data

`this.props`

Each react component has a property called `props` which basically is plain `JavsScript` object