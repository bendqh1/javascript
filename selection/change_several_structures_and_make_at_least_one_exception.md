```js
if ( document.querySelector('.site-main') ) {
    if ( document.querySelector('region--content') ) {
        document.querySelectorAll('.region--content .block').forEach( (element)=>{
            element.style.backgroundColor = "red";
        })
    }
}

document.querySelector('.node__content').style.backgroundColor = "white";
```
