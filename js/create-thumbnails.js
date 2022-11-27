const pictureTemplate = document.querySelector('#picture').content;
const pictureContent = pictureTemplate.querySelector('.picture');
const pictureContainer = document.querySelector('.pictures');

const userPicture = (pic) => {

  pic.forEach(({url, likes, comments}) => {
    pictureContent.querySelector('.picture__img').src = url;
    pictureContent.querySelector('.picture__likes').textContent = likes;
    pictureContent.querySelector('.picture__comments').textContent = comments;
    const copyElement = pictureContent.cloneNode(true);
    pictureContainer.append(copyElement);
  });
};

export {userPicture};
