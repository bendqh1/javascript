document.body.insertAdjacentHTML('beforeend', `
	<aside class="cbwtphone_wrapper">
		<a class="cbwtphone_link" href="tel:NUMBER">
			<span class="cbwtphone_text">התקשרו עכשיו</span>
			<img class="cbwtphone_icon" src="https://upload.wikimedia.org/wikipedia/commons/d/d4/Phone_communication_icon.png"></img>
		</a>
	</aside>
`)

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
	background: #149714;
    }
    .cbwtphone_link {
    	text-decoration: none; /* Fixes continuing line problem */
    }
    .cbwtphone_icon {
        width: 50px;
        height: 50px;
	vertical-align: middle;
    }
    .cbwtphone_text {
    	vertical-align: middle;
	color: #fff;
    }
`;
document.head.appendChild(newStyle);
