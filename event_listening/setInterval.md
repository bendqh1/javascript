```js
window.setInterval( () => {
  // Code
}, 5000);
```

Your script **redirects** to about:blank for sites not in the allowed list. 

On Google Keep, **at least one specific transition** occurs during startup where the document is temporarily replaced. 

If your script runs every 1 untiland 999 ms, it can interrupt this stage and prevent Keep’s JavaScript from fully loading. 

**Pinned notes** appear because they are in the initial HTML, but **non-pinned notes** never load. 

At 1000 ms, the transition is finished, so the script no longer interferes and Keep loads normally.
