---
title: "Promises: Why They're Awesome"
date: 2016-4-13
slug: promises-in-action
tags:
  - javascript
  - promises
  - async
  - es6
---

Promises are a step up from using callbacks to deal with asynchronicity for several reasons. They're composable and chainable, and help remedy issues created by callback trees as they become more complex. Callbacks don't execute in parallel or provide simple error handling like promises do. We can easily pass them around and integrate elsewhere even though we don't have their values yet.

ES6 includes promises natively, but non-supported browsers can be easily polyfilled with [babelify/polyfill](https://www.npmjs.com/package/babelify-es6-polyfill) or similar.

Here's a basic function showing a promise in action:

```javascript
import 'babel/polyfill'

function loadImage(url) {
  // our promise will provide a callback that we'll
  // call using either resolve or reject
  return new Promise((resolve, reject) => {
    const image = new Image()

    image.onload = function() {
      // if successful, we'll call resolve with our image
      resolve(image)
    }

    image.onError = function() {
      // if it fails, we'll call reject with our error message
      const message = `Could not load image at ${url}`
      reject(new Error(message))
    }

    image.src = url
  })
}
```

Now let's use Promise methods to compose a new promise and perform our next action.
```javascript
// First we'll create a function that will
// append our returned images to the DOM
const addImg = src => {
  const imgElement = document.createElement('img')
  imgElement.src = src
  document.body.appendChild(imgElement)
}

// We can compose multiple promises returned by our loadImage
// function with Promise.all (which will return a new promise)
// and use Promise.then to perform our next action
Promise.all([
  loadImage('https://unsplash.it/100'),
  loadImage('https://unsplash.it/200'),
  loadImage('https://unsplash.it/300')
]).then(images => {
  // Here we call our addImg function on
  // each item in the returned array
  images.forEach(image => addImg(image.src))
}).catch(error => {
  // If an error occurs in any of the composed
  // promises, it will bubble up to this handler
  console.log(error)
})
```

In summary, promises are powerful due to their composability, chainability, simple error handling and much more. Check out [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) for additional methods. Thanks to MPJ at [funfunfunction](https://www.youtube.com/channel/UCO1cgjhGzsSYb1rsB4bFe4Q) for the clear examples.
