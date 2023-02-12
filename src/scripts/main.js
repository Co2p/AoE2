import '../styling/layout.scss';
import { civs } from '../data/civs.json';
import { specialities } from '../data/specialities.json';
import { uniqueUnits } from '../data/uniqueUnits.json';

/** 
 * @typedef Object DropdownItem
 * @property {string} name Visible name in the dropdown
 * @property {number} id Identifier of the dropdown item
 */

/**
 * 
 * @param {HTMLElement} dropdownElement Element to append options into
 * @param {DropdownItem[]} dropdownItems Array of items to use when creating the dropdown, elements have attributes "id" and "name"
 */
function populateDropdown(dropdownElement, dropdownItems) {
    dropdownItems.forEach(dropdownItem => {
        let option = document.createElement("option");
        option.className = "dropdown-item";
        option.innerText = dropdownItem.name;
        option.value = dropdownItem.id;
        option.href = "#";
        dropdownElement.appendChild(option);
    });
}

function emptyCivInfoHTML() {
    let g = document.getElementById("grid");
    g.innerHTML = "";
}

/**
 * 
 * @param {civ} civData 
 */
function createCivInfoHTML(civData) {
    let g = document.getElementById("grid");
    const headerSize = "h2"

    let civDiv = document.createElement("div");
    civDiv.className = "civcontainer";
    civDiv.appendChild(createDivOfAllElementsInArray([header(civData.name, "h1")], "item"));

    const civInfoStruct = [];

    const uniqueUnitHeader = header("Unique Units", headerSize);
    const castleUniqueTechHeader = header(`Castle Unique Technologies: ${civData.technology.castle.name}`, headerSize);
    const imperialUniqueTechHeader = header(`Imperial Unique Technologies: ${civData.technology.imperial.name}`, headerSize);
    const teamBonusHeader = header("Team bonus", headerSize);
    const civilizationBonusHeader = header("Civilization bonuses", headerSize);
    const specialityHeader = header("Specialty", headerSize);

    const specialityList = createUnorderedListFromArray(getDataFromArrayForIds(civData.speciality, specialities).map(x => x.name));
    const uniqueUnitList = createUnorderedListFromArray(getDataFromArrayForIds(civData.UU, uniqueUnits).map(uniqueUnit => uniqueUnit.name));
    const castleUniqueTech = document.createTextNode(civData.technology.castle.description);
    const castleUniqueTechCost = createCostDiv(civData.technology.castle);

    const imperialUniqueTech = document.createTextNode(civData.technology.imperial.description);
    const imperialUniqueTechCost = createCostDiv(civData.technology.imperial);

    const teamBonus = document.createTextNode(civData.TeamBonus);
    const civilizationBonusList = createUnorderedListFromArray(civData.CivBonus);

    civInfoStruct.push([specialityHeader, specialityList]);
    civInfoStruct.push([uniqueUnitHeader, uniqueUnitList]);
    civInfoStruct.push([castleUniqueTechHeader, castleUniqueTech, castleUniqueTechCost]);
    civInfoStruct.push([imperialUniqueTechHeader, imperialUniqueTech, imperialUniqueTechCost]);
    civInfoStruct.push([teamBonusHeader, teamBonus]);
    civInfoStruct.push([civilizationBonusHeader, civilizationBonusList]);

    civInfoStruct.forEach((info) => {
        civDiv.appendChild(createDivOfAllElementsInArray(info, "item"));
    })
    g.appendChild(civDiv);
}

/**
 * 
 * @param {number[]} ids 
 * @param {any[]} array 
 */
function getDataFromArrayForIds(ids, array) {
    let matchingItems = [];
    ids.forEach((id) => {
        if (idIsDefined(id)) {
            matchingItems.push(array.find(item => item.id === id));
        }
    });
    return matchingItems;
}

/**
 * Creates a div and appends all elemnts in the array into that div
 * @param {HTMLElement[]} elements Header element
 * @param {string} parentDivClass class to append to the parent
 */
function createDivOfAllElementsInArray(elements, parentDivClass) {
    let parentDiv = document.createElement("li");
    parentDiv.className = parentDivClass;
    elements.forEach(element => parentDiv.appendChild(element));
    return parentDiv;
}

/**
 * 
 * @param {{gold_cost,wood_cost,food_cost,stone_cost}} cost 
 */
function createCostDiv(cost) {
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


function createPill(text, classNames) {
    const pill = document.createElement("p");
    pill.innerText = text;
    pill.className = classNames;
    return pill;
}


/**
 * Make a html list node from a array
 * @param {number[]} array Array of indexes for dataArray (if dataArray is provided), otherwise array of data to make a list of
 * @param {string[]} dataArray Array of data to fetch from, if not provided array will be used as dataArray too.
 * @returns {HTMLUListElement} A HTML list of items
 */
function createUnorderedListFromArray(array) {
    let list = document.createElement("ul");
    array.forEach((item) => {
        let element = document.createElement("li",);
        element.innerText = item;
        list.appendChild(element);
    });
    return list;
}

/**
 * 
 * @param {string} text Text to display in the header
 * @param {string} size Html header definition, ie. H1, H2, H3 etc.
 * @returns {HTMLElement} Header element
 */
function header(text, size) {
    const header = document.createElement(size);
    header.innerText = text;
    return header;
}

/**
 * Sorted accoring to name, sorts item with id -1 to be at the top
 * id -1 should be the "no selection"-item
 * @param {DropdownItem[]} ddlItems Dropdown items
 */
function sortDropdown(ddlItems) {
    return ddlItems.sort((a, b) => {
        if (idIsUnDefined(a.id)) {
            return -1;
        }
        return a.name < b.name ? -1 : 1
    });
}

/**
 * Creates a Civ HTML div for each civ.id that matches
 * @param {number} civId 
 */
function createCivInfoHTMLUsingCivId(civId) {
    emptyCivInfoHTML();
    if (idIsDefined(civId)) {
        civs.forEach(civ => {
            if (civ.id === Number(civId)) {
                createCivInfoHTML(civ);
            }
        });
    }
}


function formatTechnologyString(technologyAge) {
    return `${technologyAge.description}`
}

function civDropdown() {
    let civDropdown = document.getElementById("civ-dropdown");
    civDropdown.onchange = (event) => {
        const civId = event.target.value;
        createCivInfoHTMLUsingCivId(civId);
    };
    populateDropdown(civDropdown, sortDropdown(civs));
}

function techDropdown() {
    let techDropdown = document.getElementById("tech-dropdown");
    techDropdown.onchange = (event) => {
        const civId = event.target.value;
        createCivInfoHTMLUsingCivId(civId);
    };
    populateDropdown(techDropdown, sortDropdown(getAllTechnologies()));
}

function getAllTechnologies() {
    let ddlItems = [];
    civs.forEach(x => {
        if (idIsDefined(x.id)) {
            let castle = {};
            let imperial = {};
            castle.name = formatTechnologyString(x.technology.castle);
            castle.id = x.id;
            ddlItems.push(castle);
            imperial.name = formatTechnologyString(x.technology.imperial);
            imperial.id = x.id;
            ddlItems.push(imperial);
        }
        else {
            const noSelectionElement = {};
            noSelectionElement.name = x.technology.castle.name;
            noSelectionElement.id = x.id;
            ddlItems.push(noSelectionElement);
        }
    });
    return ddlItems;
}

function specDropdown() {
    let specialitiesDropdown = document.getElementById("specialities-dropdown");
    specialitiesDropdown.onchange = (event) => {
        const specialityId = event.target.value;
        emptyCivInfoHTML();
        if (idIsDefined(specialityId)) {
            civs.forEach(civ => {
                if (civ.speciality.includes(Number(specialityId))) {
                    createCivInfoHTML(civ);
                }
            });
        }
    };
    populateDropdown(specialitiesDropdown, specialities);
}

/**
 * True if index is not -1
 * @param {number} id index of a array
 */
function idIsDefined(id) {
    return Number(id) !== -1;
}

/** True if index is -1
 * @param {number} index index of a array
 */
function idIsUnDefined(id) {
    return Number(id) === -1;
}

let pickDropdown = document.getElementById("pick-dropdown");

pickDropdown.onchange = (event) => {
    let specialitiesDropdown = document.getElementById("specialities-dropdown");
    let civDropdown = document.getElementById("civ-dropdown");
    let techDropdown = document.getElementById("tech-dropdown");
    specialitiesDropdown.hidden = event.target.value !== "spec";
    techDropdown.hidden = event.target.value !== "tech";
    civDropdown.hidden = event.target.value !== "civ";
    specialitiesDropdown.value = -1;
    civDropdown.value = -1;
    techDropdown.value = -1
}

specDropdown();
civDropdown();
techDropdown();