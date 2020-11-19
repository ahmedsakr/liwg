var archiver = require('archiver');
var fs = require('fs');

exports.createDistDirectory = function () {
    let dir = './test/dist';
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }
}

exports.createDirectory = function (dirName) {
    if (!fs.existsSync(dirName)){
        fs.mkdirSync(dirName);
    }
}

exports.compressDirectory = function (src, out) {
  const archive = archiver('zip', { zlib: { level: 9 } });
  const stream = fs.createWriteStream(out);

  return new Promise((resolve, reject) => {
    archive
    .directory(src, false)
    .on('error', err => reject(err))
    .pipe(stream);

    stream.on('close', () => resolve());
    archive.finalize();
  });
}