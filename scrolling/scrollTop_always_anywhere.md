```javascript
const myInterval = setInterval( () => {
    window.scrollTo({
        top: 100,
        left: 100,
        behavior: "instant",
    });
}, 0.);
```

Or, temporarily:

```javascript
const myInterval = setInterval( () => {
    window.scrollTo({
        top: 100,
        left: 100,
        behavior: "instant",
    });
}, 1);

window.setTimeout( ()=>{
  clearInterval(myInterval);
}, 5000);
```
