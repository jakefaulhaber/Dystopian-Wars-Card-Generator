window.alliance_ships = {
	// Battleships
    mars: {
		name: 'Mars',
		type: 'Heavy Battleship',
		points: 270,
        traits: 'Alliance, Italian, Surface Unit, Heavy Battleship, Mars-class, Flagship',
		mass: '3/3',
		speed: '5/4',
		turnLimit: '3/2',
		armour: '8/8',
		citadel: '16/14',
		adv: '7/5',
		sdv: '6/4',
		fray: '13/12',
		hull: '9/4',
		rules: [
			'Ablative Flank Armour',
			{
				name: 'Advanced Repair Facilities',
				value: '1',
			},
			'Coordinated Support',
            'For Valour!',
            'Hammer Sweep',
            'Heavy Firepower'
		],
		weapons: [
            {
                name: 'Heavy Prow Ram',
                arc: 'F'
            },
            {
				name: 'Heavy Gun Battery',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
			},
            {
				name: 'Heavy Rocket Battery',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
				optionCost: 3,
			},
            {
				name: 'Heavy Magnetic Bombard',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
				optionCost: 4,
			},
            {
				name: 'Heat Lance',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
				optionCost: 6,
			},
            {
				name: 'Heavy Gun Battery',
				arc: 'F/P/A',
				option: 'F/P/A Weapon',
			},
            {
				name: 'Heavy Rocket Battery',
				arc: 'F/P/A',
				option: 'F/P/A Weapon',
				optionCost: 3,
			},
            {
				name: 'Heavy Magnetic Bombard',
				arc: 'F/P/A',
				option: 'F/P/A Weapon',
				optionCost: 4,
			},
            {
				name: 'Heat Lance',
				arc: 'F/P/A',
				option: 'F/P/A Weapon',
				optionCost: 6,
			},
            {
				name: 'Heavy Gun Battery',
				arc: 'F/S/A',
				option: 'F/S/A Weapon',
			},
            {
				name: 'Heavy Rocket Battery',
				arc: 'F/S/A',
				option: 'F/S/A Weapon',
				optionCost: 3,
			},
            {
				name: 'Heavy Magnetic Bombard',
				arc: 'F/S/A',
				option: 'F/S/A Weapon',
				optionCost: 4,
			},
            {
				name: 'Heat Lance',
				arc: 'F/S/A',
				option: 'F/S/A Weapon',
				optionCost: 6,
			},
            {
                name: 'Heavy Broadside',
                arc: 'P&S'
            },
			{
				name: 'Heavy Torpedo Salvo',
				arc: 'F'
			},
		],
        generators: [
			{
				name: 'Generator',
				choices: [
					'Atomic Generator',
                    'Fury Generator',
					'Magnetic Generator',
					'Repulsion Field Generator',
					'Shield Generator',
					'Shroud Generator',
				],
				option: 'F/P/S Weapon',
				optionCost: -5,
			},
            {
				name: 'Generator',
				choices: [
					'Solex Generator',
				],
				option: 'F/P/S Weapon',
			},
		],
	},
    minerva: {
		name: 'Minerva',
		type: 'Assault Carrier',
		points: 270,
        traits: 'Alliance, Italian, Surface Unit, Assault Carrier, Minerva-class, Flagship',
		mass: '4/4',
		speed: '5/4',
		turnLimit: '2/2',
		armour: '8/7',
		citadel: '14/12',
		adv: '8/5',
		sdv: '6/4',
		fray: '12/11',
		hull: '7/7',
		rules: [
            {
				name: 'SRS Capacity',
				value: '8/4',
			},
			'Ablative Flank Armour',
			{
				name: 'Advanced Repair Facilities',
				value: '3',
			},
            'Combat Air Patrol',
			'Coordinated Support',
            'For Valour!',
            'Heavy Firepower',
            'Malinois Strike Fighters',
            'SRS Mine Clearance',
            'SRS Recon',

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
				name: 'Heat Lancette',
				arc: 'F/P',
				option: 'F/P Weapon',
                optionCost: 3,
			},
            {
				name: 'Rocket Battery',
				arc: '360',
				option: '360 Weapon 1',
			},
            {
				name: 'Gun Battery',
				arc: '360',
				option: '360 Weapon 1',
			},
            {
				name: 'Heat Lancette',
				arc: '360',
				option: '360 Weapon 1',
                optionCost: 3,
			},
            {
				name: 'Rocket Battery',
				arc: '360',
				option: '360 Weapon 2',
			},
            {
				name: 'Gun Battery',
				arc: '360',
				option: '360 Weapon 2',
			},
            {
				name: 'Heat Lancette',
				arc: '360',
				option: '360 Weapon 2',
                optionCost: 3,
			},
            {
                name: 'Heavy Broadside',
                arc: 'P&S'
            },
			{
				name: 'Torpedo Salvo',
				arc: 'F'
			},
		],
	},
    oriflamme: {
		name: 'Oriflamme',
		type: 'Grand Battlecruiser',
		points: 230,
        traits: 'Alliance, French, Surface Unit, Grand Battlecruiser, Oriflamme-class, Flagship',
		mass: '3/3',
		speed: '6/5',
		turnLimit: '3/2',
		armour: '7/7',
		citadel: '14/13',
		adv: '6/4',
		sdv: '5/3',
		fray: '13/12',
		hull: '7/4',
		rules: [
			'Coordinated Support',
            'For Valour!',
            'Heavy Firepower',
            'Maritime Patrol',
            'Protected Gun Crews',
            'Reinforced Waterline'
		],
		weapons: [
            {
				name: 'Heat Lance',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
			},
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
				name: 'Heavy Magnetic Bombard',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
			},
            {
				name: 'Heavy Gun Battery',
				arc: 'A/P/S',
				option: 'A/P/S Weapon',
			},
            {
				name: 'Heavy Rocket Battery',
				arc: 'A/P/S',
				option: 'A/P/S Weapon',
				optionCost: 3,
			},
            {
				name: 'Heavy Magnetic Bombard',
				arc: 'A/P/S',
				option: 'A/P/S Weapon',
				optionCost: 4,
			},
            {
				name: 'Heat Lance',
				arc: 'A/P/S',
				option: 'A/P/S Weapon',
				optionCost: 6,
			},
            {
                name: 'Heavy Rolling Broadside',
                arc: 'P&S'
            },
            {
				name: 'Gun Battery',
				arc: 'F/P'
			},
            {
				name: 'Gun Battery',
				arc: 'F/S'
			},
			{
				name: 'Torpedo Turret',
				arc: 'F/P/A'
			},
            {
				name: 'Torpedo Turret',
				arc: 'F/S/A'
			},
		],
        generators: [
			{
				name: 'Generator',
				choices: [
					'Atomic Generator',
                    'Fury Generator',
					'Magnetic Generator',
					'Repulsion Field Generator',
					'Shield Generator',
					'Shroud Generator',
				],
				option: 'A/P/S Weapon',
				optionCost: -5,
			},
            {
				name: 'Generator',
				choices: [
					'Solex Generator',
				],
				option: 'A/P/S Weapon',
			},
		],
	},
    fesch: {
		name: 'Fesch',
		type: 'Grand Battlecruiser',
		points: 245,
        traits: 'Alliance, French, Surface Unit, Grand Battlecruiser, Oriflamme-class, Flagship, Unique',
		mass: '3/3',
		speed: '6/5',
		turnLimit: '3/2',
		armour: '7/7',
		citadel: '14/13',
		adv: '6/4',
		sdv: '5/3',
		fray: '14/13',
		hull: '7/4',
		rules: [
            'Command Codes',
			'Coordinated Support',
            'Focused Fire (Gunnery)',
            'For Valour!',
            'Heavy Firepower',
            'Maritime Patrol',
            'Protected Gun Crews',
            'Reinforced Waterline'
		],
		weapons: [
            {
				name: 'Heavy Gun Battery',
				arc: 'F/P/S'
			},
            {
				name: 'Heavy Gun Battery',
				arc: 'A/P/S'
			},
            {
                name: 'Heavy Rolling Broadside',
                arc: 'P&S'
            },
            {
				name: 'Gun Battery',
				arc: 'F/P'
			},
            {
				name: 'Gun Battery',
				arc: 'F/S'
			},
			{
				name: 'Torpedo Turret',
				arc: 'F/P/A'
			},
            {
				name: 'Torpedo Turret',
				arc: 'F/S/A'
			},
		],
	},
    richelieu: {
		name: 'Richelieu',
		type: 'Grand Battlecruiser',
		points: 251,
        traits: 'Alliance, French, Surface Unit, Grand Battlecruiser, Oriflamme-class, Flagship, Unique',
		mass: '3/3',
		speed: '6/5',
		turnLimit: '3/2',
		armour: '7/7',
		citadel: '14/13',
		adv: '6/4',
		sdv: '5/3',
		fray: '13/12',
		hull: '7/4',
		rules: [
			'Coordinated Support',
            'Focused Fire (Gunnery)',
            'For Valour!',
            'Heavy Firepower',
            'Maritime Patrol',
            'Protected Gun Crews',
            'Reinforced Waterline',
            'Solex Generator'
		],
		weapons: [
            {
				name: 'Heat Lance',
				arc: 'F/P/S'
			},
            {
                name: 'Heavy Rolling Broadside',
                arc: 'P&S'
            },
            {
				name: 'Heat Lancette',
				arc: 'F/P'
			},
            {
				name: 'Heat Lancette',
				arc: 'F/S'
			},
			{
				name: 'Torpedo Turret',
				arc: 'F/P/A'
			},
            {
				name: 'Torpedo Turret',
				arc: 'F/S/A'
			},
		],
	},
	// Surface Units
	auxilia: {
		name: 'Auxilia',
		type: 'Fast Cruiser',
		points: 96,
        traits: 'Alliance, Italian, Surface Unit, Fast Cruiser, Auxilia-class',
		mass: '2/2',
		speed: '9/7',
		turnLimit: '4/3',
		armour: '6/6',
		citadel: '13/11',
		adv: '3/2',
		sdv: '3/2',
		fray: '6/4',
		hull: '4/3',
		rules: [
			'Ablative Flank Armour',
			'Coordinated Support',
            'For Valour!',
            'Linear Dash',
			'Vanguard'
		],
		weapons: [
            {
                name: 'Prow Ram',
                arc: 'F'
            },
            {
				name: 'Heavy Gun Battery',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
			},
            {
				name: 'Heavy Rocket Battery',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
				optionCost: 3,
			},
            {
				name: 'Heavy Magnetic Bombard',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
				optionCost: 4,
			},
            {
				name: 'Heat Lance',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
				optionCost: 6,
			},
			{
				name: 'Gun Battery',
				arc: 'F/P/S',
				option: 'F/P/S Weapon 2',
			},
			{
				name: 'Torpedo Turret',
				arc: 'F/P/S',
				option: 'F/P/S Weapon 2',
			},
			{
				name: 'Rocket Battery',
				arc: 'F/P/S',
				option: 'F/P/S Weapon 2',
				optionCost: 3,
			},
			{
				name: 'Heat Lancette',
				arc: 'F/P/S',
				option: 'F/P/S Weapon 2',
				optionCost: 5,
			},
            {
                name: 'Broadside',
                arc: 'P&S'
            },
			{
				name: 'Torpedo Salvo',
				arc: 'F'
			},
		],
		generators: [
			{
				name: 'Generator',
				choices: [
					'Atomic Generator',
                    'Fury Generator',
					'Magnetic Generator',
					'Repulsion Field Generator',
					'Shield Generator',
					'Shroud Generator',
				],
				option: 'F/P/S Weapon',
				optionCost: -5,
			},
            {
				name: 'Generator',
				choices: [
					'Solex Generator',
				],
				option: 'F/P/S Weapon',
			},
		],
	},
	cestus: {
		name: 'Cestus',
		type: 'Zebek',
		points: 60,
        traits: 'Alliance, Italian, Surface Unit, Zebek, Cestus-class',
		mass: '1',
		speed: '10',
		turnLimit: '7',
		armour: '5',
		citadel: '10',
		adv: '3',
		sdv: '2',
		fray: '5',
		hull: '2',
		rules: [
			'Ablative Flank Armour',
			'Coordinated Support',
			{
				name: 'Flak Barrage',
				value: 2
			},
			'Focused Fire (Gunnery)',
            'For Valour!',
		],
		weapons: [
            {
				name: 'Gun Battery',
				arc: 'F/P/S',
			},
            {
                name: 'Light Broadside',
                arc: 'P&S'
            },
		],
	},
	charlemagne: {
		name: 'Charlemagne',
		type: 'Heavy Cruiser',
		points: 130,
        traits: 'Alliance, French, Surface Unit, Heavy Cruiser, Charlemagne-class',
		mass: '2/2',
		speed: '6/6',
		turnLimit: '4/3',
		armour: '6/6',
		citadel: '13/11',
		adv: '4/2',
		sdv: '4/2',
		fray: '8/8',
		hull: '4/4',
		rules: [
			"Admiral\'s Flag",
			'Coordinated Support',
            'For Valour!',
            'Heavy Firepower',
			'Protected Gun Crews',
			'Reinforced Waterline'
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
				optionCost: 3,
			},
            {
				name: 'Heavy Magnetic Bombard',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
				optionCost: 4,
			},
            {
				name: 'Heat Lance',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
				optionCost: 6,
			},
			{
				name: 'Heavy Gun Battery',
				arc: 'F/P/S',
				option: 'F/P/S Weapon 2',
			},
            {
				name: 'Heavy Rocket Battery',
				arc: 'F/P/S',
				option: 'F/P/S Weapon 2',
				optionCost: 3,
			},
            {
				name: 'Heavy Magnetic Bombard',
				arc: 'F/P/S',
				option: 'F/P/S Weapon 2',
				optionCost: 4,
			},
            {
				name: 'Heat Lance',
				arc: 'F/P/S',
				option: 'F/P/S Weapon 2',
				optionCost: 6,
			},
			{
				name: 'Gun Battery',
				arc: 'A/P/S',
				option: 'A/P/S Weapon',
			},
			{
				name: 'Torpedo Turret',
				arc: 'A/P/S',
				option: 'A/P/S Weapon',
			},
			{
				name: 'Rocket Battery',
				arc: 'A/P/S',
				option: 'A/P/S Weapon',
				optionCost: 3,
			},
			{
				name: 'Heat Lancette',
				arc: 'A/P/S',
				option: 'A/P/S Weapon',
				optionCost: 5,
			},
            {
                name: 'Heavy Rolling Broadside',
                arc: 'P&S'
            },
			{
				name: 'Torpedo Turret',
				arc: 'F/P/A'
			},
			{
				name: 'Torpedo Turret',
				arc: 'F/S/A'
			},
		],
		generators: [
			{
				name: 'Generator',
				choices: [
					'Atomic Generator',
                    'Fury Generator',
					'Magnetic Generator',
					'Repulsion Field Generator',
					'Shield Generator',
					'Shroud Generator',
				],
				option: 'F/P/S Weapon',
				optionCost: -5,
			},
            {
				name: 'Generator',
				choices: [
					'Solex Generator',
				],
				option: 'F/P/S Weapon',
			},
		],
	},
	chevalier: {
		name: 'Chevalier',
		type: 'Cruiser',
		points: 107,
        traits: 'Alliance, French, Surface Unit, Cruiser, Chevalier-class',
		mass: '2/2',
		speed: '7/6',
		turnLimit: '4/3',
		armour: '6/6',
		citadel: '12/11',
		adv: '3/2',
		sdv: '3/2',
		fray: '7/7',
		hull: '4/4',
		rules: [
			'Coordinated Support',
            'For Valour!',
			'Protected Gun Crews',
			'Reinforced Waterline'
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
				optionCost: 3,
			},
            {
				name: 'Heavy Magnetic Bombard',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
				optionCost: 4,
			},
            {
				name: 'Heat Lance',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
				optionCost: 6,
			},
			{
				name: 'Heavy Gun Battery',
				arc: 'F/P/S',
				option: 'F/P/S Weapon 2',
			},
            {
				name: 'Heavy Rocket Battery',
				arc: 'F/P/S',
				option: 'F/P/S Weapon 2',
				optionCost: 3,
			},
            {
				name: 'Heavy Magnetic Bombard',
				arc: 'F/P/S',
				option: 'F/P/S Weapon 2',
				optionCost: 4,
			},
            {
				name: 'Heat Lance',
				arc: 'F/P/S',
				option: 'F/P/S Weapon 2',
				optionCost: 6,
			},
            {
                name: 'Rolling Broadside',
                arc: 'P&S'
            },
			{
				name: 'Torpedo Turret',
				arc: 'F/P/A'
			},
			{
				name: 'Torpedo Turret',
				arc: 'F/S/A'
			},
		],
		generators: [
			{
				name: 'Generator',
				choices: [
					'Atomic Generator',
                    'Fury Generator',
					'Magnetic Generator',
					'Repulsion Field Generator',
					'Shield Generator',
					'Shroud Generator',
				],
				option: 'F/P/S Weapon',
				optionCost: -5,
			},
            {
				name: 'Generator',
				choices: [
					'Solex Generator',
				],
				option: 'F/P/S Weapon',
			},
		],
	},
	ecuyere: {
		name: 'Ecuyere',
		type: 'Frigate',
		points: 108,
        traits: 'Alliance, French, Surface Unit, Frigate, Ecuyere-class',
		mass: '1',
		speed: '11',
		turnLimit: '8',
		armour: '5',
		citadel: '10',
		adv: '3',
		sdv: '2',
		fray: '4',
		hull: '2',
		rules: [
			'Attached Unit',
			'Coordinated Support',
			'Corvette Duty',
            'For Valour!',
			'Reinforced Waterline'
		],
		weapons: [
            {
				name: 'Gun Battery',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
			},
			{
				name: 'Torpedo Turret',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
				optionCost: 4,
			},
			{
				name: 'Rocket Battery',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
				optionCost: 4,
			},
			{
				name: 'Heat Lancette',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
				optionCost: 6,
			},
            {
                name: 'Picket Broadside',
                arc: 'P&S'
            },
		],
	},
	gladius: {
		name: 'Gladius',
		type: 'Strike Cruiser',
		points: 100,
        traits: 'Alliance, Italian, Surface Unit, Strike Cruiser, Gladius-class',
		mass: '2/2',
		speed: '7/7',
		turnLimit: '4/3',
		armour: '6/6',
		citadel: '13/11',
		adv: '3/2',
		sdv: '3/2',
		fray: '6/4',
		hull: '4/4',
		rules: [
			'Ablative Flank Armour',
			'Coordinated Support',
            'For Valour!',
            'Sharpshooter'
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
				optionCost: 3,
			},
            {
				name: 'Heavy Magnetic Bombard',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
				optionCost: 4,
			},
            {
				name: 'Heat Lance',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
				optionCost: 6,
			},
            {
				name: 'Heavy Gun Battery',
				arc: 'A/P/S',
				option: 'A/P/S Weapon',
			},
            {
				name: 'Heavy Rocket Battery',
				arc: 'A/P/S',
				option: 'A/P/S Weapon',
				optionCost: 3,
			},
            {
				name: 'Heavy Magnetic Bombard',
				arc: 'A/P/S',
				option: 'A/P/S Weapon',
				optionCost: 4,
			},
            {
				name: 'Heat Lance',
				arc: 'A/P/S',
				option: 'A/P/S Weapon',
				optionCost: 6,
			},
            {
                name: 'Broadside',
                arc: 'P&S'
            },
			{
				name: 'Torpedo Salvo',
				arc: 'F'
			},
		],
		generators: [
			{
				name: 'Generator',
				choices: [
					'Atomic Generator',
                    'Fury Generator',
					'Magnetic Generator',
					'Repulsion Field Generator',
					'Shield Generator',
					'Shroud Generator',
				],
				option: 'A/P/S Weapon',
				optionCost: -5,
			},
            {
				name: 'Generator',
				choices: [
					'Solex Generator',
				],
				option: 'A/P/S Weapon',
			},
		],
	},
	jupiter: {
		name: 'Jupiter',
		type: 'Support Carrier',
		points: 130,
        traits: 'Alliance, Italian, Surface Unit, Support Carrier, Jupiter-class',
		mass: '2/2',
		speed: '7/7',
		turnLimit: '4/3',
		armour: '6/6',
		citadel: '12/11',
		adv: '3/2',
		sdv: '3/2',
		fray: '4/3',
		hull: '3/5',
		rules: [
			'Ablative Flank Armour',
			'Coordinated Support',
            'For Valour!',
			'Malinois Strike Fighters',
			'SRS Mine Clearance',
			'SRS Recon',
			{
				name: 'SRS Capacity',
				value: '4/3',
			},
		],
		weapons: [
            {
                name: 'Prow Ram',
                arc: 'F'
            },
            {
                name: 'Broadside',
                arc: 'P&S'
            },
			{
				name: 'Torpedo Salvo',
				arc: 'F'
			},
		],
	},
	loire: {
		name: 'Loire',
		type: 'Light Cruiser',
		points: 90,
        traits: 'Alliance, French, Surface Unit, Light Cruiser, Loire-class',
		mass: '2/2',
		speed: '8/7',
		turnLimit: '4/3',
		armour: '6/6',
		citadel: '12/11',
		adv: '3/2',
		sdv: '3/2',
		fray: '6/5',
		hull: '4/3',
		rules: [
			'Coordinated Support',
            'For Valour!',
            'Mine Sweeper',
			'Protected Gun Crews',
			'Reinforced Waterline',
			'Vanguard'
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
				optionCost: 3,
			},
            {
				name: 'Heavy Magnetic Bombard',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
				optionCost: 4,
			},
            {
				name: 'Heat Lance',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
				optionCost: 6,
			},
			{
				name: 'Gun Battery',
				arc: 'A/P/S',
				option: 'A/P/S Weapon',
			},
			{
				name: 'Torpedo Turret',
				arc: 'A/P/S',
				option: 'A/P/S Weapon',
			},
			{
				name: 'Rocket Battery',
				arc: 'A/P/S',
				option: 'A/P/S Weapon',
				optionCost: 3,
			},
			{
				name: 'Heat Lancette',
				arc: 'A/P/S',
				option: 'A/P/S Weapon',
				optionCost: 5,
			},
            {
                name: 'Rolling Broadside',
                arc: 'P&S'
            },
			{
				name: 'Torpedo Turret',
				arc: 'F/P/A'
			},
			{
				name: 'Torpedo Turret',
				arc: 'F/S/A'
			},
		],
		generators: [
			{
				name: 'Generator',
				choices: [
					'Atomic Generator',
                    'Fury Generator',
					'Magnetic Generator',
					'Repulsion Field Generator',
					'Shield Generator',
					'Shroud Generator',
				],
				option: 'F/P/S Weapon',
				optionCost: -5,
			},
            {
				name: 'Generator',
				choices: [
					'Solex Generator',
				],
				option: 'F/P/S Weapon',
			},
		],
	},
	picardy: {
		name: 'Picardy',
		type: 'Littoral Monitor',
		points: 85,
        traits: 'Alliance, French, Surface Unit, Littoral Monitor, Picardy-class',
		mass: '2/2',
		speed: '7/6',
		turnLimit: '4/3',
		armour: '6/6',
		citadel: '12/11',
		adv: '3/2',
		sdv: '3/2',
		fray: '8/7',
		hull: '4/3',
		rules: [
			'Coordinated Support',
            'For Valour!',
            'Maritime Patrol',
			'Protected Gun Crews',
			'Reinforced Waterline',
			'Shallow Draught'
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
				optionCost: 3,
			},
            {
				name: 'Heavy Magnetic Bombard',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
				optionCost: 4,
			},
            {
				name: 'Heat Lance',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
				optionCost: 6,
			},
            {
                name: 'Rolling Broadside',
                arc: 'P&S'
            },
			{
				name: 'Torpedo Turret',
				arc: 'F/P/A'
			},
			{
				name: 'Torpedo Turret',
				arc: 'F/S/A'
			},
		],
		generators: [
			{
				name: 'Generator',
				choices: [
					'Atomic Generator',
                    'Fury Generator',
					'Magnetic Generator',
					'Repulsion Field Generator',
					'Shield Generator',
					'Shroud Generator',
				],
				option: 'F/P/S Weapon',
				optionCost: -5,
			},
            {
				name: 'Generator',
				choices: [
					'Solex Generator',
				],
				option: 'F/P/S Weapon',
			},
		],
	},
	pilum: {
		name: 'Pilum',
		type: 'Monitor',
		points: 85,
        traits: 'Alliance, Italian, Surface Unit, Monitor, Pilum-class',
		mass: '2/2',
		speed: '7/7',
		turnLimit: '4/3',
		armour: '6/6',
		citadel: '13/11',
		adv: '3/2',
		sdv: '3/2',
		fray: '7/4',
		hull: '4/3',
		rules: [
			'Ablative Flank Armour',
			'Coordinated Support',
            'For Valour!',
			'Hammer Sweep',
            'Mine Sweeper'
		],
		weapons: [
			{
                name: 'Prow Ram',
                arc: 'F'
            },
            {
				name: 'Heavy Gun Battery',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
			},
            {
				name: 'Heavy Rocket Battery',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
				optionCost: 3,
			},
            {
				name: 'Heavy Magnetic Bombard',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
				optionCost: 4,
			},
            {
				name: 'Heat Lance',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
				optionCost: 6,
			},
            {
                name: 'Broadside',
                arc: 'P&S'
            },
			{
				name: 'Torpedo Salvo',
				arc: 'F'
			},
		],
		generators: [
			{
				name: 'Generator',
				choices: [
					'Atomic Generator',
                    'Fury Generator',
					'Magnetic Generator',
					'Repulsion Field Generator',
					'Shield Generator',
					'Shroud Generator',
				],
				option: 'F/P/S Weapon',
				optionCost: -5,
			},
            {
				name: 'Generator',
				choices: [
					'Solex Generator',
				],
				option: 'F/P/S Weapon',
			},
		],
	},
	pugio: {
		name: 'Pugio',
		type: 'Destroyer',
		points: 80,
        traits: 'Alliance, Italian, Surface Unit, Destroyer, Pugio-class',
		mass: '1',
		speed: '10',
		turnLimit: '7',
		armour: '5',
		citadel: '12',
		adv: '3',
		sdv: '2',
		fray: '4',
		hull: '3',
		rules: [
			'Ablative Flank Armour',
			'Coordinated Support',
            'For Valour!',
			'Hunter (Surface Unit)'
		],
		weapons: [
            {
				name: 'Gun Battery',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
			},
			{
				name: 'Torpedo Turret',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
				optionCost: 3,
			},
			{
				name: 'Rocket Battery',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
				optionCost: 3,
			},
			{
				name: 'Heat Lancette',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
				optionCost: 5,
			},
			{
				name: 'Gun Battery',
				arc: 'A/P/S',
				option: 'A/P/S Weapon',
			},
			{
				name: 'Torpedo Turret',
				arc: 'A/P/S',
				option: 'A/P/S Weapon',
				optionCost: 3,
			},
			{
				name: 'Rocket Battery',
				arc: 'A/P/S',
				option: 'A/P/S Weapon',
				optionCost: 3,
			},
			{
				name: 'Heat Lancette',
				arc: 'A/P/S',
				option: 'A/P/S Weapon',
				optionCost: 5,
			},
            {
                name: 'Light Broadside',
                arc: 'P&S'
            },
		],
	},
	scorpio: {
		name: 'Scorpio',
		type: 'Artillery Cruiser',
		points: 132,
        traits: 'Alliance, Italian, Surface Unit, Artillery Cruiser, Scorpio-class',
		mass: '2/2',
		speed: '7/7',
		turnLimit: '4/3',
		armour: '6/6',
		citadel: '13/11',
		adv: '3/2',
		sdv: '3/2',
		fray: '5/4',
		hull: '4/4',
		rules: [
			'Ablative Flank Armour',
			'Coordinated Support',
            'For Valour!',
            'Hammer Sweep',
			'Rostrata',
			'Spotter'
		],
		weapons: [
            {
                name: 'Prow Ram',
                arc: 'F'
            },
            {
				name: 'Rostratum Naval Ballista',
				arc: 'F',
			},
			{
				name: 'Gun Battery',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
			},
			{
				name: 'Torpedo Turret',
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
				name: 'Heat Lancette',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
				optionCost: 5,
			},
            {
                name: 'Broadside',
                arc: 'P&S'
            },
			{
				name: 'Torpedo Salvo',
				arc: 'F'
			},
		],
	},
	spatha: {
		name: 'Spatha',
		type: 'Attack Cruiser',
		points: 130,
        traits: 'Alliance, Italian, Surface Unit, Attack Cruiser, Spatha-class',
		mass: '2/2',
		speed: '7/7',
		turnLimit: '4/3',
		armour: '6/6',
		citadel: '13/11',
		adv: '3/2',
		sdv: '3/2',
		fray: '6/4',
		hull: '4/4',
		rules: [
			'Ablative Flank Armour',
			'Coordinated Support',
			'Focused Fire (Gunnery)',
            'For Valour!',
            'Hammer Sweep'
		],
		weapons: [
            {
                name: 'Prow Ram',
                arc: 'F'
            },
            {
				name: 'Heavy Gun Battery',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
			},
            {
				name: 'Heavy Rocket Battery',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
				optionCost: 3,
			},
            {
				name: 'Heavy Magnetic Bombard',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
				optionCost: 4,
			},
            {
				name: 'Heat Lance',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
				optionCost: 6,
			},
			{
				name: 'Heavy Gun Battery',
				arc: 'A/P/S',
				option: 'A/P/S Weapon',
			},
            {
				name: 'Heavy Rocket Battery',
				arc: 'A/P/S',
				option: 'A/P/S Weapon',
				optionCost: 3,
			},
            {
				name: 'Heavy Magnetic Bombard',
				arc: 'A/P/S',
				option: 'A/P/S Weapon',
				optionCost: 4,
			},
            {
				name: 'Heat Lance',
				arc: 'A/P/S',
				option: 'A/P/S Weapon',
				optionCost: 6,
			},
			{
				name: 'Gun Battery',
				arc: 'F/P/S',
				option: 'F/P/S Weapon 2',
			},
			{
				name: 'Torpedo Turret',
				arc: 'F/P/S',
				option: 'F/P/S Weapon 2',
			},
			{
				name: 'Rocket Battery',
				arc: 'F/P/S',
				option: 'F/P/S Weapon 2',
				optionCost: 3,
			},
			{
				name: 'Heat Lancette',
				arc: 'F/P/S',
				option: 'F/P/S Weapon 2',
				optionCost: 6,
			},
            {
                name: 'Heavy Broadside',
                arc: 'P&S'
            },
			{
				name: 'Torpedo Salvo',
				arc: 'F'
			},
		],
		generators: [
			{
				name: 'Generator',
				choices: [
					'Atomic Generator',
                    'Fury Generator',
					'Magnetic Generator',
					'Repulsion Field Generator',
					'Shield Generator',
					'Shroud Generator',
				],
				option: 'A/P/S Weapon',
				optionCost: -5,
			},
            {
				name: 'Generator',
				choices: [
					'Solex Generator',
				],
				option: 'A/P/S Weapon',
			},
		],
	},
	vulcan: {
		name: 'Vulcan',
		type: 'Repair Ship',
		points: 75,
        traits: 'Alliance, Italian, Surface Unit, Repair Ship, Vulcan-class',
		mass: '2/2',
		speed: '7/7',
		turnLimit: '4/3',
		armour: '6/6',
		citadel: '12/11',
		adv: '3/2',
		sdv: '3/2',
		fray: '4/3',
		hull: '4/4',
		rules: [
			'Ablative Flank Armour',
			{
				name: 'Advanced Repair Facilities',
				value: '2',
			},
			'Coordinated Support',
            'For Valour!',
		],
		weapons: [
            {
                name: 'Prow Ram',
                arc: 'F'
            },
            {
                name: 'Broadside',
                arc: 'P&S'
            },
			{
				name: 'Torpedo Salvo',
				arc: 'F'
			},
		],
	},
	// Skimming Units
	chasseur: {
		name: 'Chasseur',
		type: 'Levant Strike Cruiser',
		points: 124,
        traits: 'Alliance, French, Skimming Unit, Levant Strike Cruiser, Chasseur-class',
		mass: '2/2',
		speed: '8/7',
		turnLimit: '4/3',
		armour: '6/6',
		citadel: '11/10',
		adv: '4/3',
		sdv: '5/4',
		fray: '7/7',
		hull: '4/3',
		rules: [
			'Agile',
			'Coordinated Support',
			'Focused Fire (Aerial)',
            'For Valour!',
            'Full Steam Ahead',
			'Levant Surge',
			'Vanguard'
		],
		weapons: [
            {
				name: 'Heavy Rocket Battery',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
			},
            {
				name: 'Heavy Gun Battery',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
				optionCost: 4,
			},
            {
				name: 'Heavy Magnetic Bombard',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
				optionCost: 4,
			},
            {
				name: 'Heat Lance',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
				optionCost: 5,
			},
			{
				name: 'Gun Battery',
				arc: 'F/P/S',
				option: 'F/P/S Weapon 2',
			},
			{
				name: 'Torpedo Turret',
				arc: 'F/P/S',
				option: 'F/P/S Weapon 2',
			},
            {
				name: 'Rocket Battery',
				arc: 'F/P/S',
				option: 'F/P/S Weapon 2',
				optionCost: 3,
			},
            {
				name: 'Heat Lancette',
				arc: 'F/P/S',
				option: 'F/P/S Weapon 2',
				optionCost: 5,
			},
			{
				name: 'Gun Battery',
				arc: 'F/P/A',
				option: 'F/P/A Weapon',
			},
			{
				name: 'Torpedo Turret',
				arc: 'F/P/A',
				option: 'F/P/A Weapon',
			},
			{
				name: 'Rocket Battery',
				arc: 'F/P/A',
				option: 'F/P/A Weapon',
				optionCost: 3,
			},
			{
				name: 'Heat Lancette',
				arc: 'F/P/A',
				option: 'F/P/A Weapon',
				optionCost: 5,
			},
			{
				name: 'Gun Battery',
				arc: 'F/S/A',
				option: 'F/S/A Weapon',
			},
			{
				name: 'Torpedo Turret',
				arc: 'F/S/A',
				option: 'F/S/A Weapon',
			},
			{
				name: 'Rocket Battery',
				arc: 'F/S/A',
				option: 'F/S/A Weapon',
				optionCost: 3,
			},
			{
				name: 'Heat Lancette',
				arc: 'F/S/A',
				option: 'F/S/A Weapon',
				optionCost: 5,
			},
            {
                name: 'Rolling Broadside',
                arc: 'P&S'
            },
		],
		generators: [
            {
				name: 'Generator',
				choices: [
					'Atomic Generator',
                    'Fury Generator',
					'Magnetic Generator',
					'Shield Generator',
					'Shroud Generator',
					'Solex Generator',
				],
				option: 'F/P/S Weapon',
			},
		],
	},
	furieux: {
		name: 'Furieux',
		type: 'Levant Grand Corvette',
		points: 132,
        traits: 'Alliance, French, Skimming Unit, Levant Grand Corvette, Furieux-class',
		mass: '2/2',
		speed: '8/7',
		turnLimit: '4/3',
		armour: '6/6',
		citadel: '11/10',
		adv: '5/4',
		sdv: '5/4',
		fray: '12/7',
		hull: '4/3',
		rules: [
			'Agile',
			'Attached Unit',
			'Coordinated Support',
			'Corvette Duty',
            'For Valour!',
            'Landing Vessel',
			'Legionnaire Assault Pods',
			'Levant Surge',
		],
		weapons: [
            {
				name: 'Heavy Rocket Battery',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
			},
            {
				name: 'Heavy Gun Battery',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
				optionCost: 4,
			},
            {
				name: 'Heavy Magnetic Bombard',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
				optionCost: 4,
			},
            {
				name: 'Heat Lance',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
				optionCost: 5,
			},
			{
				name: 'Gun Battery',
				arc: 'F/P/S',
				option: 'F/P/S Weapon 2',
			},
			{
				name: 'Torpedo Turret',
				arc: 'F/P/S',
				option: 'F/P/S Weapon 2',
			},
            {
				name: 'Rocket Battery',
				arc: 'F/P/S',
				option: 'F/P/S Weapon 2',
				optionCost: 3,
			},
            {
				name: 'Heat Lancette',
				arc: 'F/P/S',
				option: 'F/P/S Weapon 2',
				optionCost: 5,
			},
			{
				name: 'Gun Battery',
				arc: 'F/P/A',
				option: 'F/P/A Weapon',
			},
			{
				name: 'Torpedo Turret',
				arc: 'F/P/A',
				option: 'F/P/A Weapon',
			},
			{
				name: 'Rocket Battery',
				arc: 'F/P/A',
				option: 'F/P/A Weapon',
				optionCost: 3,
			},
			{
				name: 'Heat Lancette',
				arc: 'F/P/A',
				option: 'F/P/A Weapon',
				optionCost: 5,
			},
			{
				name: 'Gun Battery',
				arc: 'F/S/A',
				option: 'F/S/A Weapon',
			},
			{
				name: 'Torpedo Turret',
				arc: 'F/S/A',
				option: 'F/S/A Weapon',
			},
			{
				name: 'Rocket Battery',
				arc: 'F/S/A',
				option: 'F/S/A Weapon',
				optionCost: 3,
			},
			{
				name: 'Heat Lancette',
				arc: 'F/S/A',
				option: 'F/S/A Weapon',
				optionCost: 5,
			},
		],
		generators: [
            {
				name: 'Generator',
				choices: [
					'Atomic Generator',
                    'Fury Generator',
					'Magnetic Generator',
					'Shield Generator',
					'Shroud Generator',
					'Solex Generator',
				],
				option: 'F/P/S Weapon',
			},
		],
	},
	// Submerged Units
	epaulard: {
		name: 'Epaulard',
		type: 'Artillery Submarine',
		points: 74,
        traits: 'Alliance, French, Submerged Unit, Artillery Submarine, Epaulard-class',
		mass: '1',
		speed: '8',
		turnLimit: '7',
		armour: '4',
		citadel: '10',
		adv: '1',
		sdv: '3',
		fray: '3',
		hull: '3',
		rules: [
			'Agile',
			'Coordinated Support',
			'Deep Dive',
            'For Valour!',
			'Deceptive Deployment',
			'Spotter'
		],
		weapons: [
            {
				name: 'Magnetic Bombard',
				arc: 'F',
			},
		],
	},
	sagitta: {
		name: 'Sagitta',
		type: 'Hunter Submarine',
		points: 82,
        traits: 'Alliance, Italian, Submerged Unit, Hunter Submarine, Sagitta-class',
		mass: '1',
		speed: '7',
		turnLimit: '7',
		armour: '4',
		citadel: '10',
		adv: '1',
		sdv: '3',
		fray: '3',
		hull: '3',
		rules: [
			'Agile',
			'Auxiliary Mine Layer',
			'Coordinated Support',
			'Deep Dive',
            'For Valour!',
			'Silent Stalker'
		],
		weapons: [
            {
				name: 'Torpedo Salvo',
				arc: 'F',
			},
		],
	},
	sirene: {
		name: 'Sirene',
		type: 'Attack Submarine',
		points: 80,
        traits: 'Alliance, French, Submerged Unit, Attack Submarine, Sirene-class',
		mass: '1',
		speed: '8',
		turnLimit: '7',
		armour: '4',
		citadel: '10',
		adv: '1',
		sdv: '3',
		fray: '3',
		hull: '3',
		rules: [
			'Agile',
			'Coordinated Support',
			'Deep Dive',
            'For Valour!',
			'Forward Deployment',
			'Strategic Withdrawal'
		],
		weapons: [
            {
				name: 'Heat Lancette',
				arc: 'F',
			},
		],
	},
};