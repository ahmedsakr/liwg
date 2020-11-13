let converter = require('../generate-source-file.js');
let data = {
    "template": "test-template.js",
    "name": "Alan",
    "hometown": "Somewhere, TX",
    "kids": [
        {
            "name": "Jimmy",
            "age": "12"
        },
        {
            "name": "Sally",
            "age": "4"
        }
    ]
}

converter.convertTemplate(data);