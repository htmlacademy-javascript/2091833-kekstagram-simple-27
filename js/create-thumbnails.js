import {userPic} from './create-userpic.js';

const PICTURE_TEMPLATE = document.querySelector('#picture').content;
const PICTURE_ELEMENT = PICTURE_TEMPLATE.querySelector('.picture');
const PICTURES_CONTAINER = document.querySelector('.pictures');

const USER_PICTURES = userPic();

USER_PICTURES.forEach(({url, likes, comments}) => {
  PICTURE_ELEMENT.querySelector('.picture__img').src = url;
  PICTURE_ELEMENT.querySelector('.picture__likes').textContent = likes;
  PICTURE_ELEMENT.querySelector('.picture__comments').textContent = comments;
  const copyElement = PICTURE_ELEMENT.cloneNode(true);
  PICTURES_CONTAINER.append(copyElement);
});
