import { userPicture } from './create-thumbnails.js';
import {showAlert} from './utils.js';

fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
  .then((response) => {
    if (response.ok) {
      return response;
    }
    else {
      showAlert('Ошибка при загрузке фотографий');
    }
  }
  ).then((response) => response.json())
  .then((pic) => userPicture(pic))
  .catch(() => showAlert('Ошибка при загрузке фотографий'));
