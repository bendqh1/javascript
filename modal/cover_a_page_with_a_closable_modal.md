## Way 1 with targeting the modal object itself

```js
document.body.insertAdjacentHTML('beforeend', `
<div class="modal_wrapper">
    <span class="modal_closing_button">X</span>
    <div class="modal_message">
    </div>
  </div>
`)

newStyle = document.createElement("style");
newStyle.type = "text/css";
newStyle.innerHTML +=`
  .modal_wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 9999;
      font-weight: bold;
      background: green;
  }

  .modal_closing_button {
    display: block;
    position: absolute;
    text-align: right;
    color: #fff;
    font-size: 5em;
    top: 1em;
    right: 1em;
  }

  .modal_message {
      padding: 25px 25px 0 25px;
      margin: 0 0 10px 0;
      font-size: 20px;
      display: block;
      color: #fff;
  }
`;

document.head.appendChild(newStyle);

document.querySelector('.modal_wrapper').addEventListener('click', ()=>{
    document.querySelector('.modal_wrapper').remove();
});
```

### We could also do this in the end but it be longer and slightly slower perforemencewise

```js
document.querySelector('.modal_wrapper').addEventListener('click', ()=>{
    document.querySelector('.modal_closing_button').parentNode.remove();
});
```

## Way 2 with targeting the window object

```js
document.body.insertAdjacentHTML('beforeend', `
<div class="modal_wrapper">
    <span class="modal_closing_button">X</span>
    <div class="modal_message">
    </div>
  </div>
`)

newStyle = document.createElement("style");
newStyle.type = "text/css";
newStyle.innerHTML +=`
  .modal_wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 9999;
      font-weight: bold;
      background: green;
  }

  .modal_closing_button {
    display: block;
    position: absolute;
    text-align: right;
    color: #fff;
    font-size: 5em;
    top: 1em;
    right: 1em;
  }

  .modal_message {
      padding: 25px 25px 0 25px;
      margin: 0 0 10px 0;
      font-size: 20px;
      display: block;
      color: #fff;
  }
`;

document.head.appendChild(newStyle);

window.addEventListener('click', ()=>{
    document.querySelector('.modal_closing_button').parentNode.remove();
},
{ once: true} // prevent "Uncaught TypeError: Cannot read properties of null (reading ‘parentNode’)" due to the event listener no longer finding its associated element.
);
```
