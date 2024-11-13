```js
document.addEventListener('elementAdded', function() {
  const myElement = document.querySelector('.x');
  if (myElement) {
    console.log('Element found!', myElement);
  }
});
```
