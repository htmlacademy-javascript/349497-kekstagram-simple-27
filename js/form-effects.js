import { imgUploadPreviewElement, effectsListElement, effectSliderElement, effectSliderValueElement, defaultEffectElement } from './form-dom-element.js';
import { Effects } from './const.js';

const setClassEffectImg = (effect) =>{
  for (const element of imgUploadPreviewElement.classList){
    if (element.startsWith('effects__preview--')){
      imgUploadPreviewElement.classList.replace(element, `effects__preview--${effect}`);
      return;
    }
  }
  imgUploadPreviewElement.classList.add(`effects__preview--${effect}`);
};

const setDefaultEffect = () => {
  if (effectSliderElement.noUiSlider !== undefined){
    effectSliderElement.noUiSlider.destroy();
  }
  setClassEffectImg('none');
  effectSliderElement.parentElement.setAttribute('hidden', 'true');
  imgUploadPreviewElement.style.filter = '';
  defaultEffectElement.checked = true;
};

const setSlider = ({filter, range, start, step, unit}) => {
  if (effectSliderElement.noUiSlider !== undefined){ effectSliderElement.noUiSlider.destroy();}
  noUiSlider.create(effectSliderElement, {
    connect: true,
    range: range,
    start: start,
    step: step,
  });
  effectSliderElement.parentElement.removeAttribute('hidden');
  effectSliderElement.noUiSlider.on('update', (values, handle) => {
    effectSliderValueElement.value = values[handle];
    imgUploadPreviewElement.style.filter = '';

    if (unit === undefined){
      imgUploadPreviewElement.style.filter = `${filter}(${effectSliderValueElement.value})`;
      return;
    }
    imgUploadPreviewElement.style.filter = `${filter}(${effectSliderValueElement.value}${unit})`;
  });
};

const onChangeEffect = () => {
  const effect = effectsListElement.querySelector('[name="effect"]:checked').value;
  setClassEffectImg(effect);
  if (effect === 'none'){
    setDefaultEffect();
    return;
  }
  setSlider(Effects[effect.toUpperCase()]);
};

export {onChangeEffect, setDefaultEffect};
