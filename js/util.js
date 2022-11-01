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

export {isComformLength, isEscKey, getRandomPositiveInteger };
