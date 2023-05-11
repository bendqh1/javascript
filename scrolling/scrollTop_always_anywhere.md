```javascript
const myInterval = setInterval( () => {
    window.scrollTo({
        top: 100,
        left: 100,
        behavior: "instant",
    });
}, 0.);

window.setTimeout( () => {
  clearInterval(myInterval);
}, 5000);
```

One may need to use

```javascript
const myInterval = setInterval( () => {
	const [...elements] = document.getElementsByTagName("*");
		elements.forEach((element) => {
	});
}, 0.);
```
