// go to downmost part of a webpage to discover its height
window.setTimeout(()=>{
    window.scrollTo(0, document.body.scrollHeight);
}, 1000)

window.setTimeout(()=>{
// go back to topmost part of the discovered webpage
    window.scrollTo({
        top: 100,
        left: 100,
        behavior: "instant",
    });
}, 2000)

window.setTimeout(()=>{
    // scroll to the middle of a discovered webpage
    window.scrollTo(0, document.documentElement.scrollHeight * 0.50);
}, 3000)
