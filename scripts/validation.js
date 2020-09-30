const inputList = Array.from(document.querySelectorAll('.input'));


const showError = (item) => {
  const formField = item.parentElement.parentElement;
  const errorMessage = document.querySelector(`.${item.id}-error`);
  errorMessage.textContent = item.validationMessage;
  errorMessage.classList.add('input-error_displayed');
  item.classList.remove('input_type_correct');
  formField.classList.add('form__field_type_error');
  item.classList.add('input_type_error');

}

const hideError = (item) => {
  const formField = item.parentElement.parentElement;
  const errorMessage = document.querySelector(`.${item.id}-error`);
  errorMessage.textContent = '';
  errorMessage.classList.remove('input-error_displayed');
  item.classList.remove('input_type_error');
  item.classList.add('input_type_correct');
  formField.classList.remove('form__field_type_error');
}

const setValidationListeners = () => {
  inputList.forEach(item => {
    item.addEventListener('input', ()=> {
      if (!item.validity.valid){
        showError(item);
      } else {
        hideError(item);
      }

    })
  });
}


setValidationListeners();
