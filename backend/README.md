Backend
===

This is where the backend logic of LIWG will live, including the LinkedIn API, 
express.js server, and template placeholder replacement and generation.

Local Setup
===

### Testing the conversion of templates to `.js` files:

**Direct testing of `convertTemplate` function:** 
- `cd backend`
- `npm i`
- `npm test`

**Note:** This will generate file `test/generated-file.js`

**Indirect testing through the `express` server using _Postman_ 📪::**
- `cd backend`
- `npm i`
- `node server/index.js`
- Optional: `DEVELOPMENT=true node server/index.js` for logging.
```
POST to: http://localhost:5000/generate-file
BODY: 
{
    "template": "test-template.js",
    "name": "Josh",
    "hometown": "Ottawa, ON, Canada",
    "kids": [
        {
            "name": "Ahmed Sakr",
            "age": "22"
        },
        {
            "name": "Michael",
            "age": "23"
        }
    ]
}
```
**Note:** This will also generate file `test/generated-file.js`, the template 
file is specified using the following: `"template": "test-template.js"` in the body of the post request


