import { isEscKey } from './util.js';

function onEscKey(evt){
  if (isEscKey(evt)){
    evt.preventDefault();
    removePopup();
  }
}

function onClickOutPopup(evt){
  if (evt.target.tagName === 'SECTION'){
    removePopup();
  }
}

function onButtonPopup(){
  removePopup();
}

function removePopup(){
  document.removeEventListener('keydown', onEscKey);
  const body = document.querySelector('body');
  let popup = body.querySelector('.error');
  if (!popup){
    popup = body.querySelector('.success');
  }
  body.removeChild(popup);
}


function showMessage(typeMessage, listenerFunc, title, textButton){
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

  const body = document.querySelector('body');
  document.addEventListener('keydown', onEscKey);
  body.append(messageFragment);
}


export { showMessage };
