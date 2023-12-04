const myInterval = setInterval( () => {
    // go downmost in a webpage for 1 second to discover its height
    window.scrollTo(0, document.body.scrollHeight);
}, 0.);
window.setTimeout( () => {
    clearInterval(myInterval);
}, 2500);
  
// go back to topmost part of the discovered webpage
window.scrollTo({
    top: 100,
    left: 100,
    behavior: "instant",
});

// scroll to the middle of a discovered webpage
window.scrollTo(0, document.documentElement.scrollHeight * 0.50);
