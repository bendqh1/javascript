I know two types of web storage:

1. **Local Storage** AKA Browser History Storage
1. **Session Storage** AKA Window Storage and possibly also any new window derivatized from that window

Local Storage AKA **Browser History Storage** will persist until the browser's history is cleared.

Session storage or **Window Storage and possibly also any new window derivatized from that window** will persist as long as any relevant window stays opened.

Local Storage is an API with commands like:

```js
localStorage.setItem('first_example', 0);
localStorage.setItem('second_example', 'A');
localStorage.getItem('first_example');
localStorage.getItem('second_example');
localStorage.removeItem('first_example');
localStorage.removeItem('second_example');
localStorage.getItem('first_example');
localStorage.getItem('second_example');
localStorage.setItem('first_example', 0);
localStorage.setItem('second_example', 'A');
console.log(localStorage);
localStorage.clear()

const letters = ['A', 'B', 'C', 'D', 'E']
localStorage.setItem('letters', letters)
localStorage.getItem('letters');
localStorage.removeItem('letters');
```

As can be noticed in a web browser console, we only get strings from LocalStorage; not numbers and not arrays.

We can use `parseInt` method to turn a relevant string into a number.

The `storage` event is fired each time a strorage is modified, either on browser session or on window session.

Any web browser web development tool has a storage tab to check stored data.
