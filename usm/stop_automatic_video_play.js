window.addEventListener('load', () => {
  document.querySelectorAll('video').forEach(anyVideo => {
    anyVideo.pause();
  });
});

window.setTimeout( () => {
  document.querySelectorAll('video').forEach(anyVideo => {
      anyVideo.pause();
  });
}, 2500);
