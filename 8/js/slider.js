const IMG_SCALE = document.querySelector('.img-upload__scale');
const IMG_SCALE_SMALLER = IMG_SCALE.querySelector('.scale__control--smaller');
const IMG_SCALE_BIGGER = IMG_SCALE.querySelector('.scale__control--bigger');
const IMG_SCALE_CONTROL = IMG_SCALE.querySelector('.scale__control--value');
const IMG_PREVIEW = document.querySelector('.img-upload__preview');

const reduceScaleValue = function (scaleValue, percent) {
  if (parseFloat(scaleValue.value) > 25) {
    scaleValue.value = `${parseFloat(scaleValue.value) - percent}%`;
    IMG_PREVIEW.style.transform = `scale(${scaleValue.value})`;
    return scaleValue.value;
  }
};

const increaseScaleValue = function (scaleValue, percent) {
  if (parseFloat(scaleValue.value) < 100) {
    scaleValue.value = `${parseFloat(scaleValue.value) + percent}%`;
    IMG_PREVIEW.style.transform = `scale(${scaleValue.value})`;
    return scaleValue.value;
  }
};

IMG_SCALE_SMALLER.addEventListener('click', () => {
  reduceScaleValue(IMG_SCALE_CONTROL, 25);
});

IMG_SCALE_BIGGER.addEventListener('click', () => {
  increaseScaleValue(IMG_SCALE_CONTROL, 25);
});

export {IMG_PREVIEW, IMG_SCALE_CONTROL};
