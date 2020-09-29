const newErorrForm = document.querySelector('.new-error-form');
const addMachineButton = newErorrForm.querySelector('.form__add-machine-button');
const popup = document.querySelector('.popup');
const closeButton = popup.querySelector('.popup__close-button');

const closingByEsc = (event) => {
  if (event.key == "Escape") {
    togglePopup(popup);
  }
  return;
}

const togglePopup = (popupName) => {
  popupName.classList.toggle('popup_opened');
  debugger;
  if (popupName.classList.contains('popup_opened')) {
    document.addEventListener('keyup', closingByEsc);
  } else {
    document.removeEventListener('keyup', closingByEsc);
    debugger;
  }

}

popup.addEventListener('click', event => {
  if (event.target !== event.currentTarget) {
    return;
  }
  togglePopup(popup);
})

closeButton.addEventListener('click', event => {
  event.preventDefault();
  togglePopup(popup);
});

addMachineButton.addEventListener('click', event => {
  event.preventDefault();
  togglePopup(popup);
});
