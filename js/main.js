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

const descriptionsArr = [
    'Et ea anim aliqua excepteur ea ut incididunt cupidatat deserunt cillum eu ex ipsum labore.',
    'Aliqua minim cupidatat veniam id reprehenderit consequat aliquip reprehenderit tempor sunt.',
    'Anim eiusmod laborum culpa incididunt nisi id ex laboris irure consectetur.',
    'Eu ea occaecat nulla aute deserunt nulla consectetur.',
    'Ad anim laborum reprehenderit non irure non labore commodo aute veniam aliquip consectetur.',
    'Eu Lorem in quis minim officia consequat nisi sint voluptate ex.',
    'Excepteur occaecat adipisicing aliqua Lorem irure consequat commodo amet adipisicing quis veniam.'
]

function getGenerateArrayObjects(quanty){
    arrObj = []

    for (let i=1; i<=quanty; i++){
        arrObj.push({
            id: i,
            url: `photos/${i}.jpg`,
            description: descriptionsArr[getRandomPositiveInteger(0, descriptionsArr.length-1)],
            likes: getRandomPositiveInteger(15,200),
            comments: getRandomPositiveInteger(0,200),
            })
    }

    return arrObj
}
