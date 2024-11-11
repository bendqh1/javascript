One may try this:

```js
// ==UserScript==
// @name         block_any_included_website_besides_all_other_websites
// @match        *://*/*
// @run-at       document-start

// ==/UserScript==
window.setTimeout ( ()=>{
if (window.location.href.includes('wikipedia.org')) {
    window.open("https://example.com/", "_self");
    // window.location.replace("https://example.com");
    // window.location.href("https://example.com");
}
}, 100);
```
