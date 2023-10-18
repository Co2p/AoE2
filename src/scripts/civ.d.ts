export type specialitiesDataModel = {
    name: string;
    id: number;
};
export type ageDataModel = {
    name: string;
    description: string;
    gold_cost: number;
    food_cost: number;
    stone_cost: number;
    wood_cost: number;
    research_time: number;
};
export type civDataModel = {
    id: number;
    name: string;
    technology?: {
        castle: ageDataModel;
        imperial: ageDataModel;
    };
    speciality?: number[];
    UU?: number[];
    TeamBonus?: string;
    CivBonus?: string[];
};
export declare class Civ {
    civs: civDataModel[];
    constructor(civs: civDataModel[]);
    GetCivById(id: number): void;
    GetCivByIds(ids: number[]): civDataModel[];
    GetCivBySpecialtyId(id: number): (civDataModel | undefined)[];
}
