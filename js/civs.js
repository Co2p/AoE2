const civData = {
    Civs: [
        {
            id: 0, Name: "Aztecs", UU: 0, TeamBonus: "Relics generate 33% more gold.", CivBonus: 0, Focus: 0, CUT: "Atlatl - attack and range of Skirmishers +1", IUT: "Garland Wars - increases infantry attack by +4", Missing: "Halberdier & Handcannoner"
        },
        {
            id: 1, Name: "Berbers", UU: 3, TeamBonus: "Genitours are available at the Archery Range", CivBonus: 1, Focus:1, CUT: "Kasbah - Increases the working speed of Castles for the entire team by +25%.", IUT: "Maghrabi Camels - Gives camel units a regeneration ability", Missing: "Halberdier & Handcannoner"
        },
        {
            id: 2, Name: "Britons", UU: 1, TeamBonus: "Archery Ranges work 20% faster.", CivBonus: 2, Focus: 2, CUT: "Yeomen - Gives foot archers +1 range and towers +2 attack.", IUT: "Warwolf . Gives Trebuchets blast damage and 100% accuracy against units.", Missing: "Halberdier & Handcannoner"
        },
        {
            id: 3, Name: "Bulgarians", UU: 2, TeamBonus: "Blacksmiths work 50% faster.", CivBonus: 3, Focus: 3, CUT: "Stirrups - Scout Cavalry line and Konniks attack 25% faster.", IUT: "Bagains - Militia line units +5 armor.", Missing: "Halberdier & Handcannoner"
        },
        {
            id: 4, Name: "Burmese", UU: 4, TeamBonus: "Relics are visible on the map", CivBonus: 4, Focus: 4, CUT: "Howdah - Gives Battle Elephants +1/+1 armor.", IUT: "Manipur Cavalry - Gives cavalry and Arambai +3 attack against buildings.", Missing: "Halberdier & Handcannoner"
        },
        {
            id: 5, Name: "Byzantines", UU: 5, TeamBonus: "Monks heal 50% faster.", CivBonus: 5, Focus: 5, CUT: "Greek Fire - Gives Fire Ships +1 range.", IUT: "Logistica - Gives Cataphracts trample damage and +6 attack against infantry.", Missing: "Halberdier & Handcannoner"
        },
        {
            id: 6, Name: "Celts", UU: 6, TeamBonus: "Siege Workshops work 20% faster.", CivBonus: 6, Focus: 6, CUT: "Stronghold - Castles and towers fire 25% faster.", IUT: "Furor Celtica - Gives Siege Workshop units +40% HP", Missing: "Halberdier & Handcannoner"
        },
        {
            id: 7, Name: "Chinese", UU: 7, TeamBonus: "Farms provide +45 food.", CivBonus: 7, Focus: 7, CUT: "Great Wall - Increases the hit points of walls and towers by +30%.", IUT: "Rocketry - Increases the attack of Chu Ko Nu by +2,and the attack of Scorpions by +4.", Missing: "Halberdier & Handcannoner"
        },
        {
            id: 8, Name: "Cumans", UU: 8, TeamBonus: "Palisade Walls have +50%", CivBonus: 8, Focus: 8, CUT: "Steppe Husbandry - Scout Cavalry line and Cavalry Archers are trained 400% faster.", IUT: "Cuman Mercenaries - Team members can create 10 free Elite Kipchaks in the Castle", Missing: "Halberdier & Handcannoner"
        },
        {
            id: 9, Name: "Ethiopians", UU: 9, TeamBonus: "Towers and Outposts have +3 Line of Sight", CivBonus: 9, Focus: 9, CUT: "Royal Heirs - Halves the creation speed of Shotel Warriors.", IUT: "Torsion Engines - Increases the blast radius of Siege Workshop units", Missing: "Halberdier & Handcannoner"
        },
        {
            id: 10, Name: "Franks", UU: 10, TeamBonus: "Knight line has +2 Line of Sight", CivBonus: 10, Focus: 10, CUT: "Chivalry - Increases the work rate of Stables by +40%.", IUT: "Bearded Axe - Gives Throwing Axemen +1 range", Missing: "Halberdier & Handcannoner"
        },
        {
            id: 11, Name: "Goths", UU: 0, TeamBonus: "Barracks work 20% faster.", CivBonus: 0, Focus: 0, CUT: "Atlatl - attack and range of Skirmishers +1", IUT: "Garland Wars - increases infantry attack by +4", Missing: "Halberdier & Handcannoner"
        },
        {
            id: 12, Name: "Huns", UU: 0, TeamBonus: "Stables work 20% faster.", CivBonus: 0, Focus: 0, CUT: "Atlatl - attack and range of Skirmishers +1", IUT: "Garland Wars - increases infantry attack by +4", Missing: "Halberdier & Handcannoner"
        },
        {
            id: 13, Name: "Incas", UU: 0, TeamBonus: "Farms are built 100% faster.", CivBonus: 0, Focus: 0, CUT: "Atlatl - attack and range of Skirmishers +1", IUT: "Garland Wars - increases infantry attack by +4", Missing: "Halberdier & Handcannoner"
        },
        {
            id: 14, Name: "Indians", UU: 0, TeamBonus: "Camel Rider +6 and ranged Camel +5 attack against buildings.", CivBonus: 0, Focus: 0, CUT: "Atlatl - attack and range of Skirmishers +1", IUT: "Garland Wars - increases infantry attack by +4", Missing: "Halberdier & Handcannoner"
        },
        {
            id: 15, Name: "Italians", UU: 0, TeamBonus: "Condottieri are available at the Barracks in Imp.", CivBonus: 0, Focus: 0, CUT: "Atlatl - attack and range of Skirmishers +1", IUT: "Garland Wars - increases infantry attack by +4", Missing: "Halberdier & Handcannoner"
        },
        {
            id: 16, Name: "Japanese", UU: 0, TeamBonus: "Galleys have +50% Line of Sight.", CivBonus: 0, Focus: 0, CUT: "Atlatl - attack and range of Skirmishers +1", IUT: "Garland Wars - increases infantry attack by +4", Missing: "Halberdier & Handcannoner"
        },
        {
            id: 17, Name: "Khmer", UU: 0, TeamBonus: "Scorpions have +1 range.", CivBonus: 0, Focus: 0, CUT: "Atlatl - attack and range of Skirmishers +1", IUT: "Garland Wars - increases infantry attack by +4", Missing: "Halberdier & Handcannoner"
        },
        {
            id: 18, Name: "Koreans", UU: 0, TeamBonus: "Mangonel line minimum range reduced to 1", CivBonus: 0, Focus: 0, CUT: "Atlatl - attack and range of Skirmishers +1", IUT: "Garland Wars - increases infantry attack by +4", Missing: "Halberdier & Handcannoner"
        },
        {
            id: 19, Name: "Lithuanians", UU: 0, TeamBonus: "Monasteries work 20% faster.", CivBonus: 0, Focus: 0, CUT: "Atlatl - attack and range of Skirmishers +1", IUT: "Garland Wars - increases infantry attack by +4", Missing: "Halberdier & Handcannoner"
        },
        {
            id: 20, Name: "Magyars", UU: 0, TeamBonus: "All foot archers have +2 Line of Sight.", CivBonus: 0, Focus: 0, CUT: "Atlatl - attack and range of Skirmishers +1", IUT: "Garland Wars - increases infantry attack by +4", Missing: "Halberdier & Handcannoner"
        },
        {
            id: 21, Name: "Malay", UU: 0, TeamBonus: "Docks and Harbors have +100% Line of Sight.", CivBonus: 0, Focus: 0, CUT: "Atlatl - attack and range of Skirmishers +1", IUT: "Garland Wars - increases infantry attack by +4", Missing: "Halberdier & Handcannoner"
        },
        {
            id: 22, Name: "Malians", UU: 0, TeamBonus: "University researches 80% faster.", CivBonus: 0, Focus: 0, CUT: "Atlatl - attack and range of Skirmishers +1", IUT: "Garland Wars - increases infantry attack by +4", Missing: "Halberdier & Handcannoner"
        },
        {
            id: 23, Name: "Mayans", UU: 0, TeamBonus: "Walls and Gates are 50% cheaper", CivBonus: 0, Focus: 0, CUT: "Atlatl - attack and range of Skirmishers +1", IUT: "Garland Wars - increases infantry attack by +4", Missing: "Halberdier & Handcannoner"
        },
        {
            id: 24, Name: "Mongols", UU: 0, TeamBonus: "Scout Cavalry line has +2 Line of Sight.", CivBonus: 0, Focus: 0, CUT: "Atlatl - attack and range of Skirmishers +1", IUT: "Garland Wars - increases infantry attack by +4", Missing: "Halberdier & Handcannoner"
        },
        {
            id: 25, Name: "Persians", UU: 0, TeamBonus: "Knight line has +2 attack against archers.", CivBonus: 0, Focus: 0, CUT: "Atlatl - attack and range of Skirmishers +1", IUT: "Garland Wars - increases infantry attack by +4", Missing: "Halberdier & Handcannoner"
        },
        {
            id: 26, Name: "Portuguese", UU: 0, TeamBonus: "Free Cartography from Dark Age.", CivBonus: 0, Focus: 0, CUT: "Atlatl - attack and range of Skirmishers +1", IUT: "Garland Wars - increases infantry attack by +4", Missing: "Halberdier & Handcannoner"
        },
        {
            id: 27, Name: "Saracens", UU: 0, TeamBonus: "All foot archers have +2 attack against standard buildings.", CivBonus: 0, Focus: 0, CUT: "Atlatl - attack and range of Skirmishers +1", IUT: "Garland Wars - increases infantry attack by +4", Missing: "Halberdier & Handcannoner"
        },
        {
            id: 28, Name: "Slavs", UU: 0, TeamBonus: "Military production buildings (except Castles and Kreposts) provide +5 pop.", CivBonus: 0, Focus: 0, CUT: "Atlatl - attack and range of Skirmishers +1", IUT: "Garland Wars - increases infantry attack by +4", Missing: "Halberdier & Handcannoner"
        },
        {
            id: 29, Name: "Spanish", UU: 0, TeamBonus: "Trade Carts and Trade Cogs return 25% more gold.", CivBonus: 0, Focus: 0, CUT: "Atlatl - attack and range of Skirmishers +1", IUT: "Garland Wars - increases infantry attack by +4", Missing: "Halberdier & Handcannoner"
        },
        {
            id: 30, Name: "Tatars", UU: 0, TeamBonus: "All Cavalry Archers have + 2 Line of Sight.", CivBonus: 0, Focus: 0, CUT: "Atlatl - attack and range of Skirmishers +1", IUT: "Garland Wars - increases infantry attack by +4", Missing: "Halberdier & Handcannoner"
        },
        {
            id: 31, Name: "Teutons", UU: 0, TeamBonus: "All units resist conversion.", CivBonus: 0, Focus: 0, CUT: "Atlatl - attack and range of Skirmishers +1", IUT: "Garland Wars - increases infantry attack by +4", Missing: "Halberdier & Handcannoner"
        },
        {
            id: 32, Name: "Turks", UU: 0, TeamBonus: "Gunpowder units are created 25% faster", CivBonus: 0, Focus: 0, CUT: "Atlatl - attack and range of Skirmishers +1", IUT: "Garland Wars - increases infantry attack by +4", Missing: "Halberdier & Handcannoner"
        },
        {
            id: 33, Name: "Vietnamese", UU: 0, TeamBonus: "Upgrade to Imperial Skirmishers in Imp.", CivBonus: 0, Focus: 0, CUT: "Atlatl - attack and range of Skirmishers +1", IUT: "Garland Wars - increases infantry attack by +4", Missing: "Halberdier & Handcannoner"
        },
        {
            id: 34, Name: "Vikings", UU: 0, TeamBonus: "Docks are 15% cheaper.", CivBonus: 0, Focus: 0, CUT: "Atlatl - attack and range of Skirmishers +1", IUT: "Garland Wars - increases infantry attack by +4", Missing: "Halberdier & Handcannoner"
        }
    ]
};
const uniqueUnits = ["Jaguar Warior", "Longbowman", "Konnik", "Camel Archer", "Arambai", "Cataphract", "Woad Raider", "Chu Ko Nu", "Kipchak", "Shotel Warrior", "Throwing Axeman"]
const civBonuses = ["Start the game with an Eagle Scout;Villagers carry +5 extra resources;All military units are created 18% faster;Monks gain 5 HP for every researched Monastery technology;Start with +50 gold.", "Villagers move +10% faster;Stable units are 15%/20% cheaper in the Castle/Imperial Age;Ships move +10% faster.", "Town Centers cost -50% wood starting in the Castle Age;Foot archers (except Skirmishers) have +1/+2 range in the Castle/Imperial Age;Shepherds work 25% faster.",
    "Militia line units are upgraded for free;Town Centers cost -50% stone;Can build Krepost.",
    "Lumber Camp technologies are free;Infantry has +1/+2/+3 attack in the Feudal/Castle/Imperial Age\nMonastery technologies are 50% cheaper.", "Buildings have +10%/+20%/+30%/+40% HP in the Dark/Feudal/Castle/Imperial Age;Camel Riders,Skirmishers,and the Spearman lines are 25% cheaper;Fire Ships fire 25% faster;Advancing to the Imperial Age is 33% cheaper;Town Watch is free.", "Infantry units move 15% faster;Lumberjacks work 15% faster;Siege weapons fire 25% faster;Enemy herdables can be converted regardless of enemy units next to them.", "Start game with three extra Villagers,but with -200 food and -50 wood;Town Centers support ten population (instead of five) and have +5 Line of Sight;Technologies are 10%/15%/20% cheaper in the Feudal/Castle/Imperial Age;Demolition Ships have +50% HP.", "Can build an additional Town Center in the Feudal Age;Siege Workshop and Battering Ram available in the Feudal Age;Cavalry moves 5%/10%/15% faster in the Feudal/Castle/Imperial Age.",
    "The Archer line fires 18% faster;Receive +100 food and +100 gold whenever a new Age is reached;The Pikeman upgrade is free.", "Farm upgrades are free;Castles are 25% cheaper;Cavalry have +20% HP;Foragers work 25% faster."];
const civFocus = ["Infantry and Monks","Navy and Cavalry","Foot archers","Infantry and Cavalry","Monks and Elephants","Defense","Infantry and Siege weapons","Archers","Cavalry","Archers and Siege weapons","Cavalry"]