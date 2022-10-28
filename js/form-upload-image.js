import {
  closePopupBtn, scaleControls, effectsList, commentText, uploadForm, imgUploadPopup, body, uploadFileInput, imgUploadPreview
} from './form-dom-element.js';
import {onScaleControl} from './form-scale.js';
import {validationComment} from './form-validation.js';
import {isEscKey} from './util.js';
import {onChangeEffect, setDefaultEffect} from './form-effects.js';

const listeners = [
  {node: window, evt: 'keydown', func: onEscKey},
  {node: closePopupBtn, evt: 'click', func: onCloseBtn},
  {node: scaleControls, evt: 'click', func: onScaleControl},
  {node: effectsList, evt: 'change', func: onChangeEffect},
  {node: commentText, evt: 'input', func: () => validationComment(uploadForm, commentText)},
  {node: uploadForm, evt: 'submit', func: (evt)=>{
    if (!validationComment(uploadForm, commentText)){
      evt.preventDefault();
    }
  }},
];


function onEscKey(evt){
  if (isEscKey(evt)){
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
  imgUploadPreview.style.transform = '';
  commentText.value = '';
  setDefaultEffect();
}

function onChangeFileInput(){
  showPopup();
}

function onCloseBtn(){
  closePopup();
}

uploadFileInput.addEventListener('change', onChangeFileInput);
