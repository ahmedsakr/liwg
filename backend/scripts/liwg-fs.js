/**
 * A collection of LIWG specific file system operations
 */

var archiver = require('archiver');
var fs = require('fs');
var rimraf = require("rimraf");
var ncp = require('ncp').ncp;
ncp.limit = 16;

const ANALYTICS = process.env.ANALYTICS || false;

function createDistDirectory() {
    let dir = __dirname + '/../server/dist';
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
}

function copyTemplateFiles(source, destination) {
    let startTime = Date.now();
    return new Promise((resolve, reject) => {
        ncp(source, destination, function (error) {
            if (error) {
                reject(error)
            } else {
                if (ANALYTICS) {
                    console.log('Copy template directory took: ', (Date.now() - startTime) / 1000);
                }
                resolve()
            }
        });
    });
}

function removeDirectory(dirName) {
    let startTime = Date.now();
    return new Promise((resolve, reject) => {
        rimraf(dirName, (error) => {
            if (error) {
                reject(error)
            } else {
                if (ANALYTICS) {
                    console.log('Removing temp directory took: ', (Date.now() - startTime) / 1000);
                }
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
    let startTime = Date.now();
    const archive = archiver('zip', { zlib: { level: 9 } });
    const stream = fs.createWriteStream(out);

    return new Promise((resolve, reject) => {
        archive
        .directory(src, false)
        .on('error', err => reject(err))
        .pipe(stream);

        stream.on('close', () => {
            if (ANALYTICS) {
                console.log('Compress directory took: ', (Date.now() - startTime) / 1000);
            }
            resolve();
        });
        archive.finalize();
    });
}

exports.createDistDirectory = createDistDirectory;
exports.copyTemplateFiles = copyTemplateFiles;
exports.removeDirectory = removeDirectory;
exports.createDirectory = createDirectory;
exports.compressDirectory = compressDirectory;