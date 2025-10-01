window.qualities = {
	aerial: {
		name: 'AERIAL',
		value: 'Weapons with this Special Attack Quality are **Aerial Weapons**, and can only Contribute to an Attack action if all Contributing weapons are also Aerial Weapons[cite: 638, 639]. See Aerial Weapons on page 91 of the Dystopian Wars Rulebook[cite: 640].',
	},
	agitation: {
		name: 'AGITATION',
		value: "This weapon has a **variable Firepower rating**[cite: 641]. If listed as **MAS**, its Firepower is equal to the **Mass rating of the Initial Target**[cite: 641]. If listed as $2 \\times$ **MAS**, it is equal to **twice the Mass rating** of the Initial Target, and so on[cite: 642]. If this Quality has an **X value** listed, the weapon's Firepower cannot be **greater than X**[cite: 643]. For example, a weapon with the Agitation (4) quality contributing to an Attack action where the Initial Target has a Mass rating of 3 and the weapon's Short Range Firepower is listed as $2 \\times$ MAS would normally add 6 dice, but the Firepower is limited to 4 dice[cite: 644].",
	},
	alchemical: {
		name: 'ALCHEMICAL',
		value: 'After resolving this Attack action, the Initial Target immediately gains **1 level of Disorder**, regardless of whether it suffered any Damage[cite: 646]. A model cannot be affected by this Quality **more than once** during a single Action Step[cite: 647].',
	},
	all_around: {
		name: 'ALL AROUND',
		value: 'When Declaring Contributing Weapons for an Attack action, this weapon can Contribute **regardless of which Targeting Arc** the Initial Target is in[cite: 649].',
	},
	arc: {
		name: 'ARC (X)',
		value: 'Before making the Action Roll for an Attack action, the active Admiral rolls **X Critical Damage Dice** for each Contributing weapon with this Quality[cite: 651]. If any die shows a **System Failure**, the Initial Target immediately suffers a single System Failure Critical Damage Effect[cite: 652]. If the Initial Target already has a System Failure, this Quality has **no effect**[cite: 653].',
	},
	assault: {
		name: 'ASSAULT',
		value: 'Weapons with this Special Attack Quality are **Assault Weapons**, and can only Contribute to an Attack action if all Contributing weapons are also Assault Weapons[cite: 655]. See Assault Weapons on page 91 of the Dystopian Wars Rulebook[cite: 656].',
	},
	aquatic: {
		name: 'AQUATIC',
		value: 'An **Underwater unit** may make an Attack action if all Contributing weapons have this Quality, and the Initial Target is also an **Underwater model**[cite: 657].',
	},
	barrage: {
		name: 'BARRAGE',
		value: 'This weapon **cannot Contribute** to an Attack action if the Initial Target is an **Underwater model**[cite: 659]. If all weapons Contributing to an Attack action have this Quality and the target is an **Airborne model**, only **Standard Strikes** in the Resistance Roll are converted to Standard Counters by the Unconventional Target rule[cite: 660].',
	},
	blast: {
		name: 'BLAST (X)',
		value: 'After choosing the Initial Target, the active Admiral chooses a point on the model[cite: 664]. Every other model (friend or foe) that is within $3^{"}$ of this point and shares a Positional Trait with the Initial Target is a **Secondary Target**[cite: 665]. After the Attack action is resolved, a **separate Action Roll** is made for each Secondary Target (no Resistance Roll)[cite: 666, 667]. The Action Pool is **X Action Dice** for each Contributing weapon with this Quality[cite: 668]. The Success Threshold is the **Armour rating** of the Secondary Target[cite: 668]. For each Success, the Secondary Target suffers **1 Damage**[cite: 669]. Note that Properties or Weapon Qualities applying to the Initial Target do not apply against Secondary Targets[cite: 670].',
	},
	bomb: {
		name: 'BOMB',
		value: 'Weapons with this Special Attack Quality are **Bomb Weapons**, and can only Contribute to an Attack action if all Contributing weapons are also Bomb Weapons[cite: 671]. See Bomb Weapons on page 91 of the Dystopian Wars Rulebook[cite: 672]. If a Bomb Weapon is mounted on a model whose Centre Point **passed through the Initial Target** during the Movement Step of this Activation, each of its **Firepower ratings are doubled**[cite: 673].',
	},
	breach: {
		name: 'BREACH (X)',
		value: 'This is a Critical Damage Quality[cite: 677]. If the Initial Target suffers **at least 1 Damage**, the active Admiral rolls **X Critical Damage Dice** for each Contributing weapon with this Quality[cite: 675]. If one or more dice show a **Breach result**, the Initial Target suffers **one Critical Damage Effect of that type**[cite: 676]. If multiple different Critical Damage Qualities apply, the Admiral makes a separate roll for each one[cite: 677].',
	},
	celerity: {
		name: 'CELERITY',
		value: 'After this Attack is resolved, the active Admiral can attempt to enact a **Special Valour Effect** with the active unit[cite: 679]. If successful, this unit can immediately make a **Follow-Up Attack**[cite: 680]. First, each model in this unit with a weapon having this Quality can immediately **Pivot and move up to $4^{"}$ straight forwards**[cite: 681]. Then, the unit makes **another Attack action** which doesn\'t count toward its Action limit[cite: 682]. Only weapons with this Quality can Contribute to this action[cite: 683]. A unit can only make one Follow-Up Attack per Activation[cite: 683].',
	},
	cruor: {
		name: 'CRUOR (TRAIT)',
		value: 'After resolving an Attack action in which one or more weapons with this Quality Contributed, the active Admiral may attempt to enact a **Special Valour Effect** with the active unit[cite: 685]. If successful, each model within 10" of the Initial Target gains **1 level of Disorder**, unless they have the listed Trait[cite: 686].',
	},
	deathblow: {
		name: 'DEATHBLOW',
		value: 'When declaring an Attack action with a unit that has a weapon with this Quality, they can announce a Deathblow attempt[cite: 689, 690]. After Declaring Contributing Weapons, the Admiral makes a **Group Crew Check**[cite: 691]. If passed, each weapon with this Quality **doubles each of its Firepower ratings**, but counts as having the **Intensive quality**[cite: 692]. A Deathblow can only be attempted with a unit that has at least **two Actions remaining**[cite: 693].',
	},
	devastating: {
		name: 'DEVASTATING (X)',
		value: 'At the start of the Resolve Exploding Strikes step, each Contributing weapon with this Quality allows the active Admiral to convert up to **X Heavy Strikes** in the Action Roll to **Exploding Strikes**[cite: 695].',
	},
	enhanced_solex: {
		name: 'ENHANCED SOLEX (X)',
		value: 'After the Resolve Exploding Strikes step, each Contributing weapon with this Quality allows the active Admiral to convert up to **X Counters** in the Action Roll into **equivalent Strikes** (Standard Counters to Standard Strikes, and Heavy Counters to Heavy Strikes)[cite: 697, 698].',
	},
	guided: {
		name: 'GUIDED (X)',
		value: "If the Initial Target is also being **Threatened by a friendly SRS stack**, increase each of this weapon's Firepower ratings by **X**[cite: 699, 700]. Firepower ratings that do not have a value are not increased[cite: 700].",
	},
	hazard: {
		name: 'HAZARD (X)',
		value: 'This is a Critical Damage Quality[cite: 704]. If the Initial Target suffers **at least 1 Damage**, the active Admiral rolls **X Critical Damage Dice** for each Contributing weapon with this Quality[cite: 702]. If one or more dice show a **Hazard result**, the Initial Target suffers **one Critical Damage Effect of that type**[cite: 703]. If multiple different Critical Damage Qualities apply, the Admiral makes a separate roll for each one[cite: 704].',
	},
	high_velocity: {
		name: 'HIGH VELOCITY (X)',
		value: 'At the start of the Count Hits step, each Contributing weapon with this Quality allows the active Admiral to convert **X Heavy Counters** in the Resistance Roll to **Standard Counters**[cite: 706].',
	},
	homing: {
		name: 'HOMING',
		value: 'If at least half of the weapons Contributing to an Attack action have this Quality, the Resistance Roll does **not gain any Bonus Dice for Obscured or Hampered Visibility**[cite: 708].',
	},
	indirect: {
		name: 'INDIRECT',
		value: 'This weapon does **not need to confirm Visibility** to the Initial Target to Contribute[cite: 710]. However, if it Contributes to an Attack where Visibility is **Blocked**, add **3 Bonus Dice** to the Resistance Roll[cite: 711]. This weapon **cannot Contribute** to an Attack if the Initial Target is an **Airborne model**[cite: 712].',
	},
	indiscriminate: {
		name: 'INDISCRIMINATE',
		value: "If at least half of the weapons Contributing to an Attack action have this Quality, the Resistance Roll does **not gain any Bonus Dice for Obscured or Hampered Visibility**[cite: 714]. Additionally, after this Action is resolved, roll an Action Die for each **Escort token** accompanying the target's unit[cite: 715]. On any **Strike result**, the Token is immediately **discarded**[cite: 716].",
	},
	intensive: {
		name: 'INTENSIVE',
		value: "If at least one weapon with this Quality Contributes to an Attack action, the active unit counts as having spent an **additional Action**[cite: 718]. If the unit doesn't have enough Actions remaining, weapons with this Quality **cannot Contribute**[cite: 719].",
	},
	invalid_target: {
		name: 'INVALID TARGET (TRAIT)',
		value: 'This weapon **cannot Contribute** to an Attack action if the Initial Target has **any of the listed Traits**[cite: 721].',
	},
	kingslayer: {
		name: 'KINGSLAYER',
		value: "Increase each of this weapon's Firepower ratings by an amount **equal to the Mass rating of the Initial Target**[cite: 725]. Firepower ratings that do not have a value are not increased[cite: 726].",
	},
	limited: {
		name: 'LIMITED',
		value: 'After resolving this Attack action, roll an Action Die for each weapon with this Quality that Contributed, separately for each Participating model[cite: 727, 728]. If any die scores a **Blank**, the model gains the **Depleted status** and is marked with a Depleted status token[cite: 728]. A weapon with this Quality **cannot Contribute** while the model is Depleted[cite: 729]. The Depleted status remains until the model **Re-Arms**[cite: 730]. A model can Re-Arm if it begins its Activation within $4^{"}$ of a friendly model with the **Depot Trait**[cite: 731]. Other rules (like **Stockpile (X")** and **Resupply (X)**) may also allow Re-Arming[cite: 732].',
	},
	navigation_lock: {
		name: 'NAVIGATION LOCK (X)',
		value: 'This is a Critical Damage Quality[cite: 742]. If the Initial Target suffers **at least 1 Damage**, the active Admiral rolls **X Critical Damage Dice** for each Contributing weapon with this Quality[cite: 740]. If one or more dice show a **Navigation Lock result**, the Initial Target suffers **one Critical Damage Effect of that type**[cite: 741]. If multiple different Critical Damage Qualities apply, the Admiral makes a separate roll for each one[cite: 742].',
	},
	optimal_target: {
		name: 'OPTIMAL TARGET (TRAIT)',
		value: "If the Initial Target has **all of the listed Traits**, increase each of this weapon's Firepower ratings by **X**[cite: 743, 744]. Firepower ratings that do not have a value are not increased[cite: 744].",
	},
	piercing: {
		name: 'PIERCING (X)',
		value: "In the Resolve Outcome step, the Initial Target suffers a **-1 Modifier to its Armour rating** (min 1)[cite: 746]. Once **X Successes have been resolved**, this Quality ceases to apply, and any remaining Hits are re-grouped according to the Target's unmodified Armour rating[cite: 747]. If multiple Contributing weapons have this Quality, their X values are **combined**[cite: 748].",
	},
	precise: {
		name: 'PRECISE (X)',
		value: 'If the Initial Target suffers **at least 1 Damage**, the active Admiral **chooses a Critical Damage Effect**[cite: 750]. After the Effect is announced, the active Admiral rolls **X Critical Damage Dice** for each Contributing weapon with this Quality[cite: 751]. If at least one die **matches the declared Effect**, a single instance of that Effect is immediately applied[cite: 752].',
	},
	powered: {
		name: 'POWERED',
		value: 'This weapon **cannot Contribute** to an Attack action if the model on which it is mounted has a **System Failure Critical Damage Effect**[cite: 757].',
	},
	rail: {
		name: 'RAIL (X)',
		value: 'In the Resolve Exploding Strikes step, the **first X Exploding Strikes** cause **two additional Action Dice** to be rolled, instead of one[cite: 759]. If multiple Contributing weapons have this Quality, their X values are **combined**[cite: 760].',
	},
	shredded_defences: {
		name: 'SHREDDED DEFENCES (X)',
		value: 'This is a Critical Damage Quality[cite: 764]. If the Initial Target suffers **at least 1 Damage**, the active Admiral rolls **X Critical Damage Dice** for each Contributing weapon with this Quality[cite: 762]. If one or more dice show a **Shredded Defences result**, the Initial Target suffers **one Critical Damage Effect of that type**[cite: 763]. If multiple different Critical Damage Qualities apply, the Admiral makes a separate roll for each one[cite: 764].',
	},
	singular: {
		name: 'SINGULAR',
		value: 'Weapons with this Special Attack Quality are **Singular Weapons**[cite: 766]. See Singular Weapons on page 92 of the Dystopian Wars Rulebook[cite: 767].',
	},
	solex: {
		name: 'SOLEX (X)',
		value: 'After the Resolve Exploding Strikes step, each Contributing weapon with this Quality allows the active Admiral to convert up to **X Standard Counters** in the Action Roll into **Standard Strikes**[cite: 769].',
	},
	structural_failure: {
		name: 'STRUCTURAL FAILURE (X)',
		value: 'This is a Critical Damage Quality[cite: 773]. If the Initial Target suffers **at least 1 Damage**, the active Admiral rolls **X Critical Damage Dice** for each Contributing weapon with this Quality[cite: 771]. If one or more dice show a **Structural Failure result**, the Initial Target suffers **one Critical Damage Effect of that type**[cite: 772]. If multiple different Critical Damage Qualities apply, the Admiral makes a separate roll for each one[cite: 773].',
	},
	sympathetic_detonation: {
		name: 'SYMPATHETIC DETONATION',
		value: 'When making an Attack action with one or more weapons having this Quality, the active Admiral may convert a single **Heavy Strike** into an **Exploding Strike** for each model with the **Mindless Storm** property within 20" of the Initial Target[cite: 775].',
	},
	synergy: {
		name: 'SYNERGY',
		value: "For each **additional weapon** (above one) with this Quality that Contributes to this Attack action, increase each of those weapons' Firepower ratings by **1**[cite: 777]. Firepower ratings that do not have a value are not increased[cite: 777].",
	},
	system_failure: {
		name: 'SYSTEM FAILURE (X)',
		value: 'This is a Critical Damage Quality[cite: 785]. If the Initial Target suffers **at least 1 Damage**, the active Admiral rolls **X Critical Damage Dice** for each Contributing weapon with this Quality[cite: 783]. If one or more dice show a **System Failure result**, the Initial Target suffers **one Critical Damage Effect of that type**[cite: 784]. If multiple different Critical Damage Qualities apply, the Admiral makes a separate roll for each one[cite: 785].',
	},
	submerged: {
		name: 'SUBMERGED',
		value: 'Weapons with this Special Attack Quality are **Submerged Weapons**, and can only Contribute to an Attack action if all Contributing weapons are also Submerged[cite: 787]. See Submerged Weapons on page 92 of the Dystopian Wars Rulebook[cite: 788].',
	},
	torpedo: {
		name: 'TORPEDO',
		value: 'This weapon **cannot Contribute** to an Attack action if the Initial Target is within $5^{"}$ of this model[cite: 790].',
	},
	torrent: {
		name: 'TORRENT (X)',
		value: 'Weapons with this Special Attack Quality are **Torrent Weapons**, and can only Contribute to an Attack action if all Contributing weapons are also Torrent Weapons[cite: 792]. See Torrent Weapons on page 92 of the Dystopian Wars Rulebook[cite: 793].',
	},
	tracer: {
		name: 'TRACER',
		value: 'After resolving an Attack action in which one or more weapons with this Quality Contributed, the Initial Target is **Marked** with a Negative Effect token[cite: 795, 796]. When any unit targets a Marked model with an Attack action, the active Admiral **re-rolls any Blanks** in the Action Roll[cite: 797]. The token is removed in the Clean Up step of the End Phase[cite: 798].',
	},
	traction: {
		name: 'TRACTION',
		value: 'If an Attack action scores a number of Successes **equal to or greater than the Mass rating of the Initial Target**, the active Admiral may select one Contributing weapon with this Quality[cite: 799, 800]. The Initial Target immediately moves **$4^{"}$ directly towards the model** on which that weapon is mounted, without changing its facing[cite: 801]. Any Collisions that result are resolved as normal[cite: 802].',
	},
	triangulate: {
		name: 'TRIANGULATE (X)',
		value: 'If the Initial Target is within $15^{"}$ of a friendly model with the **Hydrophone Relay system**, increase each of this weapon\'s Firepower ratings by **X**[cite: 804]. Firepower ratings that do not have a value are not increased[cite: 804].',
	},
	voltaic: {
		name: 'VOLTAIC (X)',
		value: "If the Initial Target has **one or more Generators**, increase each of this weapon's Firepower ratings by **X**[cite: 806]. Firepower ratings that do not have a value are not increased[cite: 806]. This applies even if the target has a System Failure Critical Damage Effect[cite: 807].",
	},
};
