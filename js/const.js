export const GENERATE_OBJECTS = 25;
export const Scale = {MIN: 25, MAX: 100, STEP:25};
export const CommentLength = {MIN:20, MAX: 140};
export const Effects = {
  CHROME: {filter: 'grayscale', range: {'min': 0, 'max': 1}, start: 1, step: 0.1, unit: undefined},
  SEPIA: {filter: 'sepia', range: {'min': 0, 'max': 1}, start: 1, step: 0.1, unit: undefined},
  MARVIN: {filter: 'invert', range: {'min': 0, 'max': 100}, start: 100, step: 1, unit: '%'},
  PHOBOS: {filter: 'blur', range: {'min': 0, 'max': 3}, start: 3, step: 0.1, unit: 'px'},
  HEAT: {filter: 'brightness', range: {'min': 0, 'max': 3}, start: 3, step: 0.1, unit: undefined},
};

export const URL_IMAGES_DATASET = 'https://27.javascript.pages.academy/kekstagram-simple/data';
