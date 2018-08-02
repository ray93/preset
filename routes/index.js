var express = require('express');
var router = express.Router();
var config = require('../config');
var restApi = require('./restInterface');

var carouselData = [];

var isPlaying = false;
var carousel;
var count = 0;

// 开始轮播
function startCarousel() {
  if (isPlaying)
    return;
  console.log(carouselData);
  isPlaying = true;
  clearInterval(carousel);
  carousel = setInterval(function () {
    count++;
    console.log('count', count);
    for (var i = 0; i < carouselData.length; i++) {
      var data = {
        x: carouselData[i].x,
        y: carouselData[i].y,
        width: carouselData[i].width,
        height: carouselData[i].height,
        source: carouselData[i].source[count % carouselData[i].source.length]
      };

      restApi.httpRequest({
        source: data.source
      }, 'PATCH', '/api/v1/walls/' + config.mipConfig.WallName + '/windows/window?x=' + data.x + '&y=' + data.y + '&width=' + data.width + '&height=' + data.height, function (data) {
        if (!data.success) {
          console.log(data);
        } else {
          console.log(data.messages);
        }
      });
    }
  }, 5000);
}
// 暂停轮播
function pauseCarousel() {
  clearInterval(carousel);
  isPlaying = false;
  console.log('暂停');
}

// 取消轮播
function cancelCarousel() {
  clearInterval(carousel);
  isPlaying = false;
  count = 0;
  carouselData = [];
  console.log('停止轮播');
}

router.post('/switchPreset', function (req, res) {
  var presetdata = req.body || {};
  console.log(presetdata);
  cancelCarousel();

  restApi.httpRequest({}, 'POST', '/api/v1/presets/' + presetdata.presetName, function (data) {
    if (!data.success) {
      res.send(data);
      res.end();
    } else {
      res.send(data.messages);

      var presetObj = config.windowConfig[presetdata.presetName];

      for (const window in presetObj) {
        if (presetObj.hasOwnProperty(window)) {
          const element = presetObj[window];
          if (element.source.length > 1) {
            carouselData.push(element);
          } else
            continue;
        }
      }
      startCarousel();
      res.end();
    }
  });
});

router.post('/switchSource', function (req, res) {
  var data = req.body;
  var isHasSourceArray = false;
  for (var i = 0; i < data.source.length; i++) {
    if (data.source[i].sourceID.length === 1) {
      var sourceData = {
        source: config.sourceConfig[data.source[i].sourceID[0]]
      };
      var windowData = {
        x: config.windowConfig[data.presetName][data.source[i].windowID].x,
        y: config.windowConfig[data.presetName][data.source[i].windowID].y,
        width: config.windowConfig[data.presetName][data.source[i].windowID].width,
        height: config.windowConfig[data.presetName][data.source[i].windowID].height
      };

      console.log(windowData, sourceData);
      restApi.httpRequest(sourceData, 'PATCH', '/api/v1/walls/' + config.mipConfig.WallName + '/windows/window?x=' + windowData.x + '&y=' + windowData.y + '&width=' + windowData.width + '&height=' + windowData.height, function (data) {
        if (!data.success) {
          console.log(data);
        } else {
          console.log(data.messages);
        }
      });
    } else {
      if (isPlaying) {
        cancelCarousel();
      } else {
        if (!isHasSourceArray) {
          carouselData = [];
          isHasSourceArray = true;
        }
      }

      var windowsourceData = {
        x: config.windowConfig[data.presetName][data.source[i].windowID].x,
        y: config.windowConfig[data.presetName][data.source[i].windowID].y,
        width: config.windowConfig[data.presetName][data.source[i].windowID].width,
        height: config.windowConfig[data.presetName][data.source[i].windowID].height,
        source: data.source[i].sourceID
      };
      carouselData.push(windowsourceData);
    }
  }

  //如果存在多个信号源情况执行轮询
  if (isHasSourceArray) {
    //轮询前先执行一次 
    for (var j = 0; j < carouselData.length; j++) {
      var newdata = {
        x: carouselData[j].x,
        y: carouselData[j].y,
        width: carouselData[j].width,
        height: carouselData[j].height,
        source: carouselData[j].source[count % carouselData[j].source.length]
      };

      restApi.httpRequest({
        source: newdata.source
      }, 'PATCH', '/api/v1/walls/' + config.mipConfig.WallName + '/windows/window?x=' + newdata.x + '&y=' + newdata.y + '&width=' + newdata.width + '&height=' + newdata.height, function (data) {
        if (!data.success) {
          console.log(data);
        } else {
          console.log(data.messages);
        }
      });
    }
    startCarousel();
  }
  res.end();
});

router.post('/openTemWindow', function (req, res) {
  var data = {
    x: req.body.x,
    y: req.body.y,
    width: req.body.width,
    height: req.body.height,
    source: config.sourceConfig[req.body.source]
  };
  console.log(data);
  restApi.httpRequest(data, 'POST', '/api/v1/walls/' + config.mipConfig.WallName + '/windows/window', function (data) {
    if (!data.success) {
      res.send(data);
      res.end();
    } else {
      res.send(data.messages);
      res.end();
    }
  });
});

router.post('/closeWindow', function (req, res) {
  var data = req.body;
  console.log(data);
  restApi.httpRequest({}, 'DELETE', '/api/v1/walls/' + config.mipConfig.WallName + '/windows/window?x=' + data.x + '&y=' + data.y + '&width=' + data.width + '&height=' + data.height, function (data) {
    if (!data.success) {
      res.send(data);
      res.end();
    } else {
      res.send(data.messages);
      res.end();
    }
  });
});

router.post('/pauseCarousel', function (req, res) {
  if (!isPlaying)
    res.end();
  else {
    pauseCarousel();
    res.end();
  }
});

router.post('/continueCarousel', function (req, res) {
  if (isPlaying)
    res.end();
  else {
    startCarousel();
    res.end();
  }
});

module.exports = router;