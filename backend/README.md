# Backend

This is where the backend logic of LIWG will live, including the LinkedIn API,
express.js server, and template placeholder replacement and generation.

# Local Setup

### Testing the conversion of templates to `.js` files:

**Direct testing of `convertTemplate` function:**

-   `cd backend`
-   `npm i`
-   `npm test`

**Note:** This will generate file `test/generated-file.js`

### Testing the Conversion / Compression / Download of Templates through the `express` server using _Postman_ 📪:

-   `cd backend`
-   `npm i`
-   `node server/index.js`

```
POST to: http://localhost:5000/generate-file
BODY:
{
    "template": "test-template.js",
    "person": {
        "firstName": "Josh",
        "lastName": "Campitelli",
        "profilePicture": "https://media-exp1.licdn.com/dms/image/C5603AQGfC_pH2J7Czg/profile-displayphoto-shrink_400_400/0?e=1611187200&v=beta&t=_iFEKj1Ees47yb42OGO2xPBITQT1fE6J8rsCNiVyHNs",
        "job": {
            "companyPicture": "https://media-exp1.licdn.com/dms/image/C560BAQFAwMkfPnYR-g/company-logo_200_200/0?e=1613606400&v=beta&t=qKigYfEUdyaae2xCleg7ERAQ1x7v852K7KU2gFdnEFg",
            "title": "Software Developer",
            "companyName": "i-Sight"
        },
        "education": {
            "institutePicture": "https://media-exp1.licdn.com/dms/image/C4E0BAQH8Hd0st7TvEg/company-logo_200_200/0?e=1613606400&v=beta&t=UW4UV-a_sCpsp9-579VNWI4ZHh5zMQsOiDUwoJwrpR8",
            "degreeTitle": "Software Engineer",
            "instituteName": "Carleton University"
        }
    }
}
```

**Note:** response contains zipped React Template, save template:

<img width="230" alt="Screen Shot 2020-11-27 at 8 43 37 PM" src="https://user-images.githubusercontent.com/24516220/100491420-523e5380-30f1-11eb-8e8f-689c991c478c.png">

**Finally:** Extract zipped directory & run it as you would any other React JS application.
