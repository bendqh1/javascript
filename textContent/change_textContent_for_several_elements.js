const [...elements] = document.getElementsByTagName("*");
elements.forEach((element) => {
    if (element.textContent == "X") {
        element.textContent = "Y";
    }
});
