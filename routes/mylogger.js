var fs = require("fs");
var path = require("path");

function mkdir(dirpath, dirname) {
  if (typeof dirname === 'undefined') {
    if (fs.existsSync(dirpath)) {
      return;
    } else {
      mkdir(dirpath, path.dirname(dirpath));
    }
  } else {
    if (dirname !== path.dirname(dirpath)) {
      mkdir(dirpath);
      return;
    }
    if (fs.existsSync(dirname)) {
      fs.mkdirSync(dirpath);
    } else {
      mkdir(dirname, path.dirname(dirname));
      fs.mkdirSync(dirpath);
    }
  }
}

var logger = function (moduleName) {
  this.moduleName = moduleName;
  this.dir = './temp/logs/' + moduleName; //process.cwd() + '/logs/' + moduleName + '/';
  console.log(this.dir);
  try {
    // if (!fs.existsSync(this.dir)) {
    //     fs.mkdirSync(this.dir);
    // }
    mkdir(this.dir);
  } catch (err) {
    console.log("创建日志文件目录失败。", err);
    return undefined;
  }

  this.info = function (infoObj) {
    var info = JSON.stringify(infoObj);
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var millisecond = date.getSeconds();
    var logString = hour + ":" + minute + ":" + millisecond + "  [Info]  " + info;
    this.writeLog(logString);

  }

  this.error = function (message, errorObj) {
    var info = JSON.stringify(errorObj);
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var millisecond = date.getSeconds();
    var logString = hour + ":" + minute + ":" + millisecond + "  [Error]  " + message + "\n\t" + info;
    this.writeLog(logString);
  }

  this.writeLog = function (content) {
    console.log(content);
    var date = new Date();
    var fileName = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + '.log';
    var fileFullPath = this.dir + '/' + fileName;
    var out = fs.createWriteStream(fileFullPath, {
      encoding: "utf8",
      flags: 'a'
    });
    out.on("error", function () {
      console.log("丢失日志。");
    });
    out.end(content + "\n");
  }

}
exports.getLogger = function (moduleName) {
  return new logger(moduleName);
}