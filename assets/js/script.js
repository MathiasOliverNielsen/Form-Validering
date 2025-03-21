// Get the userForm element and add an event listener to prevent the default form submission
document.getElementById('userForm').addEventListener('submit', function (e) {
  e.preventDefault();
});

// Global variables
let isValid = true;
let errorMessages = [];
let errorMessagesList = document.getElementById('errorMessages');
let errorFooter = document.getElementById('errorFooter');
let thankYouMessage = document.getElementById('thankYouMessage');

// clear the error messages in list
errorMessagesList.innerHTML = '';

// reset error state
document.querySelectorAll('input').forEach((input) => input.classList.remove('error-border'));

// validation function
function validateForm(id, regex, message) {
  let input = document.getElementById(id);

  if (!regex.test(input.value)) {
    input.classList.add('error-border');
    console.log(message);
    errorMessages.push(message);
    isValid = false;
  }
}
