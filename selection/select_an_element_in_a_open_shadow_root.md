The shadowRoot property is a key concept in web development related to Web Components and Shadow DOM. It is a property of an HTML element that represents the root of the shadow tree for an element that has been assigned a shadow DOM.

A shadowRoot can be open or closed and this deals with open ones.

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

`<ow-j3eolsu49kg>` is what's known as a non standard tag or non semantic tag or cryptic tag or **custom element**.

### 3) The custom element here is dynamic.

### 4) In the particular website

In the particular website make sure to mark only the text of the button, not the button itself (the button-linkage is JavaScriptly cloned from the text itself ha ha ha).

## Alternative

```js
window.setInterval(()=>{
    const elements = document.querySelectorAll('*');
    
    for (let element of elements) {
      if ( element.tagName.toLowerCase().includes('ow-')) {
        firstOwElement = element;
      }
    }
    
    firstOwElement.shadowRoot.querySelectorAll('*').forEach( (element)=>{
        if ( element.querySelector('div > div > ow-ads_conversation > div > div > div > div > div > div > div.ToastWrapper__providerContainer--11-5-7 > div.spcv_conversation > div:nth-child(7) > div > button > span > span > span') ) {
            element.click();
        }
    });
}, 1000);
```
