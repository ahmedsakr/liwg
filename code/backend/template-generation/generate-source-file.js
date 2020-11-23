let Handlebars = require('handlebars');
let fs = require('fs');
const filePath = process.env.TEMPLATE_PATH || __dirname + '/test/';

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
exports.convertTemplate = function (data) {
    return new Promise((resolve, reject) => {
        if (!data.template) {
            reject('No template provided.');
        }
        readFile(filePath + data.template)
        .then(template => { 
            template = Handlebars.compile(template);
            result = template(data);

            fs.writeFile(filePath + 'generated-file.js', result, function (err) {
                if (err) {
                    reject(err);
                }
                resolve(filePath + 'generated-file.js');
            });
        });
    });
}