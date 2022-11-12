import {
  closePopupBtnElement, scaleControlsElement, effectsListElement, commentTextElement, uploadFormElement, imgUploadPopupElement, bodyElement, uploadFileInputElement, imgUploadPreviewElement, submitButtonElement, scaleValueElement
} from './form-dom-element.js';
import { onScaleControl } from './form-scale.js';
import { validateComment } from './form-validation.js';
import { isEscKey} from './util.js';
import { onChangeEffect, setDefaultEffect } from './form-effects.js';
import { sendData } from './requests.js';
import { showMessage } from './message-popup.js';

const onEscKey = (evt) => {
  if (isEscKey(evt)){
    evt.preventDefault();
    closePopup();
  }
};

const onCloseBtn = () => {
  closePopup();
};

const sendUploadForm = (evt) => {
  evt.preventDefault();
  if (!validateComment){
    return;
  }
  submitButtonElement.setAttribute('disabled', 'true');
  const url = uploadFormElement.attributes['action'].value;
  sendData(
    ()=>{
      closePopup();
      showMessage('success');
    },
    ()=>{
      closePopup(true);
      showMessage('error', showPopup);
    },
    url,
    new FormData(evt.target));
};

const listeners = [
  {node: window, evt: 'keydown', func: onEscKey},
  {node: closePopupBtnElement, evt: 'click', func: onCloseBtn},
  {node: scaleControlsElement, evt: 'click', func: onScaleControl},
  {node: effectsListElement, evt: 'change', func: onChangeEffect},
  {node: commentTextElement, evt: 'input', func: validateComment},
  {node: uploadFormElement, evt: 'submit', func: sendUploadForm},
];


const onChangeFileInput = () => {
  showPopup();
};

const onClickFileInput = () => {
  uploadFileInputElement.addEventListener('change', onChangeFileInput, {once: true});
  setDefaultEffect();
};

function showPopup () {
  imgUploadPopupElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  listeners.forEach((value) => {
    value.node.addEventListener(value.evt, value.func);
  });
}

function closePopup (save = false) {
  imgUploadPopupElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  listeners.forEach((value) => {
    value.node.removeEventListener(value.evt, value.func);
  });
  submitButtonElement.removeAttribute('disabled');
  if (!save){
    scaleValueElement.value = '100%';
    uploadFileInputElement.value = '';
    imgUploadPreviewElement.style.transform = '';
    commentTextElement.value = '';
    setDefaultEffect();
  }
}

export { onClickFileInput };
