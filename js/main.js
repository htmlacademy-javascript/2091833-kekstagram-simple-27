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

const createUserPic = function() {
  return {
    id: getRandomPositiveInteger(0, 25),
    url: `photos/${getRandomPositiveInteger(1, 25)}.jpg`,
    description: 'Супер крутая фотка, возможно дикпик',
    likes: getRandomPositiveInteger(15, 200),
    comments: getRandomPositiveInteger(0, 200)
  };
};

const userPic = Array.from({length: 25}, createUserPic);

userPic();
