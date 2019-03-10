---
layout: post`
title: "React Study Notes" 
date: 2019-03-01
tags: [react, studynotes]
comments: true
---

Notes:

#### <React.Fragment>

JSX can only have one root element

//只能有一个根节点，可以把所有 element 放到一个 div 里，也可以用 React.Fragment 包含起来，`<React.Fragment>`不会被 Render 到 html 里

#### 'https://picsum.photos/200'

Return a random picture of 200 by 200

#### ClassName

Class--js = ClassName--jsx

### Style
```jsx
style = {
    fontSize: 10,
    fontWeight:'bold'
  };

<span style={this.style}> </span>
```

```jsx
<span style={{fontSize: 10, fontWeight:'bold'}}></span>
```

### Quickly create new method in render()
```jsx
  let classes = "badge m-2 ";
  classes += (this.state.count === 0) ? "badge-warning" : "badge-primary";
```
Select and right click, then choose `"Refactor"`. 

Do not write variable and do function inside `render()` mehod.

### no loop in jsx
array.map(item => (//do something))
```jsx
tags: ["tag1", "tag2", "tag3"]

......
<ul>
  {this.state.tags.map(tag => (<li key={tag}>{tag}</li>))}
</ul>
```
### no if...else... in jsx

### in js
true && false 
>false

true && 'Hi' ==
>"Hi"

true && 'Hi' && 1
>1

### binding event handllers
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

### tell React state has been changed
this.setState();

### passing event arguments
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