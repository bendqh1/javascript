window.setInterval(()=>{
    document.querySelectorAll('video').forEach(video=>{
        video.pause();
    });
}, 1);
