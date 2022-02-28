//import * as myfn from "./kq";
const { jsxEmptyExpression } = require('@babel/types');
const { doesNotMatch } = require('assert');
const buildHTML = require('./kq');
const axios = require('axios');
//const jest = require('jest');
const { describe } = require('yargs');
const { test, expect } = require('@jest/globals');
//jest.mock('axios');
jest.setTimeout(10000);
// it('Testing data', async (done) => {
//     axios.get.mockResolvedValue({
//       data: [
//         {
//           fact : "All dogs can be traced back 40 million years ago to a weasel-like animal called the Miacis which dwelled in trees and dens. The Miacis later evolved into the Tomarctus, a direct forbear of the genus Canis, which includes the wolf and jackal as well as the dog.",
//         },
//         {
//           fact : "Apple and pear seeds contain arsenic, which may be deadly to dogs."
//         }
//       ]
//     });
  
//     //const data = await getData();
//     return getData().then((data) => {expect(data.length).toEqual('2');
//     done();
// });
//     });
var result = [{
    "name": "Åland Islands",
    "topLevelDomain": [],
    "alpha2Code": "AX",
    "alpha3Code": "ALA",
    "callingCodes": [
    "358"
    ],
    "capital": "Mariehamn",
    "altSpellings": [
    "AX",
    "Aaland",
    "Aland",
    "Ahvenanmaa"
    ],
    "subregion": "Northern Europe",
    "region": "Europe",
    "population": 28875,
    "latlng": [
    60.116667,
    19.9
    ],
    "demonym": "Ålandish",
    "area": 1580,
    "timezones": [
    "UTC+02:00"
    ],
    "nativeName": "Åland",
    "numericCode": "248",
    "flags": {
    "svg": "https://flagcdn.com/ax.svg",
    "png": "https://flagcdn.com/w320/ax.png"
    },
    "currencies": [
    {
    "code": "EUR",
    "name": "Euro",
    "symbol": "€"
    }
    ],
    "languages": [
    {
    "iso639_1": "sv",
    "iso639_2": "swe",
    "name": "Swedish",
    "nativeName": "svenska"
    }
    ],
    "translations": {
    "br": "Ilhas de Aland",
    "pt": "Ilhas de Aland",
    "nl": "Ålandeilanden",
    "hr": "Ålandski otoci",
    "fa": "جزایر الند",
    "de": "Åland",
    "es": "Alandia",
    "fr": "Åland",
    "ja": "オーランド諸島",
    "it": "Isole Aland",
    "hu": "Åland-szigetek"
    },
    "flag": "https://flagcdn.com/ax.svg",
    "regionalBlocs": [
    {
    "acronym": "EU",
    "name": "European Union"
    }
    ],
    "independent": false
    },
    ]

// describe("Testing data " , ()=>{
//     test('Data should not be empty' , () => {
//         //var result = await getData().resolve(true);
//        var data =  await getData();
//     //     return getData().then((data)=>{
//     //     expect(data.statusCode).toBe(200); 
//     //     done();
//     //   });
//     setTimeout(() => {
//         expect(data.statusCode).toBe(200);
//         done();
//       }, 2000);
           
//     });
// });

    test('buildHTML should return some value ' , () =>{
        var initVal="";
        var toDisplay = buildHTML(result , initVal);
        expect(toDisplay).not.toBeNull();
    });
// it('Data should not be empty', async () => {
//     const data = await getData();  // Run the function
//     expect(data).toEqual('200');  // Make an assertion on the result
//   });