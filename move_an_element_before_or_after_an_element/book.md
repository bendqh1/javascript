```js
if ( document.body.classList.contains('.node-553') ) {

	// firstly select the element you want to move something before or after it
	const element_1 = document.querySelector('#block-globalrs-hyshtknyslkbyntrnt');
	
	// secondly select the element you want to move
	const element_2 = document.querySelector('.field--name-field-qtgwryh');
	
	// before or after
	element_1.insertAdjacentElement('beforebegin', element_2);

}
```
