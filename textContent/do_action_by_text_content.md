## Delete any element with a certain textContent

Create a variable which is an array named “atLeastOneElement” and assign it all elements whatsoever. Then, for each element in that array, delete the element.

```javascript
const [...atLeastOneElement] = document.querySelector('*');
atLeastOneElement.forEach((element) => {
    if (element.textContent == "someTextContent") {
        element.remove();
    }
});
```

## Delete any box that contains any element with a certain_textContent.js

Select the element containing the box.<br>
Create a variable which is an array named "atLeastOneElement" and assign it all elements whatsoever. Them, for each (for the first, in this case) element in that array, delete the box.

const category_box = document.querySelector('#myBox');
const [...atLeastOneElement] = document.querySelector('*');
atLeastOneElement.forEach((element) => {
    if (element.textContent == "קטגוריות מוסתרות") {
        category_box.remove();
    }
});
