Indicate moving from webpage `A` to webpage `B`.

```js
window.addEventListener('load', () => {
	if (
		window.location.href.includes('A')
		||
		window.location.href.includes('B')
	) {
		document.body.insertAdjacentHTML('beforeend', `
		<div class="my_unique_modal_class"></div>
		`)

		newStyle = document.createElement("style");
		newStyle.type = "text/css";
		newStyle.innerHTML +=`
			.my_unique_modal_class {
				display: flex;
				align-items: center;
				justify-content: center;
				text-align: center;
				position: fixed;
				top: 0;
				right: 0;
				bottom: 0;
				left: 0;
				width: 100%;
				height: 100%;
				z-index: 9999;
				font-weight: bold;
				background: black;
			}
		`;

		document.head.appendChild(newStyle);

		window.setTimeout( () => {
			document.querySelector('.my_unique_modal_class').remove();
		}, 1000 );
	}
});
```
