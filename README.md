Output example:

![card](https://i.imgur.com/ZXjkYAh.png)

I'm adding ships/weapons/rules as I need to print them to play with. Feel free to enter data for any missing factions/ships and do a pull request. I'll make any updates required to make new situations render well if you can't/don't want to.

I'm entering the rules in a stripped down form that fits easier, and is easier to skim. This necessarily sacrifices specifity and edge cases, so I'd recommend keeping a printout of all the full rules text from your ORBAT to check if you encounter an edge case.

Optional upgrades must have the following format. The "option: 'Optional Upgrades'" is required for it to be handled correctly. For example see the Imperium Odin.

```
{
  option: 'Optional Upgrades',
  name: 'Voltaic Decksweepers',
  optionCost: 5,
}
```

Weapon options must have the following format. the "option: 'F/P/S Weapon'" is how you specify a group of options which are mutually exclusive. Set their option value all the same. The first one entered will be the default. For example see the Imperium Arminius.

```
{
  name: 'Volt Gun Battery',
  arc: 'F/P/S',
  option: 'F/P/S Weapon',
}
```

Generator options can be mutually exclusive with a weapon, in this case give them the same option string, and enter them in the generators section with the following format. For example see the Imperium Blucher.

```
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
}
```

Rules are generally entered as strings, but if they have a value in brackets like SRS or Flak, then they should be entered as an object like the following. For example see the Imperium Reiter

```
{
  name: 'Flak Barrage',
  value: 10,
}
```

To run locally you need a web server of some kind, and then just open index.html. If you don't already have a web server set up like Laragon or whatever, you can do "npm install" and "npm run start" to open it with http-server. There are no dependencies for it to run, and it simply uses cookies to store option choices.
