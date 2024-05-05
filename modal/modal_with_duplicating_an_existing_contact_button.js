document.body.insertAdjacentHTML('beforeend', `
<div class="modal_wrapper">
    <span class='modal_closing_button'>X</span>
    <div class='modal_message'></div>
  </div>
`)

newStyle = document.createElement("style");
newStyle.type = "text/css";
newStyle.innerHTML +=`
    .modal_wrapper {
        display: flex;
        align-items: center;
        justify-content: center;

        position: fixed;
        left: 50%;
        top: 50%;

        width: 300px;
        height: 300px;
        margin-left: -150px;
        margin-top: -150px;

        z-index: 9999;

        text-align: center;
        font-weight: bold;
        background: yellow;
    }

    .modal_closing_button {
        display: block;

        position: absolute;
        top: 10px;
        right: 10px;

        padding: 25px;

        text-align: right;
        color: #fff;
        font-size: 5em;
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

const myClone = document.querySelector('body > aside > a').cloneNode(true);
document.querySelector('.modal_message').appendChild(myClone)

document.querySelector('.modal_closing_button').addEventListener('click', ()=>{
    document.querySelector('.modal_wrapper').remove();
});
