## Browser components that we can work on with JavaScript

* Browser
* Browser window
* Document (and its javascript)
* DOM tree (and its CSS)
* HTML elements
* Pseudo HTML elements (**possibly**)

## `const` versus `let`

Both `const` and `let` are parameters.

* `const` holds value/s that principally shouldn't change.
* `let` holds value/s that principally should change, for example:

`const`:

```js
const allTableRowsExceptTableHeading = document.querySelectorAll('tr.odd, tr.even');
```

`let`:

```js
let baseNumber = 1;
document.querySelectorAll('.numberCell').forEach((element)=>{
    element.innerHTML = `<span>${baseNumber++}</span>`;
});
```

## DOM nodes

* An HTML element
* An HTML attribute and possibly a value for that attribute
* An HTML comment

`textContent` is not a node but special property.

## Main ways to get output via JavaScript

```js
alert();
console.log();
document.write();
document.cookie // output all cookies
```

Fourth and Fifth ways, printing from a printer.

```js
window.print();

const x = document.write(document.cookie);
window.print(x);
```

To store data quickly:

```js
const person = prompt('Please enter your name'); // input and output
console.log(person);
```

## Replace an HTML structure in another (very dangerous and should generally be avoided)

```js
document.querySelector('.view-header').innerHTML = "<H1>NEW_textContent_COMES_HERE</H1>";
```
