We can loop through an entire table that contains cells with phrases in various languages and set an attribute to each cell that contains a phrase starting with a letter of the English alphabet, as follows.

```js
const englishTerm = /^[a-zA-Z]/;
document.querySelectorAll('td').forEach( (element)=>{
    if ( element.textContent.match(englishTerm) ) {
        element.setAttribute('style', 'direction: ltr; text-align: right; padding-left: 15px')
    }
});
```
