const popup = document.querySelector('.popup');
const addMachineButton = document.querySelector('.form__add-machine-button');
const closeButton = popup.querySelector('.popup__close-button');

const closingByEsc = (event) => {
  if (event.key == "Escape") {
    togglePopup(popup);
  }
  return;
}

const togglePopup = (popupName) => {
  popupName.classList.toggle('popup_opened');
  if (popupName.classList.contains('popup_opened')) {
    document.addEventListener('keyup', closingByEsc);
  } else {
    document.removeEventListener('keyup', closingByEsc);
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
