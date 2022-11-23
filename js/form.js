import {closeUploadWindow} from './popup.js';
import {showAlert} from './utils.js';
import {formSuccess, formError, clearDescription} from './form-addons.js';

const uploadForm = document.querySelector('.img-upload__form');
const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
});

const formSubmit = (onSuccess, successMessage) => {
  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      const formData = new FormData(evt.target);
      fetch('https://27.javascript.pages.academy/kekstagram-simple', {
        method: 'POST',
        body: formData,
      }).then((response) => {
        if (response.ok) {
          onSuccess();
          successMessage();
          clearDescription();
        } else {
          formError();
        }
      }).catch(() => showAlert('Не удалось отправить форму. Попробуйте ещё раз'));
    }
  });
};

formSubmit(closeUploadWindow, formSuccess);
