import {
	INDEX,
	MAX_COUNTRIES_QUANTITY,
	MAX_COUNTRY_NAME_LENGTH,
	MAX_MEDALS_QUANTITY,
} from './constants';
import { MedalTypes, MedalQuantity } from './country';

function safeParseInt(num: string): number {
	const integer = parseInt(num);
	if (Number.isNaN(integer)) {
		throw new Error(`String: '${num}' is not an integer.`);
	}
	return integer;
}

export function parseCountriesQuantity(inputLines: string[]): number {
	const num = inputLines[INDEX.COUNTRIES_QUANTITY];
	const quantity = safeParseInt(num);
	if (quantity < 0 || quantity > MAX_COUNTRIES_QUANTITY) {
		throw new Error('Number of countries is out of bounds.');
	}
	return quantity;
}

export function parseCountryData(inputLine: string): string[] {
	return inputLine.split(' ');
}

export function parseCountryName(countryData: string[]): string {
	const name = countryData[INDEX.COUNTRY_NAME];
	if (name.length > MAX_COUNTRY_NAME_LENGTH) {
		throw new Error(`Country name '${name}' is too long.`);
	}
	return name;
}

export function parseMedalQuantity(
	countryData: string[],
	type: MedalTypes
): number {
	const medals: MedalQuantity = safeParseInt(
		countryData[INDEX[type]]
	);
	if (medals < 0 || medals > MAX_MEDALS_QUANTITY) {
		throw new Error(
			`Number of medals of type '${type}' is out of bounds.`
		);
	}
	return medals;
}
