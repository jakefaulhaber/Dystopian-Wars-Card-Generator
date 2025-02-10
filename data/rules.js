window.weapon_rules = {
	Arc: 'Ignore Shield Generators. On Critical add a Disorder',
	Devastating: 'Exploding Hits = 3 damage',
	Gunnery: 'Target mass 1 treated as Obscured.',
	Sustained: 'Re-roll any one result type before Exploding.',
	Hazardous: 'Any damage = +1 Disorder',
	Indirect: 'Does not require Line of Sight, may target any non-Aerial withing range and arc as an Initial Target. Target counts as Obscured for this attack.',
	Rail: 'Citadel is -1 against this attack. Each weapon adds 1 dice vs Skimming/Aerial (max 3). Each weapon loses a dice against Submerged (max 3)',
	Voltaic:
		'On Critical add a Disorder. +1 dice vs active Generators',
	Broadside: 'Can be fired in each direction.',
	Fusillade:
		'Re-roll Counter and Heavy Counter results. No effect on Aerial/Submerged without matching Quality.',
	Aerial: 'Cannot Shoot Submerged Units. Target may use Aerial Defences.',
	'High Velocity': 'Heavy Counter results add a single Counter rather than two.',
	Homing: 'Models cannot be considered Obscured from Actions with the Homing Quality. Furthermore, Actions made with this Quality may re-roll Blanks and ignore Shroud Generators.',
	Piercing:
		'Target suffers Critical Damage roll if it receives one or more Points of Damage. This is in addition to any Critical Damage rolls caused by the Action. Mass 1 Targets lower their Citadel by -3 for the Action.',
	Submerged:
		'Cannot usually be used against Aerial Units or Ground Units. Target may use Submerged Defences against Actions made from this Quality. Ignore Shield Generators.',
	Torpedo:
		'Can only be used against Targets that are 5" or more away. Target does not gain benefit from being Obscured against Torpedoes.',
	'Extreme Range':
		'Long Range Band 20" - 40". Not required to match when Supporting a Lead weapon.',
	Blast: 'Use the Blast Template. The centre point of the template must be placed over any part of the Initial Target. Hits are applied to all Models under the template.',
	Ramming: 'Adds dice when ramming.',
	'Valour Effect: Devastating': 'Discard a card: attack gains Devastating',
	Torrent: 'Use the big flamer template',
	'Small Torrent': 'use the small flamer template',
	'No Damage to Aerial': 'never causes damage to Aerial Units',
	'Sustained (Aerial Units)': 'If targeting Aerial Units, re-roll any one result type before Exploding.',
	'Limited': 'Each time after a model uses weapon, roll a die: on blank, this weapon can not be used again',
};
 
window.general_rules = {
	'Ablative Armour': {
		type: 'Defense',
		description:
			'Exploding Hit results equal to Mass do not explode. Attacks with Piercing, Rail, Ramming or Submerged Qualities ignores this rule.',
	},
	'Advanced Repair Facilities': {
		type: 'Misc',
		description:
		'Battle-Ready Models in this unit may add number of Dice to their Repair Tests equal to the value of this ability. May also make Repair Tests for Disorder Levels and/or Damage Markers on friendly Models within 4". One or more Exploding Hits may be used to remove a single point of damage from itself or a Friendly Model within 4". A Model cannot remove more than a single point of damage per Repair Test.'
	},
	'Advanced Sturmcoils': {
		type: 'Shooting',
		description: 'Sturmklaue and Heavy Sturmklaue gain Sustained',
	},
	'Agile': {
		type: 'Movement',
		description:
			'Unless suffering from a Navigation Lock Critical Damage Marker, Models in this Unit with this rule may make turns during Drift movement in the same way as it usually would during normal Movement',
	},
	'Anti-Air Specialist': {
		type: 'Shooting',
		description:
			'Can choose not to count Aerial Units as being a Range Band further away. Attacks with the Aerial Quality against Aerial Units gain Homing.',
	},
	'Auto-Firing Solutions': {
		type: 'Shooting',
		description:
			'Attacks by Volt Gun Batteries and Heavy Volt Gun Batteries on this Model may re-roll blank results',
	},
	'Auxiliary Mine Layer': {
		type: 'Misc',
		description:
		'Before Submerged Unit Deployment, place a single Minefield Marker anywhere in Play that is at least 10" from any Deployment Zone.'
	},
	'Attached Unit': {
		type: 'List',
		description:
			'When Building a Force, this Unit may become a Joining Unit. Select a Partner Unit that has the Traits indicated. The Partner Unit cannot have any other Attached Units.',
	},
	'Azhdaya Berserkers': {
		type: 'Assault',
		description: 'Assaults have Hazardous and Devastating qualities'
	},
	'Blitzen SRS Capacity': {
		type: 'SRS',
		description:
			'Blitzen SRS Tokens contribute 5 Dice to Attack Runs. Can be combined with other SRS Tokens. A Blitzen Bomber is removed for every two successes in Interception. Can only be Intercepted after normal SRS Tokens have all been Intercepted. If majority of stack is Blitzen, gain Sustained, Bomb and Voltaic. If more Blitzen than Mass of Target, gain Devastating. No SRS Recon or SRS Mine Clearance. No Attack Runs on Aerial Units',
	},
	'Bombardment (Aerial)':{
		type: 'Shooting',
		description:
		'May re-roll blanks when shooting at Ground or Surface Units with weapons that have Aerial Quality'
	},
	'Callimachus Chrono-Lathe': {
		type: 'Misc',
		description:
		'This is a generator. During Special Operations Step of this unit, may remove a point of damage from each Battle-Ready model in a single unit within 15". May remove additional damage of that same unit, at the cost of one card per point. May bring a unit out of Reserves, as a Valour Effect, deploy within 3" of this model.'
	},
	'Chowkidar Crew': {
		type: 'Defense/Ramming',
		description:
			'Ignore the effects of Emergency Disorder. No Disorder when Ramming. +2 Repair dice.',
	},
	'Cloud Dive': {
		type: 'Deployment',
		description: `May be deployed at start of Encounter in a Cloud Dive. Deploy at same time as Vanguard moves, may be deployed anywhere at least 20" from enemy deployment zone. Unit is Obscured until end of first round`

	},
	'Combat Air Patrol': {
		type: 'SRS',
		description:
			'Launch SRS Tokens in the First Round (to a max of Crippled Capacity) with infinite range.',
	},
	'Command Codes': {
		type: 'Misc',
		description:
			`Once per Round reroll all your dice from a friendly pool generated within 15". Do this before any other dice manipulation.`,
	},
	'Corvette Duty': {
		type: 'Defense',
		description: 'This Model may add +1 Defense Dice on any friendly Models within 5". This bonus is in addition to Attached.'
	},
	'Crimson Privateers': {
		type: 'Assault',
		description: 'Loses Jannissary Assault Deck. Ignores Counter Assault results when making Assault. Assaults led by this model gains Hazardous',
	},
	'Cryo Generator': {
		type: 'Shooting/Misc',
		description:
		'Can fire Cryogenic Blast. Or, roll 1 action dice:explode:2" Mass2 25" away, Hits:1" M1 20", Counters:1" M1 15".'
	},
	'Cryo-Capacitors': {
		type: 'Shooting',
		description: 'This Unit adds 1 Action Dice and Sustained to its Cyrogenic Blasts'
	},
	'Deep Dive': {
		type: 'Movement',
		description: `In the Special Operations phase of the round, while Battle Ready and in Open Water this Unit may declare it is going to Deep Dive. For the remainder of that Round, the Unit doubles its Drift Movement but cannot make any other Movement. The Unit also cannot launch SRS or make any Action that does not have the Submerged Quality. Furthermore, while it carries out a Deep Dive Special Operation, this Unit cannot be the Initial Target of any Action that does not have the Submerged Quality. A Unit cannot be part of an Attached Unit if it carries out a Deep Dive Special Operation, unless both Units have this rule. A Unit cannot carry out a Deep Dive Special Operation if it has already done so the previous Round.`
	},
	'Deceptive Deployment': {
		type: 'Deployment',
		description:
			'After both sides are deployed, you may redeploy this Unit up to 5". If has Shroud Generator, gain Vanguard.',
	},
	'Devil\'s Own Luck': {
		type: 'Valour',
		description: `Once per Round, you may Cancel a Valour Effect. Discard a Victory & Valour card from your hand of any value.`
	},
	Disciplined: {
		type: 'Defense',
		description:
			'Uneffected by Emergency Disorder Condition, No Disorder from Ramming',
	},
	'Elite Crew': {
		type: 'Assault',
		description: 'Re-roll blanks during Assaults',
	},
	'Flak Barrage': {
		type: 'SRS',
		description:
			'At the start of the End Phase, before SRS Resolution, Roll a number of Action Dice indicated by the rule. Remove one SRS Token that is in contact with this Unit or Friendly Units within 15" for each Exploding Hit.',
	},
	'Focused Fire (Gunnery)': {
		type: 'Shooting',
		description:
			'One attack with Gunnery per Activation gets +2 dice and may re-roll Blanks.',
	},
	'Focused Gunnery': {
		type: 'Shooting',
		description:
			'One attack with Gunnery per Activation gets +2 dice and may re-roll Blanks.',
	},
	'Fortunes of War': {
		type: 'Defense',
		description:
			'You may Cancel Valour Effects in an Encounter where this Unit has at least one Battle Ready Model in the Play Area.',
	},
	'Full Steam Ahead': {
		type: 'Movement',
		description:
			'May double Drift. If it does so, can\'t turn.',
	},
	'Fury of Nimue': {
		type: 'Ramming',
		description:
			'Can Ram Surface Units. +1 Victory Point for each Surface Unit destroyed by Assault or Ramming. Re-roll Blanks in Attacks and Assault against Mass 3+.',
	},
	'Giant Slayer': {
		type: 'Shooting',
		description:
		'Each Model in ths unit may re-roll Blank Results in Attacks against an Initial Target with a Mass of 3 or more',
	},
	'Gun Runner': {
		type: 'Movement/Shooting',
		description: 'Battle-ready models gain +2 speed if it makes no turns. If model moves at least 7", a single attack per activation with Gunnery or Broadside gains +1 dice per contributing battle-ready model',
	}, 
	'Hammer Sweep': {
		type: 'Movement/Ramming',
		description:
			'Increase Speed by 1" and gain +2 dice when Ramming if moving straight',
	},
	'Heavy Escort': {
		type: 'Defense',
		description:
			'+2 to the Defence Action Dice Pool on all friendly Models within 5". This bonus is in addition to any other bonuses such as being part of an Attached Unit (+1 ADV/SDV).',
	},
	'Heavy Firepower': {
		type: 'Shooting',
		description:
			"Once per Activation, before declaring target, Each Model in this Unit with this rule may make the following Valour Effect. When making an Attack, up to three of that Model's weapons may contribute their Lead value to the Action Dice Pool, rather than the normal single Lead weapon value. Other Models may support this Attack but cannot benefit from this rule.",
	},
	'Heavy Firepower (simple)': {
		type: 'Shooting',
		description:'Valour Effect: Up to three weapons use their Lead Value'
	},
	'Heavy Bombardment': {
		type: 'Shooting',
		description:
			'Once per Activation, before declaring an Initial Target, perform Valour Effect: On Attack, Models in the Unit may support with the Lead value of a Bombard to the Action Dice Pool.',
	},
	'Heavy Lander': {
		type: 'Misc',
		description: 'While Battle-ready and making a Landing Action, deploy double Mass number of Ground Attack Tokens'
	},
	'Huginn and Muninn': {
		type: 'Shooting',
		description:
			'The Citadel of Targets that are in LoS of a Valkyrie receives a -2 against Attacks from this Model.',
	},
	'Hydrophone Relay': {
		type: 'Phone',
		description: 'attacks against enemy models within 10" of this model ignore the Obscured rule',
	},
	Inspirational: {
		type: 'Shooting/Assault',
		description:
			'Friendly within 10" (not self) may reduce a single Disorder Level at the start of their Activation and may re-roll a single Action dice each step of their Activation.',
	},
	Inductorium: {
		type: 'Shooting/Assault',
		description:
			'Upon Ranged Attack or Assault with Voltaic/Arc, after all dice are rolled/exploded: If Exploding Hits >= # of target models, roll additional dice = # of target models.',
	},
	'Ivaldi Shroud Generator': {
		type: 'Defense/Movement',
		description: `Obscured to Shooting Attacks. As a Special Operations Action, this Model may be removed from Play and replaced at a new point completely within 5" of its original position with the same facing.`

	},
	'Janissary Assault Deck': {
		type: 'Assault',
		description: 'Ignores Counter Assault results when making Assault. Assaults led by this model gains Devastating',
	},
	'Kinetic Dampers': {
		type: 'Movement/Defense',
		description: 'May make a Full Reverse! SpecOp Action without receiving Disorder. Any additional levels of Disorder once at Chaos & Disarray are ignored.'
	},
	'Landing Vessel': {
		type: 'Misc',
		description:
			'Models in this Unit may make a Special Operations Action known as Landing. See rulebook.',
	},
	'Large Target': {
		type: 'Weakness',
		description:
			'Can be declared to be in more than one Fire Arc when shot.',
	},
	'Linear Dash': {
		type: 'Movement',
		description:
		'Models gain +2 speed during Movement Step provided it makes no turns',
	},
	'Logistical Support': {
		type: 'Misc',
		description:
		'+1 to Victory and Valour Cards in hand. If ship lost, bonus lost at end of Round. Does not stack.'
	},
	'Low-Level Strike': {
		type: 'Movement',
		description: 'In SpecOps phase, Battle Ready unit may use this ability. Unit doubles its Drift, stops being Aerial and becomes Skimming. Unit has +1 Armour. Cannot use if did so in pervious Round. Can begin game in Low-Level Strike',
	},
	'Luftlancer Assault': {
		type: 'Assault',
		description:
			'Assaults within 6". Assault gains the Voltaic. This rule does not apply to Supporting Assaults.',
	},
	'Lumbering': {
		type: 'Movement/Weakness',
		description:
		'Cannot Drift greater than 3", no Disorder from Collisions. All Gunnery targeting this Unit may re-roll Blank results. Full Reverse SpecOp does not add Disorder. Any additional levels of Disorder once at Chaos & Disarray are ignored.',
	},
	'Luminiferous Defences': {
		type: 'Defense',
		description: 
		'An attack on a model with this rule that is not Obscured, count Heavy Hits as Hits. This rule allows Defense Roll against Gunnery and Broadside types, using Crippled ADV as the quantity (max 6). Crippled Models or Shredded Defense models cannot use Luminiferous Defenses'
	}, 
	'Maritime Patrol': {
		type: 'Shooting',
		description:
			'Ignore the Submerged Unit Position Trait when making Attacks on any Initial Targets within 10", or against Initial Targets with at least one friendly SRS Token in base contact.',
	},
	'Mine Layer': {
		type: 'Misc',
		description:
			'Before Submerged Unit Deployment, for each Model in a Unit with this rule, the controlling Player may place a Minefield Marker anywhere at least 10" from any Deployment Zone.',
	},
	'Mine Sweeper': {
		type: 'Misc',
		description:
			'In the Special Operations step of its Operations Phase, a Unit with this rule may remove a Minefield Marker within 5" of a Model in this Unit.',
	},
	'Optional SRS': {
		type: 'Misc',
		description:
			'Sultanate Sky Cruisers may add 1/0 SRS Capacity for 10 points. Sultante Flagship Fliers may add 4/0 SRS Capacity for 30 points'
	},
	'Orichalcite Construction': {
		type: 'Defense',
		description:
			'Battle-Ready models do not suffer Catastrophic Explosion from Attacks exceeding double Citadel'
	},
	'Overthruster': {
		type: 'Movement/Defense',
		description:
		'May increase Speed by number of inches in Rule. May not make any turns. If moved at least 10" (incl Drift) the Model is Obscured. Cannot use if Model is Crippled of Navigation Locked.'
	},
	'Pack Hunter': {
		type: 'Shooting/Assault',
		description:
			'A single Attack or Assault by this Unit each Activation receive +1 action dice for each Model in the Unit. All models must contribute.',
	},
	'Phosphor Shells': {
		type: 'Shooting',
		description:
			'Gustav Twin Bombards or Bertha Heavy Bombard has the Hazardous Quality.',
	},
	'Powerslide': {
		type: 'Movement',
		description:
			'may make Drift Movement in a direction up to 90 degrees to Port or Starboard. Maintain heading.',
	},
	'Pycrete Construction': {
		type: 'Misc/Weakness',
		description:
			'Drift = 1". No Disorder from Collisions. Gunnery targeting this Unit may re-roll Blanks. 4+ Disorder are ignored rather than causing damage. Can extend outside Deployment Zone if touching back edge.',
	},
	'Quantity is a Quality': {
		type: 'Misc',
		description:
		'After this unit is destoryed, roll number of Action Dice equal to Round. Each Exploding hit is one Kutsov or three Ruriks, pleace in Reserve. One guaranteed success if destroyed unit was within 7" of a Flagship'
	},
	'Shallow Draught': {
		type: 'Movement',
		description: 'This Unit treats Treacherous Water as Open Water'
	},
	'Shockwave Generator': {
		type: 'Shooting',
		description: 'Shoot using template, place over Initial Target in Line of Sight within 15" of a Model in this unit. If 3+ generators, use larger Torrent.'
	},
	'Silent Stalker': {
		type: 'Deployment/Shooting',
		description: `Deploy at the start of an Encounter as a Silent Stalker. Units that do so are deployed at the same time as Vanguard moves and may be deployed anywhere at least 20" from the enemy deployment zone. Deploying with Silent Stalker gives Torpedo attacks Homing this round.`
	},
	'Sonic Amplifier': {
        type: 'Shooting',
		description: 'Shockwave Pulses gain +3 to their Dice Pool, the Devastating Quality. Use large Torrent.'
	},
	Spotter: {
		type: 'Shooting',
		description:
			'If there is one or more SRS Tokens friendly to this Unit in base contact with the Initial Target: Re-roll blank results with any weapons with Extreme Range or ignore Obscured',
	},
	'SRS Capacity': { type: 'SRS', description: '' },
	'SRS Mine Clearance': {
		type: 'SRS',
		description:
			'During its Operations Step, while placing SRS Tokens, may place tokens touching Minefield Markers within 20". At the end of the Special Operations Step discard an SRS Token and roll an Action Die. On an Exploding Hit, the Minefield is discarded. Repeat as desired. If Minefield discarded, remaining SRS Tokens in stack may be placed on another Minefield Marker within 5" and continue clearing. If no remaining Minefield within 5", SRS Tokens remain in place.',
	},
	'SRS Recon': {
		type: 'SRS',
		description:
			'During Operations Step, spend SRS tokens to draw and discard V&V.',
	},
	'Storm Generator': {
		type: 'Generator',
		description:
			'In the Shooting Phase, make a Shooting Attack using the Lightning Strike weapon profile. 360-degree LoS, Range 20". Ignores Shield/Shroud Generators. Incoming fire re-rolls Heavy Hits. +2 Assault when Battle-Ready.',
	},
	'Strategic Withdrawal': {
		type: 'Misc',
		description:
			`At the start of the Maintenance Step of the End Phase, unless one or more Models in the Unit has Navigation Lock Critical Damage, this Unit may be placed back into Reserves. If so, Crippled Models in the Unit are immediately destroyed.`,
	},
	'Supply Depot': {
		type: 'Misc',
		description:
		'Any Friendly Model within 7" may remove a single level of Disorder at start of their activation. Friendly Units within 7" regain weapons lost due to Limited Quality'
	},
	'Tracer Fire (Aerial)': {
		type: 'Shooting',
		description:
			'Models with weapons that have Aerial Quality may re-roll blanks'
	},
	'Unexpected Arrival': {
		type: 'Movement',
		description:
		'May be held in Reserves. Roll as normal in Round one. All other rounds, may immediately deploy from Reserves, before any friendly In Play Units. Place at any point at least 2" from nearest terrain feature. On Round it enters play, may only fire weapons or Ram using weapon\'s crippled profile.',
	},
	'Vali Midget Subs': {
		type: 'SRS',
		description:
			'Place Vali Midget Sub Tokens up to 20" from this Model like SRS. Like SRS, but with 5 Action Dice, Homing, Piercing and Submerged. Cannot be intercepted. Cannot attack Aerial.',
	},
	Vanguard: {
		type: 'Deployment',
		description:
			'Starting with Player B, after both sides are deployed, each player may choose one of their Units with Vanguard and Move up to 5". Alternate between Players',
	},
	'Veteran Voltmeister': {
		type: 'Assault',
		description:
			'If has Voltaic Decksweepers, when Assaulting, +1 dice. Assault gains the Voltaic Quality. No effect when Supporting.',
	},
	'Void Engine Magazine': {
		type: 'Weakness',
		description:
		'If unit is Crippled or has Generator Shutdown, its Cannon loses Extreme Range and gains Limited Quality'
	},
	'Voltaic Decksweepers': {
		type: 'Assault',
		description:
			'Add dice = to target Mass when Assaulting and not Crippled.',
	},
	'Vulnerable Stern': {
		type: 'Weakness',
		description:
			'Enemy gets Devastating when shooting from the rear. Inflict a Navigation Lock if damage is dealt. Attacks with the Blast, Bomb or Magnetic Qualities ignore this rule.',
	},
	'Wolves of the Sea': {
		type: 'Shooting/Assault/Ramming',
		description:
			"Always use Battle-Ready value of weapons. When making an Assault, gain dice equal to this Model's mass. If all Assaulting models have this rule, re-roll blank results and gain Devastating. No Damage or Disorder when ramming.",
	},
	'Blitzschlag': {
		type: 'Assault',
		description:
			'Once per Activation, discard a Valour card >= 40. Each Model that has caused at least one point of damage in a Ramming Action this Activation, may make a second Ramming Action within 3" of the first. No further movement if you do.',
	},
	'Colossus': {
		type: 'Movement/Ramming',
		description:
			'Turn on the spot to face any direction at the end of its Movement. May Ram Surface Units and Skimming Units. Ram with <3" movement. Does not suffer from Damage or Disorder while ramming.',
	},
	'Submarauder': {
		type: 'Movement',
		description: `May instead be held in Reserve as a Submarauder. On each Round, Submarauders are Activated before all other Units in the Force. 
		During the first Round, a 50mm Submarauder Marker is placed anywhere outside of either Player\'s deployment and at least 2” from Terrain. 
		From the second Round onwards when a Submarauder Activates, it is immediately deployed. When a Submarauder is deployed, it must be placed 
		within 10" of any Submarauder Marker or Wreck Marker in the Play Area. You must remove one of your Submarauder Markers each time this happens. 
		No Submarauder Model can be deployed touching another Model. When a Submarauder is deployed it uses the Crippled profile of their weapons for 
		that Round. Unless one or more Models in the Unit has Navigation Lock, at the end of round this Unit may be removed from Play and become a Submarauder 
		again. Leave a 50mm Submarauder Marker in the position of any one Model in this Unit.`
	},
	'Zornhau': {
		type: 'Shooting/Ramming',
		description: 'Re-roll Blank Results in Ranged Attacks and Ramming against Surface/Ground Units >= 2 mass.'
	},
	'Amphibious': {
		type: 'Movement',
		description: 'This Unit is a Surface Unit after deployment. The Unit can move across Land and Obstacle terrain at normal Speed without suffering damage or collision. It has a Drift of zero when on Land. While this Unit is on Land or Obstacle Terrain, that Terrain is ignored for LOS purposes to and from this Unit'
	},
	'Freya Array': {
		type: 'Defense',
		description: 'While Generator is active, Enemy Units cannot be deployed within 10" of this Model. Coherency 5".'
	},
	'Monster of Nassau': {
		type: 'Shooting',
		description: 'Bombards gain +5 to its Action Dice Pool and may re-roll Blank results. This Unit awards +1 Victory Point to your opponent if it destroyed by a Unit with the Union Trait.'
	},
	'Coastal Bombardment': {
		type: 'Shooting',
		description: 'Models in this Unit may re-roll blanks when shooting at Ground Units with weapons that have the Gunnery Quality'
	},
	'Forward Deployment':  {
		type: 'Deployment',
		description: 'Can\'t be held in reserve. They must be deployed anywhere outside of the Encounter\'s deployment zones and least 12" from the enemy deployment zone.'
	},
	'Focused Bombardment': {
		type: 'Shooting',
		description: 'A single Attack in this Model\'s Activation using a Bombard gain +5 to its Action Dice Pool. If the Attack is with the Big Bertha, it may also re-roll Blank results.'
	},
	'Haddingjar Projector': {
		type: 'Defense',
		description: 'Friendly Surface/Skimming Models >= 2 Mass, counts as being equipped with the same Generators as this Model while within 7" of this Model.'
	},
	'Tempermental Design': {
		type: 'Weakness',
		description: 'This Unit cannot make Jury-Rigged Repairs. When making Repair Rolls, two successes are required to remove each Critical Damage Marker. Repair Rolls using the Advanced Repair Facilities rule ignores this rule.'
	},
	'Terror From Below': {
		type: 'Ramming',
		description: `This Unit may Ram Surface Units even if it moved less than 3" in the Movement Phase. +3 when Ramming Surface Units.`
	},
	'Veteran Voltmeisters': {
		type: 'Assault',
		description: '+1 dice when Assaulting. Assault gains Voltaic. No effect when Supporting.'
	},
	'Unstoppable': {
		type: 'Ramming',
		description: `After Ramming, remove from the Play area before disengaging and Place on the other side of the Impacted Model, retaining its facing as though it had just passed through the Impacted Model and emerged on the other side.`
	}
};
