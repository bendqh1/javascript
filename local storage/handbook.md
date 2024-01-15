Currently there are two elementary ways to store data frontendly with JavaScript:

1. **Session Storage** which is a special memory partition for a current browser window-tab and possibly also any new window-tab derivatized from that window-tab.
1. **Local Storage** which is a special memory partition in a web browser.

Session Storage will persist as long as any relevant window-tab stays opened.

Local Storage will persist until it is cleared from the web browser's history.

We can query either of these elementary frontend data storages with an API.

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

## Notes

* As can be noticed in a web browser console, we only get strings from LocalStorage; not numbers and not arrays.
* We can use `parseInt` method to turn a relevant string into a number.
* The `storage` event is fired each time a strorage command is given (either about browser session or about window session).
* Any web browser web development tool has a storage tab to check stored data.
