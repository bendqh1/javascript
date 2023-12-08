// CSS should go to head;

const whereToLoad = document.querySelector("body");
const ajax = new XMLHttpRequest();
ajax.open("GET", "/structure.html", false); // No dot (.) before the slash in AJAX;
ajax.send();
whereToLoad.innerHTML += ajax.responseText;
