// Allow closing the form and re-start

document.querySelector('.modal_closing_button').addEventListener('click', ()=>{
    document.querySelector('.modal_wrapper').remove();
});

// Tansfer user to success page

let formToWorkOn = document.querySelector(".modal_wrapper");
formToWorkOn.addEventListener("submit", function(event) {
    event.preventDefault();
    window.location.href="success.html";
});

