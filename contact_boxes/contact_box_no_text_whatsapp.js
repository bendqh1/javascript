document.body.insertAdjacentHTML('beforeend', `
	<aside class="jcb_button">
		<a class="jcb_phone_link" href="https://wa.me/NUMBER">
			<img class="jcb_phone_icon" src="https://en.wikipedia.org/wiki/WhatsApp#/media/File:WhatsApp.svg"></img>
		</a>
	</aside>
`)

newStyle = document.createElement("style");
newStyle.type = "text/css";
newStyle.innerHTML +=`
    .jcb_button {
        display: block;
        position: fixed;
        bottom: 22.5px;
        left: 22.5px;
        z-index: 2147483647;
        width: 10%;
        height: 60px;
        text-align: center;
        text-decoration: none;
        font-size: 120%;
        font-weight: bold;
        color: #fff;
        background: #2a4b8d;
        text-shadow: 0 1px 0px rgb(0 0 0 / 18%);
    }
    .jcb_phone_link {
        color: white !important;
        text-decoration: none !important; /* Fixes continuing line problem */
    }
    .jcb_phone_icon {
        width: 50px;
        height: 50px;
        vertical-align: middle;
    }
    @media screen and (min-width: 992px) {
        .jcb_button {
            display: none;
            /* flex-direction: row; */
        }
    }
`;
document.head.appendChild(newStyle);
