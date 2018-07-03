---
title: "React: Tidy Up Components with Property Initializers"
date: 2017-6-11
slug: property-initializers-react
tags:
  - javascript
  - react
  - es6
  - es7
---

Using ES6 classes to write React components has the drawback of requiring us to bind custom methods inside the `constructor`:

```javascript
class App extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
    this.fetchData.bind(this)
  }
}
```

We can make this a little less verbose using [ES7+ property initializers](https://github.com/tc39/proposal-class-public-fields), allowing us to drop the constructor entirely and declare state directly. Property initializers are bound to the class instance and not the prototype.

```javascript
class CounterApp extends Component {
  state = {
    data: []
  }
}
```

Using [arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) for our methods, we can ensure that `this` has the correct lexical binding and refers to the component itself:

```javascript
fetchData = () => {
  this.setState({ data: response })
}
```

To get this compiled correctly, you'll have to adjust your [Babel settings](https://babeljs.io/docs/plugins/transform-class-properties):

```bash
npm install --save-dev babel-plugin-transform-class-properties
```

__.babelrc__
```json
{
  "plugins": [
    ["transform-class-properties"]
  ]
}
```

Now that's a squeaky 🛁 component. Treat yourself. 🍺 🌮
