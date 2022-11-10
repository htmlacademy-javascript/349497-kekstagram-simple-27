import { imgUploadPreview, effectsList, effectSlider, effectSliderValue, defaultEffect } from './form-dom-element.js';
import { Effects } from './const.js';

const setClassEffectImg = (effect) =>{
  imgUploadPreview.classList.remove(...imgUploadPreview.classList);
  imgUploadPreview.classList.add(`effects__preview--${effect}`);
};

const setDefaultEffect = () => {
  if (effectSlider.noUiSlider !== undefined){
    effectSlider.noUiSlider.destroy();
  }
  setClassEffectImg('none');
  effectSlider.parentElement.setAttribute('hidden', 'true');
  imgUploadPreview.style.filter = '';
  defaultEffect.checked = true;
};

const setSlider = ({filter, range, start, step, unit}) => {
  if (effectSlider.noUiSlider !== undefined){ effectSlider.noUiSlider.destroy();}
  noUiSlider.create(effectSlider, {
    connect: true,
    range: range,
    start: start,
    step: step,
  });
  effectSlider.parentElement.removeAttribute('hidden');
  effectSlider.noUiSlider.on('update', (values, handle) => {
    effectSliderValue.value = values[handle];
    imgUploadPreview.style.filter = '';

    if (unit === undefined){
      imgUploadPreview.style.filter = `${filter}(${effectSliderValue.value})`;
      return;
    }
    imgUploadPreview.style.filter = `${filter}(${effectSliderValue.value}${unit})`;
  });
};

const onChangeEffect = () => {
  const effect = effectsList.querySelector('[name="effect"]:checked').value;
  setClassEffectImg(effect);
  if (effect === 'none'){
    setDefaultEffect();
    return;
  }
  setSlider(Effects[effect.toUpperCase()]);
};

export {onChangeEffect, setDefaultEffect};
