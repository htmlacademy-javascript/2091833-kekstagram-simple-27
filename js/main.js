const ID_START = 0;
const ID_END = 25;
const URL_START = 1;
const URL_END = 25;
const LIKES_START = 15;
const LIKES_END = 200;
const COMMENTS_START = 0;
const COMMENTS_END = 200;

function getRandomPositiveInteger (a, b) {
  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

function getMaxLetter (currentLine, maxLine = 140) {
  if (currentLine > maxLine) {
    return false;
  }
  return true;
}

getMaxLetter(0, 10);

const description = ['Супер крутая фотка, возможно дикпик', 'Я с котом', 'Я с собакой', 'Моя семья', 'Подводная рыбкалка в Махачкале', 'Вау, мой рот цел, это чудо!!!', 'Жду лайки!!!'];

const createUserPic = () => ({
  id: getRandomPositiveInteger(ID_START, ID_END),
  url: `photos/${getRandomPositiveInteger(URL_START, URL_END)}.jpg`,
  description: description[getRandomPositiveInteger(0, description.length - 1)],
  likes: getRandomPositiveInteger(LIKES_START, LIKES_END),
  comments: getRandomPositiveInteger(COMMENTS_START, COMMENTS_END)
});

const userPic = () => Array.from({length: 25}, createUserPic);

userPic();
