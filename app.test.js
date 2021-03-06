
const { jsxEmptyExpression } = require('@babel/types');
const { doesNotMatch } = require('assert');
const buildHTML = require('./app');
const axios = require('axios');
const { describe } = require('yargs');
const { test, expect } = require('@jest/globals');
jest.setTimeout(10000);

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



    test('buildHTML should return some value ' , () =>{
        var initVal="";
        var toDisplay = buildHTML(result , initVal);
        expect(toDisplay).not.toBeNull();
    });
