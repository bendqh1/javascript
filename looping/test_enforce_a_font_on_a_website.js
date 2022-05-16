document.body.style.fontFamily = "arial";

// Or: //

document.querySelectorAll("*").forEach( (e)=>{
    e.style.fontFamily = "arial";
});

// Don't put "body" instead "*" otherwise non direct children of the body won't be changed;