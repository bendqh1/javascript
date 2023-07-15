window.setInterval( () => {
  if ( document.querySelectorAll('video') ) {
    document.querySelectorAll('video').forEach(video => {
      video.pause();
    });
  };
}, 1);
