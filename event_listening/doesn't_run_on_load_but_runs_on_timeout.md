Often times the load event isn't late enough because things get loaded after it asynchronously and we need to wait for them.

In such cases, a `setTimeout()` of say 1000 milliseconds could help but a more accurate strategy is "waiting one tick" this way:

```js
window.addEventListener('load', ()=> setTimeout( ()=>{
  document.querySelector('#edit-actions').scrollIntoView()
}) );
```
