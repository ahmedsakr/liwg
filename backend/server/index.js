const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;
const cors = require('cors');
const converter = require('../scripts/generate-source-file.js');
const liwgFs = require('../scripts/compress-source-files.js');
const { v4: uuidv4 } = require('uuid');
var path = require('path');

app.use(cors());
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.post('/generate-file', async (request, response) => {
    let dirName = uuidv4();
    let tempDir = path.join('dist', dirName);

    const { body } = request;
    try {
        await liwgFs.createDirectory(tempDir);
        await liwgFs.copyTemplateFiles(tempDir + '/' + body.template, '../test/' + body.template);
        await converter.convertTemplate(body, tempDir + '/' + body.template);
        await liwgFs.compressDirectory(tempDir, tempDir + '.zip');
        await liwgFs.removeDirectory(tempDir);
    } catch (error) {
        console.log('Error: ', error);
        response.json({ error: error });
    } finally {
        response.download('./dist/' + dirName + '.zip', 'website-template.zip');
    }
});

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
});