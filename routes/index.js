var express = require('express');
var router = express.Router();
var config = require('../config');
var restApi = require('./restInterface');

var isPlaying = false;

router.post('/switchPreset', function (req, res) {
  var data = req.body || {};
  console.log(data);
  restApi.httpRequest({}, 'POST', '/api/v1/presets/' + data.presetName, function (data) {
    if (!data.success) {
      res.send(data);
      res.end();
    } else {
      res.send(data.restReturnedData);
      res.end();
    }
  });
});

router.post('/switchSource', function (req, res) {
  console.log(req.body);
  var data = {

  };

  res.end();
});

router.post('/openTemWindow', function (req, res) {
  var data = req.body;
  console.log(data);
  restApi.httpRequest({}, 'POST', '/api/v1/walls/' + config.mipConfig.WallName + '/windows/window', function (data) {
    if (!data.success) {
      res.send(data);
      res.end();
    } else {
      res.send(data.restReturnedData);
      res.end();
    }
  });
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