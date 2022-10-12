import {descriptionsArr} from './data.js';
import {COMMENTS, LIKES} from './const.js';


function isComformLength(checkedText, maxLength){
  return checkedText.length <= maxLength;
}

function getRandomPositiveInteger (a, b) {
  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function getGenerateArrayObjects(quanty){
  const arrObj = [];

  for (let i = 1; i <= quanty; i++){
    arrObj.push({
      id: i,
      url: `photos/${i}.jpg`,
      description: descriptionsArr[getRandomPositiveInteger(0, descriptionsArr.length - 1)],
      likes: getRandomPositiveInteger(LIKES.MIN, LIKES.MAX),
      comments: getRandomPositiveInteger(COMMENTS.MIN, COMMENTS.MAX),
    });
  }

  return arrObj;
}

export {isComformLength, getGenerateArrayObjects};
