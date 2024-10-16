## Stage 1

Select the *wrapper element* **nearest above** the `#shadow-root (open)` pseudo element, by some attribute. For exmaple, if it doesn't have a CSS ID or CSS class then an **attribue alone** or an attribute and a value:

```js
document.querySelector('div[data-spotim-module]') // Nearest wrapper above an open shadow root pseudo element;
```

In a web browser dev tool one can also do **Copy selector** to get the exact CSS selector of the element (which can be very long) or **Store as global variable** to get it directly into the console in a variable.

## Stage 2

Do as much as `firstElementChild` as you need until you can select the `#shadow-root (open)` by `shadowRoot`, for example:

```js
document.querySelector('div[data-spotim-module]').firstElementChild.shadowRoot 
```

or

```js
document.querySelector('div[data-spotim-module]').firstElementChild.firstElementChild.shadowRoot
```

etc.

Using `firstElementChild` is good if between the closest wrapper element and the `#shadow-root (open)` there is a dynamically created nonsensical HTML element like `<ow-gvpumm5jb4g></ow-gvpumm5jb4g>` or whatever.

## Stage 3

Select the desired child of the `#shadow-root (open)` as with:

```js
document.querySelector('div[data-spotim-module]').firstElementChild.shadowRoot.querySelector('.Button__primary--11-4-12');
```

## Stage 4

Do something with the element

```js
window.setInterval(()=>{
    document.querySelector('div[data-spotim-module]').firstElementChild.shadowRoot.querySelector('.Button__primary--11-4-12').click();
}, 1000);
```

## Notes

### 1)

Credit for user:kicken for a code example here:

https://www.sitepoint.com/community/t/how-to-select-an-element-added-to-the-dom-dynamically/430203/1

### 2)

`<ow-j3eolsu49kg>` is what's known as a non standard tag or non semantic tag or cryptic tag.
