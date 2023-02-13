"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Country = exports.MedalCost = exports.MedalTypes = void 0;
var MedalTypes;
(function (MedalTypes) {
    MedalTypes["GOLD"] = "GOLD";
    MedalTypes["SILVER"] = "SILVER";
    MedalTypes["BRONZE"] = "BRONZE";
})(MedalTypes = exports.MedalTypes || (exports.MedalTypes = {}));
var MedalCost;
(function (MedalCost) {
    MedalCost[MedalCost["GOLD"] = 1000] = "GOLD";
    MedalCost[MedalCost["SILVER"] = 100] = "SILVER";
    MedalCost[MedalCost["BRONZE"] = 10] = "BRONZE";
})(MedalCost = exports.MedalCost || (exports.MedalCost = {}));
class Country {
    constructor(name, gold, silver, bronze) {
        this._score = 0;
        this._name = name;
        this._medals = {
            bronze,
            silver,
            gold,
        };
        this.calculateScore();
    }
    calculateScore() {
        this._score += this._medals.gold * MedalCost.GOLD;
        this._score += this._medals.silver * MedalCost.SILVER;
        this._score += this._medals.bronze * MedalCost.BRONZE;
    }
    get name() {
        return this._name;
    }
    get score() {
        return this._score;
    }
}
exports.Country = Country;
//# sourceMappingURL=country.js.map