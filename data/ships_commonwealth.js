window.commonwealth_ships = {
	moskva: {
		name: 'Moskva Heavy Battleship',
		type: 'Heavy Battleship',
		points: 311,
		traits: 'Commonwealth, Russian, Surface Ship, Heavy Battleship, Moskva-class, Flagship',
		mass: '3/3',
		speed: '5/3',
		turnLimit: '3/2',
		armour: '8/8',
		citadel: '16/14',
		adv: '6/4',
		sdv: '5/3',
		fray: '14/10',
		hull: '10/6',
		rules: [
            'Ablative Armour',
            'Elite Crew',
            'Focused Fire (Gunnery)',
            'Hammer Sweep',
            'Heavy Firepower',
            'Shockwave Generator',
			'Sonic Amplifier'
		],
		weapons: [
			{
				name: 'Heavy Gun Battery',
				arc: 'F/P/S',
				option: 'F/P/S Batteries'
			},
			{
				name: 'Tri-Railgun',
				arc: 'F/P/S',
				option: 'F/P/S Batteries',
				optionCost: 5,
			},
			{
				name: 'Yastreb Missile Battery',
				arc: 'F/P/S',
				option: 'F/P/S Batteries',
				optionCost: 5,
			},
			{
				name: 'Heavy Gun Battery',
				arc: 'F/P',
				option: 'F/P Batteries'
			},
			{
				name: 'Tri-Railgun',
				arc: 'F/P',
				option: 'F/P Batteries',
				optionCost: 5,
			},
			{
				name: 'Yastreb Missile Battery',
				arc: 'F/P',
				option: 'F/P Batteries',
				optionCost: 5,
			},
			{
				name: 'Heavy Gun Battery',
				arc: 'F/S',
				option: 'F/S Batteries'
			},
			{
				name: 'Tri-Railgun',
				arc: 'F/S',
				option: 'F/S Batteries',
				optionCost: 5,
			},
			{
				name: 'Yastreb Missile Battery',
				arc: 'F/S',
				option: 'F/S Batteries',
				optionCost: 5,
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
			{
				name: 'Gun Battery',
				arc: 'F/P & F/S',
				option: 'F/P & F/S Weapon',
			},			
			{
				name: 'Seismic Mortar',
				arc: 'F/P & F/S',
				option: 'F/P & F/S Weapon',
				optionCost: 4,
			},
			{
				name: 'Zhalo Rocket Battery',
				arc: 'F/P & F/S',
				option: 'F/P & F/S Weapon',
				optionCost: 4,
			},
			{
				name: 'Railgun',
				arc: 'F/P & F/S',
				option: 'F/P & F/S Weapon',
				optionCost: 10,
			},
			{
				name: 'Shockwave Pulse',
				arc: '360'
			}
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
				option: 'F/P Batteries',
				optionCost: -5,
			},
		],
	},
	krykun: {
		name: 'Krykun Shockwave Frigate',
		type: 'Shockwave Frigate',
		points: '40',
		traits: 'Commonwealth, Shockwave Frigate, Surface Unit, Krykun-Class, Russian',
		mass: '1',
		speed: '10',
		turnLimit: '6',
		armour: '5',
		citadel: '12',
		adv: '3',
		sdv: '3',
		fray: '5',
		hull: '3',
		rules: [
			'Ablative Armour',
			{
				name: 'Attached Unit',
				value: 'Russian, Flagship',
			},
		    'Corvette Duty',
			'Shallow Draught',
			'Shockwave Generator',
		],
		weapons: [
			{
				name: 'Light Broadside',
				arc: 'P&S',
			},
			{
				name: 'Gun Battery',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
			},
			{
				name: 'Seismic Mortar',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
			},
			{
				name: 'Zhalo Rocket Battery',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
				optionCost: 5,
			},
			{
				name: 'Railgun',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
				optionCost: 5,
			},
			{
				name: 'Shockwave Pulse',
				arc: '360'
			}
		],
	}
};
