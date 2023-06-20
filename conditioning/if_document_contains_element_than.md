Three ways.

```js
if ( document.querySelector('#srchfrm')) {
    alert("Hi");
}
```

```js
if ( document.body.contains(document.querySelector('#srchfrm') ) ) {
    alert("Hi");
}
```

```js
document.querySelectorAll('*').forEach((element) => {
    if ( element.querySelector('#srchfrm > div.core.search-btn-on-left.enhance4') ) {
        alert("Hi");
    }
});
```
