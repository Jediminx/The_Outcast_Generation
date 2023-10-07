const form = document.querySelector("form");
const email = document.getElementById("mail");
const emailError = document.querySelector("#mail + span.error");

email.addEventListener("input", (event) => {
  // Each time the user types something, we check if the
  // form fields are valid.

  if (email.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    emailError.textContent = ""; // Reset the content of the message
    emailError.className = "error"; // Reset the visual state of the message
  } else {
    // If there is still an error, show the correct error
    showError();
  }
});


const thankYouMessage = document.querySelector('#thank-you-message');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  thankYouMessage.classList.add('show');
  setTimeout(() => form.submit(), 2000);
});

form.addEventListener("submit", (event) => {
  if (!email.validity.valid) {
    showError();
    event.preventDefault();
  }
});

function showError() {
  if (email.validity.valueMissing) {
    emailError.textContent = "You need to enter an email address.";
    return false;
  } else if (email.validity.typeMismatch) {
    emailError.textContent = "Entered value needs to be an email address.";
    return false;}
  }
    function showValid(){
if (email.validity.showValid) {
        email.textContent="entered value has been completed@";
  return true;
} 
    }
  emailError.className = "error active";
  
   function MsgAlert()
    {          
       var value    =   document.getElementById('abc').value;
       alert(value);       
    }   
