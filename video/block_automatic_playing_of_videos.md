```js
window.setInterval( ()=>{
    document.querySelectorAll('video').forEach(video => {
      video.autoplay = false; // Disable autoplay
      video.pause(); // Pause the video if it starts playing
    });
    
    const observer = new MutationObserver(() => {
      document.querySelectorAll('video').forEach(video => {
        if (video.autoplay) {
          video.autoplay = false;
          video.pause();
        }
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });
}, 1);
```
