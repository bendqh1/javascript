If all images are blocked on the web browser level, alt atrribute and the global attirbute `title` can be distractive.

```js
const allElements = document.querySelectorAll('*');

allElements.forEach(element => {
    element.removeAttribute('title');
});

allElements.forEach(element => {
    element.removeAttribute('alt');
});
```
