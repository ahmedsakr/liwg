/**
 * A collection of LIWG specific file system operations
 */

var archiver = require('archiver');
var fs = require('fs');
var rimraf = require("rimraf");

function createDistDirectory() {
    let dir = './dist';
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
}

function copyTemplateFiles(dirName, template) {
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

function removeDirectory(dirName) {
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

function createDirectory(dirName) {
    return new Promise((resolve, reject) => {
        if (!fs.existsSync(dirName)) {
            fs.mkdirSync(dirName)
            resolve()
        } else {
            reject('Directory already exists');
        }
    });

}

function compressDirectory(src, out) {
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

exports.createDistDirectory = createDistDirectory;
exports.copyTemplateFiles = copyTemplateFiles;
exports.removeDirectory = removeDirectory;
exports.createDirectory = createDirectory;
exports.compressDirectory = compressDirectory;