## Browser components that we can work on with JavaScript

* Browser
* Browser window
* Document (and its javascript)
* DOM tree (and its CSS)
* HTML elements
* Pseudo HTML elements (**possibly**)

## DOM nodes

* An HTML element
* An HTML attribute and possibly a value for that attribute
* An HTML comment

## Main ways to get output via JavaScript

```js
alert();
console.log();
document.write();
document.cookie // output all cookies;
```

Fourth and Fifth ways, printign from a printer.

```js
window.print();

const x = document.write(document.cookie);
window.print(x);
```

## Replace an HTML structure in another (very dangerous and should generally be avoided)

```js
document.querySelector('.view-header').innerHTML = "<H1>NEW_textContent_COMES_HERE</H1>";
```
