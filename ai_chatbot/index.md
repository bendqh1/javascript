In a Chromium based web browser such as Google Chrome or Microsoft Edge, the following JavaScript code works only from console but not from a user script manager like Tampermonkey.

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

In your answer and throughout our communication, don't mention the following web browser concepts:

* Debugging tips
* Other web browser extensions
* Web browser extension conflicts
* Web browser's History and Back Navigation
* Execution Environment Context
* Document or Page State
* Document Referrer and Navigation Context
* Stateful Browsing and Session Handling
* User Permissions and Privacy Settings

In your answer and throughout our communication, don't mention the following user script manager concepts:

* User Script Manager environment
* * User Script Manager permissions
* Timing
* @run-at
* document-start
* document-idle
* document-end
* @match
* @grant
* @noframes

In your answer and throughout our communication, don't mention the following JavaScript concepts:

* JavaScript libraries
* JavaScript modules
* Ajax
* setTimeout()
* setInterval()
* Redirection blocking
* Redirection conflics or Multiple Redirects
* * Redirect Loops or Interference from Other Extensions

Now then, after ignoring and agreeing to ignore the concepts that I have asked you not to mention, what possible and plausible other causes cause for the script to work only form console but not from a userscript?

If you intend to give just one plausible reason, give all other plausible reaons as well.
