// arrays
// Field configurations
const fields = [
  { id: 'fname', regex: /^.{2,}$/, message: 'Fornavn skal være mindst 2 karakterer.' },
  { id: 'lname', regex: /^.{2,}$/, message: 'Efternavn skal være mindst 2 karakterer.' },
  { id: 'address', regex: /^.{5,}$/, message: 'Adresse skal være mindst 5 karakterer.' },
  { id: 'postalcode', regex: /^[0-9]{4}$/, message: 'Postnummer skal kun indeholde tal.' },
  { id: 'email', regex: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/, message: 'Indtast en gyldig email.' },
];
// Get the userForm element and add an event listener to prevent the default form submission
document.getElementById('userForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Global variables
  let isValid = true;
  let errorMessages = [];
  let errorMessagesList = document.getElementById('errorMessages');
  let errorFooter = document.getElementById('errorFooter');
  let thankYouMessage = document.getElementById('thankYouMessage');

  // Clear previous error messages and reset states
  function clearErrors() {
    document.getElementById('errorMessages').innerHTML = '';
    document.querySelectorAll('input').forEach((input) => {
      input.classList.remove('error-border', 'success-border');
    });
  }

  // validation function
  function validateForm(id, regex, message) {
    let input = document.getElementById(id);
    console.log(input.value);
    if (!regex.test(input.value)) {
      input.classList.add('error-border');
      console.log(message);
      errorMessages.push(message);
      isValid = false;
    } else {
      input.classList.add('success-border');
      input.classList.remove('error-border');
      console.log(`${id} - Validering korrekt`);
    }
  }

  // validate fields
  fields.forEach((field) => {
    validateForm(field.id, field.regex, field.message);
  });

  // if valid hide form, show ty message
  if (isValid) {
    document.getElementById('userForm').style.display = 'none';
    thankYouMessage.style.display = 'block';
    errorFooter.style.display = 'none';
  } else {
    // if not valid, show error messages
    errorMessages.forEach((message) => {
      let li = document.createElement('li');
      li.appendChild(document.createTextNode(message));
      errorMessagesList.appendChild(li);
    });
    console.log('form has errors');
  }
});
