window.imperium_ships = {
	ice_maiden : {
		name: 'Ice Maiden',
		type: 'Dreadnought Super-Carrier',
		points: 535,
		traits: 'Ice Maiden Class, Prussian, Imperium, Flagship, Surface Unit',
		mass: '6/6',
		speed: '5/3',
		turnLimit: '3/2',
		armour: '7/6',
		citadel: '12/10',
		adv: '9/6',
		sdv: '6/4',
		fray: '15/13',
		hull: '15/16',
		
		rules: [
			{
				name: 'SRS Capacity',
				value: '10/5'
			},
			{
				name: 'Blitzen SRS Capacity',
				value: '4/2'
			},
			'Combat Air Patrol',
			'SRS Mine Clearance',
			'SRS Recon',
			'Inspirational',
			'Large Target',
			'Pycrete Construction',
			'Inductorium',
			'Advanced Sturmcoils'
		],
		weapons: [
			{
				name: 'Sturmbringer',
				arc: 'F',
			},
			{
				name: 'Sturmbringer',
				arc: 'F',
			},
			{
				name: 'Sturmbringer',
				arc: 'F',
			},
			{
				name: 'Vierling Autokanone',
				arc: '360',
			},
			{
				name: 'Vierling Autokanone',
				arc: '360',
			},
			{
				name: 'Vierling Autokanone',
				arc: 'F&A',
			},
			{
				name: 'Vierling Autokanone',
				arc: 'P&S',
			},
			{
				name: 'Sturmklaue',
				arc: 'F/P',
				option: 'F/P Weapon'
			},
			{
				name: 'Volt Gun Battery',
				arc: 'F/P',
				option: 'F/P Weapon'
			},
			{
				name: 'Sturmklaue',
				arc: 'F/S',
				option: 'F/S Weapon'
			},
			{
				name: 'Volt Gun Battery',
				arc: 'F/S',
				option: 'F/S Weapon'
			},
			{
				name: 'Sturmklaue',
				arc: 'P/S',
				option: 'P/S Weapon'
			},
			{
				name: 'Volt Gun Battery',
				arc: 'P/S',
				option: 'P/S Weapon'
			}
		]
	},

	toten : {
		name: 'Toten',
		type: 'Heavy Destroyer',
		points: 90,
		traits: 'Imperium, Teutonic, Surface Unit',
		mass: '1',
		speed: '11',
		turnLimit: '10',
		armour: '5',
		citadel: '12',
		adv: '3',
		sdv: '4',
		fray: '6',
		hull: '3',
		rules: [
			'Disciplined',
			'Advanced Sturmcoils',
			'Elite Crew',
			'Focused Gunnery',
			'Inductorium',
			'Voltaic Decksweepers'
		],
		weapons: [
			{
				name: 'Light Broadside',
				arc: 'P&S',
				qualities: 'Broadside, Fusillade'
			},
			{
				name: 'Sturmklaue',
				arc: '360',
				qualities: 'Gunnery, Devastating, Arc'
			},
			{
				name: 'Sturmklaue',
				arc: 'F/P/S',
				qualities: 'Gunnery, Devastating, Arc'
			}
		]
	},

	arminius: {
		name: 'Arminius',
		type: 'Frigate Squadron',
		points: '58',
		traits: 'Imperium, Frigate, Surface Unit, Arminius-Class, Prussian',
		mass: '1',
		speed: '13',
		turnLimit: '10',
		armour: '5',
		citadel: '10',
		adv: '3',
		sdv: '3',
		fray: '6',
		hull: '3',
		rules: [
			'Disciplined',
			'Elite Crew',
			'Inductorium',
			'Pack Hunter'
		],
		weapons: [
			{
				name: 'Broadside',
				arc: 'P&S',
			},
			{
				name: 'Volt Gun Battery',
				arc: 'F/P/S',
				option: 'F/P/S Weapon'
			},
			{
				name: 'Shock Rocket Battery',
				arc: 'F/P/S',
				option: 'F/P/S Weapon'
			}
		]
	},

	odin_reaver: {
		name: 'Odin',
		type: 'Reaver',
		points: '90',
		traits: 'Imperium, Scandinavian, Surface Unit, Reaver, Odin-class',
		mass: '2/2',
		speed: '8/6',
		turnLimit: '5/4',
		armour: '6/5',
		citadel: '11/10',
		adv: '4/3',
		sdv: '4/3',
		fray: '10/10',
		hull: '4/3',
		rules: [
			'Hammer Sweep',
			'Vanguard',
			'Vulnerable Stern', 
			'Huginn and Muninn',
			'Inductorium',
			{
				option: 'Optional Upgrades',
				name: 'Voltaic Decksweepers',
				optionCost: 5,
			},
			'Wolves of the Sea'
		],
		weapons: [
			{
				name: 'Heavy Sturmklaue',
				arc: 'F'
			},
			{
				name: 'Heavy Volt Gun Battery',
				arc: 'F/P/S',
				option: 'F/P/S Weapon'
			},
			{
				name: 'Heavy Shock Rocket Battery',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
				optionCost: 3
			},
			{
				name: 'Broadside',
				arc: 'P&S'
			}
		],
		generators: [
			{
				name: 'Generator',
				choices: ['Langsam Generator', 'Magnetic Generator', 'Repulsion Field Generator', 'Shield Generator', 'Shroud Generator'],
				option: 'F/P/S Weapon',
				optionCost: -5
			},
		]
	},


	reiter: {
		name: 'Reiter',
		type: 'Flak Cruiser',
		points: '129',
		traits: 'Imperium, Prussian, Surface Unit, Flak Cruiser, Reiter-class',
		mass: '2/2',
		speed: '9/6',
		turnLimit: '5/4',
		armour: '6/6',
		citadel: '12/11',
		adv: '4/3',
		sdv: '3/2',
		fray: '8/7',
		hull: '4/4',
		rules: [
			'Disciplined',
			{
				name: 'Attached Unit',
				value: 'Prussian, Flagship'
			},
			'Anti-Air Specialist',
			'Inductorium',
			{
				name: 'Flak Barrage',
				value: 10
			}
		],
		weapons: [
			{
				name: 'Vierling Flak Array',
				arc: 'F/P/S'
			},
			{
				name: 'Vierling Autokanone',
				arc: '360',
				option: '360 Weapon'
			},
			{
				name: 'Shock Rocket Battery',
				arc: '360',
				option: '360 Weapon'
			},
			{
				name: 'Freya Array',
				arc: '360',
				option: '360 Weapon'
			},
			{
				name: 'Broadside',
				arc: 'P/S'
			},
			{
				name: 'Speerschleuders',
				arc: 'F'
			}
		],
	},

	blutcher: {
		name: 'Blucher',
		type: 'Cruiser',
		points: 100,
		traits: 'Imperium, Cruiser, Surface Unit, Blucher-Class',
		mass: '2/2',
		speed: '8/6',
		turnLimit: '5/4',
		armour: '6/6',
		citadel: '12/11',
		adv: '4/3',
		sdv: '4/3',
		fray: '9/8',
		hull: '4/4',
		rules: [
			'Disciplined',
			{
				name: 'Attached Unit',
				value: 'Prussion, Flagship'
			},
			'Inductorium',
			'Luftlancer Assault'
		],
		weapons: [
			{
				name: 'Broadside',
				arc: 'P&S',
			},
			{
				name: 'Heavy Volt Gun Battery',
				arc: 'F/P/S',
			},
			{
				name: 'Heavy Volt Gun Battery',
				arc: 'F/P/S',
				option: 'F/P/S Weapon'
			},
			{
				name: 'Heavy Shock Rocket Battery',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
				optionCost: 3
			},
			{
				name: 'Speerschleuders',
				arc: 'F',
			}
		],
		generators: [
			{
				name: 'Generator',
				choices: ['Atomic Generator', 'Fury Generator', 'Magnetic Generator', 'Repulsion Field Generator', 'Shield Generator', 'Shroud Generator'],
				option: 'F/P/S Weapon',
				optionCost: -5
			},
		]
	},

	augustus: {
		name: 'Augustus',
		type: 'Bombardment Cruiser',
		points: 126,
		traits: 'Imperium, Prussian, Surface Unit, Augustus-Class, Bombardment Cruiser',
		mass: '2/2',
		speed: '8/6',
		turnLimit: '5/4',
		armour: '6/6',
		citadel: '12/11',
		adv: '4/3',
		sdv: '3/2',
		fray: '8/7',
		hull: '4/4',
		rules: [
			'Disciplined',
			'Heavy Bombardment',
			'Inductorium',
			'Spotter',
			{
				option: 'Optional Upgrades',
				name: 'Phosphor Shells',
				optionCost: 5,
			}
		],
		weapons: [
			{
				name: 'Broadside',
				arc: 'P&S',
			},
			{
				name: 'Gustav Twin Bombard',
				arc: 'F',
				option: 'F Weapon'
			},
			{
				name: 'Bertha Heavy Bombard',
				arc: 'F',
				option: 'F Weapon'
			},
			{
				name: 'Speerschleuders',
				arc: 'F',
			}
		],
	},

	kaiser: {
		name: 'Kaiser Pattern',
		type: 'Heavy Battleship',
		points: 308,
		traits: 'Imperium, Prussian, Surface Unit, Heavy Battleship, Elector-class, Kaiser Pattern, Flagship',
		mass: '3/3',
		speed: '6/4',
		turnLimit: '3/2',
		armour: '8/8',
		citadel: '16/15',
		adv: '9/3',
		sdv: '7/3',
		fray: '14/13',
		hull: '9/3',
		rules: [
			'Disciplined',
			'Fortunes of War',
			'Ablative Armour',
			'Heavy Firepower',
			'Inductorium',
			'Storm Generator',
			'Voltaic Decksweepers',
		],
		weapons: [
			{
				name: 'Heavy Broadside',
				arc: 'P&S',
			},
			{
				name: 'Heavy Volt Gun Battery',
				arc: 'F/P/S',
			},
			{
				name: 'Heavy Volt Gun Battery',
				arc: 'F/P/S',
			},
			{
				name: 'Heavy Volt Gun Battery',
				arc: 'A/P/S',
			},
			{
				name: 'Heavy Volt Gun Battery',
				arc: 'A',
			},
			{
				name: 'Heavy Speerschleuders',
				arc: 'F',
			}
		],
	},

	schaumburg: {
		name: 'Schaumburg',
		type: 'Escort Cruiser',
		points: 57,
		traits: 'Imperium, Prussian, Surface Unit, Escort Cruiser, Schaumburg-class',
		mass: '2/2',
		speed: '9/7',
		turnLimit: '5/4',
		armour: '6/6',
		citadel: '12/11',
		adv: '4/2',
		sdv: '4/2',
		fray: '9/9',
		hull: '4/3',
		rules: [
			{name: 'Attached Unit', value: 'Prussian, Flagship'},
			'Disciplined',
			'Landing Vessel',
			'Mine Layer',
			'Mine Sweeper',
			'Inductorium',
			'Heavy Escort',
		],
		weapons: [
			{
				name: 'Heavy Broadside',
				arc: 'P&S',
			},
			{
				name: 'Speerschleuders',
				arc: 'F',
			}
		],
	},	

}