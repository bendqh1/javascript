## How to change the style of an element by the style of another element in vanilla JavaScript:

### Way one (may not effect pure CSS directives)

```js
const elementA = document.querySelector('#a');
const elementB = document.querySelector('#b');

if ( elementA.style.fontWeight == "bold" ) {
    elementB.style.fontWeight = "normal";
};
````

### Way two (should effect all CSS)

```js
const elementA = document.querySelector('#a');
const elementB = document.querySelector('#b');

const styleOfA = window.getComputedStyle(elementA).fontWeight;

if ( styleOfA === '700' ) {
    elementB.style.fontWeight = "normal";
};
```
