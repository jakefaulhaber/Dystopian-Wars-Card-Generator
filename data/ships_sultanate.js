window.sultanate_ships = {
	retaj: {
		name: 'Retaj Portalship',
		type: 'Portalship',
		points: 300,
		traits: 'Sultanate, Order, Surface Ship, Portalship, Retaj-class, Flagship',
		mass: '3/3',
		speed: '8/7',
		turnLimit: '4/3',
		armour: '7/7',
		citadel: '14/14',
		adv: '8/6',
		sdv: '8/6',
		fray: '14/14',
		hull: '7/7',
		rules: [
            'Agile',
            'Armoured Decking',
			'Cor Caroli',
			'Dark Hand',
			'Heavy Firepower (simple)',
			'Ikili Hull',
			'Master Portal Generation',
			'Orichalcite Construction',
			'Powerslide',
		],
		generators: [
			'Portal Generator (2)',
		],
		weapons: [
			{
				name: 'Twin Judgement Lances',
				arc: 'F'
			},
			{
				name: 'Twin Judgement Lances',
				arc: 'F'
			},
			{
				name: 'Helio Blast',
				arc: 'F'
			},
			{
				name: 'Heavy Broadside',
				arc: 'P&S'
			},
			{
				name: 'Heavy Torpedo Salvo',
				arc: 'F'
			},
			{
				name: 'Heavy Torpedo Salvo',
				arc: 'F'
			},
		],
	},
	carolus: {
		name: 'Carolus Destroyer',
		type: 'Destroyer',
		points: '55',
		traits: 'Sultanate, Order, Surface Unit, Destroyer, Carlous-Class',
		mass: '1',
		speed: '11',
		turnLimit: '8',
		armour: '6',
		citadel: '12',
		adv: '3',
		sdv: '3',
		fray: '6',
		hull: '3',
		rules: [
			'Agile',
			'Armoured Decking',
			{
				name: 'Attached Unit',
				value: 'Order',
			},
			'Cor Caroli',
			'Orichalcite Crafted',
			'Powerslide',
		],
		weapons: [
			{
				name: 'Broadside',
				arc: 'P&S',
			},
			{
				name: 'Judgement Lance',
				arc: 'F',
			}
		],
	},
    skybarques: {
		name: 'Alsaqr Skybarques',
		type: 'Skybarque',
		points: '38',
		traits: 'Sultanate, Turkish, Aerial Unit, Skybarque, Alsaqr-Class',
		mass: '1',
		speed: '12',
		turnLimit: '8',
		armour: '4',
		citadel: '9',
		adv: '4',
		sdv: '0',
		fray: '3',
		hull: '2',
		rules: [
			'Agile',
			{
				name: 'Attached Unit',
				value: 'Turkish, Flagship',
			},
		    'Corvette Duty',
			'Giant Slayer',
			'Linear Dash',
            'Powerslide'
		],
		weapons: [
			{
				name: 'Aerial Barbette Launcher',
				arc: 'F',
			},
			{
				name: 'Aetheric Lance',
				arc: 'F',
			},
		],
	},
    skycutter: {
		name: 'Hirka Skycutter',
		type: 'Skycutter',
		points: '50',
		traits: 'Sultanate, Turkish, Aerial Unit, Skycutter, Hirka-Class',
		mass: '1',
		speed: '10',
		turnLimit: '6',
		armour: '5',
		citadel: '11',
		adv: '4',
		sdv: '0',
		fray: '7',
		hull: '4',
		rules: [
			'Agile',
		    'Gun Runner',
			'Hydrophone Relay',
			'Janissary Assault Deck',
            'Crimson Privateers',
            'Powerslide'
		],
		weapons: [
			{
				name: 'Aerial Torpedo Salvo',
				arc: 'F',
			},
			{
				name: 'Gun Battery',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
			},
			{
				name: 'Rocket Battery',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
				optionCost: 3,	
			},
			{
				name: 'Aetheric Lance',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
				optionCost: 5,
			},
            {
                name: 'Light Broadside',
                arc: 'P&S',
            },
		],
	},
	skylancer: {
		name: 'Awsbiri Skylancer',
		type: 'Skylancer',
		points: '105',
		traits: 'Sultanate, Turkish, Aerial Unit, Skylancer, Awsbiri-Class',
		mass: '2/2',
		speed: '9/8',
		turnLimit: '6/5',
		armour: '6/5',
		citadel: '11/10',
		adv: '5/3',
		sdv: '0/0',
		fray: '9/8',
		hull: '4/2',
		rules: [
			'Agile',
		    'Maritime Patrol',
			'Orichalcite Construction',
			'Linear Dash',
            'Powerslide',
			'Vanguard',
			'Optional SRS'
		],
		weapons: [
			{
				name: 'Aerial Torpedo Salvo',
				arc: 'F',
			},
			{
				name: 'Rocket Battery',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
			},
			{
				name: 'Gun Battery',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
			},
			{
				name: 'Aetheric Lance',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
				optionCost: 5,	
			},
			{
				name: 'Rocket Battery',
				arc: 'F/P',
				option: 'F/P Weapon',
			},
			{
				name: 'Gun Battery',
				arc: 'F/P',
				option: 'F/P Weapon',
			},
			{
				name: 'Aetheric Lance',
				arc: 'F/P',
				option: 'F/P Weapon',
				optionCost: 5,	
			},
			{
				name: 'Rocket Battery',
				arc: 'F/S',
				option: 'F/S Weapon',
			},
			{
				name: 'Gun Battery',
				arc: 'F/S',
				option: 'F/S Weapon',
			},
			{
				name: 'Aetheric Lance',
				arc: 'F/S',
				option: 'F/S Weapon',
				optionCost: 5,	
			},
			{
				name: 'Broadside',
				arc: 'P&S',
			},
		],
	},
	skyrunner: {
		name: 'Muharib Skyrunner',
		type: 'Skyrunner',
		points: '85',
		traits: 'Sultanate, Turkish, Aerial Unit, Skyrunner, Muharib-Class',
		mass: '2/2',
		speed: '9/8',
		turnLimit: '6/5',
		armour: '6/5',
		citadel: '11/10',
		adv: '5/3',
		sdv: '0/0',
		fray: '11/4',
		hull: '4/2',
		rules: [
			'Agile',
		    'Cloud Dive',
			'Heavy Lander',
			'Janissary Assault Deck',
            'Crimson Privateers',
			'Landing Vessel',
			'Orichalcite Construction',
			'Linear Dash',
            'Powerslide',
			'Optional SRS'
		],
		weapons: [
			{
				name: 'Rocket Battery',
				arc: 'F/P',
				option: 'F/P Weapon',
			},
			{
				name: 'Gun Battery',
				arc: 'F/P',
				option: 'F/P Weapon',
			},
			{
				name: 'Aetheric Lance',
				arc: 'F/P',
				option: 'F/P Weapon',
				optionCost: 5,	
			},
			{
				name: 'Rocket Battery',
				arc: 'F/S',
				option: 'F/S Weapon',
			},
			{
				name: 'Gun Battery',
				arc: 'F/S',
				option: 'F/S Weapon',
			},
			{
				name: 'Aetheric Lance',
				arc: 'F/S',
				option: 'F/S Weapon',
				optionCost: 5,	
			},
			{
				name: 'Broadside',
				arc: 'P&S',
			},
		],
	},
	skyship: {
		name: 'Nasr Skyship',
		type: 'Skyship',
		points: '100',
		traits: 'Sultanate, Turkish, Aerial Unit, Skyship, Nasr-Class',
		mass: '2/2',
		speed: '10/9',
		turnLimit: '6/5',
		armour: '6/5',
		citadel: '11/10',
		adv: '5/3',
		sdv: '0/0',
		fray: '9/8',
		hull: '4/2',
		rules: [
			'Agile',
			'Orichalcite Construction',
			'Linear Dash',
            'Powerslide',
			'Tracer Fire (Aerial)',
			'Optional SRS'
		],
		weapons: [
			{
				name: 'Heavy Gun Battery',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
			},
			{
				name: 'Heavy Rocket Battery',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
				optionCost: 4,	
			},
			{
				name: 'D-Cannon Battery',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
				optionCost: 4,	
			},
			{
				name: 'Particle Beamer',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
				optionCost: 7,	
			},
			{
				name: 'Rocket Battery',
				arc: 'F/P',
				option: 'F/P Weapon',
			},
			{
				name: 'Gun Battery',
				arc: 'F/P',
				option: 'F/P Weapon',
				optionCost: 3,
			},
			{
				name: 'Aetheric Lance',
				arc: 'F/P',
				option: 'F/P Weapon',
				optionCost: 5,
			},
			{
				name: 'Rocket Battery',
				arc: 'F/S',
				option: 'F/S Weapon',
			},
			{
				name: 'Gun Battery',
				arc: 'F/S',
				option: 'F/S Weapon',
				optionCost: 3,
			},
			{
				name: 'Aetheric Lance',
				arc: 'F/S',
				option: 'F/S Weapon',
				optionCost: 5,
			},
			{
				name: 'Broadside',
				arc: 'P&S',
			},
		],
	},
	lyceum: {
		name: 'Lyceum Aerial Dreadnought',
		type: 'Aerial Dreadnought',
		points: '300',
		traits: 'Sultanate, Turkish, Aerial Unit, Aerial Dreadnought, Lyceum-Class, Flagship',
		mass: '4/4',
		speed: '6/5',
		turnLimit: '5/4',
		armour: '7/7',
		citadel: '14/13',
		adv: '8/7',
		sdv: '5/3',
		fray: '10/9',
		hull: '7/6',
		rules: [
			'Callimachus Chrono-Lathe',
			{
				name: 'Flak Barrage',
				value: 6
			},
			'Focused Fire (Gunnery)',
			'Heavy Firepower (simple)',
			'Orichalcite Construction',
			'Janissary Assault Deck',
            'Crimson Privateers',
            'Powerslide',
			'Optional SRS'
		],
		weapons: [
			{
				name: 'Heavy Broadside',
				arc: 'P&S&A'
			},
			{
				name: 'Heavy Gun Battery',
				arc: 'F/P',
				option: 'F/P Weapon',
			},
			{
				name: 'Heavy Rocket Battery',
				arc: 'F/P',
				option: 'F/P Weapon',	
			},
			{
				name: 'D-Cannon Battery',
				arc: 'F/P',
				option: 'F/P Weapon',
				optionCost: 4,	
			},
			{
				name: 'Particle Beamer',
				arc: 'F/P',
				option: 'F/P Weapon',
				optionCost: 7,	
			},
			{
				name: 'Heavy Gun Battery',
				arc: 'F/P',
				option: 'F/S Weapon',
			},
			{
				name: 'Heavy Rocket Battery',
				arc: 'F/S',
				option: 'F/S Weapon',	
			},
			{
				name: 'D-Cannon Battery',
				arc: 'F/S',
				option: 'F/S Weapon',
				optionCost: 4,	
			},
			{
				name: 'Particle Beamer',
				arc: 'F/S',
				option: 'F/S Weapon',
				optionCost: 7,	
			},
			{
				name: 'Rocket Battery',
				arc: 'F/P/S',
			},
			{
				name: 'Rocket Battery',
				arc: 'F/P/S',
			},
			{
				name: 'Rocket Battery',
				arc: 'F/P',
			},
			{
				name: 'Rocket Battery',
				arc: 'F/S',
			},
			{
				name: 'Rocket Battery',
				arc: 'A/P',
			},
			{
				name: 'Rocket Battery',
				arc: 'A/S',
			},
		],
	},
	Badroulbadour: {
		name: 'Badroulbadour',
		type: 'Aerial Dreadnought',
		points: '340',
		traits: 'Crimson League, Aerial Unit, Aerial Dreadnought, Lyceum-Class, Flagship, Unique',
		mass: '4/4',
		speed: '6/5',
		turnLimit: '5/4',
		armour: '7/7',
		citadel: '15/14',
		adv: '6/6',
		sdv: '5/3',
		fray: '10/9',
		hull: '7/6',
		rules: [
			'Callimachus Chrono-Lathe',
			'Crimson Privateers',
			'Devil\'s Own Luck',
			{
				name: 'Flak Barrage',
				value: 6
			},
			'Focused Fire (Gunnery)',
			'Heavy Firepower (simple)',
			'Inspirational',
			'Luminiferous Defences',
			'Orichalcite Construction',
            'Powerslide',
		],		
		generators: [
			'Shield Generator',
		],
		weapons: [
			{
				name: 'Heavy Broadside',
				arc: 'P&S&A'
			},
			{
				name: 'Particle Beamer',
				arc: 'F/P',
			},
			{
				name: 'Particle Beamer',
				arc: 'F/S',
			},
			{
				name: 'Rocket Battery',
				arc: 'F/P/S',
			},
			{
				name: 'Rocket Battery',
				arc: 'F/P/S',
			},
			{
				name: 'Rocket Battery',
				arc: 'F/P',
			},
			{
				name: 'Rocket Battery',
				arc: 'F/S',
			},
			{
				name: 'Rocket Battery',
				arc: 'A/P',
			},
			{
				name: 'Rocket Battery',
				arc: 'A/S',
			},
		],
	},
	qualor: {
		name: 'Qualor Vitruvian Colossus',
		type: 'Vitruvian Colossus',
		points: 175,
		traits: 'Sultanate, Order, Aerial Unit, Vitruvian Colossus, Qualor-class',
		mass: '2/2',
		speed: '8/7',
		turnLimit: '6/5',
		armour: '7/7',
		citadel: '14/13',
		adv: '2/1',
		sdv: '2/1',
		fray: '0/0',
		hull: '5/2',
		rules: [
			'Agile',
			'Colossus',
			'Cor Carolus Icon',
			'Cruor',
			'Limited Generation',
			'Master Portal Generation',
			'Orichalcite Construction',
            'Powerslide',
			'Soul Gnawing Dirge'
		],
		weapons: [
			{
				name: 'Helio Blast',
				arc: 'F'
			},
		],
		generators: [
			'Portal Generator (1)',
			'Mirage Generator',
		],
	},
	chaska: {
		name: 'Chaska Vitruvian Colossus',
		type: 'Vitruvian Colossus',
		points: 165,
		traits: 'Sultanate, Order, Aerial Unit, Vitruvian Colossus, Chaska-class',
		mass: '2/2',
		speed: '8/7',
		turnLimit: '6/5',
		armour: '7/7',
		citadel: '14/13',
		adv: '2/1',
		sdv: '2/1',
		fray: '0/0',
		hull: '5/2',
		rules: [
			'Agile',
			'Celerity',
			'Colossus',
			'Cor Carolus Icon',
			'Limited Generation',
			'Orichalcite Construction',
            'Powerslide',
			'Strategic Withdrawal',
			'Unexpected Arrival',
			'Vigour'
		],
		weapons: [
			{
				name: 'Chaska Starblade',
				arc: 'F'
			},
			{
				name: 'Twin Judgement Lances',
				arc: 'F/P/S'
			},
		],
		generators: [
			'Portal Generator (1)',
			'Mirage Generator',
		],
	},
	nemrut: {
		name: 'Nemrut Supremacy Cruiser',
		type: 'Supremacy Cruiser',
		points: 245,
		traits: 'Sultanate, Turkish, Surface Ship, Supremacy Cruiser, Nemrut-class',
		mass: '3/3',
		speed: '6/5',
		turnLimit: '4/3',
		armour: '6/6',
		citadel: '12/12',
		adv: '4/2',
		sdv: '4/2',
		fray: '8/6',
		hull: '6/5',
		rules: [
            'Agile',
			'Ikili Hull',
			'Orichalcite Construction',
    		'Powerslide',
			'The Sultan\'s Hammer',
			'Two Per Force',
			'Vulnerable Stern'
		],
		generators: [
			'Portal Generator (1)',
			'Shield Generator'
		],
		weapons: [
			{
				name: 'Orichalcite Flechette Launcher',
				arc: 'F'
			},
			{
				name: 'Orichalcite Flechette Launcher',
				arc: 'F'
			},
			{
				name: 'Rocket Battery',
				arc: 'F'
			},
			{
				name: 'Rocket Battery',
				arc: 'F'
			},
			{
				name: 'Heavy Rocket Battery',
				arc: 'F/P'
			},
			{
				name: 'Heavy Rocket Battery',
				arc: 'F/S'
			},
			{
				name: 'Heavy Broadside',
				arc: 'P&S'
			},
			{
				name: 'Torpedo Salvo',
				arc: 'F'
			},
			{
				name: 'Torpedo Salvo',
				arc: 'F'
			},
		],
	},
	mehmed: {
		name: 'Mehmed Grand Monitor',
		type: 'Grand Monitor',
		points: 210,
		traits: 'Sultanate, Turkish, Surface Ship, Grand Monitor, Mehmed-class',
		mass: '3/3',
		speed: '6/5',
		turnLimit: '3/2',
		armour: '6/6',
		citadel: '12/12',
		adv: '5/3',
		sdv: '5/3',
		fray: '10/8',
		hull: '6/5',
		rules: [
            'Agile',
			'Elite Crew',
			'Ikili Hull',
			'Maritime Patrol',
			'Mark of Fate',
			'Orichalcite Construction',
    		'Powerslide',
			'The Sultan\'s Monitor',
			'Two Per Force',
			'Vulnerable Stern'
		],
		generators: [
			'Shield Generator',
			{
				name: 'Generator',
				choices: [
					'Atomic Generator',
					'Fury Generator',
					'Magnetic Generator',
					'Mirage Generator',
					'Portal Generator (1)',
					'Repulsion Field Generator',
					'Shroud Generator',
				],
				option: 'Additional Generator'
			},
		],
		weapons: [
			{
				name: 'Heavy Gun Battery',
				arc: 'F/P',
				option: 'F/P 1 Weapon',
			},
			{
				name: 'Heavy Rocket Battery',
				arc: 'F/P',
				option: 'F/P 1 Weapon',
			},	
			{
				name: 'D-Cannon Battery',
				arc: 'F/P',
				option: 'F/P 1 Weapon',
				optionCost: 4,
			},
			{
				name: 'Particle Beamer',
				arc: 'F/P',
				option: 'F/P 1 Weapon',
				optionCost: 7,
			},
			{
				name: 'Heavy Gun Battery',
				arc: 'F/P',
				option: 'F/P 2 Weapon',
			},
			{
				name: 'Heavy Rocket Battery',
				arc: 'F/P',
				option: 'F/P 2 Weapon',
			},	
			{
				name: 'D-Cannon Battery',
				arc: 'F/P',
				option: 'F/P 2 Weapon',
				optionCost: 4,
			},
			{
				name: 'Particle Beamer',
				arc: 'F/P',
				option: 'F/P 2 Weapon',
				optionCost: 7,
			},
			{
				name: 'Heavy Gun Battery',
				arc: 'F/S',
				option: 'F/S 1 Weapon',
			},
			{
				name: 'Heavy Rocket Battery',
				arc: 'F/S',
				option: 'F/S 1 Weapon',
			},	
			{
				name: 'D-Cannon Battery',
				arc: 'F/S',
				option: 'F/S 1 Weapon',
				optionCost: 4,
			},
			{
				name: 'Particle Beamer',
				arc: 'F/S',
				option: 'F/S 1 Weapon',
				optionCost: 7,
			},
			{
				name: 'Heavy Gun Battery',
				arc: 'F/S',
				option: 'F/S 2 Weapon',
			},
			{
				name: 'Heavy Rocket Battery',
				arc: 'F/S',
				option: 'F/S 2 Weapon',
			},	
			{
				name: 'D-Cannon Battery',
				arc: 'F/S',
				option: 'F/S 2 Weapon',
				optionCost: 4,
			},
			{
				name: 'Particle Beamer',
				arc: 'F/S',
				option: 'F/S 2 Weapon',
				optionCost: 7,
			},
			{
				name: 'Heavy Broadside',
				arc: 'P&S'
			},
			{
				name: 'Torpedo Salvo',
				arc: 'F'
			},
			{
				name: 'Torpedo Salvo',
				arc: 'F'
			},
		],
	},
	anatolia: {
		name: 'Anatolia Heavy Battlecruiser',
		type: 'Heavy Battlecruiser',
		points: '230',
		traits: 'Sultanate, Turkish, Surface Unit, Heavy Battlecruiser, Anatolia-Class, Flagship',
		mass: '3/3',
		speed: '6/6',
		turnLimit: '5/5',
		armour: '8/7',
		citadel: '15/14',
		adv: '5/3',
		sdv: '5/3',
		fray: '11/8',
		hull: '7/4',
		rules: [
			'Agile',
			'Focused Fire (Gunnery)',
			'Gun Runner',
			'Heavy Firepower',
			'Maritime Patrol',
			'Orichalcite Construction',
            'Powerslide',
		],
		weapons: [
			{
				name: 'Heavy Gun Battery',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
			},
			{
				name: 'Heavy Rocket Battery',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
			},
			{
				name: 'D-Cannon Battery',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
				optionCost: 4,	
			},
			{
				name: 'Particle Beamer',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
				optionCost: 7,	
			},			{
				name: 'Heavy Gun Battery',
				arc: 'F/P/S',
				option: 'F/P/S 2 Weapon',
			},
			{
				name: 'Heavy Rocket Battery',
				arc: 'F/P/S',
				option: 'F/P/S 2 Weapon',
			},
			{
				name: 'D-Cannon Battery',
				arc: 'F/P/S',
				option: 'F/P/S 2 Weapon',
				optionCost: 4,	
			},
			{
				name: 'Particle Beamer',
				arc: 'F/P/S',
				option: 'F/P/S 2 Weapon',
				optionCost: 7,	
			},
			{
				name: 'Gun Battery',
				arc: 'A/P',
				option: 'A/P Weapon',
			},
			{
				name: 'Rocket Battery',
				arc: 'A/P',
				option: 'A/P Weapon',
			},

			{
				name: 'Aetheric Lance',
				arc: 'A/P',
				option: 'A/P Weapon',
				optionCost: 5,
			},
			{
				name: 'Gun Battery',
				arc: 'A/S',
				option: 'A/S Weapon',
			},
			{
				name: 'Rocket Battery',
				arc: 'A/S',
				option: 'A/S Weapon',
			},
			{
				name: 'Aetheric Lance',
				arc: 'A/S',
				option: 'A/S Weapon',
				optionCost: 5,
			},
			{
				name: 'Heavy Broadside',
				arc: 'P&S',
			},
			{
				name: 'Heavy Torpedo Salvo',
				arc: 'F',
			},
		],
		generators: [
			{
				name: 'Generator',
				choices: [
					'Atomic Generator',
                    'Fury Generator',
					'Magnetic Generator',
					'Mirage Portal (1)',
					'Repulsion Field Generator',
					'Shield Generator',
					'Shroud Generator',
				],
				option: 'F/P/S 2 Weapon',
				optionCost: -5,
			},
		],
	},
	validekosem: {
		name: 'Valide Kosem',
		type: 'Heavy Battlecruiser',
		points: '240',
		traits: 'Sultanate, Turkish, Surface Unit, Heavy Battlecruiser, Anatolia-Class, Flagship',
		mass: '3/3',
		speed: '6/6',
		turnLimit: '5/5',
		armour: '8/7',
		citadel: '15/14',
		adv: '5/3',
		sdv: '5/3',
		fray: '11/8',
		hull: '7/4',
		rules: [
			'Agile',
			'Focused Fire (Gunnery)',
			'Gun Runner',
			'Heavy Firepower',
			'Maritime Patrol',
			'Mark of Fate',
			'Orichalcite Construction',
            'Powerslide',
			'Sharpshooter',
		],
		weapons: [
			{
				name: 'Heavy Gun Battery',
				arc: 'F/P/S',
			},		{
				name: 'Heavy Gun Battery',
				arc: 'F/P/S',
			},
			{
				name: 'Gun Battery',
				arc: 'A/P',
			},
			{
				name: 'Gun Battery',
				arc: 'A/S',
			},
			{
				name: 'Heavy Broadside',
				arc: 'P&S',
			},
			{
				name: 'Heavy Torpedo Salvo',
				arc: 'F',
			},
		],
	},
	suleiman: {
		name: 'Suleiman Fleet Carrier',
		type: 'Fleet Carrier',
		points: '325',
		traits: 'Sultanate, Turkish, Surface Unit, Fleet Carrier, Suleiman-Class, Flagship',
		mass: '4/4',
		speed: '4/4',
		turnLimit: '3/2',
		armour: '7/7',
		citadel: '15/43',
		adv: '5/3',
		sdv: '5/3',
		fray: '11/8',
		hull: '7/9',
		rules: [
			'Combat Air Patrol',
			{
				name: 'Flak Barrage',
				value: 7
			},
			'Heavy Firepower',
			'Ikili Hull',
			'Orichalcite Construction',
            'Powerslide',
			{
				name: 'SRS Capacity',
				value: '12/6',
			},
			'SRS Mine Clearance',
			'SRS Recon',
			'Vulnerable Stern',
		],
		weapons: [
			{
				name: 'Heavy Broadside',
				arc: 'P&S'
			},
			{
				name: 'Rocket Battery',
				arc: 'F/P',
			},
			{
				name: 'Rocket Battery',
				arc: 'F/S',
			},
			{
				name: 'Rocket Battery',
				arc: 'A/P',
			},
			{
				name: 'Rocket Battery',
				arc: 'A/S',
			},
		],
	},
	temir: {
		name: 'Temir Frigate',
		type: 'Frigate',
		points: '35',
		traits: 'Sultanate, Turkish, Surface Unit, Frigate, Temir-Class',
		mass: '1',
		speed: '13',
		turnLimit: '10',
		armour: '5',
		citadel: '10',
		adv: '3',
		sdv: '3',
		fray: '5',
		hull: '2',
		rules: [
			'Acceptable Attrition',
			'Agile',
			'Gun Runner',
			'Powerslide',
			'Vulnerable Stern',
			{
				name: 'Attached Unit',
				value: 'Turkish',
			},
		],
		weapons: [
			{
				name: 'Gun Battery',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
			},
			{
				name: 'Rocket Battery',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
			},
			{
				name: 'Aetheric Lance',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
				optionCost: 6,
			},
			{
				name: 'Light Broadside',
				arc: 'P&S',
			},
			{
				name: 'Micro Torpedo Salvo',
				arc: 'F',
			}
		],
	},
}