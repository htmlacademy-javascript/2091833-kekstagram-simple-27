const imgScale = document.querySelector('.img-upload__scale');
const imgScaleSmaller = imgScale.querySelector('.scale__control--smaller');
const imgScaleBigger = imgScale.querySelector('.scale__control--bigger');
const imgScaleControl = imgScale.querySelector('.scale__control--value');
const imgPreview = document.querySelector('.img-upload__preview');
const PERCENT_VALUE = 25;
const MAX_VALUE = 100;

const reduceScaleValue = function (scaleValue, percent) {
  if (parseFloat(scaleValue.value) > PERCENT_VALUE) {
    scaleValue.value = `${parseFloat(scaleValue.value) - percent}%`;
    imgPreview.style.transform = `scale(${scaleValue.value})`;
    return scaleValue.value;
  }
};

const increaseScaleValue = function (scaleValue, percent) {
  if (parseFloat(scaleValue.value) < MAX_VALUE) {
    scaleValue.value = `${parseFloat(scaleValue.value) + percent}%`;
    imgPreview.style.transform = `scale(${scaleValue.value})`;
    return scaleValue.value;
  }
};

imgScaleSmaller.addEventListener('click', () => {
  reduceScaleValue(imgScaleControl, PERCENT_VALUE);
});

imgScaleBigger.addEventListener('click', () => {
  increaseScaleValue(imgScaleControl, PERCENT_VALUE);
});

export {imgPreview, imgScaleControl};
