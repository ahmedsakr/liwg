let Handlebars = require('handlebars');
let fs = require('fs');
const { exec } = require("child_process");
const ANALYTICS = process.env.ANALYTICS || false;

function readFile(file) {
    return new Promise((resolve, reject) => {
        fs.readFile(file, 'utf8', function (err, data) {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

/** convertTemplate() utilizes Handlebar.js to replace placeholders in templates with data,
 *  indicated using {{name}} in the template. The purpose of this function is to replace .js
 *  template tags with data.
 * 
 * Parameters:
 *  data: JSON - The data being inserted into the template
 *  Note: data.template is a required attribue of the JSON object
 */
exports.convertTemplate = function (data, template) {
    let startTime = Date.now();
    return new Promise((resolve, reject) => {
        if (!template) {
            reject('No template provided.');
        }
        readFile(template)
        .then(templateContents => { 
            templateContents = Handlebars.compile(templateContents);
            result = templateContents(data);
            fs.writeFile(template, result, function (err) {
                if (err) {
                    reject(err);
                }
                if (ANALYTICS) {
                    console.log('Convert template took: ', (Date.now() - startTime) / 1000);
                }
                resolve(template);
            });
        });
    });
}

exports.generateStaticHTML = function (dirName) {
    let startTime = Date.now();
    return new Promise((resolve, reject) => {
        exec(`cd ${dirName} && npm i && npm run build`, (error, stdout) => {
            if (error) {
                reject(error);
            } else {
                if (ANALYTICS) {
                    console.log('Generating HTML took: ', (Date.now() - startTime) / 1000);
                }
                resolve(stdout);
            }
        });
    });
}