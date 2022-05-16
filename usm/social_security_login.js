window.setInterval( () => {
    const icn = document.querySelector("#XXX");
    icn.value = "xxx"
    icn.dispatchEvent(new Event('change'));

    const username = document.querySelector("#YYY");
    username.value = "yyy"
    username.dispatchEvent(new Event('change'));

    const email = document.querySelector("#ZZZ");
    email.value = "zzz"
    email.dispatchEvent(new Event('change'));
}, 5000);
