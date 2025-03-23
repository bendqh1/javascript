Because many videos are not loaded with the `video` tag,
  and because many of their elements are very complex and complicated,
    it can be extremely difficult to block their thumbnails using JavaScript alone.

It would be simplest to block all images both directly and indirectly.
  It's best to do this from the web browser level instead from JavaScript, but here is a way with JavaScript.

```js
document.querySelectorAll('img').forEach(img => img.remove());

document.addEventListener('mouseover', () => {
  document.querySelectorAll('img').forEach(img => img.remove());
});
```
