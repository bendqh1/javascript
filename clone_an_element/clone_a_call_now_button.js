// Clone an element

const myClone = document.querySelector('.EXISTING_ELEMENT_TO_CLONE').cloneNode(true);

// Create and append an element inside which the clone will appear

document.body.insertAdjacentHTML('beforeend', `
	<aside class="my_new_call_now_button">
	</aside>
`)

// Append the clone into the created-appended element

document.querySelector('.my_new_call_now_button').appendChild(myClone);

// Create style to the new element in which the clone appears

newStyle = document.createElement("style");
newStyle.type = "text/css";
newStyle.innerHTML +=`
    .my_new_call_now_button {
        display: flex;
	    align-items: center;
	    justify-content: center;
        position: fixed;
        right: 0;
	    bottom: 0;
        left: 0;
        z-index: 2147483647;
        text-decoration: none;
        font-size: 120%;
        font-weight: bold;
	    background: linear-gradient(-160deg,#2494db 0%,#0d7ab8 78.66%);
    }

    .my_new_call_now_button a {
        color: #fff
    }
    .my_new_call_now_button a:hover {
        color: #000 !important;
    }
    .my_new_call_now_button a:focus {
        color: yellow;
    }
    .my_new_call_now_button a:active {
        color: yellow;
    }
    .my_new_call_now_button a:visited {
        color: #fff;
    }
`;

// Append style to the new element in which the clone appears

document.head.appendChild(newStyle);
