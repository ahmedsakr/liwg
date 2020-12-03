const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;
const cors = require('cors');
const converter = require('../scripts/generate-source-file.js');
const liwgFs = require('../scripts/liwg-fs.js');
const { v4: uuidv4 } = require('uuid');
const path = require('path');

app.use(cors());
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.post('/generate-file', async (request, response) => {
    let dirName = uuidv4();
    let tempDir = path.join(__dirname, 'dist', dirName);

    const { body } = request;
    const { mode } = body;

    if (!mode) { 
        return response.send({ error: 'No mode selected (html/react)' });
    }

    try {
        await liwgFs.createDistDirectory();
        await liwgFs.createDirectory(tempDir);
        await liwgFs.copyTemplateFiles(__dirname + '/../../templates', tempDir);
        await converter.convertTemplate(body, tempDir + '/src/views/minimalist/index.js');

        if (mode === 'html') {
            await converter.generateStaticHTML(tempDir);
            await liwgFs.compressDirectory(tempDir + '/build', tempDir + '.zip');
        } else {
            await liwgFs.compressDirectory(tempDir, tempDir + '.zip');
        }
    } catch (error) {
        console.log('Internal Server Error: ', error);
        return response.send({ error: error });
    } finally {
        response.download(tempDir + '.zip', 'website-template.zip');
        await liwgFs.removeDirectory(tempDir);
        await liwgFs.removeDirectory(tempDir + '.zip');
    }
});

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
});