const fakeInput = document.querySelector('.form__fake-input');
const hiddenInput = document.querySelector('.form__image-input');

const changeText = () => {
  fakeInput.textContent = hiddenInput.files[0].name;
}

fakeInput.addEventListener('keyup', event => {
  if (event.key == 'Enter') {
    hiddenInput.click();
  }
});

hiddenInput.addEventListener ('change', changeText);
