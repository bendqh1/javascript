To scroll down to an element, do this:

```js
document.querySelector('a').scrollIntoView();
```

## After the load event

```js
window.addEventListener('load', ()=>{
    return setTimeout( ()=>{
        document.querySelector('#main > div.main-content > div.main-content__container.container > div').scrollIntoView()
    })
});
```
