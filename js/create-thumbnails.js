const pictureTemplate = document.querySelector('#picture').content;
const pictureElement = pictureTemplate.querySelector('.picture');
const pictureContainer = document.querySelector('.pictures');

const userPicture = (pic) => {

  pic.forEach(({url, likes, comments}) => {
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments;
    const copyElement = pictureElement.cloneNode(true);
    pictureContainer.append(copyElement);
  });
};

export {userPicture};
