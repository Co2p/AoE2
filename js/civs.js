const civData = {
    Civs: [
        {
            id: -1,
            name: "(Select Civ)",
            speciality: [],
            CUT: "(Select technology)",
            IUT: "(Select technology)",
        },
        {
            id: 0,
            name: "Aztecs",
            speciality: [8, 9],
            UU: [0],
            TeamBonus: "Relics generate 33% more gold",
            CivBonus: ["Start the game with an Eagle Scout",
                "Villagers carry +5 extra resources",
                "All military units are created 18% faster",
                "Monks gain 5 HP for every researched Monastery technology",
                "Start with +50 gold"],
            CUT: "Atlatl (attack and range of Skirmishers +1)",
            IUT: "Garland Wars (increases infantry attack by +4)",
            Wonder: "Great Pyramid of Tenochtitlan",
        },
        {
            id: 1,
            name: "Berbers",
            speciality: [2, 10],
            UU: [3, 11],
            TeamBonus: "Genitours are available at the Archery Range",
            CivBonus: ["Villagers move +10% faster",
                "Stable units are 15%/20% cheaper in the Castle/Imperial Age",
                "Ships move +10% faster"],
            CUT: "Kasbah (team Castles work +25% faster)",
            IUT: "Maghrabi Camels (camel troops regenerate)",
            Wonder: "Hassan Tower",
        },
        {
            id: 2,
            name: "Britons",
            speciality: [6],
            UU: [1],
            TeamBonus: "Archery Ranges work 20% faster",
            CivBonus: ["Town Centers cost -50% wood starting in the Castle Age",
                "Foot archers (except Skirmishers) have +1/+2 range in the Castle/Imperial Age",
                "Shepherds work 25% faster"],
            CUT: "Yeomen (Foot archers +1 range and towers +2 attack)",
            IUT: "Warwolf (Trebuchets blast damage and 100% accuracy against units)",
            Wonder: "Chichester Cathedral",
        },
        {
            id: 3,
            name: "Bulgarians",
            speciality: [2, 8],
            UU: [2],
            TeamBonus: "Blacksmiths work 50% faster",
            CivBonus: ["Militia units are upgraded for free",
                "Town Centers cost -50% stone",
                "Can build Krepost"],
            CUT: "Stirrups (Light Cavalry, Knight and Konniks attack 33% faster)",
            IUT: "Bagains (Militia +5 melee armor)",
            Wonder: "Preslav Round Church",
        },
        {
            id: 4,
            name: "Burmese",
            speciality: [5, 9],
            UU: [4],
            TeamBonus: "Relics are visible on the map from the game start",
            CivBonus: ["Lumber Camp technologies are free",
                "Infantry has +1/+2/+3 attack in the Feudal/Castle/Imperial Age",
                "Monastery technologies are 50% cheaper"],
            CUT: "Howdah (Battle Elephants +1/+1 armor)",
            IUT: "Manipur Cavalry (Cavalry and Arambai +3 attack against buildings)",
            Wonder: "Shwezigon Pagoda",
        },
        {
            id: 5,
            name: "Byzantines",
            speciality: [4],
            UU: [5],
            TeamBonus: "Monks heal 50% faster",
            CivBonus: ["Buildings have +10%/+20%/+30%/+40% HP in the Dark/Feudal/Castle/Imperial Age",
                "Camel Riders, Skirmishers and Spearmen are 25% cheaper",
                "Fire Ships fire 25% faster",
                "Advancing to the Imperial Age is 33% cheaper",
                "Town Watch is free"],
            CUT: "Greek Fire (Fire Ships +1 range)",
            IUT: "Logistica (Cataphracts deal trample damage)",
            Wonder: "Hagia Sophia",
        },
        {
            id: 6,
            name: "Celts",
            speciality: [8, 11],
            UU: [6],
            TeamBonus: "Siege Workshops work 20% faster",
            CivBonus: ["Infantry units move 15% faster",
                "Lumberjacks work 15% faster",
                "Siege weapons fire 25% faster",
                "Enemy herdables can be converted regardless of enemy units next to them"],
            CUT: "Stronghold (Castles and towers fire 25% faster)",
            IUT: "Furor Celtica (Siege Workshop units have +40% HP)",
            Wonder: "Rock of Cashel",
        },
        {
            id: 7,
            name: "Chinese",
            speciality: [0],
            UU: [7],
            TeamBonus: "Farms provide +45 food",
            CivBonus: ["Start game with three extra Villagers, but with -200 food and -50 wood",
                "Town Centers support ten population (instead of five) and have +5 Line of Sight",
                "Technologies are 10%/15%/20% cheaper in the Feudal/Castle/Imperial Age",
                "Demolition Ships have +50% HP"],
            CUT: "Great Wall (Walls and towers +30% HP)",
            IUT: "Rocketry (Chu Ko Nu +2, Scorpions +4 attack)",
            Wonder: "Temple of Heaven",
        },
        {
            id: 8,
            name: "Cumans",
            speciality: [2],
            UU: [8],
            TeamBonus: "Palisade Walls have +50%",
            CivBonus: ["Can build an additional Town Center in the Feudal Age",
                "Siege Workshop and Battering Ram available in the Feudal Age",
                "Cavalry moves 5%/10%/15% faster in the Feudal/Castle/Imperial Age"],
            CUT: "Steppe Husbandry (Scout Cavalry, Steppe Lancers and Cavalry Archers are trained 50% faster)",
            IUT: "Cuman Mercenaries (team members can create 10 free Elite Kipchaks at the Castle)",
            Wonder: "Sarkel Fortress",
        },
        {
            id: 9,
            name: "Ethiopians",
            speciality: [0, 11],
            UU: [9],
            TeamBonus: "Towers and Outposts have +3 Line of Sight",
            CivBonus: ["Archers fire 15% faster",
                "Receive +100 food and +100 gold whenever a new Age is reached",
                "The Pikeman upgrade is free"],
            CUT: "Royal Heirs (halves Shotel Warrior training time)",
            IUT: "Torsion Engines (Siege Workshop units' blast radius increased)",
            Wonder: "Biete Amanuel",
        },
        {
            id: 10,
            name: "Franks",
            speciality: [2],
            UU: [10],
            TeamBonus: "Knights have +2 Line of Sight",
            CivBonus: ["Farm upgrades are free",
                "Castles are 25% cheaper",
                "Cavalry have +20% HP",
                "Foragers work 25% faster"],
            CUT: "Chivalry (Stables work 40% faster)",
            IUT: "Bearded Axe (Throwing Axeman +1 range)",
            Wonder: "St. Vitus Cathedral",
        },
        {
            id: 11,
            name: "Goths",
            speciality: [8],
            UU: [12],
            TeamBonus: "Barracks work 20% faster",
            CivBonus: ["Infantry are 20%/25%/30%/35% cheaper in the Dark/Feudal/Castle/Imperial Age",
                "Infantry have +1/+2/+3 attack bonus against standard buildings in the Feudal/Castle/Imperial Age",
                "Villagers have +5 attack against Wild Boars and carry +15 food from hunting",
                "+10 population cap in the Imperial Age",
                "Loom is free"],
            CUT: "Anarchy (Huskarls can be created at Barracks)",
            IUT: "Perfusion (Barracks create units 100% faster)",
            Wonder: "Mausoleum of Theoderic I",
        },
        {
            id: 12,
            name: "Huns",
            speciality: [2],
            UU: [13],
            TeamBonus: "Stables work 20% faster",
            CivBonus: ["Start the game with -100 wood, but with the population cap at the maximum",
                "Cavalry Archers are 10%/20% cheaper in the Castle/Imperial Age",
                "Trebuchets have +30% accuracy"],
            CUT: "Marauders (create Tarkans at Stables)",
            IUT: "Atheism (+100 years for Relic/Wonder victories, Spies/Treason cost -50%)",
            Wonder: "Arch of Constantine (ruined)",
        },
        {
            id: 13,
            name: "Incas",
            speciality: [8],
            UU: [14, 15],
            TeamBonus: "Farms are built 100% faster",
            CivBonus: ["Start the game with an Eagle Scout",
                "Start with a free Llama",
                "Villagers benefit from Blacksmith infantry upgrades",
                "Houses support 10 population",
                "Buildings cost -15% stone"],
            CUT: "Andean Sling (Slingers and Skirmisher have no minimum range)",
            IUT: "Fabric Shields (Kamayuks, Slingers, and Eagle Warriors +1/+2",
            Wonder: "Temple of the Sun at Macchu Picchu",
        },
        {
            id: 14,
            name: "Indians",
            speciality: [1, 7],
            UU: [16, 17],
            TeamBonus: "Camels have +6 attack against buildings",
            CivBonus: ["Fishermen work 10% faster",
                "Villagers are 10%/15%/20%/25% cheaper in the Dark/Feudal/Castle/Imperial Age",
                "Camel Riders have +1 pierce armor"],
            CUT: "Sultans (All gold production +10% faster)",
            IUT: "Shatagni (Hand Cannoneers +1 range)",
            Wonder: "Brihadeeswarar Temple",
        },
        {
            id: 15,
            name: "Italians",
            speciality: [0, 10],
            UU: [18, 19],
            TeamBonus: "Condottieri are available at the Barracks in Imp",
            CivBonus: ["Advancing to the next Age is 15% cheaper",
                "Dock technologies are 50% cheaper",
                "Fishing Ships are 20% cheaper",
                "Gunpowder units are 20% cheaper"],
            CUT: "Pavise (foot archers and Condottieri +1/+1 armor)",
            IUT: "Silk Road (trade units cost -50%)",
            Wonder: "Cathedral of St. Lawrence",
        },
        {
            id: 16,
            name: "Japanese",
            speciality: [8],
            UU: [20],
            TeamBonus: "Galleys have +50% Line of Sight",
            CivBonus: ["Fishing Ships have double HP, +2 pierce armor, and work 5%/10%/15%/20% faster in the Dark/Feudal/Castle/Imperial Age",
                "Mills, Lumber Camps and Mining Camps are 50% cheaper",
                "Infantry attack 33% faster starting in the Feudal Age"],
            CUT: "Yasama (towers fire extra arrows)",
            IUT: "Kataparuto (Trebuchets fire and pack faster)",
            Wonder: "Tōdai-ji",
        },
        {
            id: 17,
            name: "Khmer",
            speciality: [5, 11],
            UU: [21],
            TeamBonus: "Scorpions have +1 range",
            CivBonus: ["No buildings are required to construct certain buildings or advance in Age",
                "Battle Elephants move +15% faster",
                "Khmer Villagers drop off food from farms (1 unit at a time) without needing a drop site",
                "Villagers can garrison in Houses"],

            CUT: "Tusk Swords (Battle Elephants +3 attack)",
            IUT: "Double Crossbow (Ballista Elephants and Scorpions shoot two projectiles)",
            Wonder: "Angkor Wat",
        },
        {
            id: 18,
            name: "Koreans",
            speciality: [10, 12],
            UU: [22, 23],
            TeamBonus: "Mangonels minimum range reduced to 1",
            CivBonus: ["Villagers have +3 Line of Sight",
                "Stone Miners work 20% faster",
                "Tower upgrades are free (Bombard Tower requires Chemistry)",
                "Towers (except Bombard Towers) have +1/+2 range in the Castle/Imperial Age",
                "Fortifications are built 33% faster",
                "Military units Cost -20% less wood (except siege weapons)"],
            CUT: "Panokseon (Turtle Ships move 15% faster)",
            IUT: "Shinkichon (+1 range for Mangonels)",
            Wonder: "Hwangnyong Temple",
        },
        {
            id: 19,
            name: "Lithuanians",
            speciality: [2, 9],
            UU: [24],
            TeamBonus: "Monasteries work 20% faster",
            CivBonus: ["Start with +150 food",
                "Spearmen and Skirmishers move 10% faster",
                "Each garrisoned Relic gives +1 attack to Knights and Leitis (maximum +4)"],
            CUT: "Hill Forts (Town Centers +3 range)",
            IUT: "Tower Shields (Spearman and Skirmishers +2 pierce armor)",
            Wonder: "Trakai Island Castle",
        },
        {
            id: 20,
            name: "Magyars",
            speciality: [2],
            UU: [25],
            TeamBonus: "All foot archers have +2 Line of Sight",
            CivBonus: ["Forging, Iron Casting, and Blast Furnace are free",
                "Scout Cavalry is 15% cheaper",
                "Villagers kill wild animals in one strike"],
            CUT: "Corvinian Army (Magyar Huszars cost no gold)",
            IUT: "Recurve Bow (Cavalry Archers + 1 range and attack)",
            Wonder: "Hunyad Castle",
        },
        {
            id: 21,
            name: "Malay",
            speciality: [10],
            UU: [26],
            TeamBonus: "Docks and Harbors have +100% Line of Sight",
            CivBonus: ["Advancing in Age is +80% faster",
                "Fish Traps are 33% cheaper",
                "Fish Traps provide unlimited food",
                "Battle Elephants are 30% cheaper"],
            CUT: "Thalassocracy (upgrades Docks to Harbors, which shoot arrows)",
            IUT: "Forced Levy (Turns Militia gold cost to food cost)",
            Wonder: "Kalasan Temple",
        },
        {
            id: 22,
            name: "Malians",
            speciality: [8],
            UU: [27],
            TeamBonus: "University researches 80% faster",
            CivBonus: ["Buildings cost -15% wood (except Farms)",
                "Barracks units have +1/+2/+3 pierce armor in the Feudal/Castle/Imperial Age",
                "Gold Mining is free"],
            CUT: "Tigui (Town Centers fire arrows even without garrison)",
            IUT: "Farimba (Stable units +5 attack)",
            Wonder: "Great Mosque of Djenné",
        },
        {
            id: 23,
            name: "Mayans",
            speciality: [0],
            UU: [28],
            TeamBonus: "Walls and Gates are 50% cheaper",
            CivBonus: ["Start the game with an Eagle Scout",
                "Start the game with +1 Villager, but with -50 food",
                "Resources last 15% longer",
                "Foot archers are 10%/20%/30% cheaper in the Feudal/Castle/Imperial Age"],
            CUT: "Obsidian Arrows (Archers have +6 attack against buildings and stone defense)",
            IUT: "El Dorado (+40 hit points for Eagle Warriors)",
            Wonder: "Tikal Temple I",
        },
        {
            id: 24,
            name: "Mongols",
            speciality: [3],
            UU: [29],
            TeamBonus: "Scout Cavalry +2 Line of Sight",
            CivBonus: ["Cavalry archers fire 25% faster",
                "Light Cavalry, Hussars, and Steppe Lancers have +30% HP",
                "Hunters work +50% faster"],
            CUT: "Nomads (Houses retain population when destroyed)",
            IUT: "Drill (Siege Workshop units move +50% faster)",
            Wonder: "Great Tent of Genghis Khan",
        },
        {
            id: 25,
            name: "Persians",
            speciality: [2],
            UU: [30],
            TeamBonus: "Knights have +2 attack against archers",
            CivBonus: ["Start game with +50 food and +50 wood",
                "Town Centers and Docks have double HP and work 10%/15%/20% faster in the Feudal/Castle/Imperial Age"],
            CUT: "Kamandaran (turns Archer gold cost into wood cost)",
            IUT: "Mahouts (War Elephants move +30% faster)",
            Wonder: "Taq Kasra",
        },
        {
            id: 26,
            name: "Portuguese",
            speciality: [7, 10],
            UU: [31, 32],
            TeamBonus: "Free Cartography from Dark Age",
            CivBonus: ["All units cost -20% gold",
                "All ships have +10% HP",
                "The Feitoria becomes available for building in the Imperial Age"],
            CUT: "Carrack (ships +1/+1 armor)",
            IUT: "Arquebus (gunpowder units fire more accurately at moving targets)",
            Wonder: "Belém Tower",
        },
        {
            id: 27,
            name: "Saracens",
            speciality: [2, 10],
            UU: [33],
            TeamBonus: "All foot archers have +2 attack against standard buildings",
            CivBonus: ["The commodity trading fee is 5%",
                "Markets cost -100 wood",
                "Transport Ships have double HP and +5 carry capacity",
                "Galleys attack 20% faster",
                "Archers (excluding Skirmishers) have +1/+2/+3 attack against standard buildings in the Feudal/Castle/Imperial Age"],
            CUT: "Madrasah (33% of a Monk's gold cost are returned if the Monk gets killed)",
            IUT: "Zealotry (Camel Riders and Mamelukes +30 hit points)",
            Wonder: "Great Mosque of Samarra",
        },
        {
            id: 28,
            name: "Slavs",
            speciality: [8, 11],
            UU: [34],
            TeamBonus: "Military production buildings (except Castles and Kreposts) provide +5 pop",
            CivBonus: ["Farmers work 10% faster",
                "Tracking is free. Since the Definitve Edition, Supplies is free",
                "Siege Workshop units are 15% cheaper"],
            CUT: "Orthodoxy (+3/+3 armor for Monks)",
            IUT: "Druzhina (infantry damage adjacent units)",
            Wonder: "Kizhi Pogost",
        },
        {
            id: 29,
            name: "Spanish",
            speciality: [7, 9],
            UU: [35, 36],
            TeamBonus: "Trade Carts and Trade Cogs return 25% more gold",
            CivBonus: ["Builders work 30% faster",
                "Blacksmith upgrades cost no gold",
                "Cannon Galleons have better accuracy and faster cannonballs",
                "Hand Cannoneers and Bombard Cannons fire 15% faster"],
            CUT: "Inquisition (conversion rate improved)",
            IUT: "Supremacy (increased attack, armor, and HP for Villagers)",
            Wonder: "Torre del Oro",
        },
        {
            id: 30,
            name: "Tatars",
            speciality: [0, 2],
            UU: [37, 38],
            TeamBonus: "Cavalry Archers have +2 Line of Sight",
            CivBonus: ["Herdables contain +50% food",
                "Units deal +25% damage when attacking from hills (stacks with the regular hill attack bonus)",
                "Thumb Ring is free",
                "Parthian Tactics is free"],
            CUT: "Silk Armor (Scout Cavalry, Steppe Lancers and Cavalry Archers have +1 pierce armor)",
            IUT: "Timurid Siegecraft (Trebuchets +2 range, enables Flaming Camels at the Castle)",
            Wonder: "Ulugh Beg Observatory",
        },
        {
            id: 31,
            name: "Teutons",
            speciality: [8],
            UU: [39],
            TeamBonus: "Units resist conversion",
            CivBonus: ["Monks have double healing range",
                "Towers garrison twice as many units",
                "Murder Holes and Herbal Medicine are free",
                "Farms are 40% cheaper",
                "Town Centers can garrison +10 units",
                "Barracks and Stable units receive +1 melee armor in the Castle Age and +1 in the Imperial Age"],
            CUT: "Ironclad (siege weapons +4 armor)",
            IUT: "Crenellations (Castles +3 range; garrisoned infantry fires arrows)",
            Wonder: "Maria Laach Abbey",
        },
        {
            id: 32,
            name: "Turks",
            speciality: [7],
            UU: [40],
            TeamBonus: "Gunpowder units are created 25% faster",
            CivBonus: ["Gunpowder units have +25% HP",
                "Gunpowder technologies are 50% cheaper",
                "Chemistry is free",
                "Gold Miners work 20% faster",
                "Light Cavalry and Hussar upgrades are free"],
            CUT: "Sipahi (Cavalry Archers +20 hit points)",
            IUT: "Artillery (+2 range for Bombard Towers, Bombard Cannons, Cannon Galleons)",
            Wonder: "Selimiye Mosque",
        },
        {
            id: 33,
            name: "Vietnamese",
            speciality: [0],
            UU: [41, 42],
            TeamBonus: "Imperial Skirmishers",
            CivBonus: ["Reveal enemy positions at game start",
                "Economic upgrades cost no wood",
                "Archery Range units have +20% HP",
                "Conscription is free"],
            CUT: "Chatras (Battle Elephants +50 hit points)",
            IUT: "Paper Money (tributes 500 gold to each ally)",
            Wonder: "Bút Tháp",
        },
        {
            id: 34,
            name: "Vikings",
            speciality: [8, 10],
            UU: [43, 44],
            TeamBonus: "Docks are 15% cheaper",
            CivBonus: ["Warships are 15%/15%/20% cheaper in the Feudal/Castle/Imperial Age",
                "Infantry have +10%/+15%/+20% HP in the Feudal/Castle/Imperial Age",
                "Wheelbarrow and Hand Cart are free"],
            CUT: "Chieftains (infantry get attack bonus against cavalry)",
            IUT: "Berserkergang (Berserks regenerate faster)",
            Wonder: "Borgund Stave Church",
        }
    ],
    specialities: [
        {
            name: "(Select speciality)",
            id: -1
        },
        {
            name: "Archers",
            id: 0
        },
        {
            name: "Camel Riders",
            id: 1
        },
        {
            name: "Cavalry",
            id: 2
        },
        {
            name: "Cavalry archers",
            id: 3
        },
        {
            name: "Defense",
            id: 4
        },
        {
            name: "Elephants",
            id: 5
        },
        {
            name: "Foot archers",
            id: 6
        },
        {
            name: "Gunpowder units",
            id: 7
        },
        {
            name: "Infantry",
            id: 8
        },
        {
            name: "Monks",
            id: 9
        },
        {
            name: "Navy",
            id: 10
        },
        {
            name: "Siege weapons",
            id: 11
        },
        {
            name: "Towers",
            id: 12
        }
    ],
    uniqueUnits: [
        {
            name: "Jaguar Warior",//0
            id: 0
        },
        {
            name: "Longbowman",//1
            id: 1
        },
        {
            name: "Konnik",//2
            id: 2
        },
        {
            name: "Camel Archer",//3
            id: 3
        },
        {
            name: "Arambai",//4
            id: 4
        },
        {
            name: "Cataphract",//5
            id: 5
        },
        {
            name: "Woad Raider",//6
            id: 6
        },
        {
            name: "Chu Ko Nu",//7
            id: 7
        },
        {
            name: "Kipchak",//8
            id: 8
        },
        {
            name: "Shotel Warrior",//9
            id: 9
        },
        {
            name: "Throwing Axeman",//10
            id: 10
        },
        {
            name: "Genitour",//11
            id: 11
        },
        {
            name: "Huskarl",//12
            id: 12
        },
        {
            name: "Tarkan",//13
            id: 13
        },
        {
            name: "Kamayuk",//14
            id: 14
        },
        {
            name: "Slinger",//15
            id: 15
        },
        {
            name: "Elephant Archer",//16
            id: 16
        },
        {
            name: "Imperial Camel Rider",//17
            id: 17
        },
        {
            name: "Genoese Crossbowman",//18
            id: 18
        },
        {
            name: "Condottiero",//19
            id: 19
        },
        {
            name: "Samurai",//20
            id: 20
        },
        {
            name: "Ballista Elephant", //21
            id: 21
        },
        {
            name: "War Wagon",//22
            id: 22
        },
        {
            name: "Turtle Ship",//23
            id: 23
        },
        {
            name: "Leitis",//24
            id: 24
        },
        {
            name: "Magyar Huszar",//25
            id: 25
        },
        {
            name: "Karambit Warrior",//26
            id: 26
        },
        {
            name: "Gbeto",//27
            id: 27
        },
        {
            name: "Plumed Archer",//28
            id: 28
        },
        {
            name: "Mangudai",//29
            id: 29
        },
        {
            name: "War Elephant",//30
            id: 30
        },
        {
            name: "Organ Gun",//31
            id: 31
        },
        {
            name: "Caravel",//32
            id: 32
        },
        {
            name: "Mameluke",//33
            id: 33
        },
        {
            name: "Boyar",//34
            id: 34
        },
        {
            name: "Conquistador",//35
            id: 35
        },
        {
            name: "Missionary",//36
            id: 36
        },
        {
            name: "Keshik",//37
            id: 37
        },
        {
            name: "Flaming Camel",//38
            id: 38
        },
        {
            name: "Teutonic Knight",//39
            id: 39
        },
        {
            name: "Janissary",//40
            id: 40
        },
        {
            name: "Rattan Archer",//41
            id: 41
        },
        {
            name: "Imperial Skirmisher",//42
            id: 42
        },
        {
            name: "Berserk",//43
            id: 43
        },
        {
            name: "Longboat",//44
            id: 44
        }
    ]
};
