import {IMG_PREVIEW, IMG_SCALE_CONTROL} from './slider.js';
import {isEscape} from './utils.js';

const successTemplate = document.querySelector('#success').content;
const successTemplateData = successTemplate.querySelector('.success');
const errorTemplate = document.querySelector('#error').content;
const errorTemplateData = errorTemplate.querySelector('.error');
const pageBody = document.querySelector('body');
const description = document.querySelector('.text__description');
const successInner = document.querySelector('.success__inner');
const errorInner = document.querySelector('.error__inner');

const succFunc = (successButton) => {
  successButton.addEventListener('click', () => {
    const successData = pageBody.querySelector('.success');
    successData.remove();
  });
  document.addEventListener('click', (evt) => {
    const successData = pageBody.querySelector('.success');
    if (evt.target !== successInner) {
      successData.remove();
    }
  });
  document.addEventListener('keydown', (evt) => {
    if (isEscape(evt)) {
      evt.preventDefault();
      const successData = pageBody.querySelector('.success');
      successData.remove();
    }
  });
};

const errorFunc = (errorButton) => {
  errorButton.addEventListener('click', () => {
    const errorData = pageBody.querySelector('.error');
    errorData.remove();
  });
  document.addEventListener('click', (evt) => {
    const errorData = pageBody.querySelector('.error');
    if (evt.target !== errorInner) {
      errorData.remove();
    }
  });
  document.addEventListener('keydown', (evt) => {
    if (isEscape(evt)) {
      evt.preventDefault();
      const errorData = pageBody.querySelector('.error');
      errorData.remove();
    }
  });
};

const formError = () => {
  const errorTemplateClone = errorTemplateData.cloneNode(true);
  pageBody.appendChild(errorTemplateClone);
  const errorButton = document.querySelector('.error__button');
  errorFunc(errorButton);
};

const formSuccess = () => {
  const succesTemplateClone = successTemplateData.cloneNode(true);
  pageBody.appendChild(succesTemplateClone);
  const successButton = document.querySelector('.success__button');
  succFunc(successButton);
};

const clearDescription = () => {
  description.value = '';
  IMG_PREVIEW.style.transform = 'scale(100%)';
  IMG_SCALE_CONTROL.value = '100%';
};

export {formSuccess, formError, clearDescription};
