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

    const uu = createStatElement(header("Unique Unit", headerSize), listify(data.UU, civData.uniqueUnits.map(x => x.name)));
    const iut = createStatElement(header("Unique Tech", headerSize), document.createTextNode(data.IUT));
    const cut = createStatElement(header("Civ Unique Tech", headerSize), document.createTextNode(data.CUT));
    const teambonus = createStatElement(header("Team Bonus", headerSize), document.createTextNode(data.TeamBonus));
    const civbonus = createStatElement(header("Civ Bonus", headerSize), listify(data.CivBonus));
    const speciality = createStatElement(header("Speciality", headerSize), listify(data.speciality, civData.specialities.slice(1, civData.length).map(x => x.name)));

    civDiv.appendChild(speciality);
    civDiv.appendChild(uu);
    civDiv.appendChild(iut);
    civDiv.appendChild(cut);
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
 * @param {Array} array Array of indexes for dataArray (if dataArray is provided), otherwise array of data to make a list of
 * @param {Array} dataArray Array of data to fetch from, if not provided array will be used as dataArray too.
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

function civDropdown() {
    let civDropdown = document.getElementById("civ-dropdown");
    civDropdown.style = "";
    civDropdown.onchange = (event) => {
        resetInfo();
        if (event.target.value !== "-1") {
            const data = civData.Civs.filter(x => { return x.id === Number(event.target.value) });
            updateInformation(data[0]);
        }
    };
    populateDropdown(civDropdown, civData.Civs);
}

function specDropdown() {
    let specialitiesDropdown = document.getElementById("specialities-dropdown");
    specialitiesDropdown.style = "";
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
    specialitiesDropdown.hidden = event.target.value !== "spec";
    civDropdown.hidden = event.target.value !== "civ";
    specialitiesDropdown.value = -1;
    civDropdown.value = -1;

}

specDropdown();
civDropdown();