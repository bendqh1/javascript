The following code can be added to behavior.js

```js
document.body.insertAdjacentHTML('beforeend', `
    // HTML COMES HERE
`)

newStyle = document.createElement("style");
newStyle.type = "text/css";
newStyle.innerHTML +=`
    // CSS COMES HERE
`;
document.head.appendChild(newStyle);
```