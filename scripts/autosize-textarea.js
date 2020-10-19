const textareaList = Array.from(document.querySelectorAll('.textarea'));
const resize = (event) => {
  event.currentTarget.style.height = 'auto';
  event.currentTarget.style.height = event.currentTarget.scrollHeight + 'px';
}

const delayedResize = (event) => {
  window.setTimeout(resize(event), 0);
}

const setResizeListeners = () => {
  textareaList.forEach(item => {
    item.addEventListener('input', (event) => {resize(event);}, false)
  });
}

setResizeListeners();
