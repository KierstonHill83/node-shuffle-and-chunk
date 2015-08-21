var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

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
console.log(shuffle([1,2,3,4,5,6]));


function chunk(array, num) {
  var chunkArray = [];
  for (var i = 0; i < array.length; i+num)
    chunkArray.push(array.splice(i, i+num));
  return chunkArray;
}
console.log(chunk([1,2,3,4,5,6,7,8], 2));




