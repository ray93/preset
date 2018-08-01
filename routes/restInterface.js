var http = require('http');
var config = require('../config').mipConfig;
var logger = require('./mylogger').getLogger('SHService');

var httpRequest = function (requestdata, method, url, callback) {
    requestdata = JSON.stringify(requestdata);
    logger.info("http request data:" + requestdata);

    var options = {
        hostname: config.MIP_SERVER_IP,
        port: config.MIP_SERVER_PORT,
        headers: {
            'Content-Type': 'application/json;charset=UTF-8', //"application/json;charset=UTF-8"  x-www-form-urlencoded
            'Content-Length': Buffer.byteLength(requestdata)
        },
        path: url,
        method: method
    };

    logger.info("http request options:" + JSON.stringify(options));

    var httpreq = http.request(options, function (httpres) {
        if (httpres.statusCode == '200') {
            logger.info("http request success.");
        }
        var chunks = [];
        var size = 0;
        httpres.on('data', function (data) {
            chunks.push(data);
            size += data.length;
            //mylogger.info("http request returned frag data: " + data);
        });
        httpres.on('end', function () {
            var data = null;
            switch (chunks.length) {
                case 0:
                    data = new Buffer(0);
                    break;
                case 1:
                    data = chunks[0];
                    break;
                default:
                    data = new Buffer(size);
                    for (var i = 0, pos = 0, l = chunks.length; i < l; i++) {
                        var chunk = chunks[i];
                        chunk.copy(data, pos);
                        pos += chunk.length;
                    }
                    break;
            }

            try {
                var dataObj = JSON.parse(data);
                if (!dataObj.error) {
                    callback({
                        success: true,
                        restReturnedData: dataObj
                    });
                } else {
                    callback({
                        success: false,
                        messages: dataObj.message
                    });
                }
            } catch (err) {
                callback({
                    success: false,
                    messages: err.message
                });
            }
        });
    });
    httpreq.on('error', function (e) {
        logger.info("http request failed: " + JSON.stringify(e));
        callback({
            success: false,
            messages: JSON.stringify(e)
        });
    });
    httpreq.write(requestdata);
    httpreq.end();
};

module.exports.httpRequest = httpRequest;