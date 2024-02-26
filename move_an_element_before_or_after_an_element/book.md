```js
const element_1 = document.querySelector('#block-globalrs-hyshtknyslkbyntrnt'); // firstly select the element you want to move something before or after it
const element_2 = document.querySelector('.field--name-field-qtgwryh'); // secondly select the element you want to move

element_1.insertAdjacentElement('beforebegin', element_2); // before or after
```
