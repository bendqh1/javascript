```js
window.setInterval( ()=>{
    document.querySelectorAll('video').forEach(video => {
      video.autoplay = false;
    });
}, 1);
```

This will not work because `autoplay` is a property, not a method.

We could try removing this property repeatedly.

```js
window.setInterval( ()=>{
    document.querySelectorAll('video').forEach(video => {
      video.removeAttribute('autoplay');
    });
}, 1);
```
