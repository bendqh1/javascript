```js
window.setInterval( ()=>{
    const elements = document.querySelectorAll('*');
    elements.forEach(element => {
        const zIndex = window.getComputedStyle(element).zIndex;
        if (zIndex !== 'auto' && parseInt(zIndex) > 2) {
            element.remove();
        }
    });
}, 1000);
```
