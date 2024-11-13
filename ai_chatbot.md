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

In your answer and throughout our communication, don't mention the following concepts:

* Debugging tips
* console.log()
* timing
* @run-at
* document-start
* document-idle
* document-end
* @match
* @grant
* @noframes

In your answer and throughout our communication, also don't mention the following concepts:

* User Script Manager environment
* * User Script Manager permissions
* JavaScript libraries
* JavaScript modules
* Ajax
* setTimeout()
* setInterval()
* Redirection blocking
* Redirection conflics or Multiple Redirects
* * Redirect Loops or Interference from Other Extensions
* Browser extension conflicts or Other browser extensions

In your answer and throughout our communication, also don't mention the following concepts:

* Execution Environment Context
* Document or Page State
* Document Referrer and Navigation Context
* Browser's History and Back Navigation
* Stateful Browsing and Session Handling
* User Permissions and Privacy Settings

Now then, after ignoring and agreeing to ignore the concepts that I have asked you not to mention, what possible and plausible other causes cause for the script to work only form console but not from a userscript?
