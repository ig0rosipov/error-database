const formList = Array.from(document.forms);

const showError = (item) => {
  if (item.id !== 'machine-name') {
    const formField = item.parentElement.parentElement;
    formField.classList.add('form__field_type_error');
  }

  const faultMessage = document.querySelector(`.${item.id}-error`);
  faultMessage.textContent = item.validationMessage;
  faultMessage.classList.add('input-error_displayed');
  item.classList.remove('input_type_correct');
  item.classList.add('input_type_error');

}

const hideError = (item) => {
  if (item.id !== 'new-machine') {
    const formField = item.parentElement.parentElement;
    formField.classList.remove('form__field_type_error');
  }
  const faultMessage = document.querySelector(`.${item.id}-error`);
  faultMessage.textContent = '';
  faultMessage.classList.remove('input-error_displayed');
  item.classList.remove('input_type_error');
  item.classList.add('input_type_correct');
}

const hasInvaldInput = (inputs) => {
  return inputs.some(inputElement => {
      return !inputElement.validity.valid;
  })
}

const toggleButtonState = (form, inputs) => {
  const submitButton = form.querySelector('.form__submit-button');
  if(hasInvaldInput(inputs)) {
    submitButton.setAttribute("disabled", "true");
    submitButton.classList.add('button_disabled');
  } else {
    submitButton.classList.remove('button_disabled');
    submitButton.removeAttribute("disabled");
  }

}

const checkInputValidity = (item) => {
  if (!item.validity.valid) {
    showError(item);
  } else {
    hideError(item);
  }
}

const setValidationListeners = (form) => {
  const inputList = Array.from(form.querySelectorAll('.input'));
  toggleButtonState(form, inputList);
  inputList.forEach(item => {
    item.addEventListener('input', () => {
      checkInputValidity(item);
      toggleButtonState(form, inputList);
    })
  });
}


const enableValidation = () => {
  formList.forEach(form => {
    setValidationListeners(form);
  });
};

enableValidation(formList);
