window.setTimeout(()=>{
    document.body.insertAdjacentHTML('beforeend', `
    <div class='modal_overlay'>
        <div class='modal_container'>
            <div class='modal_closing_button'>X</div><br>
            <h2 dir="rtl">צור עימי קשר בכל עת:</h2>
            <a href="tel:000-000-000">000-000-000</a>
            <div class='modal_message'></div>
        </div>
    </div>
    `)
    
    newStyle = document.createElement("style");
    newStyle.type = "text/css";
    newStyle.innerHTML +=`
        .modal_overlay {
            display: block;
            z-index: 9999;

            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;

            width: 100%;
            height: 100%;

            overflow: auto;

            background: rgba(0,0,0,0.5);
        }

        .modal_container {
            display: block;
            z-index: 9999;
    
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
    
            box-sizing: border-box;
            padding: 25px;
            text-align: center;
    
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

        .modal_message a {
            color: #000 !important;
        }

        .modal_message a:hover {
            color: var(--actionColor) !important;
        }
    `;
    
    document.head.appendChild(newStyle);
    document.querySelector('.modal_message').appendChild(myClone);
}, 1000);

window.setTimeout(()=>{
    document.querySelector('.modal_closing_button').addEventListener('click', ()=>{
        document.querySelector('.modal_overlay').remove();
    });
}, 1001);

/*
We put the closing procedure in a different setTimeout because we can't use it before the first setTimeout has finished.
Also, note the 1001 milliseconds in the second setTimeout instead of 1000 milliseconds in the first setTimeout. 
*/
