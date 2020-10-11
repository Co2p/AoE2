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

function updateInformation(id) {
    const data = civData.Civs[id];
    let g = document.getElementById("grid");
    const classes = "list-group-item";
    const headerSize = "h5"
    g.innerHTML = "";
    g.appendChild(header(data.name, "h1"));

    let uu = document.createElement("li");
    let cut = document.createElement("li");
    let iut = document.createElement("li");
    let teambonus = document.createElement("li");
    let civbonus = document.createElement("li");
    let speciality = document.createElement("li");
    
    uu.className = classes;
    cut.className = classes;
    iut.className = classes;
    teambonus.className = classes;
    civbonus.className = classes;
    speciality.className = classes;

    uu.appendChild(header("Unique Unit", headerSize));
    uu.appendChild(listify(data.UU, uniqueUnits));

    iut.appendChild(header("Unique Tech", headerSize));
    iut.appendChild(document.createTextNode(data.IUT));
    
    cut.appendChild(header("Civ Unique Tech", headerSize));
    cut.appendChild(document.createTextNode(data.CUT));
    
    teambonus.appendChild(header("Team Bonus", headerSize));
    teambonus.appendChild(document.createTextNode(data.TeamBonus));
    
    civbonus.appendChild(header("Civ Bonus", headerSize));
    civbonus.appendChild(listify(data.CivBonus));

    speciality.appendChild(header("Speciality", headerSize));
    speciality.appendChild(listify(data.Speciality, specialities.map(x => x.name)));
    
    g.appendChild(speciality);
    g.appendChild(uu);
    g.appendChild(iut);
    g.appendChild(cut);
    g.appendChild(teambonus);
    g.appendChild(civbonus);
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
        let element = document.createElement("li", );
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
        updateInformation(event.target.value)
    };
    populateDropdown(civDropdown, civData.Civs);
}

function specDropdown() {
    let specialitiesDropdown = document.getElementById("specialities-dropdown");
    specialitiesDropdown.style = "";
    specialitiesDropdown.onchange = (event) => {
        updateInformation(event.target.value)
    };
    
    populateDropdown(specialitiesDropdown, specialities);
}

civDropdown();
// specDropdown(); //not ready for primetime
updateInformation(0)