This is relevant, for example, if we change a [Drupal-Olivero](https://www.drupal.org/project/olivero) page with a `main content block` and `secondary content blocks` underneath it (we change all blocks, then make an exception for the `main content block`).

```js
document.querySelectorAll('.region--content .block').forEach( (element)=>{
    element.style.backgroundColor = "red";
});

document.querySelector('#block-globalrs-content').style.backgroundColor = "#fff";
```

Easier to do similar actions with [CSS exceptions](https://github.com/bendqh1/css/blob/main/exception.md) especially when comparing `class-having` elements to `id-having` elements.
