// Clone an element

const myClone = document.querySelector('.EXISTING_ELEMENT_TO_CLONE').cloneNode(true);

// Create and append an element inside which the clone will appear

document.body.insertAdjacentHTML('beforeend', `
	<aside class="cbwtphone_wrapper">
	</aside>
`)

// Append the clone into the created-appended element

document.querySelector('.cbwtphone_wrapper').appendChild(myClone);

// Create style to the new element in which the clone appears

newStyle = document.createElement("style");
newStyle.type = "text/css";
newStyle.innerHTML +=`
    .cbwtphone_wrapper {
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

    .cbwtphone_wrapper a {
        color: #fff
    }
    .cbwtphone_wrapper a:hover {
        color: #000 !important;
    }
    .cbwtphone_wrapper a:focus {
        color: yellow;
    }
    .cbwtphone_wrapper a:active {
        color: yellow;
    }
    .cbwtphone_wrapper a:visited {
        color: #fff;
    }
`;

// Append style to the new element in which the clone appears

document.head.appendChild(newStyle);
