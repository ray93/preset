var express = require('express');
var router = express.Router();
var config = require('../config');

var isPlaying = false;

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

router.post('/switchPlan', function (req, res) {
  var data = req.body || {};
  console.log(data.planID);

  console.log(JSON.stringify(config.windowConfig[data.planID]));

  res.send(JSON.stringify(config.windowConfig[data.planID]));
});

router.post('/switchSignal', function (req, res) {
  console.log(req.body);
  var data = {

  };

  res.end();
});

router.post('/openTemWindow', function (req, res) {

});

router.post('/closeTemWindow', function (req, res) {

});

router.get('/pauseCarousel', function (res) {
  if (!isPlaying)
    res.end();
  else {

  }
});

router.get('/continueCarousel', function (res) {

});
module.exports = router;