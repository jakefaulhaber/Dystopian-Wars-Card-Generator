window.commonwealth_ships = {
	borodino: {
		name: 'Borodino Battleship',
		type: 'Battleship',
		points: 248,
		traits: 'Commonwealth, Russian, Surface Ship, Battleship, Borodino-class, Flagship',
		mass: '3/3',
		speed: '5/3',
		turnLimit: '3/2',
		armour: '8/8',
		citadel: '16/14',
		adv: '6/4',
		sdv: '5/3',
		fray: '14/13',
		hull: '8/5',
		rules: [
            'Ablative Armour',
            'Cryo Generator',
			'Cryo-Capacitors',
            'Hammer Sweep',
            'Heavy Firepower (simple)',
            'Quantity is a Quality',
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
				name: 'Cryogenic Blast',
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
		fray: '14/13',
		hull: '10/6',
		rules: [
            'Ablative Armour',
            'Elite Crew',
            'Focused Fire (Gunnery)',
            'Hammer Sweep',
            'Heavy Firepower (simple)',
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
	murmansk: {
		name: 'Murmansk Mobile Stronghold',
		type: 'Mobile Stronghold',
		points: 290,
		traits: 'Commonwealth, Russian, Surface Ship, Mobile Stronghold, Murmansk-class, Flagship',
		mass: '5/5',
		speed: '2/2',
		turnLimit: '2/2',
		armour: '7/7',
		citadel: '13/11',
		adv: '8/5',
		sdv: '8/5',
		fray: '12/10',
		hull: '10/10',
		rules: [
			'Ablative Armour',
			{
				name: 'Advanced Repair Facilities',
				value: 5,
			},
            'Heavy Firepower (simple)',
            'Large Target',
			'Logistical Support',
			'Lumbering',
			'Supply Depot',
			'Unexpected Arrival',
		],
		weapons: [
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
				optionCost: 7,
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
				optionCost: 7,
			},
			{
				name: 'Heavy Gun Battery',
				arc: 'A/P',
				option: 'A/P Batteries'
			},
			{
				name: 'Tri-Railgun',
				arc: 'A/P',
				option: 'A/P Batteries',
				optionCost: 5,
			},
			{
				name: 'Yastreb Missile Battery',
				arc: 'A/P',
				option: 'A/P Batteries',
				optionCost: 7,
			},
			{
				name: 'Heavy Gun Battery',
				arc: 'A/S',
				option: 'A/S Batteries'
			},
			{
				name: 'Tri-Railgun',
				arc: 'A/S',
				option: 'A/S Batteries',
				optionCost: 5,
			},
			{
				name: 'Yastreb Missile Battery',
				arc: 'A/S',
				option: 'A/S Batteries',
				optionCost: 7,
			},
			{
				name: 'Heavy Broadside',
				arc: 'P&S'
			},
			{
				name: 'Heavy Broadside',
				arc: 'F&A'
			},
			{
				name: 'Heavy Torpedo Salvo',
				arc: 'F'
			},
		],
	},
	prezidium: {
		name: 'Prezidium Command Ship',
		type: 'Command Ship',
		points: 298,
		traits: 'Commonwealth, Russian, Surface Ship, Command Ship, Prezidium-class, Flagship',
		mass: '3/3',
		speed: '5/3',
		turnLimit: '3/2',
		armour: '8/8',
		citadel: '16/14',
		adv: '6/4',
		sdv: '5/3',
		fray: '14/13',
		hull: '10/6',
		rules: [
            'Ablative Armour',
			'Command Codes',
            'Elite Crew',
            'Hammer Sweep',
            'Heavy Firepower (simple)',
			'Hydrophone Relay',
            'Inspirational',
			'Logistical Support',
			'Supply Depot'
		],
		generators: [
			'Shield Generator',
		],
		weapons: [
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
		],
	},
	rikhter: {
		name: 'Rikhter Artillery Dreadnought',
		type: 'Artillery Dreadnought',
		points: 271,
		traits: 'Commonwealth, Russian, Surface Ship, Artillery Dreadnought, Rikhter-class, Flagship',
		mass: '3/3',
		speed: '4/3',
		turnLimit: '3/2',
		armour: '8/8',
		citadel: '16/14',
		adv: '6/4',
		sdv: '5/3',
		fray: '14/13',
		hull: '10/6',
		rules: [
            'Ablative Armour',
            'Hammer Sweep',
            'Kinetic Dampers',
            'Void Engine Magazine',
		],
		generators: [
			'Shield Generator',
			'Magnetic Generator'
		],
		weapons: [
			{
				name: 'Apokalyps Cannon',
				arc: 'F',
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

		],
	},
	tobolsk: {
		name: 'Tobolsk Mobile Stronghold',
		type: 'Mobile Stronghold',
		points: 400,
		traits: 'Commonwealth, Russian, Surface Ship, Mobile Stronghold, Tobolsk-class, Flagship',
		mass: '5/5',
		speed: '2/2',
		turnLimit: '2/2',
		armour: '7/7',
		citadel: '13/11',
		adv: '8/5',
		sdv: '8/5',
		fray: '12/10',
		hull: '12/10',
		rules: [
			'Ablative Armour',
			'Cryo Generator',
			'Cryo-Capacitors',
            'Heavy Firepower (simple)',
            'Large Target',
			'Lumbering',
			{
				name: 'SRS Capacity',
				value: '5/3',
			},
			'SRS Mine Clearance',
			'SRS Recon',
			'Unexpected Arrival',
		],
		generators: [
			'Magnetic Generator',
			'Shield Generator',
		],
		weapons: [
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
				optionCost: 7,
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
				optionCost: 7,
			},
			{
				name: 'Heavy Gun Battery',
				arc: 'A/P',
				option: 'A/P Batteries'
			},
			{
				name: 'Tri-Railgun',
				arc: 'A/P',
				option: 'A/P Batteries',
				optionCost: 5,
			},
			{
				name: 'Yastreb Missile Battery',
				arc: 'A/P',
				option: 'A/P Batteries',
				optionCost: 7,
			},
			{
				name: 'Heavy Gun Battery',
				arc: 'A/S',
				option: 'A/S Batteries'
			},
			{
				name: 'Tri-Railgun',
				arc: 'A/S',
				option: 'A/S Batteries',
				optionCost: 5,
			},
			{
				name: 'Yastreb Missile Battery',
				arc: 'A/S',
				option: 'A/S Batteries',
				optionCost: 7,
			},
			{
				name: 'Heavy Broadside',
				arc: 'P&S'
			},
			{
				name: 'Heavy Broadside',
				arc: 'F&A'
			},
			{
				name: 'Heavy Torpedo Salvo',
				arc: 'F'
			},
			{
				name: 'Zhalo Rocket Battery',
				arc: 'F/P',
				option: 'F/P One',
			},			
			{
				name: 'Seismic Mortar',
				arc: 'F/P',
				option: 'F/P One',
			},
			{
				name: 'Gun Battery',
				arc: 'F/P',
				option: 'F/P One',
			},
			{
				name: 'Railgun',
				arc: 'F/P',
				option: 'F/P One',
				optionCost: 3,
			},
			{
				name: 'Zhalo Rocket Battery',
				arc: 'F/P',
				option: 'F/P Two',
			},			
			{
				name: 'Seismic Mortar',
				arc: 'F/P',
				option: 'F/P Two',
			},
			{
				name: 'Gun Battery',
				arc: 'F/P',
				option: 'F/P Two',
			},
			{
				name: 'Railgun',
				arc: 'F/P',
				option: 'F/P Two',
				optionCost: 3,
			},
			{
				name: 'Zhalo Rocket Battery',
				arc: 'F/S',
				option: 'F/S One',
			},			
			{
				name: 'Seismic Mortar',
				arc: 'F/S',
				option: 'F/S One',
			},
			{
				name: 'Gun Battery',
				arc: 'F/S',
				option: 'F/S One',
			},
			{
				name: 'Railgun',
				arc: 'F/S',
				option: 'F/S One',
				optionCost: 3,
			},
			{
				name: 'Zhalo Rocket Battery',
				arc: 'F/S',
				option: 'F/S Two',
			},			
			{
				name: 'Seismic Mortar',
				arc: 'F/S',
				option: 'F/S Two',
			},
			{
				name: 'Gun Battery',
				arc: 'F/S',
				option: 'F/S Two',
			},
			{
				name: 'Railgun',
				arc: 'F/S',
				option: 'F/S Two',
				optionCost: 3,
			},
		],
	},
	khatanga: {
		name: 'Khatanga Cryo Assault Cruiser',
		type: 'Cryo Assault Cruiser',
		points: '130',
		traits: 'Commonwealth, Cryo Assault Cruiser, Surface Unit, Khatanga-Class, Russian',
		mass: '2/2',
		speed: '8/5',
		turnLimit: '5/4',
		armour: '6/6',
		citadel: '13/10',
		adv: '5/3',
		sdv: '3/2',
		fray: '10/9',
		hull: '5/4',
		rules: [
			'Ablative Armour',
            'Cryo Generator',
            'Hammer Sweep',
		],
		weapons: [
			{
				name: 'Cryogenic Blast',
				arc: '360'
			}, 
			{
				name: 'Broadside',
				arc: 'P&S',
			},
			{
				name: 'Semyenov Assault Bore',
				arc: 'F',
			},
			{
				name: 'Zhalo Rocket Battery',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
			},
			{
				name: 'Seismic Mortar',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
			},
			{
				name: 'Gun Battery',
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
				arc: 'A/P/S',
				option: 'A/P/S Batteries'
			},
			{
				name: 'Tri-Railgun',
				arc: 'A/P/S',
				option: 'A/P/S Batteries',
				optionCost: 5,
			},
			{
				name: 'Yastreb Missile Battery',
				arc: 'A/P/S',
				option: 'A/P/S Batteries',
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
					'Repulsion Field Generator',
					'Shield Generator',
					'Shroud Generator',
				],
				option: 'A/P/S Batteries',
				optionCost: -5,
			},
		],
	},
	kutsov: {
		name: 'Kutsov Cruiser',
		type: 'Cruiser',
		points: '90',
		traits: 'Commonwealth, Cruiser, Surface Unit, Kutsov-Class, Russian',
		mass: '2/2',
		speed: '8/6',
		turnLimit: '5/4',
		armour: '6/6',
		citadel: '13/10',
		adv: '4/3',
		sdv: '3/2',
		fray: '8/7',
		hull: '4/4',
		rules: [
			'Ablative Armour',
            'Hammer Sweep',
			'Quantity is a Quality',
		],
		weapons: [

			{
				name: 'Broadside',
				arc: 'P&S',
			},
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
				arc: 'A/P/S',
				option: 'A/P/S Batteries'
			},
			{
				name: 'Tri-Railgun',
				arc: 'A/P/S',
				option: 'A/P/S Batteries',
				optionCost: 5,
			},
			{
				name: 'Yastreb Missile Battery',
				arc: 'A/P/S',
				option: 'A/P/S Batteries',
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
					'Repulsion Field Generator',
					'Shield Generator',
					'Shroud Generator',
				],
				option: 'A/P/S Batteries',
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
	},
	morozko: {
		name: 'Morozko Heavy Cryo Cruiser',
		type: 'Heavy Cryo Cruiser',
		points: '131',
		traits: 'Commonwealth, Heavy Cryo Cruiser, Surface Unit, Morozko-Class, Russian',
		mass: '2/2',
		speed: '7/5',
		turnLimit: '5/4',
		armour: '6/6',
		citadel: '13/10',
		adv: '5/3',
		sdv: '4/3',
		fray: '9/8',
		hull: '5/4',
		rules: [
			'Ablative Armour',
            'Cryo Generator',
			'Cryo-Capacitors',
            'Hammer Sweep',
			'Quantity is a Quality',
		],
		weapons: [
			{
				name: 'Cryogenic Blast',
				arc: '360'
			}, 
			{
				name: 'Heavy Broadside',
				arc: 'P&S',
			},
			{
				name: 'Zhalo Rocket Battery',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
			},
			{
				name: 'Seismic Mortar',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
			},
			{
				name: 'Gun Battery',
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
				arc: 'A/P/S',
				option: 'A/P/S Batteries'
			},
			{
				name: 'Tri-Railgun',
				arc: 'A/P/S',
				option: 'A/P/S Batteries',
				optionCost: 5,
			},
			{
				name: 'Yastreb Missile Battery',
				arc: 'A/P/S',
				option: 'A/P/S Batteries',
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
					'Repulsion Field Generator',
					'Shield Generator',
					'Shroud Generator',
				],
				option: 'A/P/S Batteries',
				optionCost: -5,
			},
		],
	},
	norilsk: {
		name: 'Norilsk Heavy Cruiser',
		type: 'Heavy Cruiser',
		points: '121',
		traits: 'Commonwealth, Heavy Cruiser, Surface Unit, Norilsk-Class, Russian',
		mass: '2/2',
		speed: '7/5',
		turnLimit: '5/4',
		armour: '6/6',
		citadel: '13/10',
		adv: '5/3',
		sdv: '4/2',
		fray: '9/8',
		hull: '5/4',
		rules: [
			'Ablative Armour',
			'Focused Fire (Gunnery)',
            'Hammer Sweep',
			'Quantity is a Quality',
		],
		weapons: [
			{
				name: 'Heavy Broadside',
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
				arc: 'A/P/S',
				option: 'A/P/S Batteries'
			},
			{
				name: 'Tri-Railgun',
				arc: 'A/P/S',
				option: 'A/P/S Batteries',
				optionCost: 5,
			},
			{
				name: 'Yastreb Missile Battery',
				arc: 'A/P/S',
				option: 'A/P/S Batteries',
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
					'Repulsion Field Generator',
					'Shield Generator',
					'Shroud Generator',
				],
				option: 'A/P/S Batteries',
				optionCost: -5,
			},
		],
	},
	oleg: {
		name: 'Oleg Monitor',
		type: 'Monitor',
		points: '65',
		traits: 'Commonwealth, Monitor, Surface Unit, Oleg-Class, Russian',
		mass: '2/2',
		speed: '7/5',
		turnLimit: '4/3',
		armour: '6/6',
		citadel: '12/10',
		adv: '5/3',
		sdv: '4/2',
		fray: '9/8',
		hull: '4/4',
		rules: [
			'Ablative Armour',
            'Hammer Sweep',
			'Maritime Patrol',
			'Quantity is a Quality',
			'Shallow Draught',
		],
		weapons: [
			{
				name: 'Broadside',
				arc: 'P&S',
			},
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
				option: 'F/P/S Batteries',
				optionCost: -5,
			},
		],
	},
	pravda: {
		name: 'Pravda Support Carrier',
		type: 'Support Carrier',
		points: '125',
		traits: 'Commonwealth, Support Carrier, Surface Unit, Pravda-Class, Russian',
		mass: '2/2',
		speed: '7/5',
		turnLimit: '5/4',
		armour: '6/5',
		citadel: '12/9',
		adv: '5/3',
		sdv: '3/2',
		fray: '8/7',
		hull: '3/5',
		rules: [
			'Ablative Armour',
			{
				name: 'SRS Capacity',
				value: '4/2',
			},
			'Combat Air Patrol',
			'SRS Mine Clearance',
			'SRS Recon',
		],
		weapons: [
			{
				name: 'Light Broadside',
				arc: 'P&S',
			},
			{
				name: 'Zhalo Rocket Battery',
				arc: '360',
				option: '360 Weapon',
			},
			{
				name: 'Seismic Mortar',
				arc: '360',
				option: '360 Weapon',
				optionCost: 5,
			},
			{
				name: 'Gun Battery',
				arc: '360',
				option: '360 Weapon',

			},
			{
				name: 'Railgun',
				arc: '360',
				option: '360 Weapon',
				optionCost: 5,
			},
		],
	},
	rurik: {
		name: 'Rurik Frigate',
		type: 'Frigate',
		points: '31',
		traits: 'Commonwealth, Frigate, Surface Unit, Rurik-Class, Russian',
		mass: '1',
		speed: '10',
		turnLimit: '6',
		armour: '5',
		citadel: '12',
		adv: '2',
		sdv: '2',
		fray: '5',
		hull: '3',
		rules: [
			'Ablative Armour',
			{
				name: 'Attached Unit',
				value: 'Russian, Flagship',
			},
			'Shallow Draught',
			'Quantity is a Quality',
		],
		weapons: [
			{
				name: 'Light Broadside',
				arc: 'P&S',
			},
			{
				name: 'Seismic Mortar',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
			},
			{
				name: 'Gun Battery',
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
		],
	},
	stoletov: {
		name: 'Stoletov Ekranoplan Harrier',
		type: 'Ekranoplan Harrier',
		points: '50',
		traits: 'Commonwealth, Ekranoplan Harrier, Skimming Unit, Rurik-Class, Russian',
		mass: '1',
		speed: '8',
		turnLimit: '2',
		armour: '5',
		citadel: '12',
		adv: '3',
		sdv: '5',
		fray: '6',
		hull: '4',
		rules: [
			'Auxiliary Mine Layer',
			'Bombardment (Aerial)',
			{
				name: 'Overthruster',
				value: '8',
			},
			'Spotter',
		],
		weapons: [
			{
				name: 'Zhalo Rocket Battery',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
			},
			{
				name: 'Seismic Mortar',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
			},
			{
				name: 'Gun Battery',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
			},
			{
				name: 'Railgun',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
				optionCost: 2,
			},
			{
				name: 'Torpedo Salvo',
				arc: 'F'
			},
			{
				name: 'Katyusha Salvo',
				arc: 'F'
			},
		],
	},
	yak: {
		name: 'Yak Transport Hovercraft',
		type: 'Transport Hovercraft',
		points: '44',
		traits: 'Commonwealth, Transport Hovercraft, Skimming Unit, Yak-Class, Russian',
		mass: '1',
		speed: '8',
		turnLimit: '6',
		armour: '5',
		citadel: '13',
		adv: '2',
		sdv: '2',
		fray: '10',
		hull: '4',
		rules: [
			'Ablative Armour',
			'Agile',
			'Azhdaya Berserkers',
			'Landing Vessel',
			'Powerslide',
		],
		weapons: [
			{
				name: 'Zhalo Rocket Battery',
				arc: 'F/P',
				option: 'F/P Weapon',
			},
			{
				name: 'Seismic Mortar',
				arc: 'F/P',
				option: 'F/P Weapon',
				optionCost: 3,
			},
			{
				name: 'Gun Battery',
				arc: 'F/P',
				option: 'F/P Weapon',
			},
			{
				name: 'Railgun',
				arc: 'F/P',
				option: 'F/P Weapon',
				optionCost: 5,
			},
			{
				name: 'Zhalo Rocket Battery',
				arc: 'F/S',
				option: 'F/S Weapon',
			},
			{
				name: 'Seismic Mortar',
				arc: 'F/S',
				option: 'F/S Weapon',
				optionCost: 3,
			},
			{
				name: 'Gun Battery',
				arc: 'F/S',
				option: 'F/S Weapon',
			},
			{
				name: 'Railgun',
				arc: 'F/S',
				option: 'F/S Weapon',
				optionCost: 5,
			},
		],
	},
	kostroma: {
		name: 'Kostroma Vitruvian Colossus',
		type: 'Vitruvian Colossus',
		points: 149,
		traits: 'Commonwealth, Russian, Surface Unit, Vitruvian Colossus, Kostroma-class',
		mass: '3/3',
		speed: '3/1',
		turnLimit: '3/1',
		armour: '7/7',
		citadel: '14/12',
		adv: '2/1',
		sdv: '2/1',
		fray: '7/6',
		hull: '5/4',
		rules: [
			'Ablative Armour',
			'Amphibious',
			'Colossus',
			'Cryo Generator',
			'Giant Slayer',
			'Razrez',
			'Sharpshooter',
			'Submarauder (simple)',
		],
		weapons: [
			{
				name: 'Cryogenic Blast',
				arc: '360'
			}, 
			{
				name: 'Mag-Rail Axe (Shooting)',
				arc: 'F/P/S'
			},
			{
				name: 'Mag-Rail Axe (Ram)',
				arc: 'F/P/S'
			},
			{
				name: 'Claw Arc Projector',
				arc: 'F/P/S'
			},
			{
				name: 'Furnace Cascade',
				arc: 'F'
			},
			{
				name: 'Railgun',
				arc: 'F/P/A',
				option: 'F/P/A Weapon'
			},
			{
				name: 'Gun Battery',
				arc: 'F/P/A',
				option: 'F/P/A Weapon'
			},
			{
				name: 'Seismic Mortar',
				arc: 'F/P/A',
				option: 'F/P/A Weapon'
			},
			{
				name: 'Zhalo Rocket Battery',
				arc: 'F/P/A',
				option: 'F/P/A Weapon'
			},
			{
				name: 'Railgun',
				arc: 'F/S/A',
				option: 'F/S/A Weapon',

			},
			{
				name: 'Gun Battery',
				arc: 'F/S/A',
				option: 'F/S/A Weapon',
			},
			{
				name: 'Seismic Mortar',
				arc: 'F/S/A',
				option: 'F/S/A Weapon',
			},
			{
				name: 'Zhalo Rocket Battery',
				arc: 'F/S/A',
				option: 'F/S/A Weapon',
			},
		],
		generators: [
			{
				name: 'Magnetic Generator'
			},
		],
	},
	marena: {
		name: 'Marena Vitruvian Colossus',
		type: 'Vitruvian Colossus',
		points: 136,
		traits: 'Commonwealth, Russian, Surface Unit, Vitruvian Colossus, Marena-class',
		mass: '3/3',
		speed: '3/1',
		turnLimit: '3/1',
		armour: '7/7',
		citadel: '14/12',
		adv: '2/1',
		sdv: '2/1',
		fray: '7/6',
		hull: '5/4',
		rules: [
			'Ablative Armour',
			'Aggressive Crew',
			'Amphibious',
			'Colossus',
			'Cryo Generator',
			'Davka',
			'Inspirational',
			'Submarauder (simple)',
		],
		weapons: [
			{
				name: 'Semyenov Assault Bore',
				arc: 'F/P/S'
			},
			{
				name: 'Gun Battery',
				arc: 'F/P/A',
				option: 'F/P/A Weapon'
			},
			{
				name: 'Railgun',
				arc: 'F/P/A',
				option: 'F/P/A Weapon',
				optionCost: 5,
			},
			{
				name: 'Seismic Mortar',
				arc: 'F/P/A',
				option: 'F/P/A Weapon'
			},
			{
				name: 'Zhalo Rocket Battery',
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
				name: 'Railgun',
				arc: 'F/S/A',
				option: 'F/S/A Weapon',
				optionCost: 5,
			},
			{
				name: 'Seismic Mortar',
				arc: 'F/S/A',
				option: 'F/S/A Weapon',
			},
			{
				name: 'Zhalo Rocket Battery',
				arc: 'F/S/A',
				option: 'F/S/A Weapon',
				optionCost: 5,
			},
		],
		generators: [
			{
				name: 'Magnetic Generator'
			},
		],
	},
	saransk: {
		name: 'Saransk Skyfurnace',
		type: 'Skyfurnace',
		points: '120',
		traits: 'Commonwealth, Skyfurnace, Aerial Unit, Saransk-Class, Russian',
		mass: '2/2',
		speed: '7/5',
		turnLimit: '4/3',
		armour: '6/5',
		citadel: '11/10',
		adv: '3/2',
		sdv: '3/2',
		fray: '8/7',
		hull: '4/3',
		rules: [
			'Ablative Armour',
			'Azhdaya Berserkers',
			{
				name: 'Flak Barrage',
				value: '7',
			},
			'Linear Dash',
			'Low-Level Strike',
			'Vulnerable Stern',
		],
		weapons: [
			{
				name: 'Katyusha Salvo',
				arc: 'F'
			},
			{
				name: 'Katyusha Salvo',
				arc: 'F'
			},
			{
				name: 'Flak Broadside',
				arc: 'P&S'
			},
			{
				name: 'Furnace Cascade',
				arc: 'A',
			},
		],
	},
};
