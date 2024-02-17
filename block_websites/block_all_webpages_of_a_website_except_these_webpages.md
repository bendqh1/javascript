## Pattern

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

## Hebrew Wikipedia

if (
    window.location.href.includes('https://he.wikipedia.org/')
    &&
    !window.location.href.includes('https://he.wikipedia.org/wiki/%D7%95%D7%99%D7%A7%D7%99%D7%A4%D7%93%D7%99%D7%94:%D7%94%D7%9B%D7%94_%D7%90%D7%AA_%D7%94%D7%9E%D7%95%D7%9E%D7%97%D7%94')
    &&
    !window.location.href.includes('https://he.wikipedia.org/w/index.php?title=%D7%95%D7%99%D7%A7%D7%99%D7%A4%D7%93%D7%99%D7%94:%D7%94%D7%9B%D7%94_%D7%90%D7%AA_%D7%94%D7%9E%D7%95%D7%9E%D7%97%D7%94&action=edit')
    &&
    !window.location.href.includes('https://he.wikipedia.org/w/index.php?title=%D7%95%D7%99%D7%A7%D7%99%D7%A4%D7%93%D7%99%D7%94:%D7%94%D7%9B%D7%94_%D7%90%D7%AA_%D7%94%D7%9E%D7%95%D7%9E%D7%97%D7%94&action=submit')
) {
  window.location.href = 'https://he.wikipedia.org/wiki/%D7%95%D7%99%D7%A7%D7%99%D7%A4%D7%93%D7%99%D7%94:%D7%94%D7%9B%D7%94_%D7%90%D7%AA_%D7%94%D7%9E%D7%95%D7%9E%D7%97%D7%94';
}
