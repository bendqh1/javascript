This is relevant, for example, if we change a [Drupal-Olivero](https://www.drupal.org/project/olivero) page with a `main content block` and `secondary content blocks` underneath it (we change all blocks, then make an exception for the `main content block`).

```js
if ( document.querySelectorAll('.region--content .blcok') ) {
    document.querySelectorAll('.region--content .blcok').forEach( (element)=>{
        element.style.backgroundColor = "red";
    });
};

document.querySelector('.node__content').style.backgroundColor = "white";
```

Easier to do similar actions with [CSS exceptions](https://github.com/bendqh1/css/blob/main/exception.md) especially when comparing `class-having` elements to `id-having` elements.
