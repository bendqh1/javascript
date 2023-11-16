In you favorite user script manager, run:

```js
// ==UserScript==
// @name         block_all_websites_beside_this_website
// @match        *://*/*
// @run-at      document-start

// ==/UserScript==
if (!window.location.href.includes('example.com')) {
    window.open("https://example.com/", "_self");
}
```

Ensure to note that the negation (`!`) of the `includes()` test is far from it, it's not `!includes()` or `includes(!)`, but rather on the start as in `!window.location.href.includes()`.
