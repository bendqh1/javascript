## Effect each `<tr>` by a the content of its `<td>`.

### Way one

```js
window.setInterval(()=>{
if (window.location.href.includes('https://toksoutheastasia.com/admin/content')) {
    document.querySelectorAll('*').forEach((element) => {
        if (element.textContent == "x") {
            element.parentElement.style.background = "yellow"
        };
    });
}
}, 1);
```

A `<tr>` is always a parent of one or more `<td>` element set; a `<td>` is never the parent element of a `<td>` underneath it. 

### Way two

```js
window.setInterval(()=>{
if (window.location.href.includes('https://toksoutheastasia.com/admin/content')) {
    document.querySelectorAll('*').forEach((element) => {
        if (element.textContent == "x") {
            element.closest("tr").style.background = "yellow"
        };
    });
}
}, 1);
```
