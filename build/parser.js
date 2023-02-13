"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseMedalQuantity = exports.parseCountryName = exports.parseCountryData = exports.parseCountriesQuantity = void 0;
const constants_1 = require("./constants");
function safeParseInt(num) {
    const integer = parseInt(num);
    if (Number.isNaN(integer)) {
        throw new Error(`String: '${num}' is not an integer.`);
    }
    return integer;
}
function parseCountriesQuantity(inputLines) {
    const num = inputLines[constants_1.INDEX.COUNTRIES_QUANTITY];
    const quantity = safeParseInt(num);
    if (quantity < 0 || quantity > constants_1.MAX_COUNTRIES_QUANTITY) {
        throw new Error('Number of countries is out of bounds.');
    }
    return quantity;
}
exports.parseCountriesQuantity = parseCountriesQuantity;
function parseCountryData(inputLine) {
    return inputLine.split(' ');
}
exports.parseCountryData = parseCountryData;
function parseCountryName(countryData) {
    const name = countryData[constants_1.INDEX.COUNTRY_NAME];
    if (name.length > constants_1.MAX_COUNTRY_NAME_LENGTH) {
        throw new Error(`Country name '${name}' is too long.`);
    }
    return name;
}
exports.parseCountryName = parseCountryName;
function parseMedalQuantity(countryData, type) {
    const medals = safeParseInt(countryData[constants_1.INDEX[type]]);
    if (medals < 0 || medals > constants_1.MAX_MEDALS_QUANTITY) {
        throw new Error(`Number of medals of type '${type}' is out of bounds.`);
    }
    return medals;
}
exports.parseMedalQuantity = parseMedalQuantity;
//# sourceMappingURL=parser.js.map