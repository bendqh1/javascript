const timesRun = 0;
const myInterval = setInterval(function(){
    timesRun += 1;
    if(timesRun === 60){
        clearInterval(myInterval);
    }
    const [...elements] = document.getElementsByTagName("*");
    elements.forEach((element) => {
    element.scrollTo(0, element.scrollHeight)
});
}, 2000);

// For all THESE elements, set ALL_ELEMENTS, then FOREACH element do;
