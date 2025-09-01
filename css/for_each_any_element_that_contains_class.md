```js
document.querySelectorAll('*').forEach( (element)=>{
  if ( element.classList.contains('.block-globalrs-blwqyzyrtqsrmyydybswpmmrym') ) {
    element.style.padding = "0";
  }
});
```

It may be an ID instead of a class; I was sure it was a class, but it was an ID. Pseudocode:

```js
document.querySelector('#X').SOMETHING.
```
