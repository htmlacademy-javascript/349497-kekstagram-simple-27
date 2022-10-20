import { Scale } from './const.js';
import {validationComment} from './form-validation.js';

const body = document.querySelector('body');
const uploadForm = body.querySelector('#upload-select-image');
const uploadFileInput = uploadForm.querySelector('#upload-file');
const imgUploadPopup = uploadForm.querySelector('.img-upload__overlay');
const closePopupBtn = body.querySelector('#upload-cancel');

const scaleSmallerBtn = uploadForm.querySelector('.scale__control--smaller');
const scaleBiggerBtn = uploadForm.querySelector('.scale__control--bigger');
const scaleValue = uploadForm.querySelector('.scale__control--value');
const imgUploadPreview = uploadForm.querySelector('.img-upload__preview img');
const effectsList = uploadForm.querySelector('.effects__list');
const defaultEffect = uploadForm.querySelector('#effect-none');
const commentText = uploadForm.querySelector('.text__description');

const listeners = [
  {node: window, evt: 'keydown', func: isEscKey},
  {node: closePopupBtn, evt: 'click', func: closePopup},
  {node: scaleSmallerBtn, evt: 'click', func: scaleDriver},
  {node: scaleBiggerBtn, evt: 'click', func: scaleDriver},
  {node: effectsList, evt: 'change', func: addEffectImg},
  {node: commentText, evt: 'input', func: () => validationComment(uploadForm, commentText)},
  {node: uploadForm, evt: 'submit', func: (evt)=>{
    if (!validationComment(uploadForm, commentText)){
      evt.preventDefault();
    }
  }},
];


function isEscKey(evt){
  if (evt.key === 'Escape'){
    evt.preventDefault();
    closePopup();
  }
}


function showPopup(){
  imgUploadPopup.classList.remove('hidden');
  body.classList.add('modal-open');
  listeners.forEach((value) => {
    value.node.addEventListener(value.evt, value.func);
  });
}

function closePopup(){
  imgUploadPopup.classList.add('hidden');
  body.classList.remove('modal-open');
  listeners.forEach((value) => {
    value.node.removeEventListener(value.evt, value.func);
  });
  uploadFileInput.value = '';
  defaultEffect.checked = true;
  imgUploadPreview.classList.remove(...imgUploadPreview.classList);
  imgUploadPreview.style.transform = '';
  commentText.value = '';
}


function scaleDriver(evt){
  let value = parseInt(scaleValue.value, 10);
  if (evt.target === scaleBiggerBtn){
    if (value < Scale.MAX){
      value += Scale.STEP;
    }
  }else{
    if (value > Scale.MIN){
      value -= Scale.STEP;
    }
  }
  imgUploadPreview.style.transform = `scale(${value / 100})`;
  scaleValue.value = `${value}%`;
}


function addEffectImg(){
  const effect = effectsList.querySelector('[name="effect"]:checked').value;
  imgUploadPreview.classList.remove(...imgUploadPreview.classList);
  imgUploadPreview.classList.add(`effects__preview--${effect}`);
}

uploadFileInput.addEventListener('change', showPopup);
