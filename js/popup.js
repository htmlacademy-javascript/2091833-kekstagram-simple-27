import { isEscape } from './utils.js';
import { clearDescription } from './form-addons.js';
import { effectDelete } from './effect.js';

const uploadWindow = document.querySelector('.img-upload__overlay');
const uploadFile = document.querySelector('#upload-file');
const bodyDoc = document.querySelector('body');
const uploadClose = document.querySelector('#upload-cancel');

const onPopupEscKeydown = (evt) => {
  if (isEscape(evt)) {
    evt.preventDefault();
    closeUploadWindow();
  }
};

function openUploadWindow() {
  uploadWindow.classList.remove('hidden');
  bodyDoc.classList.add('modal-open');

  bodyDoc.addEventListener('keydown', onPopupEscKeydown);
}

function closeUploadWindow () {
  uploadWindow.classList.add('hidden');
  bodyDoc.classList.remove('modal-open');
  uploadFile.value = '';
  clearDescription();
  effectDelete();
  bodyDoc.removeEventListener('keydown', onPopupEscKeydown);
}

uploadFile.addEventListener('change', () => {
  openUploadWindow();
});

uploadClose.addEventListener('keydown', (evt) => {
  if (isEscape(evt)){
    closeUploadWindow();
  }
});

uploadClose.addEventListener('click', () => {
  closeUploadWindow();
});

export {openUploadWindow, closeUploadWindow};
