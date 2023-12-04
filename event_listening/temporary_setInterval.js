const myInterval = setInterval( () => {
    // code
}, 0.);

window.setTimeout( () => {
  clearInterval(myInterval);
}, 5000);
