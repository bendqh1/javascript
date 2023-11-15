# Effect each `<tr>` by a the content of its `<td>`.

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

A `<tr>` is always a parent of one or more `<td>` element set.<br>
A `<td>` is never the parent element of a `<td>` underneath it.

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
