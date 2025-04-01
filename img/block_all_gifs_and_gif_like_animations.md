We will target all gif files but also some strange elements like `js-video` that behave similar to gif files.

```js
document.querySelectorAll('js-video, img[src*="gif"]').forEach((element)=>{
    element.remove();
});
```

## Notes

* From all elements, remove each `img` with `src` of `gif`.
