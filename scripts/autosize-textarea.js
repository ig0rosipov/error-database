const textareaList = Array.from(document.querySelectorAll('.textarea'));

const resize = () => {
  textareaList.forEach(item => {
    item.style.height = 'auto';
    item.style.height = item.scrollHeight+'px';
  })
}

const delayedResize = () => {
  window.setTimeout(resize, 0);
}

const setResizeListeners = () => {
  textareaList.forEach(item => {
    item.addEventListener('change', resize, false)
    item.addEventListener('cut', delayedResize, false)
    item.addEventListener('paste', delayedResize, false)
    item.addEventListener('drop', delayedResize, false)
    item.addEventListener('keydown', delayedResize, false)
    console.log('click')
  });
}

setResizeListeners();
