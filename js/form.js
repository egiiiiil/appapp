const registerForm = document.getElementById('register-form');
console.log(registerForm);

generateRequiredErrorMessage = (formField) => {
  let requiredErrorMessage = '';
  let inputField = document.getElementById(formField);

  if (inputField && isStringEmpty(inputMessage)) {
    let fieldName = formField.replace('input', '')
    requiredErrorMessage = `${fieldName} is required<br>`;
  }
  return requiredErrorMessage;
} 

isStringEmpty = (field) => field.value.trim() === ''; 

registerForm.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const formMessages     = document.getElementById('messages');
  const gridCheck        = document.getElementById('gridCheck');



  let errorMessages = '';
  let requiredFormFields = [
    'inputName',
    'inputEmail',
    'inputMessage'
  ];

  for (let formField of requiredFormFields) {
    errorMessages += generateRequiredErrorMessage(formField)
}

if (gridCheck.checked !== true) {
    errorMessages += 'Must agree to the GDPR handeling of your information<br>';
}

if (errorMessages) {
    formMessages.innerHTML = `
        <div class="alert alert-danger" role="alert">
            ${errorMessages}
        </div>
    `;
} else {
    formMessages.innerHTML = `
        <div class="alert alert-success" role="alert">
            Form submitted. You are now registered!
        </div>
    `;
}
});
