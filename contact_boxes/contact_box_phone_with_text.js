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
	background: linear-gradient(-160deg,#2494db 0%,#0d7ab8 78.66%);
    }
    .cbwtphone_link {
    	display: inline;
    	text-decoration: none; /* Fixes continuing line problem */
    }
    .cbwtphone_icon {
    	display: inline;
        width: 50px;
        height: 50px;
	vertical-align: middle;
	filter: invert(1);
    }
    .cbwtphone_text {
    	display: inline;
    	vertical-align: middle;
	color: #fff;
    }
`;
document.head.appendChild(newStyle);
