function getRandomRange(m, n){
  if(isNaN(m / n)){
    return NaN;
  }else if (m < 0 || n < 0){
    return NaN;
  }else if (m % 1 !== 0 || n % 1 !== 0){
    return NaN;
  }

  m = Number(m);
  n = Number(n);

  let startNumber = m;
  let endNumber = n;

  if (startNumber > endNumber){
    startNumber = n;
    endNumber = m;
  }else if (startNumber === endNumber){
    return NaN;
  }

  return(Math.floor(Math.random() * (endNumber - startNumber)) + startNumber);
}

function isComformLength(checkedText, maxLength){
  return checkedText.length <= maxLength;
}
