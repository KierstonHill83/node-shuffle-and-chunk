var express = require('express');
var router = express.Router();
var main = require('../utilities/utilities.js');


router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Shuffle and Chunk'
  });
});



console.log(main);

router.post('/submit', function(req, res, next) {
  var nameArray = req.body.names.split(",");
  var shuffleArray = main.shuffle(nameArray);
  var chunked = main.chunk(shuffleArray, parseInt(req.body.number_chunks));
  res.send(chunked);
});

module.exports = router;



