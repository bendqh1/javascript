```js
document.querySelectorAll('img').forEach( (element)=>{
  element.remove();
});
```

```js
const allElements = document.querySelectorAll('*');

allElements.forEach(element => {
  if ( element.tagName.toLowerCase() === 'img' ) {
  element.remove();
  }
});
```

One may need to block image reapparance after mouse hover and other similar events.
