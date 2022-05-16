// ==UserScript==
// @name         blocksite
// @match        *://*.example.com/*

// Block websites in Hebrew:
const hebrewLetters = ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח', 'ט', 'י', 'כ', 'ל', 'מ', 'נ', 'ס', 'ע', 'פ', 'צ', 'ק', 'ר', 'ש', 'ת'];
const bodyContent = document.body.textContent;
if (hebrewLetters.some(letter => bodyContent.includes(letter))) {
    window.open("https://google.com/", "_self");
}
