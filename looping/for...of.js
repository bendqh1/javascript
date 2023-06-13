// ==UserScript==
// @name        New Userscript
// @run-at      document-start
// @match       *://*/*
// ==/UserScript==

window.setInterval( () => {
    const urlPatternToBlock = [
        'https://search.google.com'
    ];

    for (const element of urlPatternToBlock) {
        if (window.location.href.includes(urlPatternToBlock)) {
        window.open("https://google.com/", "_self");
        }
    }
}, 1000);
