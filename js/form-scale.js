import { Scale } from './const.js';
import { imgUploadPreview, scaleValue, scaleBiggerBtn } from './form-dom-element.js';


const onScaleControl = (evt) => {
  let value = parseInt(scaleValue.value, 10);
  if (evt.target.matches('button[type="button"]')){
    if (evt.target === scaleBiggerBtn){
      if (value < Scale.MAX){
        value += Scale.STEP;
      }
    } else {
      if (value > Scale.MIN){
        value -= Scale.STEP;
      }
    }
    imgUploadPreview.style.transform = `scale(${value / 100})`;
    scaleValue.value = `${value}%`;
  }
};

export {onScaleControl};
