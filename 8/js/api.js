import { userPicture } from './create-thumbnails.js';
import {showAlert} from './utils.js';

fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
  .then((response) => {
    if (response.ok) {
      return response;
    }
    else {
      showAlert('Ошибка при загрузке фотографий');
      throw new Error(`${response.status} — ${response.statusText}`);
    }
  }
  ).then((response) => response.json())
  .then((pic) => userPicture(pic))
  .catch((err) => {console.log(err);});
