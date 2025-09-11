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

Clone an element.

```js
const myClone = document.querySelector('.b').cloneNode(true);
document.querySelector('.a').appendChild(myClone);
```
