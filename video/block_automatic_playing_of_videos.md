`autoplay` is a property, not a method.

```js
window.setInterval( ()=>{
    ['loadeddata', 'playing'].forEach(event => {
      document.addEventListener(event, () => {
        document.querySelectorAll('video').forEach(video => {
          video.removeAttribute('autoplay');
        });
      }, true);
    });

    document.querySelectorAll('video').forEach(video => {
      video.removeAttribute('autoplay');
    });
}, 1);
```
