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
    const headerSize = "h5"

    let civDiv = document.createElement("div");
    civDiv.className = "civcontainer";
    civDiv.appendChild(header(civData.name, "h1"));

    const civInfoStruct = [{header: HTMLElement, info: Node}];

    const uniqueUnitHeader = header("Unique Units", headerSize);
    const castleUniqueTechHeader = header(`Castle Unique Technologies: ${civData.technology.castle.name}`, headerSize);
    const imperialUniqueTechHeader = header(`Imperial Unique Technologies: ${civData.technology.imperial.name}`, headerSize);
    const teamBonusHeader = header("Team bonus", headerSize);
    const civilizationBonusHeader = header("Civilization bonuses", headerSize);
    const specialityHeader = header("Specialty", headerSize);

    const uniqueUnitList = createUnorderedListFromArray(civData.UU, uniqueUnits.map(x => x.name));
    const castleUniqueTech =  document.createTextNode(civData.technology.castle.description);
    const imperialUniqueTech = document.createTextNode(civData.technology.imperial.description);
    const teamBonus = document.createTextNode(civData.TeamBonus);
    const civilizationBonusList =  createUnorderedListFromArray(civData.CivBonus);
    const specialityList =  createUnorderedListFromArray(civData.speciality, specialities.slice(1, civs.length).map(x => x.name));

    civInfoStruct.push({header: uniqueUnitHeader, info: uniqueUnitList});
    console.log(civInfoStruct);
    const uniqueUnitsElement = createListItemWithHeader(uniqueUnitHeader, uniqueUnitList);
    const castleTechElement = createListItemWithHeader(castleUniqueTechHeader,castleUniqueTech);
    const imperialTechElement = createListItemWithHeader(imperialUniqueTechHeader, imperialUniqueTech);
    const teamBonusElement = createListItemWithHeader(teamBonusHeader, teamBonus);
    const civilizationBonusElement = createListItemWithHeader(civilizationBonusHeader, civilizationBonusList);
    const specialityElement = createListItemWithHeader(specialityHeader,specialityList);

    civDiv.appendChild(specialityElement);
    civDiv.appendChild(uniqueUnitsElement);
    civDiv.appendChild(castleTechElement);
    civDiv.appendChild(imperialTechElement);
    civDiv.appendChild(teamBonusElement);
    civDiv.appendChild(civilizationBonusElement);

    g.appendChild(civDiv);
}

/**
 * 
 * @param {number[]} ids 
 * @param {any[]} array 
 */
function getDataFromArrayForIds(ids, array) {
    let matchingItems;
    ids.forEach((id) => {
        if (idIsDefined(id)) {
            matchingItems.push(array.find(item => item.id === id));
        }
    })
}

/**
 * Creates a div for information regarding one stat of a civ
 * @param {HTMLElement} header Header element
 * @param {HTMLElement} body Body element
 */
function createListItemWithHeader(header, body) {
    let e = document.createElement("li");
    e.className = "list-group-item";
    e.appendChild(header);
    e.appendChild(body);
    return e;
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
    return `${technologyAge.name} (${technologyAge.description})`
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
 * @param {number} index index of a array
 */
function idIsDefined(index) {
    return Number(index) !== -1;
}

/* True if index is -1
 * @param {number} index index of a array
 */
function idIsUnDefined(index) {
    return Number(index) === -1;
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