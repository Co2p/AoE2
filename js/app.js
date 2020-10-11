/**
 * @typedef Object DropdownItem
 * @property {string} name Visible name in the dropdown
 * @property {number} id Identifier of the dropdown item
 */

/**
 * 
 * @param {HTMLElement} element Element to append options into
 * @param {DropdownItem[]} items Array of items to use when creating the dropdown, elements have attributes "id" and "name"
 */
function populateDropdown(element, items) {
    items.forEach(item => {
        let option = document.createElement("option");
        option.className = "dropdown-item";
        option.innerText = item.name;
        option.value = item.id;
        option.href = "#";
        element.appendChild(option);
    });
}

function resetInfo() {
    let g = document.getElementById("grid");
    g.innerHTML = "";
}

function updateInformation(data) {
    let g = document.getElementById("grid");
    const headerSize = "h5"

    let civDiv = document.createElement("div");
    civDiv.className = "civcontainer";
    civDiv.appendChild(header(data.name, "h1"));

    const uu = createStatElement(header("Unique Units", headerSize), listify(data.UU, civData.uniqueUnits.map(x => x.name)));

    const cut = createStatElement(header(`Castle Unique Technologies: ${data.technology.castle.name}`, headerSize), document.createTextNode(data.technology.castle.description));

    const iut = createStatElement(header(`Imperial Unique Technologies: ${data.technology.imperial.name}`, headerSize), document.createTextNode(data.technology.imperial.description));

    const teambonus = createStatElement(header("Team bonus", headerSize), document.createTextNode(data.TeamBonus));
    const civbonus = createStatElement(header("Civilization bonuses", headerSize), listify(data.CivBonus));
    const speciality = createStatElement(header("Specialty", headerSize), listify(data.speciality, civData.specialities.slice(1, civData.length).map(x => x.name)));

    civDiv.appendChild(speciality);
    civDiv.appendChild(uu);
    civDiv.appendChild(cut);
    civDiv.appendChild(iut);
    civDiv.appendChild(teambonus);
    civDiv.appendChild(civbonus);

    g.appendChild(civDiv);
}

/**
 * Creates a div for information regarding one stat of a civ
 * @param {HTMLElement} header Header element
 * @param {HTMLElement} body Body element
 */
function createStatElement(header, body) {
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
function listify(array, dataArray) {
    let list = document.createElement("ul");
    const all = (typeof dataArray === "undefined");
    array.forEach((i) => {
        let element = document.createElement("li",);
        element.innerText = all ? i : dataArray[i];
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
function dropdownSort(ddlItems) {
    return ddlItems.sort((a, b) => {
        if (a.id === -1) {
            return -1;
        }
        return a.name < b.name ? -1 : 1
    });
}

function civDropdown() {
    let civDropdown = document.getElementById("civ-dropdown");
    civDropdown.onchange = (event) => {
        resetInfo();
        if (event.target.value !== "-1") {
            const data = civData.Civs.filter(x => { return x.id === Number(event.target.value) });
            updateInformation(data[0]);
        }
    };
    populateDropdown(civDropdown, dropdownSort(civData.Civs));
}

function techDropdown() {
    let techDropdown = document.getElementById("tech-dropdown");
    techDropdown.onchange = (event) => {
        resetInfo();
        if (event.target.value !== "-1") {
            const data = civData.Civs.filter(x => { return x.id === Number(event.target.value) });
            updateInformation(data[0]);
        }
    };
    let ddlItems = [];
    civData.Civs.forEach(x => {
        if (x.id !== -1) {
            let castle = {};
            let imp = {};
            castle.name = `${x.technology.castle.name} (${x.technology.castle.description})`;
            castle.id = x.id;
            ddlItems.push(castle);
            imp.name = `${x.technology.imperial.name} (${x.technology.imperial.description})`;
            imp.id = x.id;
            ddlItems.push(imp);
        }
        else {
            const tmp = {};
            tmp.name = x.technology.castle.name;
            tmp.id = x.id;
            ddlItems.push(tmp);
        }
    });

    populateDropdown(techDropdown, dropdownSort(ddlItems));
}

function specDropdown() {
    let specialitiesDropdown = document.getElementById("specialities-dropdown");
    specialitiesDropdown.onchange = (event) => {
        resetInfo();
        if (event.target.value !== "-1") {
            civData.Civs.forEach(x => {
                if (x.speciality.includes(Number(event.target.value))) {
                    updateInformation(x);
                }
            });
        }
    };
    populateDropdown(specialitiesDropdown, civData.specialities);
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