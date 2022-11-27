import {imgPreview, imgScaleControl} from './slider.js';
import {isEscape} from './utils.js';

const successTemplate = document.querySelector('#success').content;
const successTemplateData = successTemplate.querySelector('.success');
const errorTemplate = document.querySelector('#error').content;
const errorTemplateData = errorTemplate.querySelector('.error');
const pageBody = document.querySelector('body');
const description = document.querySelector('.text__description');

const successHideWindow = (successButton) => {
  const successData = pageBody.querySelector('.success');
  successButton.addEventListener('click', () => {
    successData.remove();
  });
  document.addEventListener('click', (evt) => {
    const successInner = successData.querySelector('.success__inner');
    if (evt.target !== successInner) {
      successData.remove();
    }
  });
  document.addEventListener('keydown', (evt) => {
    if (isEscape(evt)) {
      evt.preventDefault();
      successData.remove();
    }
  });
};

const errorHideWindow = (errorButton) => {
  const errorData = pageBody.querySelector('.error');
  errorButton.addEventListener('click', () => {
    errorData.remove();
  });
  document.addEventListener('click', (evt) => {
    const errorInner = errorData.querySelector('.error__inner');
    if (evt.target !== errorInner) {
      errorData.remove();
    }
  });
  document.addEventListener('keydown', (evt) => {
    if (isEscape(evt)) {
      evt.preventDefault();
      errorData.remove();
    }
  });
};

const formError = () => {
  const errorTemplateClone = errorTemplateData.cloneNode(true);
  pageBody.appendChild(errorTemplateClone);
  const errorButton = document.querySelector('.error__button');
  errorHideWindow(errorButton);
};

const formSuccess = () => {
  const succesTemplateClone = successTemplateData.cloneNode(true);
  pageBody.appendChild(succesTemplateClone);
  const successButton = document.querySelector('.success__button');
  successHideWindow(successButton);
};

const clearDescription = () => {
  description.value = '';
  imgPreview.style.transform = 'scale(100%)';
  imgScaleControl.value = '100%';
};

export {formSuccess, formError, clearDescription};
