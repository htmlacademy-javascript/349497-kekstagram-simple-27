function getRandomPositiveInteger (a, b) {
    if (a < 0 || b < 0) {
      return NaN;
    }
    const lower = Math.ceil(Math.min(a, b));
    const upper = Math.floor(Math.max(a, b));
    const result = Math.random() * (upper - lower + 1) + lower;
    return Math.floor(result);
  }

function isComformLength(checkedText, maxLength){
  return checkedText.length <= maxLength;
}

function getGenerateArrayObjects(quanty){
    arrObj = []

    for (let i=1; i<=quanty; i++){
        arrObj.push({
            id: i,
            url: `photos/${i}.jpg`,
            description: 'Occaecat labore Lorem est cillum ea sunt sunt duis commodo.',
            likes: getRandomPositiveInteger(15,200),
            comments: getRandomPositiveInteger(0,200),
            })
    }

    return arrObj
}
