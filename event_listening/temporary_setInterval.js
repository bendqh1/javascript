const myInterval = setInterval( () => {
  // Code
}, 0.);

window.setTimeout( () => {
  clearInterval(myInterval);
}, 5000);
