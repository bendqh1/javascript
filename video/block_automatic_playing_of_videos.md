```js
window.setInterval( ()=>{
    document.querySelectorAll('video').forEach(video => {
      video.autoplay = false;
    });
}, 1);
```

Or

```js
const observer = new MutationObserver(() => {
  document.querySelectorAll('video').forEach(video => {
    if (video.autoplay) {
      video.autoplay = false;
    }
  });
});

observer.observe(document.body, { childList: true, subtree: true });
```
