const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;
const cors = require('cors');
const converter = require('../scripts/generate-source-file.js');
const liwgFs = require('../scripts/compress-source-files.js');
const { v4: uuidv4 } = require('uuid');

app.use(cors());
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.post('/generate-file', async (request, response) => {
    let dirName = uuidv4();
    const { body } = request;
    try {
        await liwgFs.createDirectory('dist/' + dirName);
        await liwgFs.copyTemplateFiles('./dist/' + dirName + '/' + body.template, '../test/' + body.template);
        await converter.convertTemplate(body, './dist/' + dirName + '/' + body.template);
        await liwgFs.compressDirectory('dist/' + dirName, 'dist/' + dirName + '.zip');
        await liwgFs.removeDirectory('dist/' + dirName);
        response.download('./dist/' + dirName + '.zip', 'website-template.zip');
    } catch (error) {
        console.log('Error: ', error);
        response.json({ error: error });
    }
});

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
});