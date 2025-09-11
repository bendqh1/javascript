Clone an element in the same webpage

```html
<p class="myNewClone"></p>
<script>
const i = setInterval(() => {
  const s = document.querySelector('.xyz');
  const t = document.querySelector('.myNewClone');
  if (s && t) { t.appendChild(s.cloneNode(true)); clearInterval(i); }
}, 100);
</script>
```

Create and append an element inside which a clone will appear.

```js
document.body.insertAdjacentHTML('beforeend', `
	<aside class="a">
	</aside>
`)
```

Clone an element.

```js
const myClone = document.querySelector('.b').cloneNode(true);
document.querySelector('.a').appendChild(myClone);
```
