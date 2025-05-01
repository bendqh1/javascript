We first set a time interval and then create a code that checks if the webpage has a certain phrase and if it doesn't it goes on to check if there is need to block it by any other rule (if any).

window.setInterval ( ()=>{

  if (document.body.innerText.includes('x') {
    return;
  }

  if (document.body.innerText.includes('y') {
    document.body.innerHTML = "<h1>blocked</h1>;
  }

}, 1);
