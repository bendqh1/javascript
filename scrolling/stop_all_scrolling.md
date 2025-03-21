```js
// Prevent any content from being scrolled or shown outside the viewport.
document.documentElement.style.overflow = 'hidden';
document.body.style.overflow = 'hidden';

// Prevent any content from being clickable.
document.body.style.pointerEvents = 'none';

// Fixate everything to the viewport.
document.documentElement.style.position = 'fixed';
document.body.style.position = 'fixed';
```
