const [...elements] = document.getElementsByTagName("*");
elements.forEach((element) => {
    if (element.textContent == "someTextContent") {
        element.style.display = 'none';
    }
});
