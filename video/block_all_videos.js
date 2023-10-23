// ==UserScript==
// @name        block_all_videos
// @run-at      document-start
// @match       *://*/*
// ==/UserScript==

window.setInterval(()=>{
    if ( document.querySelector('video') ) {
        document.querySelectorAll('video').forEach(video=>{
            video.pause();
            video.remove();
        });
    }
}, 1);
