import {getRandomPositiveInteger} from './utils.js';

const ID_START = 0;
const ID_END = 25;
const URL_START = 1;
const URL_END = 25;
const LIKES_START = 15;
const LIKES_END = 200;
const COMMENTS_START = 0;
const COMMENTS_END = 200;
const USER_PIC_COUNT = 25;
const DESCRIPTION = ['Супер крутая фотка, возможно дикпик', 'Я с котом', 'Я с собакой', 'Моя семья', 'Подводная рыбкалка в Махачкале', 'Вау, мой рот цел, это чудо!!!', 'Жду лайки!!!'];

const createUserPic = () => ({
  id: getRandomPositiveInteger(ID_START, ID_END),
  url: `photos/${getRandomPositiveInteger(URL_START, URL_END)}.jpg`,
  description: DESCRIPTION[getRandomPositiveInteger(0, DESCRIPTION.length - 1)],
  likes: getRandomPositiveInteger(LIKES_START, LIKES_END),
  comments: getRandomPositiveInteger(COMMENTS_START, COMMENTS_END)
});

const userPic = () => Array.from({length: USER_PIC_COUNT}, createUserPic);
export {userPic};
