import {getGenerateArrayObjects} from './util.js';
import {GENERATE_OBJECTS} from './const.js';


const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pictureFragment = document.createDocumentFragment();
const picturesUserObjects = getGenerateArrayObjects(GENERATE_OBJECTS);

picturesUserObjects.forEach(({url, likes, comments}) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__comments').textContent = comments;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureFragment.append(pictureElement);
});

document.querySelector('.pictures').append(pictureFragment);
