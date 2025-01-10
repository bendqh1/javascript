## An alert appears more than one time although the (commented) defensive code:

// ==UserScript==
// @name         ynet
// @match        *://*.example.com/*
// ==/UserScript==

/*
Object.defineProperty(window, 'location', {
    value: {
        assign: function() {},
        replace: function() {},
        reload: function() {}
    },
    writable: false
});

let alertCount = 0;
if (alertCount < 1) {
    alert("x");
    alertCount++;
}
*/

if (!localStorage.getItem('alertShown')) {
    alert("x");
    localStorage.setItem('alertShown', 'true');
}
// This way, in case of any loop, the `alert reiteration blocking iterm` was already set.
