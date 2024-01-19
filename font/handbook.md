How to change the style of an element by the style of another element in vanilla JavaScript:

```js
const elementA = document.querySelector('.layout__region--first p:first-child');
const elementB = document.querySelector('.block-field-blocknodespecialbody p:nth-child(1)');

const styleOfA = window.getComputedStyle(elementA).fontWeight;

if ( styleOfA === '700' ) {
    elementB.style.fontWeight = "normal";
};
```
