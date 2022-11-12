import { uploadFileInputElement } from './form-dom-element.js';
import { getImages } from './render.js';
import { onClickFileInput } from './form-upload-image.js';

getImages();
uploadFileInputElement.addEventListener('click', onClickFileInput);
