window.sultanate_ships = {
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
	}
}