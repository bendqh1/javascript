document.querySelectorAll('img[src*="gif"]').forEach((element)=>{
    element.remove();
});
// From all elements, remove each `img` with `src` of `gif`.
