```js
headingText ="Ingredients";
document.querySelectorAll('h2').forEach( (element)=>{
    if (element.textContent == headingText) {
        element.scrollIntoView({
            behavior: 'smooth'
        });
    }
});
```

CSS solution requires ownership of the webpage:

* https://www.sitepoint.com/community/t/scroll-to-the-first-markup-with-a-certain-text/433893/1
