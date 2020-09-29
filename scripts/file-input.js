const fakeInput = document.querySelector('.form__fake-input');
const hiddenInput = document.querySelector('.form__image-input');

const changeText = () => {
  fakeInput.textContent = hiddenInput.files[0].name;
}

hiddenInput.addEventListener ('change', changeText);
