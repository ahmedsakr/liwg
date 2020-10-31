let Handlebars = require('handlebars');
let fs = require('fs');
const filePath = process.env.TEMPLATE_PATH || __dirname + '/test/';
const logger = process.env.DEVELOPMENT || false;

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
 *  indicated using {{name}} in the template.
 * 
 * Parameters:
 *  template: String - The template file going to be converted
 *  data: JSON - The data being inserted into the template
 *  fileType: String - The resulting file type (js / html)
 */
exports.convertTemplate = function (template, data, fileType) {
    const promises = [
        readFile(filePath + data),
        readFile(filePath + template)
    ];

    Promise.all(promises).then(result => {
        let data = JSON.parse(result[0]);
        let template = result[1];
        if (logger) {
            console.log('Template ===> ', template);
            console.log('Data ===> ', data);
        }

        template = Handlebars.compile(template);
        result = template(data);
        if (logger) console.log('Conversion Result ===> ', result);

        fs.writeFile(filePath +  'generated-file.' + fileType, result, function (err) {
            if (err) throw err;
        });
    });
}