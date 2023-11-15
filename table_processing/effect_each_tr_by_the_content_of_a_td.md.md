# Effect each `<tr>` by the content of a `<td>`

* A `<tr>` is always a parent of one or more `<td>` element set, hence a `<td>` is never the parent element of a `<td>` underneath it.

## Way one

```js
if (window.location.href.includes('x')) {
    document.querySelectorAll('*').forEach((element) => {
        if (element.textContent == "x") {
            element.parentElement.style.background = "yellow"
        };
    });
}
```

## Way two

```js
if (window.location.href.includes('x')) {
    document.querySelectorAll('*').forEach((element) => {
        if (element.textContent == "x") {
            element.closest("tr").style.background = "yellow"
        };
    });
}
```
