const mediaQuery = `
    <style>
        @media screen and (max-width:850px) {
            #phoneNumberBox {
                display:none;
            }
    </style> 
`;
document.querySelector("body").insertAdjacentHTML("beforeend", mediaQuery);

const parasiteElement = `
    <div id="phoneNumberBox">
        <h3>Call me:</h3>
        <a href='tel:NUMBER'>NUMBER</a>
    </div>
`;

const classNames = document.querySelector("body").classList;
if (
    classNames.contains("c1") ||
    classNames.contains("c2") ||
    classNames.contains("c3")
) {
    document.querySelector("#catlinks-sidebar").remove();
}

if (document.querySelector("#catlinks-sidebar") === null) {
    document.querySelector("#site-navigation").insertAdjacentHTML("afterend", parasiteElement);
} else {
    document.querySelector("#catlinks-sidebar").insertAdjacentHTML("afterend", parasiteElement);
}
