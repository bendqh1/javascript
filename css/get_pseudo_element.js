const element = document.querySelector('#x');
var style_before = window.getComputedStyle(element,':before')
var style_after = window.getComputedStyle(element,':after')
var content = style_before['content'];
var content = style_after['content'];
