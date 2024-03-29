## Instantly

```javascript
window.setInterval( () => {
    window.scrollTo({
        top: 100,
        left: 100,
        behavior: "instant",
    });
}, 1);
```

## Temporarily

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

## Blocking scrolling in websites of some types

```js
window.setInterval( ()=>{
    if (
        ( !window.location.href.includes('github') )
        &&
        ( !window.location.href.includes('benaharoni') )
        &&
        ( !window.location.href.includes('sitepoint') )
        &&
        (
            // EACH BLOCKING CONDITION COMES HERE
        )
    ) {
        window.scrollTo({
            top: 100,
            left: 100,
            behavior: "instant",
        });
    }
}, 1);
```

## Notes

* If the **initial scrolling** is not 100% top (doesn't start toppest), then change `top: 100` to `top: 1`.
