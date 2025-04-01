We can block all background images this way:

```js
  document.querySelectorAll('*').forEach((element) => {

      // Compute the style of any element in the document and isolate any such element with a background image (if any):
      let bgImage = window.getComputedStyle(element).backgroundImage;

      // For each element, do:
      if (bgImage !== 'none') {
          element.remove();
      }
  });
```
