import { isEscKey } from './util.js';
import { bodyElement } from './form-dom-element.js';

const onEscKey = (evt) => {
  if (isEscKey(evt)){
    evt.preventDefault();
    removePopup();
  }
};

const onClickOutPopup = (evt) => {
  if (evt.target.tagName === 'SECTION'){
    removePopup();
  }
};

function onButtonPopup(){
  removePopup();
}

const showMessage = (typeMessage, listenerFunc, title, textButton) => {
  const messageFragment = document.querySelector(`#${typeMessage}`).content.cloneNode(true);
  const messageButton = messageFragment.querySelector(`.${typeMessage}__button`);
  if (listenerFunc){
    messageButton.addEventListener('click', listenerFunc);
  }
  if (title) {
    messageFragment.querySelector(`.${typeMessage}__title`).textContent = title;
  }
  if (textButton){
    messageButton.textContent = textButton;
  }
  messageFragment.querySelector('section').addEventListener('click', onClickOutPopup);
  messageButton.addEventListener('click', onButtonPopup);

  document.addEventListener('keydown', onEscKey);
  bodyElement.append(messageFragment);
};

function removePopup(){
  document.removeEventListener('keydown', onEscKey);
  let popupElement = bodyElement.querySelector('.error');
  if (!popupElement){
    popupElement = bodyElement.querySelector('.success');
  }
  bodyElement.removeChild(popupElement);
}

export { showMessage };
