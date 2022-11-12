import { CommentLength } from './const.js';
import { uploadFormElement, commentTextElement } from './form-dom-element.js';


const checkLengthComment = (text) => text.length >= CommentLength.MIN && text.length <= CommentLength.MAX;

const validateComment = () => {
  if (!checkLengthComment(commentTextElement.value)){
    commentTextElement.setCustomValidity(`Комментарий должен быть длинее ${CommentLength.MIN} символов и короче ${CommentLength.MAX}. Сейчас: ${commentTextElement.value.length}`);
    uploadFormElement.reportValidity();
    return false;
  }
  commentTextElement.setCustomValidity('');
  return true;
};

export {validateComment};
