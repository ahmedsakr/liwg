const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;
var cors = require('cors');
let converter = require('../scripts/generate-source-file.js');

app.use(cors());
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.post('/generate-file', (request, response) => {
    converter.convertTemplate(request.body)
    .then(file => {
        response.download(file, (err) => {
            if (err) {
                console.log('Error downloading file: ', err);
            }
        });
    })
    .catch(error => {
        console.log('Error: ', error);
        response.json({ error: error });
    })
});

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
});