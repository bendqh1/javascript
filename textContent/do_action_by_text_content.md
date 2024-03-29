## Delete any element with a certain textContent

Relate to all elements and then select any element and in each selection iterate to remove an element.

```javascript
document.querySelectorAll('*').forEach((element) => {
    if (element.textContent == "x") {
        element.remove();
    }
});
```

Create a variable which is an array named “atLeastOneElement” and assign it all elements whatsoever. Then, for each element in that array, delete the element.

```javascript
const [...atLeastOneElement] = document.querySelector('*');
atLeastOneElement.forEach((element) => {
    if (element.textContent == "someTextContent") {
        element.remove();
    }
});
```

## Replace the background color of a table columm by text content:

```js
window.setInterval(()=>{
if (window.location.href.includes('https://toksoutheastasia.com/admin/content')) {
    document.querySelectorAll('*').forEach((element) => {
        if (element.textContent == "לא מפורסם          ") {
            element.style.background = "yellow"
        };
    });
}
}, 1);
```

## Delete any box that contains any element with a certain_textContent.js

Select the element containing the box.<br>
Create a variable which is an array named "atLeastOneElement" and assign it all elements whatsoever. Them, for each (for the first, in this case) element in that array, delete the box.

```javascript
const category_box = document.querySelector('#myBox');
const [...atLeastOneElement] = document.querySelector('*');
atLeastOneElement.forEach((element) => {
    if (element.textContent == "קטגוריות מוסתרות") {
        category_box.remove();
    }
});
```
