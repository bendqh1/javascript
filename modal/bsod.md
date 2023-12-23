Get a Blue Screen of Death (BSOD) with JavaScript:

```js
document.querySelectorAll('img, video').forEach( (element)=>{
    element.remove();
});

someColor = "blue"
document.querySelectorAll('*').forEach( (element)=>{
    element.style.setProperty('background', someColor, 'important');
    element.style.color = someColor;
});

document.body.innerHTML = '';
```
