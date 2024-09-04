document.body.insertAdjacentHTML('beforeend', `
	<aside class="cbntphone_wrapper">
		<a class="cbntphone_link" href="tel:NUMBER">
			<img class="cbntphone_icon" src="https://upload.wikimedia.org/wikipedia/commons/d/d4/Phone_communication_icon.png"></img>
		</a>
	</aside>
`)

newStyle = document.createElement("style");
newStyle.type = "text/css";
newStyle.innerHTML +=`
    .cbntphone_wrapper {
	display: block;
	position: fixed;
	bottom: 25px;
	left: 25px;
	z-index: 2147483647;
	text-decoration: none;
	font-size: 120%;
	font-weight: bold;
	color: #fff;
    }

    .cbntphone_icon {
	width: 50px;
	height: 50px;
    }
`;
document.head.appendChild(newStyle);
