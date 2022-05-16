const category_box = document.querySelector("#catlinks-sidebar");
const [...atLeastOneElement] = document.getElementsByTagName("*");
atLeastOneElement.forEach((element) => {
    if (element.textContent == "קטגוריות מוסתרות") {
        category_box.style.display = 'none';
    }
});
