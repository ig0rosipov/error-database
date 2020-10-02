const formList = Array.from(document.forms);

const selectorsObject = {
  errorField: 'form__field_type_error',
  displayedError: 'input-error_displayed',
  correctInput: 'input_type_correct',
  errorInput: 'input_type_error',
  submitButton: '.form__submit-button',
  disabledButton: 'button_disabled',
  input: '.input'
}

const showError = (item, selectors) => {
  if (item.id !== 'machine-name') {
    const formField = item.parentElement.parentElement;
    formField.classList.add(selectors.errorField);
  }

  const faultMessage = document.querySelector(`.${item.id}-error`);
  faultMessage.textContent = item.validationMessage;
  faultMessage.classList.add(selectors.displayedError);
  item.classList.remove(selectors.correctInput);
  item.classList.add(selectors.errorInput);
}

const hideError = (item, selectors) => {
  if (item.id !== 'machine-name') {
    const formField = item.parentElement.parentElement;
    formField.classList.remove(selectors.errorField);
  }
  const faultMessage = document.querySelector(`.${item.id}-error`);
  faultMessage.textContent = '';
  faultMessage.classList.remove(selectors.displayedError);
  item.classList.remove(selectors.errorInput);
  item.classList.add(selectors.correctInput);
}

const hasInvaldInput = (inputs) => {
  return inputs.some(inputElement => {
      return !inputElement.validity.valid;
  })
}

const toggleButtonState = (form, inputs, selectors) => {
  const submitButton = form.querySelector(selectors.submitButton);
  if(hasInvaldInput(inputs)) {
    submitButton.setAttribute("disabled", "true");
    submitButton.classList.add(selectors.disabledButton);
  } else {
    submitButton.classList.remove(selectors.disabledButton);
    submitButton.removeAttribute("disabled");
  }

}

const checkInputValidity = (item, selectors) => {
  if (!item.validity.valid) {
    showError(item, selectors);
  } else {
    hideError(item, selectors);
  }
}

const setValidationListeners = (form, selectors) => {
  const inputList = Array.from(form.querySelectorAll(selectors.input));
  toggleButtonState(form, inputList, selectors);
  inputList.forEach(item => {
    item.addEventListener('input', () => {
      checkInputValidity(item, selectors);
      toggleButtonState(form, inputList, selectors);
    })
  });
}


const enableValidation = (forms, selectors) => {
  forms.forEach(form => {
    setValidationListeners(form, selectors);
  });
};

enableValidation(formList, selectorsObject);
