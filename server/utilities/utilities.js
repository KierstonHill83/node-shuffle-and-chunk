function shuffle(inputArray) {
  var currentIndex = inputArray.length;
  var tempArray;
  var randomArray;
  while (0 !== currentIndex) {
    randomArray = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    tempArray = inputArray[currentIndex];
    inputArray[currentIndex] = inputArray[randomArray];
    inputArray[randomArray] = tempArray;
  }
  return inputArray;
}


function chunk(array, num) {
  var chunkArray = [];
  while (array.length > 0) {
    chunkArray.push(array.splice(0, num));
  }
  return chunkArray;
}


module.exports = {
  shuffle : shuffle,
  chunk : chunk
};

