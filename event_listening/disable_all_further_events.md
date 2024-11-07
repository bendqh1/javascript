Target some common events and prevent them from this point in time onwards, in a given webpage.

First we prevent the events' defautlt behavior and then any further propogation of these events (in case they should be propogated after the loading of the page).

```js
const events = ['mousedown', 'mouseup', 'scroll', 'touchstart', 'touchend', 'submit', 'focus', 'blur', 'input', 'change', 'keypress', 'keydown', 'keyup'];

events.forEach(eventType => {
  document.addEventListener(eventType, function(event) {
    event.preventDefault();
    event.stopPropagation();
  }, true);
});
```
