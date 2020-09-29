const newErorrForm = document.querySelector('.new-error-form');
const addMachineButton = newErorrForm.querySelector('.form__add-machine-button');
const popup = document.querySelector('.popup');


addMachineButton.addEventListener('click', event => {
  event.preventDefault();
  popup.classList.add('popup_opened');
});
