```js
document.body.insertAdjacentHTML('beforeend', `
  <!-- -->
`)
```

Note the "beforeend" argument for this method, here are all its arguments:

* 'beforebegin': Before the element itself.
* 'afterbegin': Just inside the element, before its first child.
* 'beforeend': Just inside the element, after its last child.
* 'afterend': After the element itself.
