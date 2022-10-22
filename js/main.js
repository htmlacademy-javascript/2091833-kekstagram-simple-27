function getRandomIntInclusive(min, max) {
  if (min < 0) {
    min = 'error';
  }
  if (min > max) {
    min = 'error';
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  const RESULT = Math.floor(Math.random() * (max - min + 1)) + min;
  return RESULT;
}
getRandomIntInclusive(22, 24);

function getMaxLetter (currentLine, maxLine = 140) {
  if (currentLine > maxLine) {
    return false;
  }
  return true;
}

getMaxLetter(120, 140);
