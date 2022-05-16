newStyle = document.createElement("style");
newStyle.type = "text/css";
newStyle.innerHTML +=`
    .camovb_main_box {
        display: flex;
        flex-direction: row; /* column */
        justify-content: center;
        align-items: center;
        position: sticky;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 2147483647;
        width: 100%;
        height: 60px;
        overflow: hidden;
        text-align: center;
        text-decoration: none;
        font-size: 120%;
        font-weight: bold;
        color: #fff;
        background: #2a4b8d;
        text-shadow: 0 1px 0px rgb(0 0 0 / 18%);
    }

    .camovb_phone_box {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .camovb_phone_link {
        color: white !important;
        text-decoration: none !important; /* Fixes continuing line problem */
    }

    .camovb_phone_icon {
        width: 50px;
        height: 50px;
        vertical-align: middle;
    }

    .camovb_phone_text {
        vertical-align: middle;
    }

    @media screen and (min-width: 992px) {
        .camovb_main_box {
            display: none;
            /* flex-direction: row; */
        }
    }
`;
document.head.appendChild(newStyle);
