export type specialitiesDataModel = {
    name: string,
    id: number
}

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
        castle: ageDataModel,
        imperial: ageDataModel
    };
    speciality?: number[];
    UU?: number[];
    TeamBonus?: string;
    CivBonus?: string[];
};

export class Civ {
    civs: civDataModel[];
    constructor(civs: civDataModel[]) {
        this.civs = civs;
    }

    GetCivById(id: number) {

    }

    GetCivByIds(ids: number[]) {
        let matchingItems: civDataModel[] = [];
        ids.forEach((id) => {
            const civ = this.civs.find(item => Number(item.id) === id);
            if(civ){
                matchingItems.push();
            }
        });
        return matchingItems;
    }

    GetCivBySpecialtyId(id: number) {
        return this.civs.map((civ: civDataModel) => {
            if (civ.speciality) {
                if (civ.speciality.includes(id)) {
                    return civ;
                }
            }
        });
    }
}