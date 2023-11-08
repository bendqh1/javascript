window.setTimeout(()=>{
    if (window.location.href.includes('layout')) {
        newStyle = document.createElement("style");
        newStyle.type = "text/css";
        newStyle.innerHTML +=`
        #drupal-off-canvas-wrapper {
            width: 600px !important;
        }
        `;
        document.head.appendChild(newStyle);
    }
}, 5000);
