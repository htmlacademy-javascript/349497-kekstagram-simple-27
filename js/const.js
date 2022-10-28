export const GENERATE_OBJECTS = 25;
export const Likes = {MIN: 5, MAX: 200};
export const Comments = {MIN: 0, MAX: 200};
export const Scale = {MIN: 25, MAX: 100, STEP:25};
export const CommentLength = {MIN:20, MAX: 140};
export const Effects = {
  CHROME: {filter: 'grayscale', range: {'min': 0, 'max': 1}, start: 1, step: 0.1, unit: undefined},
  SEPIA: {filter: 'sepia', range: {'min': 0, 'max': 1}, start: 1, step: 0.1, unit: undefined},
  MARVIN: {filter: 'invert', range: {'min': 0, 'max': 100}, start: 100, step: 1, unit: '%'},
  PHOBOS: {filter: 'blur', range: {'min': 0, 'max': 3}, start: 3, step: 0.1, unit: 'px'},
  HEAT: {filter: 'brightness', range: {'min': 0, 'max': 3}, start: 3, step: 0.1, unit: undefined},
};


export const DESCRIPTIONS = [
  'Et ea anim aliqua excepteur ea ut incididunt cupidatat deserunt cillum eu ex ipsum labore.',
  'Aliqua minim cupidatat veniam id reprehenderit consequat aliquip reprehenderit tempor sunt.',
  'Anim eiusmod laborum culpa incididunt nisi id ex laboris irure consectetur.',
  'Eu ea occaecat nulla aute deserunt nulla consectetur.',
  'Ad anim laborum reprehenderit non irure non labore commodo aute veniam aliquip consectetur.',
  'Eu Lorem in quis minim officia consequat nisi sint voluptate ex.',
  'Excepteur occaecat adipisicing aliqua Lorem irure consequat commodo amet adipisicing quis veniam.',
  'Labore amet excepteur tempor velit amet ipsum qui et anim occaecat labore tempor proident.',
  'Nostrud anim dolor veniam duis.',
  'Fugiat adipisicing reprehenderit commodo adipisicing duis.'
];
