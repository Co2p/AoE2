import '../styling/layout.scss';
import { civs } from '../data/civs.json';
import { specialities } from '../data/specialities.json';
import { uniqueUnits } from '../data/uniqueUnits.json';
import { civDataModel, ageDataModel, Civ } from './civ';


/**
 * @param name Visible name in the dropdown
 * @param id Identifier of the dropdown item
 */
interface dropdownItem {
    name:string,
    id: number
}


const civData = new Civ(civs as civDataModel[])

/**
 * 
 * @param {HTMLElement} dropdownElement Element to append options into
 * @param {dropdownItem[]} dropdownItems Array of items to use when creating the dropdown, elements have attributes "id" and "name"
 */
function populateDropdown(dropdownElement: HTMLElement, dropdownItems: dropdownItem[]) {
    dropdownItems.forEach(dropdownItem => {
        let option = document.createElement("option") as HTMLOptionElement;
        option.className = "dropdown-item";
        option.innerText = dropdownItem.name;
        option.value = dropdownItem.id.toString();
        dropdownElement.appendChild(option);
    });
}

function emptyCivInfoHTML() {
    let g = document.getElementById("grid");
    if (g) {
        g.innerHTML = "";
    }
}

/**
 * 
 * @param {civ} civData 
 */
function createCivInfoHTML(civ: civDataModel) {
    let g = document.getElementById("grid") as HTMLElement;
    const headerSize = "h2"

    let civDiv = document.createElement("div");
    civDiv.className = "civcontainer";

    const civInfoStruct: [HTMLElement[]] = [[header(civ.name, "h1")]];

    const technology = civ.technology ?? { castle: { name: "", description: "", gold_cost: 0, food_cost: 0, stone_cost: 0, wood_cost: 0, research_time: 0 }, imperial: { name: "", description: "", gold_cost: 0, food_cost: 0, stone_cost: 0, wood_cost: 0, research_time: 0 } }
    const civBonus = civ.CivBonus ?? [""]


    const uniqueUnitHeader = header("Unique Units", headerSize);
    const teamBonusHeader = header("Team bonus", headerSize);
    const civilizationBonusHeader = header("Civilization bonuses", headerSize);
    const specialityHeader = header("Specialty", headerSize);
    
    const specialityList = createUnorderedListFromArray(getDataFromArrayForIds(civ.speciality ?? [], specialities).map(x => x?.name));
    const uniqueUnitList = createUnorderedListFromArray(getDataFromArrayForIds(civ.UU ?? [], uniqueUnits).map(uniqueUnit => uniqueUnit.name));

    const teamBonus = document.createElement("p");
    teamBonus.innerText = civ.TeamBonus ?? "";
    const civilizationBonusList = createUnorderedListFromArray(civBonus);

    civInfoStruct.push([specialityHeader, specialityList]);
    civInfoStruct.push([uniqueUnitHeader, uniqueUnitList]);
    civInfoStruct.push(createAgeTechComponent("Castle", technology.castle, headerSize));
    civInfoStruct.push(createAgeTechComponent("Imperial", technology.imperial, headerSize));
    civInfoStruct.push([teamBonusHeader, teamBonus]);
    civInfoStruct.push([civilizationBonusHeader, civilizationBonusList]);

    civInfoStruct.forEach((info) => {
        civDiv.appendChild(createDivOfAllElementsInArray(info, "item"));
    })
    g.appendChild(civDiv);
}

function createAgeTechComponent(age: ("Castle" | "Imperial"), ageData: ageDataModel, headerSize: HeaderSize) {
    const castleUniqueTechHeader = header(`${age} Unique Technologies: ${ageData.name}`, headerSize);
    const castleUniqueTech = document.createElement("p");
    castleUniqueTech.innerText = ageData.description;
    const castleUniqueTechCost = createCostDiv(ageData);
    return [ castleUniqueTechHeader, castleUniqueTech, castleUniqueTechCost ];
}

/**
 * 
 * @param {number[]} ids 
 * @param {any[]} array 
 */
function getDataFromArrayForIds(ids: number[], array: dropdownItem[]) {
    let matchingItems: civDataModel[] = [];
    ids.forEach((id) => {
        if (idIsDefined(id)) {
            const civ = array.find(item => Number(item.id) === id);
            if(civ){
                matchingItems.push(civ);
            }
        }
    });
    return matchingItems;
}

/**
 * Creates a div and appends all elemnts in the array into that div
 * @param {HTMLElement[]} elements Header element
 * @param {string} parentDivClass class to append to the parent
 */
function createDivOfAllElementsInArray(elements: HTMLElement[], parentDivClass: string) {
    let parentDiv = document.createElement("li");
    parentDiv.className = parentDivClass;
    elements.forEach(element => parentDiv.appendChild(element));
    return parentDiv;
}

type resourceCost = {
    gold_cost: number | undefined;
    wood_cost: number | undefined;
    food_cost: number | undefined;
    stone_cost: number | undefined;
    research_time: number | undefined;
};

/**
 * 
 * @param {resourceCost} cost 
 */
function createCostDiv(cost: resourceCost) {
    let parentDiv = document.createElement("div");
    parentDiv.className = "cost-div"
    const costList = [cost.gold_cost, cost.wood_cost, cost.stone_cost, cost.food_cost, cost.research_time];
    const resource = ["Gold", "Wood", "Stone", "Food", "seconds Research"];
    costList.forEach((c, i) => {
        if (c !== 0) {
            const resourceDiv = createPill(`${c} ${resource[i]}`, `resource pill ${resource[i].toLowerCase()}`);
            parentDiv.appendChild(resourceDiv);
        }
    });
    return parentDiv;
}

/**
 * 
 * @param text 
 * @param classNames 
 * @returns 
 */
function createPill(text: string, classNames: string) {
    const pill = document.createElement("p");
    pill.innerText = text;
    pill.className = classNames;
    return pill;
}


/**
 * Make a html list node from a array
 * @param {string[]} array list of 
 * @returns {HTMLUListElement} A HTML list of items
 */
function createUnorderedListFromArray(array: string[]) {
    let list = document.createElement("ul");
    array.forEach((item) => {
        let element = document.createElement("li",);
        element.innerText = item;
        list.appendChild(element);
    });
    return list;
}

type HeaderSize = ("h1" | "h2" | "h3" | "h4" | "h5" | "h6");

/**
 * 
 * @param {string} text Text to display in the header
 * @param {string} size Html header definition, ie. H1, H2, H3 etc.
 * @returns {HTMLHeadingElement} Header element
 */
function header(text: string, size: HeaderSize): HTMLHeadingElement {
    const header = document.createElement(size);
    header.innerText = text;
    return header;
}

/**
 * Sorted accoring to name, sorts item with id -1 to be at the top
 * id -1 should be the "no selection"-item
 * @param {dropdownItem[]} ddlItems Dropdown items
 */
function sortDropdown(ddlItems: dropdownItem[]): dropdownItem[] {
    return ddlItems.sort((a, b) => {
        if (idIsUnDefined(Number(a.id))) {
            return -1;
        }
        return a.name < b.name ? -1 : 1
    });
}

/**
 * Creates a Civ HTML div for each civ.id that matches
 * @param {number} civId 
 */
function createCivInfoHTMLUsingCivId(civId: number) {
    emptyCivInfoHTML();
    if (idIsDefined(civId)) {
        civs.find((civ: civDataModel) => {
            if (civ.id === Number(civId)) {
                createCivInfoHTML(civ);
            }
        });
    }
}


function formatTechnologyString(technologyAge: ageDataModel) {
    return `${technologyAge.description}`
}

function civDropdown() {
    let civDropdown = document.getElementById("civ-dropdown");
    if (civDropdown) {
        civDropdown.onchange = (event) => {
            const civId = (event.target as HTMLSelectElement).value;
            createCivInfoHTMLUsingCivId(Number(civId));
        };
        populateDropdown(civDropdown, sortDropdown(civs));
    }
}

function techDropdown() {
    let techDropdown = document.getElementById("tech-dropdown");
    if (techDropdown) {
        techDropdown.onchange = (event) => {
            const civId = (event.target as HTMLSelectElement).value;
            createCivInfoHTMLUsingCivId(Number(civId));
        };
        populateDropdown(techDropdown, sortDropdown(getAllTechnologies()));
    }
}

function teamBonusDropdown() {
    let teamBonusDropdown = document.getElementById("team-bonus-dropdown");
    if (teamBonusDropdown) {
        teamBonusDropdown.onchange = (event) => {
            const civId = (event.target as HTMLSelectElement).value;
            createCivInfoHTMLUsingCivId(Number(civId));
        };
        populateDropdown(teamBonusDropdown, sortDropdown(getAllTeamBonuses()));
    }
}

function getAllTeamBonuses() {
    let ddlItems:dropdownItem[] = [];
    civs.forEach((x: civDataModel) => {
        if (idIsDefined(x.id)) {
            ddlItems.push({name: x.TeamBonus ?? "", id: x.id});
        }
        else {
            const noSelectionElement: dropdownItem = {
                name: x.TeamBonus ?? "",
                id: x.id
            };
            ddlItems.push(noSelectionElement);
        }
    });
    return ddlItems;
}

function getAllTechnologies() {
    let ddlItems:dropdownItem[] = [];

    civs.forEach((x: civDataModel) => {
        if (idIsDefined(x.id)) {
            ddlItems.push({
                id: x.id,
                name: formatTechnologyString(x.technology?.castle as ageDataModel)
            });
            ddlItems.push({
                name: formatTechnologyString(x.technology?.imperial as ageDataModel),
                id: x.id
            });
        }
        else {
            const noSelectionElement: dropdownItem = {
                name: x.technology?.castle.name ?? "",
                id: x.id
            }
            ddlItems.push(noSelectionElement);
        }
    });
    return ddlItems;
}

function specialitiesDropdown(): void {
    let specialitiesDropdown = document.getElementById("specialities-dropdown") as HTMLSelectElement;
    if(specialitiesDropdown) {
        specialitiesDropdown.onchange = (event) => {
            
            const specialityId = (event.target as HTMLSelectElement)?.value;
            emptyCivInfoHTML();
            if (idIsDefined(Number(specialityId))) {
                civData.GetCivBySpecialtyId(Number(specialityId)).forEach(civ => civ && createCivInfoHTML(civ));
            }
        };
        populateDropdown(specialitiesDropdown, specialities);
    }
}

/**
 * True if index is not -1
 * @param {number} id index of a array
 */
function idIsDefined(id: number): boolean {
    return Number(id) !== -1;
}

/** True if index is -1
 * @param {number} index index of a array
 */
function idIsUnDefined(id: number): boolean {
    return Number(id) === -1;
}

let pickDropdown = document.getElementById("pick-dropdown") as HTMLSelectElement;

pickDropdown.onchange = (event) => {
    let specialitiesDropdown = document.getElementById("specialities-dropdown") as HTMLSelectElement;
    let civDropdown = document.getElementById("civ-dropdown") as HTMLSelectElement;
    let techDropdown = document.getElementById("tech-dropdown") as HTMLSelectElement;
    let teamBonusDropdown = document.getElementById("team-bonus-dropdown") as HTMLSelectElement;
    specialitiesDropdown.hidden = (event.target as HTMLOptionElement).value !== "spec";
    techDropdown.hidden = (event.target as HTMLOptionElement).value !== "tech";
    civDropdown.hidden = (event.target as HTMLOptionElement).value !== "civ";
    teamBonusDropdown.hidden = (event.target as HTMLOptionElement).value !== "team-bonus";

    specialitiesDropdown.value = "-1";
    civDropdown.value = "-1";
    techDropdown.value = "-1";
    teamBonusDropdown.value = "-1";
}

specialitiesDropdown();
civDropdown();
techDropdown();
teamBonusDropdown();