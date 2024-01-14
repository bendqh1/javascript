// Append CSS from file

const cssElement = document.createElement("link");
cssElement.setAttribute("rel", "stylesheet");
cssElement.setAttribute("type", "text/css");
cssElement.setAttribute("href", "http://localhost/css.css");
document.head.appendChild(cssElement);

// Set form parameters

const productName = document.querySelector('h1').textContent;
const modalClosingButton = document.createElement('h2');
const modalHeading = document.createElement('h2');
const modalStartingMessage = document.createElement('h3');
const modalFormName = document.createElement('input');
const modalFormEmail = document.createElement('input');
const modalFormPhone = document.createElement('input');
const modalFormSubmit = document.createElement('input');

// Add form

document.body.insertAdjacentHTML('beforeend', `
  <div class="modal_wrapper">
  </div>
`)

document.querySelector('.modal_wrapper').appendChild(modalClosingButton);
modalClosingButton.textContent = `X`;

document.querySelector('.modal_wrapper').appendChild(modalHeading);
modalHeading.textContent = `We understand that your are interested in our ${productName} product`;

document.querySelector('.modal_wrapper').appendChild(modalStartingMessage);
modalStartingMessage.textContent = `Please fill in the following fields and send the form`;

document.querySelector('.modal_wrapper').appendChild(modalFormName);
modalFormName.type = "text";

document.querySelector('.modal_wrapper').appendChild(modalFormEmail);
modalFormEmail.type = "email";

document.querySelector('.modal_wrapper').appendChild(modalFormPhone);
modalFormPhone.type = "text";

document.querySelector('.modal_wrapper').appendChild(modalFormSubmit);
modalFormName.type = "submit";

// Allow closing the form and re-start

document.querySelector('.modal_closing_button').addEventListener('click', ()=>{
    document.querySelector('.modal_wrapper').remove();
});

// Force every element to be LTR

document.querySelectorAll('*').forEach( (element)=>{
  element.style.direction = "ltr";
});
