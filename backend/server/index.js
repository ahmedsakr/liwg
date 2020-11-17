const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
var cors = require('cors');

let converter = require('../template-generation/generate-source-file.js');

app.use(cors());
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

/**
 * Pass the template name in request.headers.template
 * Example to run the test file: "key: test-template.js"
 */
app.post('/generate-file', (request, response) => {
    converter.convertTemplate(request.headers.template, request.body);
    response.json({ info: 'Node.js, Express, and O-Auth' })
})

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})