const effectList = document.querySelector('.effects__list');
const imgPreview = document.querySelector('.img-upload__preview');
const effectAll = document.querySelectorAll('.effects__preview');

function effectChange (evt) {
  for (let i = 0; i < effectAll.length; i++) {
    const effect = effectAll[i].classList.item(1);
    if (imgPreview.classList.contains(effect)) {
      imgPreview.classList.remove(effect);
    }
  }
  imgPreview.classList.add(`effects__preview--${evt.target.value}`);
}

function effectDelete () {
  for (let i = 0; i < effectAll.length; i++) {
    const effect = effectAll[i].classList.item(1);
    if (imgPreview.classList.contains(effect)) {
      imgPreview.classList.remove(effect);
    }
  }
}

effectList.addEventListener('change', effectChange);

export {effectDelete};
