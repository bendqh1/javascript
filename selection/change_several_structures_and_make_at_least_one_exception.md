This is relevant, for example, if we change a [Drupal-Olivero](https://www.drupal.org/project/olivero) page with a `main content block` and `secondary content blocks` underneath it (we change all blocks, then make an exception for the `main content block`).

```js
if ( document.querySelector('.site-main') ) {
    if ( document.querySelector('.region--content') ) {
        document.querySelectorAll('.region--content .block').forEach( (element)=>{
            element.style.backgroundColor = "red";
        })
    }
}

document.querySelector('.node__content').style.backgroundColor = "white";
```
