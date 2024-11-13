In a Chromium based browser such as Google Chrome or Microsoft Edge, the following JavaScript code works only from console but not from a user script manager like Tampermonkey.

```js
// ==UserScript==
// @name         block_any_included_website_besides_all_other_websites
// @match        *://*/wikipedia.org/*
// @run-at       document-start 

// ==/UserScript==

window.setInterval ( ()=>{
if ( window.location.href.includes('wikipedia.org') ) {
    window.location.replace("https://example.com");
}
}, 100);
```

In your answer, don't mention the following concepts:

* Debugging tips
* console.log()
* timing
* document-start
* document-idle
* document-end
* @match
* @grant
* @noframes
* setTimeout()
* setInterval()
* Redirection conflics or Multiple Redirects
* Redirection blocking
* Other browser extensions or browser extension conflicts

Now then, after ignoring the concepts that I have asked you not to mention, what are possible other causes for the script to work only form console but not from a userscript?
