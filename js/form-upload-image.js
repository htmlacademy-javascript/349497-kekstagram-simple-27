import {
  closePopupBtn, scaleControls, effectsList, commentText, uploadForm, imgUploadPopup, body, uploadFileInput, imgUploadPreview, submitButton
} from './form-dom-element.js';
import {onScaleControl} from './form-scale.js';
import {validationComment} from './form-validation.js';
import {isEscKey} from './util.js';
import {onChangeEffect, setDefaultEffect} from './form-effects.js';
import { sendData } from './requests.js';
import { showMessage } from './message_popup.js';

const listeners = [
  {node: window, evt: 'keydown', func: onEscKey},
  {node: closePopupBtn, evt: 'click', func: onCloseBtn},
  {node: scaleControls, evt: 'click', func: onScaleControl},
  {node: effectsList, evt: 'change', func: onChangeEffect},
  {node: commentText, evt: 'input', func: validationComment},
  {node: uploadForm, evt: 'submit', func: sendUploadForm},
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

function closePopup(save = false){
  imgUploadPopup.classList.add('hidden');
  body.classList.remove('modal-open');
  listeners.forEach((value) => {
    value.node.removeEventListener(value.evt, value.func);
  });
  submitButton.removeAttribute('disabled');
  if (!save){
    uploadFileInput.value = '';
    imgUploadPreview.style.transform = '';
    commentText.value = '';
    setDefaultEffect();
  }
}

function onChangeFileInput(){
  showPopup();
}

function onClickFileInput(evt){
  if (uploadFileInput.value === ''){
    uploadFileInput.addEventListener('change', onChangeFileInput, {once: true});
    return;
  }
  evt.preventDefault();
  showPopup();
}

function onCloseBtn(){
  closePopup();
}

function sendUploadForm(evt){
  evt.preventDefault();
  if (!validationComment){
    return;
  }
  submitButton.setAttribute('disabled', 'true');
  const url = uploadForm.attributes['action'].value;
  sendData(()=>{
    closePopup();
    showMessage('success');
  }, ()=>{
    closePopup(true);
    showMessage('error');
  }, url, new FormData(evt.target));
}

uploadFileInput.addEventListener('click', onClickFileInput);
