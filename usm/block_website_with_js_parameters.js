// ==UserScript==
// @name         blocksite
// @match        *://*.example.com/*

let href = window.location.href;
let anythingToBlock = [
    'youtube.com',
    'walla.co.il'
];

for (let i = 0; i < anythingToBlock.length; i++) {
    if (href.includes(anythingToBlock[i])) {
            window.open("https://google.com/", "_self");
    }
}
