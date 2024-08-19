export const skillsList = [

  // RANGER
  {
    name: 'Awareness',
    class: 'Ranger',
    factions: ['Freefolk', 'Sauron', 'Renegades'],
    exclude_races: [],
    pracs: { max: 27, Orc: 18, Troll: 11, Númenórean: 27 },
    difficulty: 'Normal',
    knowledge_cap: 152,
    knowledge: { base: 20, per: 3.75, int: 2.6 }
  },
  {
    name: 'Bandage',
    class: 'Ranger',
    factions: ['Freefolk', 'Sauron'],
    exclude_races: ['Troll'],
    pracs: { max: 18, Orc: 8, Númenórean: 18 },
    difficulty: 'Easy',
    knowledge_cap: 152,
    knowledge: { base: 18, int: 3.75, dex: 2.5 }
  },
  {
    name: 'Bandage',
    class: 'Ranger',
    factions: ['Renegades'],
    exclude_races: [],
    pracs: { max: 18 },
    difficulty: 'Easy',
    knowledge_cap: 152,
    knowledge: { base: 18, int: 3.75, dex: 2.5 }
  },
  {
    name: 'Climb',
    class: 'Ranger',
    factions: ['Freefolk', 'Sauron', 'Renegades'],
    exclude_races: [],
    pracs: { max: 13, Orc: 13, Troll: 3, Númenórean: 13 },
    difficulty: 'Very Easy',
    knowledge_cap: 152,
    knowledge: { base: 18, dex: 3, wil: 2, str: 1.25 }
  },
  {
    name: 'Command',
    class: 'Ranger',
    factions: ['Freefolk', 'Sauron'],
    exclude_races: ['Troll'],
    pracs: { max: 27, Orc: 18, Númenórean: 27 },
    difficulty: 'Normal',
    knowledge_cap: 159,
    knowledge: { base: 15, wil: 4.3, int: 3.7 }
  },
  {
    name: 'Dark Oath',
    class: 'Ranger',
    factions: ['Sauron'],
    exclude_races: ['Orc', 'Troll'],
    pracs: { max: 23, Númenórean: 23 },
    difficulty: 'Normal',
    knowledge_cap: 152,
    knowledge: { base: 16.5, con: 3, wil: 2, per: 0.75 }
  },
  {
    name: 'Leadership',
    class: 'Ranger',
    factions: ['Freefolk', 'Sauron', 'Renegades'],
    exclude_races: [],
    pracs: { max: 27, Orc: 18, Troll: 11, Númenórean: 27 },
    difficulty: 'Normal',
    knowledge_cap: 152,
    knowledge: { base: 17, wil: 4.0, wis: 3.5 }
  },
  {
    name: 'Ride',
    class: 'Ranger',
    factions: ['Freefolk', 'Sauron'],
    exclude_races: ['Troll'],
    pracs: { max: 13, Orc: 13, Númenórean: 13 },
    difficulty: 'Very Easy',
    knowledge_cap: 152,
    knowledge: { base: 18, dex: 3.75, wil: 2.5 },
  },
  {
    name: 'Swim',
    class: 'Ranger',
    factions: ['Freefolk', 'Sauron', 'Renegades'],
    exclude_races: [],
    pracs: { max: 14, Orc: 13, Troll: 3, Númenórean: 13 },
    difficulty: 'Very Easy',
    knowledge_cap: 152,
    knowledge: { base: 16, con: 3, wil: 2, dex: 1.3 }
  },
  {
    name: 'Track',
    class: 'Ranger',
    factions: ['Freefolk', 'Sauron', 'Renegades'],
    exclude_races: [],
    pracs: { max: 27 },
    difficulty: 'Normal',
    knowledge_cap: 152,
    knowledge: { base: 14.8, int: 2.8, per: 3.6 }
  },
  {
    name: 'Wilderness',
    class: 'Ranger',
    factions: ['Freefolk', 'Sauron', 'Renegades'],
    exclude_races: [],
    pracs: { max: 27 },
    difficulty: 'Normal',
    knowledge_cap: 152,
    knowledge: { base: 21, str: 2.8, wil: 3.6 }
  },

  // THIEF
  {
    name: 'Attack',
    class: 'Thief',
    factions: ['Freefolk', 'Sauron', 'Renegades'],
    exclude_races: ['Troll', 'Númenórean'],
    pracs: { max: 16 },
    difficulty: 'Normal',
    knowledge_cap: 114,
    knowledge: { base: 15, dex: 3.0, wil: 2.5 }
  },
  {
    name: 'Backstab',
    class: 'Thief',
    factions: ['Freefolk', 'Sauron', 'Renegades'],
    exclude_races: ['Troll'],
    pracs: { max: 23 },
    difficulty: 'Hard',
    knowledge_cap: 109,
    knowledge: { base: 10, dex: 3.0, per: 2.5 }
  },
  {
    name: 'Dodge',
    class: 'Thief',
    factions: ['Freefolk', 'Sauron', 'Renegades'],
    exclude_races: ['Troll'],
    pracs: { max: 23, Númenórean: 18 },
    difficulty: 'Hard',
    knowledge_cap: 109,
    knowledge: { base: 10, dex: 3.0, per: 2.5 }
  },
  {
    name: 'Envenom',
    class: 'Thief',
    factions: ['Freefolk', 'Sauron', 'Renegades'],
    exclude_races: ['Troll'],
    pracs: { max: 23 },
    difficulty: 'Hard',
    knowledge_cap: 109,
    knowledge: { base: 10, dex: 3.0, int: 2.5 }
  },
  {
    name: 'Escape',
    class: 'Thief',
    factions: ['Freefolk', 'Sauron', 'Renegades'],
    exclude_races: [],
    pracs: { max: 16, Troll: 8, Númenórean: 13 },
    difficulty: 'Normal',
    knowledge_cap: 109,
    knowledge: { base: 10, dex: 3.0, per: 2.5 }
  },
  {
    name: 'Hide',
    class: 'Thief',
    factions: ['Freefolk', 'Sauron', 'Renegades'],
    exclude_races: ['Troll'],
    pracs: { max: 16 },
    difficulty: 'Normal',
    knowledge_cap: 109,
    knowledge: { base: 10, dex: 3.0, per: 2.5 }
  },
  {
    name: 'Missile',
    class: 'Thief',
    factions: ['Freefolk', 'Renegades'],
    exclude_races: [],
    pracs: { max: 16 },
    difficulty: 'Normal',
    knowledge_cap: 114,
    knowledge: { base: 15, dex: 3.0, per: 2.5 }
  },
  {
    name: 'Missile',
    class: 'Thief',
    factions: ['Sauron'],
    exclude_races: ['Troll'],
    pracs: { max: 16, Orc: 13, Númenórean: 5 },
    difficulty: 'Normal',
    knowledge_cap: 114,
    knowledge: { base: 15, dex: 3.0, per: 2.5 }
  },
  {
    name: 'Pick',
    class: 'Thief',
    factions: ['Freefolk'],
    exclude_races: [],
    pracs: { max: 16 },
    difficulty: 'Normal',
    knowledge_cap: 109,
    knowledge: { base: 10, dex: 3.0, int: 2.5 }
  },
  {
    name: 'Pick',
    class: 'Thief',
    factions: ['Sauron'],
    exclude_races: ['Troll'],
    pracs: { max: 16, Orc: 8, Númenórean: 5 },
    difficulty: 'Normal',
    knowledge_cap: 109,
    knowledge: { base: 10, dex: 3.0, int: 2.5 }
  },
  {
    name: 'Pick',
    class: 'Thief',
    factions: ['Renegades'],
    exclude_races: [],
    pracs: { max: 16, Orc: 6 },
    difficulty: 'Normal',
    knowledge_cap: 109,
    knowledge: { base: 10, dex: 3.0, int: 2.5 }
  },
  {
    name: 'Piercing',
    class: 'Thief',
    factions: ['Freefolk', 'Sauron', 'Renegades'],
    exclude_races: ['Troll', 'Númenórean'],
    pracs: { max: 16 },
    difficulty: 'Normal',
    knowledge_cap: 114,
    knowledge: { base: 10.5, dex: 2.5, per: 1.75, str: 1.5 }
  },
  {
    name: 'Search',
    class: 'Thief',
    factions: ['Freefolk', 'Sauron'],
    exclude_races: [],
    pracs: { max: 16, Orc: 3, Troll: 1, Númenórean: 5 },
    difficulty: 'Normal',
    knowledge_cap: 109,
    knowledge: { base: 10, dex: 3.0, per: 2.5 }
  },
  {
    name: 'Search',
    class: 'Thief',
    factions: ['Renegades'],
    exclude_races: [],
    pracs: { max: 16, Orc: 4 },
    difficulty: 'Normal',
    knowledge_cap: 109,
    knowledge: { base: 10, dex: 3.0, per: 2.5 }
  },
  {
    name: 'Sneak',
    class: 'Thief',
    factions: ['Freefolk', 'Sauron', 'Renegades'],
    exclude_races: ['Troll'],
    pracs: { max: 23 },
    difficulty: 'Hard',
    knowledge_cap: 109,
    knowledge: { base: 10, dex: 3.0, per: 2.5 }
  },
  {
    name: 'Steal',
    class: 'Thief',
    factions: ['Freefolk', 'Sauron', 'Renegades'],
    exclude_races: ['Troll'],
    pracs: { max: 23 },
    difficulty: 'Normal',
    knowledge_cap: 109,
    knowledge: { base: 10, dex: 3.0, per: 2.5 }
  },

  // WARRIOR
  {
    name: 'Bash',
    class: 'Warrior',
    factions: ['Freefolk', 'Sauron', 'Renegades'],
    exclude_races: ['Númenórean'],
    pracs: { max: 43, Orc: 43, Troll: 40 },
    difficulty: 'Hard',
    knowledge_cap: 114,
    knowledge: { base: 18, str: 2.4, dex: 2.4, wil: 1.8 }
  },
  {
    name: 'Charge',
    class: 'Warrior',
    factions: ['Freefolk', 'Sauron', 'Renegades'],
    exclude_races: ['Númenórean', 'Troll'],
    pracs: { max: 29 },
    difficulty: 'Normal',
    knowledge_cap: 114,
    knowledge: { base: 6, dex: 2.4, str: 1.8, wil: 1.8 }
  },
  {
    name: 'Cleaving',
    class: 'Warrior',
    factions: ['Freefolk', 'Sauron', 'Renegades'],
    exclude_races: ['Númenórean'],
    pracs: { max: 29, Troll: 23 },
    difficulty: 'Normal',
    knowledge_cap: 114,
    knowledge: { base: 6, str: 2.4, dex: 1.8, wil: 1.8 }
  },
  {
    name: 'Concussion',
    class: 'Warrior',
    factions: ['Freefolk', 'Sauron', 'Renegades'],
    exclude_races: ['Númenórean'],
    pracs: { max: 29, Troll: 23 },
    difficulty: 'Normal',
    knowledge_cap: 114,
    knowledge: { base: 6, str: 2.4, con: 1.8, wil: 1.8 }
  },
  {
    name: 'Endurance',
    class: 'Warrior',
    factions: ['Freefolk', 'Sauron', 'Renegades'],
    exclude_races: ['Númenórean'],
    pracs: { max: 58 },
    difficulty: 'Very Hard',
    knowledge_cap: 114,
    knowledge: { base: 6, con: 3.4, wil: 2.6 }
  },
  {
    name: 'Kick',
    class: 'Warrior',
    factions: ['Freefolk', 'Sauron', 'Renegades'],
    exclude_races: ['Númenórean'],
    pracs: { max: 29, Troll: 23 },
    difficulty: 'Normal',
    knowledge_cap: 114,
    knowledge: { base: 6, str: 3.0, dex: 2.0, wil: 1.0 }
  },
  {
    name: 'Parry',
    class: 'Warrior',
    factions: ['Freefolk', 'Sauron', 'Renegades'],
    exclude_races: ['Númenórean'],
    pracs: { max: 29, Troll: 23 },
    difficulty: 'Normal',
    knowledge_cap: 114,
    knowledge: { base: 24, dex: 1.8, per: 1.8, str: 1.4 }
  },
  {
    name: 'Rescue',
    class: 'Warrior',
    factions: ['Freefolk', 'Sauron'],
    exclude_races: ['Númenórean'],
    pracs: { max: 21, Orc: 10, Troll: 8 },
    difficulty: 'Easy',
    knowledge_cap: 114,
    knowledge: { base: 6, dex: 3.0, wil: 2.0, str: 1.0 }
  },
  {
    name: 'Rescue',
    class: 'Warrior',
    factions: ['Renegades'],
    exclude_races: [],
    pracs: { max: 21 },
    difficulty: 'Easy',
    knowledge_cap: 114,
    knowledge: { base: 6, dex: 3.0, wil: 2.0, str: 1.0 }
  },
  {
    name: 'Unarmed',
    class: 'Warrior',
    factions: ['Sauron'],
    exclude_races: ['Orc', 'Númenórean'],
    pracs: { max: 34 },
    difficulty: 'Hard',
    knowledge_cap: 104,
    knowledge: { base: 3.2, str: 2.4, dex: 1.6, wil: 1.6 }
  },
  {
    name: 'Slashing',
    class: 'Warrior',
    factions: ['Freefolk', 'Sauron', 'Renegades'],
    exclude_races: ['Númenórean'],
    pracs: { max: 29, Troll: 23 },
    difficulty: 'Normal',
    knowledge_cap: 114,
    knowledge: { base: 6, str: 2.4, dex: 1.8, per: 1.8 }
  },
  {
    name: 'Stabbing',
    class: 'Warrior',
    factions: ['Freefolk', 'Sauron', 'Renegades'],
    exclude_races: ['Númenórean'],
    pracs: { max: 29, Troll: 23 },
    difficulty: 'Normal',
    knowledge_cap: 114,
    knowledge: { base: 6, str: 2.4, dex: 1.8, per: 1.8 }
  },
  {
    name: 'Two-Handed',
    class: 'Warrior',
    factions: ['Freefolk', 'Sauron', 'Renegades'],
    exclude_races: ['Númenórean'],
    pracs: { max: 29, Troll: 23 },
    difficulty: 'Normal',
    knowledge_cap: 114,
    knowledge: { base: 6, str: 2.4, con: 1.8, wil: 1.8 }
  },

  // MAGE
  {
    name: 'Armour',
    class: 'Mage',
    factions: ['Freefolk', 'Sauron'],
    exclude_races: ['Orc', 'Troll'],
    pracs: { max: 16, Númenórean: 16 },
    difficulty: 'Hard',
    knowledge_cap: 110,
    knowledge: { base: 30.6, int: 2.6, wis: 1.8 }
  },
  {
    name: 'Block Door',
    class: 'Mage',
    factions: ['Freefolk'],
    exclude_races: [],
    pracs: { max: 11 },
    difficulty: 'Normal',
    knowledge_cap: 110,
    knowledge: { base: 30.6, int: 2.6, wil: 1.8 }

  },
  {
    name: 'Block Door',
    class: 'Mage',
    factions: ['Sauron'],
    exclude_races: ['Orc', 'Troll'],
    pracs: { max: 8 },
    difficulty: 'Normal',
    knowledge_cap: 110,
    knowledge: { base: 21.6, int: 2.6, wil: 1.8 }
  },
  {
    name: 'Burning Hands',
    class: 'Mage',
    factions: ['Freefolk', 'Sauron'],
    exclude_races: ['Orc', 'Troll'],
    pracs: { max: 11, Númenórean: 11 },
    difficulty: 'Normal',
    knowledge_cap: 112,
    knowledge: { base: 11.2, int: 2.6, wis: 1.8, per: 1.2 }
  },
  {
    name: 'Call Familiar',
    class: 'Mage',
    factions: ['Freefolk', 'Sauron'],
    exclude_races: ['Orc', 'Troll'],
    pracs: { max: 7, Númenórean: 7 },
    difficulty: 'Normal',
    knowledge_cap: 112,
    knowledge: { base: 11.2, int: 2.6, wis: 1.8, wil: 1.2 }
  },
  {
    name: 'Call Lightning',
    class: 'Mage',
    factions: ['Freefolk', 'Sauron'],
    exclude_races: ['Orc', 'Troll'],
    pracs: { max: 16, Númenórean: 16 },
    difficulty: 'Hard',
    knowledge_cap: 112,
    knowledge: { base: 11.2, int: 2.6, wis: 1.8, per: 1.2 }
  },
  {
    name: 'Charm',
    class: 'Mage',
    factions: ['Freefolk', 'Sauron'],
    exclude_races: ['Orc', 'Troll'],
    pracs: { max: 16, Númenórean: 9 },
    difficulty: 'Hard',
    knowledge_cap: 112,
    knowledge: { base: 11.2, int: 3.2, wil: 2.4 }
  },
  {
    name: 'Chill Touch',
    class: 'Mage',
    factions: ['Freefolk', 'Sauron'],
    exclude_races: ['Orc', 'Troll'],
    pracs: { max: 8, Númenórean: 8 },
    difficulty: 'Easy',
    knowledge_cap: 112,
    knowledge: { base: 11.2, int: 2.6, wis: 1.8, per: 1.2 }
  },
  {
    name: 'Colour Spray',
    class: 'Mage',
    factions: ['Freefolk'],
    exclude_races: [],
    pracs: { max: 16 },
    difficulty: 'Normal',
    knowledge_cap: 112,
    knowledge: { base: 11.2, int: 2.6, wis: 1.8, per: 1.2 }
  },
  {
    name: 'Control Weather',
    class: 'Mage',
    factions: ['Freefolk', 'Sauron'],
    exclude_races: ['Orc', 'Troll', 'Númenórean'],
    pracs: { max: 16 },
    difficulty: 'Hard',
    knowledge_cap: 112,
    knowledge: { base: 11.2, int: 2.6, wis: 1.8, wil: 1.2 }
  },
  {
    name: 'Create Light',
    class: 'Mage',
    factions: ['Freefolk', 'Sauron'],
    exclude_races: ['Orc', 'Troll'],
    pracs: { max: 8, Númenórean: 3 },
    difficulty: 'Easy',
    knowledge_cap: 112,
    knowledge: { base: 11.2, int: 3.2, wis: 2.4 }
  },
  {
    name: 'Detect Invis',
    class: 'Mage',
    factions: ['Freefolk', 'Sauron'],
    exclude_races: ['Orc', 'Troll'],
    pracs: { max: 11, Númenórean: 11 },
    difficulty: 'Normal',
    knowledge_cap: 112,
    knowledge: { base: 11.2, int: 2.6, wis: 1.8, per: 1.2 }
  },
  {
    name: 'Detect Magic',
    class: 'Mage',
    factions: ['Freefolk', 'Sauron'],
    exclude_races: ['Orc', 'Troll'],
    pracs: { max: 8, Númenórean: 8 },
    difficulty: 'Easy',
    knowledge_cap: 112,
    knowledge: { base: 11.2, int: 2.6, wis: 1.8, per: 1.2 }
  },
  {
    name: 'Dispel Magic',
    class: 'Mage',
    factions: ['Freefolk', 'Sauron'],
    exclude_races: ['Orc', 'Troll'],
    pracs: { max: 22, Númenórean: 19 },
    difficulty: 'Very Hard',
    knowledge_cap: 112,
    knowledge: { base: 11.2, int: 3.2, wil: 2.4 }
  },
  {
    name: 'Earthquake',
    class: 'Mage',
    factions: ['Freefolk', 'Sauron'],
    exclude_races: ['Orc', 'Troll'],
    pracs: { max: 16, Númenórean: 16 },
    difficulty: 'Hard',
    knowledge_cap: 112,
    knowledge: { base: 11.2, int: 3.2, wis: 2.4 }
  },
  {
    name: 'Enchant',
    class: 'Mage',
    factions: ['Freefolk', 'Sauron'],
    exclude_races: ['Orc', 'Troll'],
    pracs: { max: 22, Númenórean: 13 },
    difficulty: 'Very Hard',
    knowledge_cap: 112,
    knowledge: { base: 11.2, int: 3.2, wis: 2.4 }
  },
  {
    name: 'Find the Path',
    class: 'Mage',
    factions: ['Freefolk'],
    exclude_races: [],
    pracs: { max: 11 },
    difficulty: 'Hard',
    knowledge_cap: 112,
    knowledge: { base: 11.2, int: 2.6, wis: 1.8, wil: 1.2 }
  },
  {
    name: 'Fireball',
    class: 'Mage',
    factions: ['Freefolk', 'Sauron'],
    exclude_races: ['Orc', 'Troll'],
    pracs: { max: 16, Númenórean: 16 },
    difficulty: 'Hard',
    knowledge_cap: 112,
    knowledge: { base: 11.2, int: 2.6, wis: 1.8, per: 1.2 }
  },
  {
    name: 'Identify',
    class: 'Mage',
    factions: ['Freefolk', 'Sauron'],
    exclude_races: ['Orc', 'Troll'],
    pracs: { max: 16, Númenórean: 16 },
    difficulty: 'Hard',
    knowledge_cap: 112,
    knowledge: { base: 11.2, int: 2.6, wis: 1.8, per: 1.2 }
  },
  {
    name: 'Lightning Bolt',
    class: 'Mage',
    factions: ['Freefolk', 'Sauron'],
    exclude_races: ['Orc', 'Troll'],
    pracs: { max: 16, Númenórean: 16 },
    difficulty: 'Hard',
    knowledge_cap: 112,
    knowledge: { base: 11.2, int: 2.6, wis: 1.8, per: 1.2 }
  },
  {
    name: 'Locate',
    class: 'Mage',
    factions: ['Freefolk', 'Sauron'],
    exclude_races: ['Orc', 'Troll'],
    pracs: { max: 16, Númenórean: 12 },
    difficulty: 'Hard',
    knowledge_cap: 110,
    knowledge: { base: 20, int: 2.2, wis: 1.6, wil: 1.2 }
  },
  {
    name: 'Locate Life',
    class: 'Mage',
    factions: ['Freefolk'],
    exclude_races: [],
    pracs: { max: 16 },
    difficulty: 'Hard',
    knowledge_cap: 110,
    knowledge: { base: 20, int: 2.2, wis: 1.6, wil: 1.2 }
  },
  {
    name: 'Locate Life',
    class: 'Mage',
    factions: ['Sauron'],
    exclude_races: ['Orc', 'Troll'],
    pracs: { max: 12 },
    difficulty: 'Hard',
    knowledge_cap: 110,
    knowledge: { base: 20, int: 2.2, wis: 1.6, wil: 1.2 }
  },
  {
    name: 'Locate Magic',
    class: 'Mage',
    factions: ['Freefolk', 'Sauron'],
    exclude_races: ['Orc', 'Troll'],
    pracs: { max: 12, Númenórean: 10 },
    difficulty: 'Normal',
    knowledge_cap: 110,
    knowledge: { base: 20, int: 2.2, wis: 1.6, wil: 1.2 }
  },
  {
    name: 'Magic Blast',
    class: 'Mage',
    factions: ['Sauron'],
    exclude_races: ['Orc', 'Troll'],
    pracs: { max: 22 },
    difficulty: 'Very Hard',
    knowledge_cap: 110,
    knowledge: { base: 56, int: 2.0, wil: 1.0 }
  },
  {
    name: 'Magic Missile',
    class: 'Mage',
    factions: ['Freefolk', 'Sauron'],
    exclude_races: ['Orc', 'Troll'],
    pracs: { max: 8, Númenórean: 8 },
    difficulty: 'Easy',
    knowledge_cap: 112,
    knowledge: { base: 11.2, int: 2.6, wis: 1.8, per: 1.2 }
  },
  {
    name: 'Night Vision',
    class: 'Mage',
    factions: ['Freefolk', 'Sauron'],
    exclude_races: ['Orc', 'Troll'],
    pracs: { max: 11, Númenórean: 9 },
    difficulty: 'Normal',
    knowledge_cap: 112,
    knowledge: { base: 11.2, int: 2.6, wis: 1.8, per: 1.2 }
  },
  {
    name: 'Portal',
    class: 'Mage',
    factions: ['Freefolk', 'Sauron'],
    exclude_races: ['Orc', 'Troll'],
    pracs: { max: 22, Númenórean: 22 },
    difficulty: 'Very Hard',
    knowledge_cap: 112,
    knowledge: { base: 11.2, int: 3.2, wil: 2.4 }
  },
  {
    name: 'Scry',
    class: 'Mage',
    factions: ['Freefolk'],
    exclude_races: [],
    pracs: { max: 16 },
    difficulty: 'Hard',
    knowledge_cap: 110,
    knowledge: { base: 20, int: 2.2, wis: 1.6, wil: 1.2 }
  },
  {
    name: 'Scry',
    class: 'Mage',
    factions: ['Sauron'],
    exclude_races: ['Orc', 'Troll'],
    pracs: { max: 12 },
    difficulty: 'Hard',
    knowledge_cap: 110,
    knowledge: { base: 20, int: 2.2, wis: 1.6, wil: 1.2 }
  },
  {
    name: 'Shocking Grasp',
    class: 'Mage',
    factions: ['Freefolk', 'Sauron'],
    exclude_races: ['Orc', 'Troll'],
    pracs: { max: 11, Númenórean: 11 },
    difficulty: 'Normal',
    knowledge_cap: 112,
    knowledge: { base: 11.2, int: 2.6, wis: 1.8, per: 1.2 }
  },
  {
    name: 'Shield',
    class: 'Mage',
    factions: ['Freefolk', 'Sauron'],
    exclude_races: ['Orc', 'Troll'],
    pracs: { max: 16, Númenórean: 16 },
    difficulty: 'Hard',
    knowledge_cap: 110,
    knowledge: { base: 30.6, int: 2.6, wis: 1.8 }
  },
  {
    name: 'Shroud',
    class: 'Mage',
    factions: ['Freefolk', 'Sauron'],
    exclude_races: ['Orc', 'Troll'],
    pracs: { max: 16, Númenórean: 12 },
    difficulty: 'Hard',
    knowledge_cap: 110,
    knowledge: { base: 9.2, int: 3.2, wis: 2.4 }
  },
  {
    name: 'Silence',
    class: 'Mage',
    factions: ['Freefolk', 'Sauron'],
    exclude_races: ['Orc', 'Troll'],
    pracs: { max: 16, Númenórean: 11 },
    difficulty: 'Normal',
    knowledge_cap: 112,
    knowledge: { base: 11.2, int: 3.2, wil: 2.4 }
  },
  {
    name: 'Sleep',
    class: 'Mage',
    factions: ['Freefolk', 'Sauron'],
    exclude_races: ['Orc', 'Troll'],
    pracs: { max: 16, Númenórean: 13 },
    difficulty: 'Hard',
    knowledge_cap: 112,
    knowledge: { base: 11.2, int: 3.2, wil: 2.4 }
  },
  {
    name: 'Store',
    class: 'Mage',
    factions: ['Freefolk', 'Sauron'],
    exclude_races: ['Orc', 'Troll'],
    pracs: { max: 16, Númenórean: 16 },
    difficulty: 'Hard',
    knowledge_cap: 112,
    knowledge: { base: 11.2, int: 3.2, wis: 2.4 }
  },
  {
    name: 'Teleport',
    class: 'Mage',
    factions: ['Freefolk'],
    exclude_races: [],
    pracs: { max: 16 },
    difficulty: 'Hard',
    knowledge_cap: 112,
    knowledge: { base: 29, int: 2.8, wil: 1.6 }
  },
  {
    name: 'Teleport',
    class: 'Mage',
    factions: ['Sauron'],
    exclude_races: ['Orc', 'Troll'],
    pracs: { max: 13 },
    difficulty: 'Hard',
    knowledge_cap: 112,
    knowledge: { base: 29, int: 2.8, wil: 1.6 }
  },
  {
    name: 'Ventriloquate',
    class: 'Mage',
    factions: ['Freefolk', 'Sauron'],
    exclude_races: ['Orc', 'Troll'],
    pracs: { max: 5, Númenórean: 5 },
    difficulty: 'Very Easy',
    knowledge_cap: 112,
    knowledge: { base: 11.2, int: 3.2, wis: 2.4 }
  },
  {
    name: 'Watch Room',
    class: 'Mage',
    factions: ['Freefolk', 'Sauron'],
    exclude_races: ['Orc', 'Troll'],
    pracs: { max: 10, Númenórean: 8 },
    difficulty: 'Normal',
    knowledge_cap: 112,
    knowledge: { base: 11.2, int: 2.6, wis: 1.8, wil: 1.2 }
  },

  // PRIEST
  {
    name: 'Bless',
    class: 'Priest',
    factions: ['Freefolk'],
    exclude_races: [],
    pracs: { max: 22 },
    difficulty: 'Normal',
    knowledge_cap: 112,
    knowledge: { base: 11.2, wis: 2.6, int: 1.8, wil: 1.2 }
  },
  {
    name: 'Blind',
    class: 'Priest',
    factions: ['Freefolk', 'Sauron'],
    exclude_races: ['Orc', 'Troll'],
    pracs: { max: 18, Númenórean: 18 },
    difficulty: 'Hard',
    knowledge_cap: 112,
    knowledge: { base: 11.2, wis: 3.2, wil: 2.4 }
  },
  {
    name: 'Break Door',
    class: 'Priest',
    factions: ['Freefolk', 'Sauron'],
    exclude_races: ['Orc', 'Troll'],
    pracs: { max: 12, Númenórean: 9 },
    difficulty: 'Normal',
    knowledge_cap: 112,
    knowledge: { base: 11.2, wis: 3.2, wil: 2.4 }
  },
  {
    name: 'Breath of Briskness',
    class: 'Priest',
    factions: ['Freefolk', 'Sauron'],
    exclude_races: ['Orc', 'Troll'],
    pracs: { max: 18, Númenórean: 16 },
    difficulty: 'Hard',
    knowledge_cap: 112,
    knowledge: { base: 11.2, wis: 3.2, int: 2.4 }
  },
  {
    name: 'Create Food',
    class: 'Priest',
    factions: ['Freefolk', 'Sauron'],
    exclude_races: ['Orc', 'Troll'],
    pracs: { max: 12, Númenórean: 6 },
    difficulty: 'Normal',
    knowledge_cap: 112,
    knowledge: { base: 11.2, wis: 3.2, int: 2.4 }
  },
  {
    name: 'Create Water',
    class: 'Priest',
    factions: ['Freefolk', 'Sauron'],
    exclude_races: ['Orc', 'Troll'],
    pracs: { max: 12, Númenórean: 6 },
    difficulty: 'Normal',
    knowledge_cap: 112,
    knowledge: { base: 11.2, wis: 3.2, int: 2.4 }
  },
  {
    name: 'Cure Blind',
    class: 'Priest',
    factions: ['Freefolk'],
    exclude_races: [],
    pracs: { max: 12 },
    difficulty: 'Normal',
    knowledge_cap: 112,
    knowledge: { base: 11.2, wis: 3.2, int: 2.4 }
  },
  {
    name: 'Cure Critic',
    class: 'Priest',
    factions: ['Freefolk', 'Sauron'],
    exclude_races: ['Orc', 'Troll'],
    pracs: { max: 12, Númenórean: 8 },
    difficulty: 'Normal',
    knowledge_cap: 112,
    knowledge: { base: 11.2, wis: 3.2, int: 2.4 }
  },
  {
    name: 'Cure Disease',
    class: 'Priest',
    factions: ['Freefolk', 'Sauron'],
    exclude_races: ['Orc', 'Troll'],
    pracs: { max: 9, Númenórean: 3 },
    difficulty: 'Easy',
    knowledge_cap: 112,
    knowledge: { base: 11.2, wis: 3.2, int: 2.4 }
  },
  {
    name: 'Cure Light',
    class: 'Priest',
    factions: ['Freefolk'],
    exclude_races: [],
    pracs: { max: 12 },
    difficulty: 'Easy',
    knowledge_cap: 112,
    knowledge: { base: 11.2, wis: 3.2, int: 2.4 }
  },
  {
    name: 'Cure Serious',
    class: 'Priest',
    factions: ['Freefolk', 'Sauron'],
    exclude_races: ['Orc', 'Troll'],
    pracs: { max: 12, Númenórean: 6 },
    difficulty: 'Normal',
    knowledge_cap: 112,
    knowledge: { base: 11.2, wis: 3.2, int: 2.4 }
  },
  {
    name: 'Curse',
    class: 'Priest',
    factions: ['Freefolk'],
    exclude_races: [],
    pracs: { max: 12 },
    difficulty: 'Normal',
    knowledge_cap: 112,
    knowledge: { base: 11.2, wis: 3.2, wil: 2.4 }
  },
  {
    name: 'Darkness',
    class: 'Priest',
    factions: ['Sauron'],
    exclude_races: ['Orc', 'Troll'],
    pracs: { max: 12 },
    difficulty: 'Normal',
    knowledge_cap: 112,
    knowledge: { base: 11.2, wis: 3.2, int: 2.4 }
  },
  {
    name: 'Detect Evil',
    class: 'Priest',
    factions: ['Freefolk'],
    exclude_races: [],
    pracs: { max: 8 },
    difficulty: 'Easy',
    knowledge_cap: 112,
    knowledge: { base: 11.2, wis: 2.6, int: 1.8, per: 1.2 }
  },
  {
    name: 'Detect Poison',
    class: 'Priest',
    factions: [],
    exclude_races: [],
    pracs: { max: 8 },
    difficulty: 'Easy',
    knowledge_cap: 112,
    knowledge: { base: 11.2, wis: 2.6, int: 1.8, per: 1.2 }
  },
  {
    name: 'Dispel Evil',
    class: 'Priest',
    factions: ['Freefolk'],
    exclude_races: [],
    pracs: { max: 18 },
    difficulty: 'Hard',
    knowledge_cap: 112,
    knowledge: { base: 11.2, wis: 3.2, wil: 2.4 }
  },
  {
    name: 'Divination',
    class: 'Priest',
    factions: ['Freefolk'],
    exclude_races: [],
    pracs: { max: 18 },
    difficulty: 'Hard',
    knowledge_cap: 112,
    knowledge: { base: 11.2, wis: 2.6, int: 1.8, per: 1.2 }
  },
  {
    name: 'Fear',
    class: 'Priest',
    factions: ['Freefolk', 'Sauron'],
    exclude_races: ['Orc', 'Troll'],
    pracs: { max: 18, Númenórean: 18 },
    difficulty: 'Hard',
    knowledge_cap: 112,
    knowledge: { base: 11.2, wis: 3.2, wil: 2.4 }
  },
  {
    name: 'Harm',
    class: 'Priest',
    factions: ['Freefolk', 'Sauron'],
    exclude_races: ['Orc', 'Troll'],
    pracs: { max: 18, Númenórean: 15 },
    difficulty: 'Hard',
    knowledge_cap: 112,
    knowledge: { base: 11.2, wis: 3.2, int: 2.4 }
  },
  {
    name: 'Heal',
    class: 'Priest',
    factions: ['Freefolk'],
    exclude_races: [],
    pracs: { max: 18 },
    difficulty: 'Hard',
    knowledge_cap: 112,
    knowledge: { base: 11.2, wis: 3.2, int: 2.4 }
  },
  {
    name: 'Poison',
    class: 'Priest',
    factions: ['Freefolk', 'Sauron'],
    exclude_races: ['Orc', 'Troll'],
    pracs: { max: 12, Númenórean: 10 },
    difficulty: 'Normal',
    knowledge_cap: 112,
    knowledge: { base: 11.2, wis: 3.2, int: 2.4 }
  },
  {
    name: 'Protection from Evil',
    class: 'Priest',
    factions: ['Freefolk'],
    exclude_races: [],
    pracs: { max: 18 },
    difficulty: 'Normal',
    knowledge_cap: 112,
    knowledge: { base: 11.2, wis: 3.2, wil: 2.4 }
  },
  {
    name: 'Remove Curse',
    class: 'Priest',
    factions: ['Freefolk', 'Sauron'],
    exclude_races: ['Orc', 'Troll'],
    pracs: { max: 12, Númenórean: 3 },
    difficulty: 'Normal',
    knowledge_cap: 112,
    knowledge: { base: 11.2, wis: 3.2, wil: 2.4 }
  },
  {
    name: 'Remove Poison',
    class: 'Priest',
    factions: ['Freefolk', 'Sauron'],
    exclude_races: ['Orc', 'Troll'],
    pracs: { max: 12, Númenórean: 6 },
    difficulty: 'Normal',
    knowledge_cap: 112,
    knowledge: { base: 11.2, wis: 3.2, int: 2.4 }
  }, 
  {
    name: 'Sanctuary',
    class: 'Priest',
    factions: ['Freefolk', 'Sauron'],
    exclude_races: ['Orc', 'Troll'],
    pracs: { max: 25, Númenórean: 18 },
    difficulty: 'Very Hard',
    knowledge_cap: 112,
    knowledge: { base: 11.2, wis: 3.2, int: 2.4 }
  },
  {
    name: 'Sense Life',
    class: 'Priest',
    factions: ['Freefolk', 'Sauron'],
    exclude_races: ['Orc', 'Troll'],
    pracs: { max: 9, Númenórean: 8 },
    difficulty: 'Normal',
    knowledge_cap: 112,
    knowledge: { base: 11.2, wis: 3.2, int: 2.4 }
  },
  {
    name: 'Smother',
    class: 'Priest',
    factions: ['Freefolk', 'Sauron'],
    exclude_races: ['Orc', 'Troll'],
    pracs: { max: 9, Númenórean: 9 },
    difficulty: 'Easy',
    knowledge_cap: 112,
    knowledge: { base: 11.2, wis: 3.2, int: 2.4 }
  },
  {
    name: 'Strength',
    class: 'Priest',
    factions: ['Freefolk', 'Sauron'],
    exclude_races: ['Orc', 'Troll'],
    pracs: { max: 18, Númenórean: 8 },
    difficulty: 'Hard',
    knowledge_cap: 112,
    knowledge: { base: 11.2, wis: 3.2, int: 2.4 }
  },
  {
    name: 'Summon',
    class: 'Priest',
    factions: ['Freefolk', 'Sauron'],
    exclude_races: ['Orc', 'Troll'],
    pracs: { max: 18, Númenórean: 11 },
    difficulty: 'Hard',
    knowledge_cap: 112,
    knowledge: { base: 11.2, wis: 3.2, wil: 2.4 }
  },
  {
    name: 'Transfer',
    class: 'Priest',
    factions: ['Freefolk'],
    exclude_races: [],
    pracs: { max: 23 },
    difficulty: 'Very Hard',
    knowledge_cap: 112,
    knowledge: { base: 11.2, wis: 3.2, wil: 2.4 }
  },
  {
    name: 'Word of Recall',
    class: 'Priest',
    factions: ['Freefolk'],
    exclude_races: [],
    pracs: { max: 23 },
    difficulty: 'Very Hard',
    knowledge_cap: 112,
    knowledge: { base: 11.2, wis: 3.2, wil: 2.4 }
  },

  // SHAMAN
  {
    name: 'Armour',
    class: 'Shaman',
    factions: ['Sauron'],
    exclude_races: ['Troll', 'Númenórean'],
    pracs: { max: 16 },
    difficulty: 'Hard',
    knowledge_cap: 98,
    knowledge: { base: 30.2, int: 2.6, wis: 1.8 }
  },
  {
    name: 'Black Breath',
    class: 'Shaman',
    factions: ['Sauron'],
    exclude_races: ['Troll', 'Númenórean'],
    pracs: { max: 35 },
    difficulty: 'Very Hard',
    knowledge_cap: 108,
    knowledge: { base: 12, wis: 3.6, wil: 2.4 }
  },
  {
    name: 'Blind',
    class: 'Shaman',
    factions: ['Sauron'],
    exclude_races: ['Troll', 'Númenórean'],
    pracs: { max: 22 },
    difficulty: 'Hard',
    knowledge_cap: 104,
    knowledge: { base: 11, wis: 3.4, wil: 2.4 }
  },
  {
    name: 'Break Door',
    class: 'Shaman',
    factions: ['Sauron'],
    exclude_races: ['Troll', 'Númenórean'],
    pracs: { max: 14 },
    difficulty: 'Normal',
    knowledge_cap: 108,
    knowledge: { base: 12, wis: 3.6, wil: 2.4 }
  },
  {
    name: 'Breath of Briskness',
    class: 'Shaman',
    factions: ['Sauron'],
    exclude_races: ['Troll', 'Númenórean'],
    pracs: { max: 16 },
    difficulty: 'Hard',
    knowledge_cap: 93,
    knowledge: { base: 24.2, wis: 2.8, int: 1.6 }
  },
  {
    name: 'Burning Hands',
    class: 'Shaman',
    factions: ['Sauron'],
    exclude_races: ['Troll', 'Númenórean'],
    pracs: { max: 11 },
    difficulty: 'Normal',
    knowledge_cap: 102,
    knowledge: { base: 10.0, int: 2.8, wis: 1.8, per: 1.2 }
  },
  {
    name: 'Call Familiar',
    class: 'Shaman',
    factions: ['Sauron'],
    exclude_races: ['Troll', 'Númenórean'],
    pracs: { max: 7, Orc: 4 },
    difficulty: 'Normal',
    knowledge_cap: 112,
    knowledge: { base: 10.6, int: 2.8, wis: 1.8, wil: 1.2 }
  },
  {
    name: 'Chill Touch',
    class: 'Shaman',
    factions: ['Sauron'],
    exclude_races: ['Troll', 'Númenórean'],
    pracs: { max: 8, Orc: 10 },
    difficulty: 'Easy',
    knowledge_cap: 102,
    knowledge: { base: 10.0, int: 2.8, wis: 1.8, per: 1.2 }
  },
  {
    name: 'Control Weather',
    class: 'Shaman',
    factions: ['Sauron'],
    exclude_races: ['Troll', 'Númenórean'],
    pracs: { max: 13 },
    difficulty: 'Hard',
    knowledge_cap: 112,
    knowledge: { base: 10.6, int: 2.8, wis: 1.8, wil: 1.2 }
  },
  {
    name: 'Create Food',
    class: 'Shaman',
    factions: ['Sauron'],
    exclude_races: ['Troll', 'Númenórean'],
    pracs: { max: 5, Orc: 4 },
    difficulty: 'Normal',
    knowledge_cap: 84,
    knowledge: { base: 15.2, wis: 2.8, int: 1.6 }
  },
  {
    name: 'Create Water',
    class: 'Shaman',
    factions: ['Sauron'],
    exclude_races: ['Troll', 'Númenórean'],
    pracs: { max: 5, Orc: 4 },
    difficulty: 'Normal',
    knowledge_cap: 84,
    knowledge: { base: 15.2, wis: 2.8, int: 1.6 }
  },
  {
    name: 'Cure Blind',
    class: 'Shaman',
    factions: ['Sauron'],
    exclude_races: ['Troll', 'Númenórean'],
    pracs: { max: 12, Orc: 8 },
    difficulty: 'Normal',
    knowledge_cap: 112,
    knowledge: { base: 11.2, wis: 3.8, int: 2.4 }
  },
  {
    name: 'Cure Critic',
    class: 'Shaman',
    factions: ['Sauron'],
    exclude_races: ['Troll', 'Númenórean'],
    pracs: { max: 9 },
    difficulty: 'Normal',
    knowledge_cap: 88,
    knowledge: { base: 16.2, wis: 2.8, int: 1.8 }
  },
  {
    name: 'Cure Light',
    class: 'Shaman',
    factions: ['Sauron'],
    exclude_races: ['Troll', 'Númenórean'],
    pracs: { max: 12, Orc: 12 },
    difficulty: 'Easy',
    knowledge_cap: 112,
    knowledge: { base: 11.2, wis: 3.8, int: 2.4 }
  },
  {
    name: 'Cure Serious',
    class: 'Shaman',
    factions: ['Sauron'],
    exclude_races: ['Troll', 'Númenórean'],
    pracs: { max: 11, Orc: 11 },
    difficulty: 'Normal',
    knowledge_cap: 93,
    knowledge: { base: 3, wis: 3.4, int: 2.4 }
  },
  {
    name: 'Curse',
    class: 'Shaman',
    factions: ['Sauron'],
    exclude_races: ['Troll', 'Númenórean'],
    pracs: { max: 18 },
    difficulty: 'Normal',
    knowledge_cap: 112,
    knowledge: { base: 11.2, wis: 3.2, int: 2.4 }
  },
  {
    name: 'Darkness',
    class: 'Shaman',
    factions: ['Sauron'],
    exclude_races: ['Troll', 'Númenórean'],
    pracs: { max: 11 },
    difficulty: 'Normal',
    knowledge_cap: 93,
    knowledge: { base: 24.2, wis: 2.8, int: 1.6 }
  },
  {
    name: 'Detect Invis',
    class: 'Shaman',
    factions: ['Sauron'],
    exclude_races: ['Troll', 'Númenórean'],
    pracs: { max: 8, Orc: 8 },
    difficulty: 'Normal',
    knowledge_cap: 96,
    knowledge: { base: 10, int: 2.6, wis: 1.6, per: 1.2 }
  },
  {
    name: 'Detect Magic',
    class: 'Shaman',
    factions: ['Sauron'],
    exclude_races: ['Troll', 'Númenórean'],
    pracs: { max: 6, Orc: 6 },
    difficulty: 'Easy',
    knowledge_cap: 96,
    knowledge: { base: 10, int: 2.6, wis: 1.6, per: 1.2 }
  },
  {
    name: 'Detect Poison',
    class: 'Shaman',
    factions: ['Sauron'],
    exclude_races: ['Troll', 'Númenórean'],
    pracs: { max: 8, Orc: 6 },
    difficulty: 'Easy',
    knowledge_cap: 112,
    knowledge: { base: 11.2, wis: 3.8, int: 2.4 }
  },
  {
    name: 'Earthquake',
    class: 'Shaman',
    factions: ['Sauron'],
    exclude_races: ['Troll', 'Númenórean'],
    pracs: { max: 16 },
    difficulty: 'Hard',
    knowledge_cap: 98,
    knowledge: { base: 30.2, int: 2.6, wis: 1.8 }
  },
  {
    name: 'Energy Drain',
    class: 'Shaman',
    factions: ['Sauron'],
    exclude_races: ['Troll', 'Númenórean'],
    pracs: { max: 18 },
    difficulty: 'Hard',
    knowledge_cap: 108,
    knowledge: { base: 12, wis: 3.6, wil: 2.4 }
  },
  {
    name: 'Fear',
    class: 'Shaman',
    factions: ['Sauron'],
    exclude_races: ['Troll', 'Númenórean'],
    pracs: { max: 18 },
    difficulty: 'Hard',
    knowledge_cap: 108,
    knowledge: { base: 12, wis: 3.6, wil: 2.4 }
  },
  {
    name: 'Harm',
    class: 'Shaman',
    factions: ['Sauron'],
    exclude_races: ['Troll', 'Númenórean'],
    pracs: { max: 22 },
    difficulty: 'Hard',
    knowledge_cap: 101,
    knowledge: { base: 11, wis: 3.4, int: 2.4 }
  },
  {
    name: 'Hold',
    class: 'Shaman',
    factions: ['Sauron'],
    exclude_races: ['Troll', 'Númenórean'],
    pracs: { max: 35 },
    difficulty: 'Very Hard',
    knowledge_cap: 108,
    knowledge: { base: 12, wis: 3.6, wil: 2.4 }
  },
  {
    name: 'Lightning Bolt',
    class: 'Shaman',
    factions: ['Sauron'],
    exclude_races: ['Troll', 'Númenórean'],
    pracs: { max: 16 },
    difficulty: 'Hard',
    knowledge_cap: 102,
    knowledge: { base: 10.0, int: 2.8, wis: 1.8, per: 1.2 }
  },
  {
    name: 'Locate Magic',
    class: 'Shaman',
    factions: ['Sauron'],
    exclude_races: ['Troll', 'Númenórean'],
    pracs: { max: 12, Orc: 10 },
    difficulty: 'Normal',
    knowledge_cap: 112,
    knowledge: { base: 10.6, int: 2.8, wis: 1.8, wil: 1.2 }
  },
  {
    name: 'Poison',
    class: 'Shaman',
    factions: ['Sauron'],
    exclude_races: ['Troll', 'Númenórean'],
    pracs: { max: 18 },
    difficulty: 'Normal',
    knowledge_cap: 108,
    knowledge: { base: 12, wis: 3.6, wil: 2.4 }
  },
  {
    name: 'Raise Dead',
    class: 'Shaman',
    factions: ['Sauron'],
    exclude_races: ['Troll', 'Númenórean'],
    pracs: { max: 26 },
    difficulty: 'Hard',
    knowledge_cap: 108,
    knowledge: { base: 12, wis: 3.6, wil: 2.4 }
  },
  {
    name: 'Remove Curse',
    class: 'Shaman',
    factions: ['Sauron'],
    exclude_races: ['Troll', 'Númenórean'],
    pracs: { max: 7 },
    difficulty: 'Normal',
    knowledge_cap: 112,
    knowledge: { base: 11.2, wis: 3.2, int: 2.4 }
  },
  {
    name: 'Remove Poison',
    class: 'Shaman',
    factions: ['Sauron'],
    exclude_races: ['Troll', 'Númenórean'],
    pracs: { max: 7, orc: 6 },
    difficulty: 'Normal',
    knowledge_cap: 77,
    knowledge: { base: 5, wis: 2.8, int: 1.8 }
  },
  {
    name: 'Sense Life',
    class: 'Shaman',
    factions: ['Sauron'],
    exclude_races: ['Troll', 'Númenórean'],
    pracs: { max: 7, Orc: 6 },
    difficulty: 'Normal',
    knowledge_cap: 77,
    knowledge: { base: 5, wis: 2.8, int: 1.8 }
  },
  {
    name: 'Shield',
    class: 'Shaman',
    factions: ['Sauron'],
    exclude_races: ['Troll', 'Númenórean'],
    pracs: { max: 16 },
    difficulty: 'Hard',
    knowledge_cap: 112,
    knowledge: { base: 30.2, int: 2.6, wis: 1.8 }
  },
  {
    name: 'Shocking Grasp',
    class: 'Shaman',
    factions: ['Sauron'],
    exclude_races: ['Troll', 'Númenórean'],
    pracs: { max: 11 },
    difficulty: 'Normal',
    knowledge_cap: 102,
    knowledge: { base: 10.0, int: 2.8, wis: 1.8, per: 1.2 }
  },
  {
    name: 'Shroud',
    class: 'Shaman',
    factions: ['Sauron'],
    exclude_races: ['Troll', 'Númenórean'],
    pracs: { max: 8, Orc: 5 },
    difficulty: 'Hard',
    knowledge_cap: 112,
    knowledge: { base: 9.6, int: 3.6, wis: 2.4 }
  },
  {
    name: 'Smother',
    class: 'Shaman',
    factions: ['Sauron'],
    exclude_races: ['Troll', 'Númenórean'],
    pracs: { max: 12 },
    difficulty: 'Easy',
    knowledge_cap: 105,
    knowledge: { base: 8.2, wis: 3.8, int: 2.4 }
  },
  {
    name: 'Strength',
    class: 'Shaman',
    factions: ['Sauron'],
    exclude_races: ['Troll', 'Númenórean'],
    pracs: { max: 18, Orc: 8 },
    difficulty: 'Hard',
    knowledge_cap: 112,
    knowledge: { base: 11.2, wis: 3.8, int: 2.4 }
  },
  {
    name: 'Word of Recall',
    class: 'Shaman',
    factions: ['Sauron'],
    exclude_races: ['Troll', 'Númenórean'],
    pracs: { max: 23, Orc: 17 },
    difficulty: 'Very Hard',
    knowledge_cap: 112,
    knowledge: { base: 11.2, wis: 3.2, int: 2.4 }
  },
  
]