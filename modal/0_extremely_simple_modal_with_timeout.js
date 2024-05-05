window.setTimeout(()=>{
    document.body.insertAdjacentHTML('beforeend', `
    <div class='modal_wrapper'>
        <div class='modal_closing_button'>X</div><br>
        <div class='modal_message'>Contact me at any time: </div><br>
        <div>
            <a href="tel:000-000-000" class='modal_message'>000-000-000</a>
        </div>
    </div>
    `)
    
    newStyle = document.createElement("style");
    newStyle.type = "text/css";
    newStyle.innerHTML +=`
        .modal_wrapper {
            display: block;
    
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
    
            box-sizing: border-box;
            padding: 25px;
            text-align: center;
            z-index: 9999;
    
            font-weight: bold;
            background: yellow;
        }
    
        .modal_closing_button {
            display: block;
    
            text-align: right;
    
            font-size: 50px;
            color: blue;
        }
    
        .modal_message {
            display: block;
    
            text-align: center;
            
            font-size: 25px;
            color: blue;
        }
    `;
    
    document.head.appendChild(newStyle);
    
    document.querySelector('.modal_closing_button').addEventListener('click', ()=>{
        document.querySelector('.modal_wrapper').remove();
    });
}, 5000);
