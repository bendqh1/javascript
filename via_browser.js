document.querySelectorAll('img').forEach( (element)=>{
    element.removeAttribute("title");
    
    element.removeAttribute("alt");
    
    element.onerror = ()=>{
        element.style.display = 'none';
    }
    // onerror (on-error) is a method, not an element, so we define what happens for any image element, if an error occurrs about this image element.
});

// document.querySelectorAll('img').forEach( (element)=>{ element.remove(); } );

window.setInterval(()=>{
    if ( document.querySelector('video') ) {
        document.querySelectorAll('video').forEach(video=>{
            video.pause();
            video.remove();
        });
    }
}, 1);

if ( window.location.href.includes('cnn.com') ) {window.open("https://foxnews.com/", "_self");}

if ( window.location.href.includes('youtube.com') ) {window.open("https://google.com/", "_self");}
