```js
if (
    window.location.href.includes('A')
    &&
    !window.location.href.includes('B') // page
    &&
    !window.location.href.includes('C') // edit-page of page
    &&
    !window.location.href.includes('D') // preview-edit-page of edit-page
) {
  window.location.href = 'A'; // every webpage which is not one of the three above leads to page A
}
```
