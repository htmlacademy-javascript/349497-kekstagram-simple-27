import { CommentLength } from './const.js';
import { uploadForm, commentText } from './form-dom-element.js';


function checkLengthComment(text){
  if (text.length < CommentLength.MIN || text.length > CommentLength.MAX){
    return false;
  }
  return true;
}

function validationComment(){
  if (!checkLengthComment(commentText.value)){
    commentText.setCustomValidity(`Комментарий должен быть длинее ${CommentLength.MIN} символов и короче ${CommentLength.MAX}. Сейчас: ${commentText.value.length}`);
    uploadForm.reportValidity();
    return false;
  }
  commentText.setCustomValidity('');
  return true;
}

export {validationComment};
