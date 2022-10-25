import {Comments, Likes, DESCRIPTIONS} from './const.js';

const isEscKey = (evt) => evt.key === 'Escape';

const isComformLength = (checkedText, maxLength) => checkedText.length <= maxLength;

const getRandomPositiveInteger = (a, b) => {
  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getGenerateArrayObjects = (quanty) => {
  const arrObj = [];
  for (let i = 1; i <= quanty; i++){
    arrObj.push({
      id: i,
      url: `photos/${i}.jpg`,
      description: DESCRIPTIONS[getRandomPositiveInteger(0, DESCRIPTIONS.length - 1)],
      likes: getRandomPositiveInteger(Likes.MIN, Likes.MAX),
      comments: getRandomPositiveInteger(Comments.MIN, Comments.MAX),
    });
  };

  return arrObj;
}

export {isComformLength, getGenerateArrayObjects, isEscKey};
