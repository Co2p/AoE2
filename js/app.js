function populateDropdown(id, items) {
    let element = document.getElementById(id);
    items.forEach(item => {
        let option = document.createElement("option");
        option.className = "dropdown-item";
        option.innerText = item.Name;
        option.value = item.id;
        option.href = "#";
        element.appendChild(option);
    });
}

function updateInformation(id) {
    const data = civData.Civs[id];
    let g = document.getElementById("grid");
    const classes = "list-group-item";
    g.innerHTML = "";
    let uu = document.createElement("li");
    let cut = document.createElement("li");
    let iut = document.createElement("li");
    let teambonus = document.createElement("li");
    let civbonus = document.createElement("li");
    let focus = document.createElement("li");
    let missing = document.createElement("li");
    uu.className = classes;
    cut.className = classes;
    iut.className = classes;
    teambonus.className = classes;
    civbonus.className = classes;
    focus.className = classes;
    missing.className = classes;

    uu.innerText = `Unique Unit: ${uniqueUnits[data.UU]}`;
    iut.innerText = `Unique Tech: ${data.IUT}`;
    cut.innerText = `Civ Unique Tech: ${data.CUT}`;
    teambonus.innerText = `Team Bonus: ${data.TeamBonus}`;
    civbonus.innerText = `Civ Bonus: ${civBonuses[data.CivBonus]}`;
    focus.innerText = `Focus: ${civFocus[data.Focus]}`;
    missing.innerText = `Missing: ${data.Missing}`;
    g.appendChild(uu);
    g.appendChild(iut);
    g.appendChild(cut);
    g.appendChild(teambonus);
    g.appendChild(civbonus);
    g.appendChild(focus);
    g.appendChild(missing);
}

let civDropdown = document.getElementById("civ-dropdown");
civDropdown.onchange = (event) => {
    updateInformation(event.target.value)
};

populateDropdown("civ-dropdown", civData.Civs);
updateInformation(0)
