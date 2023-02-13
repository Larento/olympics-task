"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const process_1 = require("process");
const constants_1 = require("./constants");
const parser_1 = require("./parser");
const country_1 = require("./country");
const inputLines = fs
    .readFileSync(process_1.argv[2] || constants_1.DEFAULT_INPUT_FILE_PATH, 'utf-8')
    .split('\n');
for (const line of inputLines) {
    console.log(line);
}
console.log();
const countries = [];
const countriesQuantity = parser_1.parseCountriesQuantity(inputLines);
for (let i = constants_1.INDEX.COUNTRIES_QUANTITY + 1; i < countriesQuantity + 1; i++) {
    const data = parser_1.parseCountryData(inputLines[i]);
    const name = parser_1.parseCountryName(data);
    const gold = parser_1.parseMedalQuantity(data, country_1.MedalTypes.GOLD);
    const silver = parser_1.parseMedalQuantity(data, country_1.MedalTypes.SILVER);
    const bronze = parser_1.parseMedalQuantity(data, country_1.MedalTypes.BRONZE);
    countries.push(new country_1.Country(name, gold, silver, bronze));
}
let countriesMap = new Map();
for (const country of countries) {
    countriesMap.set(country.name, country.score);
}
const sortedCountries = [...countriesMap.entries()]
    .sort((prev, next) => {
    // Sort by score descending
    if (next[1] < prev[1]) {
        return -1;
    }
    // Sort by country name ascending if scores are equal
    if (next[1] === prev[1] && prev[0] < next[0]) {
        return -1;
    }
    return 0;
})
    .map((x) => x[0]);
fs.writeFileSync(process_1.argv[3] || constants_1.DEFAULT_OUTPUT_FILE_PATH, sortedCountries.join('\n'));
for (const country of sortedCountries) {
    console.log(country);
}
//# sourceMappingURL=index.js.map