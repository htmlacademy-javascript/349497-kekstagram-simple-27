import { Scale } from './const.js';
import { imgUploadPreviewElement, scaleValueElement, scaleBiggerBtnElement } from './form-dom-element.js';


const onScaleControl = (evt) => {
  let value = parseInt(scaleValueElement.value, 10);
  if (evt.target.matches('button[type="button"]')){
    if (evt.target === scaleBiggerBtnElement){
      if (value < Scale.MAX){
        value += Scale.STEP;
      }
    } else {
      if (value > Scale.MIN){
        value -= Scale.STEP;
      }
    }
    imgUploadPreviewElement.style.transform = `scale(${value / 100})`;
    scaleValueElement.value = `${value}%`;
  }
};

export {onScaleControl};
