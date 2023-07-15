## Traditional

```js
    var newScript = document.createElement("script");
    newScript.setAttribute('type', 'text/javascript');
    newScript.setAttribute('src', 'https://raw.githubusercontent.com/USER/REPOSITORY/main/FILE.js');
    document.head.appendChild(newScript);
```

## fetch and then

```js
var myFetch = fetch('https://raw.githubusercontent.com/USER/REPOSITORY/main/FILE.js');
myFetch.then(function(response) {
  return response.blob();
}).then(function(myBlob) {
  var objectURL = URL.createObjectURL(myBlob);
  var scriptFile = document.createElement("script");
  scriptFile.setAttribute("src", objectURL);
  scriptFile.setAttribute("type", "text/javascript");
  document.head.appendChild(scriptFile);
});
```

[Credit for User:Ogglas from Stack Exchange](https://stackoverflow.com/questions/7650587/using-javascript-to-display-a-blob/44069294#44069294)

## async, fetch and await

```js
async function fetchAndAppend() {
  const resource = await fetch('https://raw.githubusercontent.com/.../FILE.js');
  const blob = await resource.blob();
  
  const objectURL = URL.createObjectURL(blob);
  const scriptFile = document.createElement('script');
  scriptFile.setAttribute('src', objectURL);
  document.head.appendChild(scriptFile);
}

fetchAndAppend().catch(console.error);
```

[Credit for User:James Hibbard from Sitepoint](https://www.sitepoint.com/community/t/javascript-with-then-and-blob-is-a-bit-not-comfortable-for-me-to-work-with-is-there-any-alternative/420809/6?u=bendqh1)

## Notes

Wrapping each one with a `setTimeout()` might be needed.
