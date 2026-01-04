```js
window.setInterval( () => {
  // Code
}, 5000);
```

## Google keep doesn't load non-pinned notes

```js
// ==UserScript==
// @name         Allow only these websites
// @match        *://*/*
// @run-at       document-start
// ==/UserScript==

window.setInterval( ()=>{

(function() {

    const allowedWebsites = [
        "keep.google.com"
    ];

    // replace www. with nothing.
    const host = location.hostname.replace(/^www\./, "");

    // if a the domain name and the TLD are one of the above combinations (ignoring subdomains) then allow the website indeed.
    if (!allowedWebsites.some(domain => host.endsWith(domain))) {
        window.location.href = "about:blank";
    }

})();

}, 1)
```

That script **redirects** to `about:blank` for sites not in the allowed list. 

On Google Keep, **at least one specific transition** occurs during startup where the document is temporarily replaced. 

If the script runs every 1 `untiland` 999 ms, it can interrupt this stage and prevent Keep’s JavaScript from fully loading. 

**Pinned notes** appear because they are in the initial HTML, but **non-pinned notes** never get loaded with JavaScript. 

At 1000 ms, the transition is finished, so the script no longer interferes and Keep loads normally, hence changing 1 `untiland` 999 ms won't work, but 1000 ms should work.

If we want to keep using 1 ms we could replace the **redirect** with a deletion of content:

```js
document.documentElement.innerHTML = "";
throw new Error("Blocked site");
```
