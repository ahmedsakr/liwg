let Handlebars = require('handlebars');
let fs = require('fs');

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
   return new Promise((resolve, reject) => {
      if (!template) {
         reject('No template provided.');
      }
      readFile(template).then((templateContents) => {
         templateContents = Handlebars.compile(templateContents);
         let result = templateContents(data);
         fs.writeFile(template, result, function (err) {
            if (err) {
               reject(err);
            }
            console.log();
            resolve(template);
         });
      });
   });
};
