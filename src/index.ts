import * as fs from 'fs';
import { argv } from 'process';
import {
	INDEX,
	DEFAULT_INPUT_FILE_PATH,
	DEFAULT_OUTPUT_FILE_PATH,
} from './constants';
import {
	parseCountriesQuantity,
	parseCountryData,
	parseCountryName,
	parseMedalQuantity,
} from './parser';
import { Country, MedalTypes } from './country';

const inputLines = fs
	.readFileSync(argv[2] || DEFAULT_INPUT_FILE_PATH, 'utf-8')
	.split('\n');

for (const line of inputLines) {
	console.log(line);
}
console.log();

const countries: Country[] = [];
const countriesQuantity = parseCountriesQuantity(inputLines);

for (
	let i = INDEX.COUNTRIES_QUANTITY + 1;
	i < countriesQuantity + 1;
	i++
) {
	const data = parseCountryData(inputLines[i]);
	const name = parseCountryName(data);
	const gold = parseMedalQuantity(data, MedalTypes.GOLD);
	const silver = parseMedalQuantity(data, MedalTypes.SILVER);
	const bronze = parseMedalQuantity(data, MedalTypes.BRONZE);
	countries.push(new Country(name, gold, silver, bronze));
}

let countriesMap = new Map<string, number>();
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

fs.writeFileSync(
	argv[3] || DEFAULT_OUTPUT_FILE_PATH,
	sortedCountries.join('\n')
);

for (const country of sortedCountries) {
	console.log(country);
}
