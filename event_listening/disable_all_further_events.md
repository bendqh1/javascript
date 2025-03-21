Target some common events and prevent them from this point in time onwards, in a given webpage.

First we prevent the events' defautlt behavior and then any further propogation.

```js
const nonPassiveEvents = [
  // Passive events such as scroll and touchmove should not be included.
  'mousedown',
  'mouseup',
  'wheel',
  'touchstart',
  'touchend',
  'submit',
  'focus',
  'blur',
  'input',
  'change',
  'keypress',
  'keydown',
  'keyup'
];

nonPassiveEvents.forEach(eventType => {
  document.addEventListener(eventType, function(event) {
    event.preventDefault();
    event.stopPropagation();
  }, true);
});
```

You may want to try:

```js
const observer = new MutationObserver(() => {
  document.querySelectorAll('*').forEach(element => {
    element.style.animation = 'none';
    element.style.animationPlayState = 'paused';
    element.style.transition = 'none';
  });
});

observer.observe(document.body, { attributes: true, childList: true, subtree: true });
```
