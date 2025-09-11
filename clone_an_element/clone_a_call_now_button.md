Create and append an element inside which a clone will appear

```js
document.body.insertAdjacentHTML('beforeend', `
	<aside class="a">
	</aside>
`)
```

Clone an element

```js
const myClone = document.querySelector('.b').cloneNode(true);

// Append the clone into the created-appended element above

document.querySelector('.a').appendChild(myClone);
```
