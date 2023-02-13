export type MedalQuantity = number;

export enum MedalTypes {
	GOLD = 'GOLD',
	SILVER = 'SILVER',
	BRONZE = 'BRONZE',
}

export enum MedalCost {
	GOLD = 1000,
	SILVER = 100,
	BRONZE = 10,
}

export class Country {
	private _name: string;
	private _medals: {
		gold: MedalQuantity;
		silver: MedalQuantity;
		bronze: MedalQuantity;
	};
	private _score: number = 0;

	private calculateScore() {
		this._score += this._medals.gold * MedalCost.GOLD;
		this._score += this._medals.silver * MedalCost.SILVER;
		this._score += this._medals.bronze * MedalCost.BRONZE;
	}

	constructor(
		name: string,
		gold: MedalQuantity,
		silver: MedalQuantity,
		bronze: MedalQuantity
	) {
		this._name = name;
		this._medals = {
			bronze,
			silver,
			gold,
		};
		this.calculateScore();
	}

	get name() {
		return this._name;
	}

	get score() {
		return this._score;
	}
}
