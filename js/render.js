import { getDataJson } from './requests.js';
import { URL_IMAGES_DATASET } from './const.js';
import { showMessage } from './message_popup.js';


const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pictureFragment = document.createDocumentFragment();
const renderPictures = (json) => {
  json.forEach(({url, likes, comments}) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__comments').textContent = comments;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureFragment.append(pictureElement);
  });
  document.querySelector('.pictures').append(pictureFragment);
};

function errorLoad(){
  showMessage('error', getImages, 'Ошибка загрузки фотографий');
}

function getImages(){
  getDataJson(renderPictures, errorLoad, URL_IMAGES_DATASET);
}

getImages();
