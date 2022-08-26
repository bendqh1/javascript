let viewportWidth = window.innerWidth || document.documentElement.clientWidth;
if (viewportWidth < 480) {
    document.body.insertAdjacentHTML('beforeend', `
    <aside class="all_textual_cnb_wrapper">
    	<a class="all_textual_cnb_link" href="tel:NUMBER">להתקשר אלי ✆</a>
    </aside>
    `)
    
    newStyle = document.createElement("style");
    newStyle.type = "text/css";
    newStyle.innerHTML +=`
    	.all_textual_cnb_wrapper {
    		display: flex;
    		align-items: center;
    		justify-content: center;
    		position: fixed;
    		right: 0;
    		bottom: 0;
    		left: 0;
    		z-index: 9999;
			height: 60px /* As this button is 60px, the footer's min-height should be 120px*/
    		padding: 0 0 5px 0; /* Fixes a strange dis-centralization maybe associated with MediaWiki rendering */
    		font-size: 36px;
    		font-weight: bold;
    		background: #149714;
    	}
    
    	.all_textual_cnb_link {
    		color: #fff;
    	}
    	.all_textual_cnb_link:hover {
    		color: #fff;
    		text-decoration: none;
    	}
    	.all_textual_cnb_link:active {
    		color: red !important; /* !important here fixed a collide with MediaWiki */
    	}
    	.all_textual_cnb_link:focus {
    		color: #fff;
    	}
    `;
    document.head.appendChild(newStyle);
	document.querySelector("#mw-footer-container").style.minHeight = "120px";
	
	// Remove this entire structure for contact webpage so it won't interrupt filling a form and also won't annoy a user:
	if (document.body.classList.contains("page-יצירת_קשר")) {
        document.querySelector(".all_textual_cnb_wrapper").remove();
    }
}
