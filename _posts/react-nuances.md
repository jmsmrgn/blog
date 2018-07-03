---
title: "React: Avoiding Gotchas"
date: 2017-8-2
slug: react-nuances
tags:
  - javascript
  - react
  - es6
---

If you're new to React, you WILL run into a few specific quirks that aren't immediately apparent. If you know what to watch out for, these head scratchers won't ruin your day.

##Capitalized component names are enforced

React will throw an error if your component doesn't begin with a capital letter.

<span style=color:red>Warning: The tag `timer` is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.</span>

Easily correctable:

```javascript
class Timer extends React.Component {}
```

##JSX elements must be closed

Can't leave these open as we often do in HTML:

```haml
<br> // NO SIR, TRY AGAIN
<br /> // YES, PROCEED
```

##HTML attributes in JSX can differ slightly

For the most part you can use what you know, but here are some exceptions/guidelines from the [docs](https://reactjs.org/docs/dom-elements.html#supported-attributes):

- Everything is camelCased (just like DOM APIs)
```haml
<div className="macaroni"></div>
```

- Style attribute accepts an object

```javascript
{ backgroundColor: 'red' }
```

- Because `for` is a reserved word in JavaScript, React elements use `htmlFor` instead

```haml
<label htmlFor="free"</label>
```

##NO if/else statements in JSX

From the [docs](https://react-cn.github.io/react/tips/if-else-in-JSX.html): *If-else statements don't work inside JSX. This is because JSX is just syntactic sugar for function calls and object construction.*

Dust off and forge ahead with a ternary expression instead:

```javascript
{ condition ? 'if true' : null }
```

##`setState` is an async function

When using `setState` to well, set some state, it's an asynchronous operation. You can take a look at `this.state` right after execution if you're skeptical. Good news is that `setState` will take a callback if you need an immediate action to follow:

```javascript
this.setState(
  { title: 'Mars Attacks' },
  function() {
    // run for the hills
  }
)
```

##Mutating from within <code>render()</code> is a no-go

React re-renders every time state changes, so it's intuitive that we shouldn't introduce any other changes during a render cycle. In an ideal world, React is fed some data and has everything it needs to render and wait for the next change. Forget the surprises.

##`this.props.children` isn't always an array

React will return a single object if only one child exists.

```haml
// inner stores as a single object
<div>
  <p></p>
</div>

// inner stores as an array objects
<div>
  <p></p>
  <p></p>
</div>
```

This can be a bummer if you'd like to use handy array methods like [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map). Fortunately, we can coerce `this.props.children` into an array with a [top-level API method](https://reactjs.org/docs/react-api.html#reactchildrentoarray):

```javascript
React.Children.toArray(children)
```

Keep these in mind and get to your 🍺 while it's still cold!




