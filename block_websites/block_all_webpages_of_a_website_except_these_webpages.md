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
    window.location.href = 'A'; // every webpage of website A which is not one of B, C or D leads to webpage A
}
```
