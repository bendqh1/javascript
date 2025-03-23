```js
const allElements = document.querySelectorAll('*');

allElements.forEach(element => {
  if ( element.tagName.toLowerCase() === 'img' ) {
  element.remove();
  }
}
```
