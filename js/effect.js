const EFFECT_LIST = document.querySelector('.effects__list');
const IMG_PREVIEW = document.querySelector('.img-upload__preview');

function effectChange (evt) {
  IMG_PREVIEW.classList.add(`effects__preview--${evt.target.value}`);
}

EFFECT_LIST.addEventListener('change', effectChange);
