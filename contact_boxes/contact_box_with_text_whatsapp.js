document.body.insertAdjacentHTML('beforeend', `
	<aside class="cbwtphone_wrapper">
		<a class="cbwtphone_link" href="https://wa.me:NUMBER_WITHOUT_LEADS">
			<span class="cbwtphone_text">שיחת וואטסאפ</span>
			<img class="cbwtphone_icon" src="https://en.wikipedia.org/wiki/WhatsApp#/media/File:WhatsApp.svg"></img>
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
