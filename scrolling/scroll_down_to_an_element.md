To scroll down to an element, do this:

```js
document.querySelector('a').scrollIntoView();
```

## After the load event

```js
window.addEventListener('load', ()=>{
    return setTimeout( ()=>{
        document.querySelector('.x').scrollIntoView()
    })
});
```
