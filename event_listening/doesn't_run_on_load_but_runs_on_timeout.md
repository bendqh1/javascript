Often times the load event isn't late enough because things get loaded after it asynchronously and we need to wait for them.

In such cases, a `setTimeout()` of say 1000 milliseconds could help but a more accurate strategy is "waiting one tick" this way:

```js
// ==UserScript==
// @name         Jump
// @match        https://example.com
// ==/UserScript==

window.addEventListener('load', ()=>{
    return setTimeout( ()=>{
        document.querySelector('#main > div.main-content > div.main-content__container.container > div').scrollIntoView()
    })
});
```

The `setTimeout()` is timedout when anything executed between `load` and it finishes (if there is any). 

A more brutal approach is:

```js
setInterva( ()=>{
    // action
}, 1 );
```
