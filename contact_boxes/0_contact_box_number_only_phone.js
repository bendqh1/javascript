document.body.insertAdjacentHTML('beforeend', `
	<aside class="detailedphoningbox_wrapper">
		<a class="detailedphoningbox_link" href="tel:NUMBER">NUMBER</a>
	</aside>
`)

newStyle = document.createElement("style");
newStyle.type = "text/css";
newStyle.innerHTML +=`
    .detailedphoningbox_wrapper {
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
`;
document.head.appendChild(newStyle);
