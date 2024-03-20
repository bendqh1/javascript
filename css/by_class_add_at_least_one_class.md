Select any element you want to add a CSS class to and then add any relevant CSS class.

```js
const elementByClass = document.querySelectorAll([
    '.region--phone-1',
    '.region--phone-2',
    '.region--secondary-content'
]);

elementByClass.forEach((element)=>{
    element.classList.add('region--content', 'grid-full', 'layout--pass--content-medium');
});
```
