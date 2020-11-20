/**
 * A collection of LIWG specific file system operations
 */

var archiver = require('archiver');
var fs = require('fs');
var rimraf = require("rimraf");

exports.createDistDirectory = function () {
    let dir = './test/dist';
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
}

exports.copyTemplateFiles = function (dirName, template) {
    return new Promise((resolve, reject) => {
        fs.copyFile(template, dirName, (error) => {
            if (error) {
                reject(error)
            } else {
                resolve()
            }
        });
    });
}

exports.removeDirectory = function (dirName) {
    return new Promise((resolve, reject) => {
        rimraf(dirName, (error) => {
            if (error) {
                reject(error)
            } else {
                resolve()
            }
        });
    });
}

exports.createDirectory = function (dirName) {
    return new Promise((resolve, reject) => {
        if (!fs.existsSync(dirName)) {
            fs.mkdirSync(dirName)
            resolve()
        } else {
            reject('Directory already exists');
        }
    });

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