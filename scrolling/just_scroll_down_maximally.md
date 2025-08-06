The code below is unclear from the names of the methods, so here is an explanation of it in simple words:

Use the `scrollTop` **property** 
  to set the **scrolling position** 
    to the `scrollHeight` **natural value** 
      of the element of the `scrollingElement` variable
        so that the browser would behave as if we have manually scrolled down the very end of `scrollHeight - clientHeight` **browser variable**.

```js
const scrollingElement = (document.scrollingElement || document.body);
scrollingElement.scrollTop = scrollingElement.scrollHeight;
```
