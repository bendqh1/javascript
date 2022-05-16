// ==UserScript==
// @name         wiki
// @match        https://*.wikipedia.org/*

// ==/UserScript==

document.querySelector("#wpSave").remove();

document.querySelectorAll("[accesskey]").forEach((e)=>{
    e.removeAttribute('accesskey');
});

window.addEventListener("keydown",  (e)=>{ e.stopPropagation(); }, true);
window.addEventListener("keyup",    (e)=>{ e.stopPropagation(); }, true);
window.addEventListener("keypress", (e)=> { e.stopPropagation(); }, true);

/*
Preview your edit after each significant change and save the article data (source coded) in Libreoffice file,<br>
repeat the process until the Libreoffice file contains the best version of the edited article and then publish it after no block is eminent;
*/
