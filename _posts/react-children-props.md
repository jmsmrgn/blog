---
title: 'React: Cloning Children with Edited Props'
date: 2017-9-17
slug: react-children-props
tags:
  - javascript
  - react
  - es6
---

React provides a few super useful top-level methods for manipulating `this.props.children` to produce the desired output. This is particularly helpful when those children are not explicity known beforehand. [React.Children.map](https://reactjs.org/docs/react-api.html#reactchildrenmap) works the same as the [Array.prototype.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) to loop over each child and apply a function, then return a new set.

```javascript
class Parent extends React.Component {
  constructor() {
    super()
    // bind method to component context
    this.renderChildren = this.renderChildren.bind(this)
  }

  renderChildren() {
    return React.Children.map(this.props.children, child => {
      // run any function on child
      return child
    })
  }

  render() {
    return (
      <div>
        {this.renderChildren()}
      </div>
    )
  }
}
```

What if we want to edit the props of each child that we just looped over? React has us covered with [React.cloneElement](https://reactjs.org/docs/react-api.html#cloneelement). No surprise here, we pass an element as the first argument and an object of props as the second:

```javascript
renderChildren() {
  return React.Children.map(this.props.children, child => {
    return React.cloneElement(child, {
      title: this.props.title
    })
  })
}
```

The cloned child is going to receive the title prop of its parent. We can pass anything we want, including any available methods:

```javascript
renderChildren() {
  return React.Children.map(this.props.children, child => {
    return React.cloneElement(child, {
      onClick: this.parentMethod
    })
  })
}
```

I suggest you learn yourself up on the remaining React.Children utilities cuz they're damn handy. After that, enjoy a cold 🍺 !
