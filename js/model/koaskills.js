var koaSkills = [
	{
		title: 'Alchemy',
		desc: 'Alchemy is a Skill that grants you the ability to harvest mystical Reagents from the land and combine them to create powerful arcane Potions.',
		levels: [
			{
				main: true,
				desc: 'A failed experiment now results in an Unstable Potion.',
				descAdv: 'Increases chance to successfully harvest reagents.'
			}, 
			{
				main: false,
				desc: '',
				descAdv: 'Increases chance to successfully harvest reagents.'
			},
			{
				main: true,
				desc: 'You can craft potions with three reagents.',
				descAdv: 'Increases chance to successfully harvest reagents.'
			},
			{
				main: false,
				desc: '',
				descAdv: 'Increases chance to successfully harvest reagents.'
			},
			{
				main: true,
				desc: 'You can craft potions with four reagents.',
				descAdv: 'Increases chance to successfully harvest reagents.'
			},
			{
				main: false,
				desc: '',
				descAdv: 'Increases chance to successfully harvest reagents.'
			},
			{
				main: false,
				desc: '',
				descAdv: 'Increases chance to successfully harvest reagents.'
			},
			{
				main: false,
				desc: '',
				descAdv: 'Increases chance to successfully harvest reagents.'
			},
			{
				main: false,
				desc: '',
				descAdv: 'Increases chance to successfully harvest reagents.'
			},
			{
				main: true,
				desc: 'All alchemical recipes discovered.',
				descAdv: 'Increases chance to successfully harvest reagents.'
			} 
		],
		current: 0
	},
	{ 
		title: 'Blacksmithing',
		desc: 'Blacksmithing uses Components to create weapons and armor from Forges.',
		levels: [
			{
				main: true,
				desc: 'You can now harvest components from some enemies in the world.',
				descAdv: 'Increases the effectiveness of Repair Kits.'
			}, 
			{
				main: true,
				desc: 'You can create an item with three components, giving it a slight bonus.',
				descAdv: 'Increases the effectiveness of Repair Kits.'
			},
			{
				main: true,
				desc: 'You can salvage infrequent equipment.',
				descAdv: 'Increases the effectiveness of Repair Kits.'
			},
			{
				main: true,
				desc: 'You can create an item with four components.',
				descAdv: 'Increases the effectiveness of Repair Kits.'
			},
			{
				main: false,
				desc: '',
				descAdv: 'Increases the effectiveness of Repair Kits.'
			},
			{
				main: true,
				desc: 'You can salvage rare equipment.',
				descAdv: 'Increases the effectiveness of Repair Kits.'
			},
			{
				main: true,
				desc: 'You can use gems as components when crafting equipment.',
				descAdv: 'Increases the effectiveness of Repair Kits.'
			},
			{
				main: false,
				desc: '',
				descAdv: 'Increases the effectiveness of Repair Kits.'
			},
			{
				main: false,
				desc: '',
				descAdv: 'Increases the effectiveness of Repair Kits.'
			},
			{
				main: true,
				desc: 'You can create "mastercrafted" equipment.',
				descAdv: 'Increases the effectiveness of Repair Kits.'
			} 
		],
		current: 0
	},
	{
		title: 'Detect hidden',
		desc: 'Detect Hidden is a Skill that enables you to find hidden treasure caches, deadly traps, enemy ambushes, and secret doors.',
		levels: [
			{
				main: true,
				desc: 'Enemies and other characters are displayed on the mini-map.',
				descAdv: 'Increases the amount of gold found as you explore the world.'
			}, 
			{
				main: true,
				desc: 'Hidden treasures are displayed on the minimap and revealed when in range.',
				descAdv: 'Increases the amount of gold found as you explore the world.'
			},
			{
				main: true,
				desc: 'Enemies facing direction is displayed on the minimap.',
				descAdv: 'Increases the amount of gold found as you explore the world.'
			},
			{
				main: true,
				desc: 'You can disarm traps.',
				descAdv: 'Increases the amount of gold found as you explore the world.'
			},
			{
				main: true,
				desc: 'Secret doors are displayed on the mini-map and revealed when in range.',
				descAdv: 'Increases the amount of gold found as you explore the world.'
			},
			{
				main: false,
				desc: '',
				descAdv: 'Increases the amount of gold found as you explore the world.'
			},
			{
				main: true,
				desc: 'Traps are displayed on the minimap.',
				descAdv: 'Increases the amount of gold found as you explore the world.'
			},
			{
				main: true,
				desc: 'Traps can be disarmed and salvaged for components.',
				descAdv: 'Increases the amount of gold found as you explore the world.'
			},
			{
				main: false,
				desc: '',
				descAdv: 'Increases the amount of gold found as you explore the world.'
			},
			{
				main: true,
				desc: 'Lorestones and treasures are displayed on the mini-map. Corpses and skeletons containing loot are not shown.',
				descAdv: 'Increases the amount of gold found as you explore the world.'
			}
		],
		current: 0
	},
	{
		title: 'Dispelling',
		desc: 'Dispelling is a Skill that grants you the ability to dispel protective magical Wards without suffering harm.',
		levels: [
			{
				main: false,
				desc: '',
				descAdv: 'Decreased difficulty when dispelling magical Wards.'
			},
			{
				main: true,
				desc: 'You can fail to dispel a ward once before it explodes.',
				descAdv: 'Decreased difficulty when dispelling magical Wards.'
			},
			{
				main: false,
				desc: '',
				descAdv: 'Decreased difficulty when dispelling magical Wards.'
			},
			{
				main: true,
				desc: 'Dark sigils are removed from Wards.',
				descAdv: 'Decreased difficulty when dispelling magical Wards.'
			},
			{
				main: false,
				desc: '',
				descAdv: 'Decreased difficulty when dispelling magical Wards.'
			},
			{
				main: false,
				desc: '',
				descAdv: 'Decreased difficulty when dispelling magical Wards.'
			},
			{
				main: true,
				desc: 'You can fail to dispel a Ward twice before it explodes.',
				descAdv: 'Decreased difficulty when dispelling magical Wards.'
			},
			{
				main: false,
				desc: '',
				descAdv: 'Decreased difficulty when dispelling magical Wards.'
			},
			{
				main: false,
				desc: '',
				descAdv: 'Decreased difficulty when dispelling magical Wards.'
			},
			{
				main: true,
				desc: 'Ward glyphs regenerate much more slowly.',
				descAdv: 'Decreased difficulty when dispelling magical Wards.'
			},
		],
		current: 0
	},
	{
		title: 'Lockpicking',
		desc: 'Lockpicking is a Skill that grants mastery over the picking of mechanical locks, enabling you to bypass even the tightest security.',
		levels: [
			{
				main: false,
				desc: '',
				descAdv: 'Decreases the difficulty when lockpicking.'
			},
			{
				main: false,
				desc: '',
				descAdv: 'Decreases the difficulty when lockpicking.'
			},
			{
				main: false,
				desc: '',
				descAdv: 'Decreases the difficulty when lockpicking.'
			},
			{
				main: true,
				desc: 'You can always successfully force very easy locks.',
				descAdv: 'Decreases the difficulty when lockpicking.'
			},
			{
				main: false,
				desc: '',
				descAdv: 'Decreases the difficulty when lockpicking.'
			},
			{
				main: false,
				desc: '',
				descAdv: 'Decreases the difficulty when lockpicking.'
			},
			{
				main: true,
				desc: 'You can always successfully force easy locks.',
				descAdv: 'Decreases the difficulty when lockpicking.'
			},
			{
				main: true,
				desc: 'You can always successfully force average locks.',
				descAdv: 'Decreases the difficulty when lockpicking.'
			},
			{
				main: false,
				desc: '',
				descAdv: 'Decreases the difficulty when lockpicking.'
			},
			{
				main: true,
				desc: 'You can always successfully force hard locks.',
				descAdv: 'Decreases the difficulty when lockpicking.'
			}
		],
		current: 0
	},
	{
		title: 'Mercantile',
		desc: 'Mercantile is a skill that allows you to master the art of selling for more and buying for less.',
		levels: [
			{
				main: false,
				desc: '',
				descAdv: 'Improves buy and sell gold costs at merchants.'
			},
			{
				main: false,
				desc: '',
				descAdv: 'Improves buy and sell gold costs at merchants.'
			},
			{
				main: true,
				desc: 'When you destroy a junked item, you recover 15% of its value.',
				descAdv: 'Improves buy and sell gold costs at merchants.'
			},
			{
				main: false,
				desc: '',
				descAdv: 'Improves buy and sell gold costs at merchants.'
			},
			{
				main: false,
				desc: '',
				descAdv: 'Improves buy and sell gold costs at merchants.'
			},
			{
				main: true,
				desc: 'When you destroy a junked item, you recover 30% of its value.',
				descAdv: 'Improves buy and sell gold costs at merchants.'
			},
			{
				main: false,
				desc: '',
				descAdv: 'Improves buy and sell gold costs at merchants.'
			},
			{
				main: false,
				desc: '',
				descAdv: 'Improves buy and sell gold costs at merchants.'
			},
			{
				main: false,
				desc: '',
				descAdv: 'Improves buy and sell gold costs at merchants.'
			},
			{
				main: true,
				desc: 'You may sell stolen items to any merchant, not just fences.',
				descAdv: 'Improves buy and sell gold costs at merchants.'
			},
		],
		current: 0
	},
	{
		title: 'Persuasion',
		desc: 'Persuasion is a Skill that allows you to talk your way into and out of situations that would normally require a different solution. You can also persuade people, when prompted, to give you items.',
		levels: [
			{
				main: true,
				desc: 'Bribe costs for crime are decreased by 20%.',
				descAdv: 'Increases your chance to persuade others to your way of thinking.'
			},
			{
				main: false,
				desc: '',
				descAdv: 'Increases your chance to persuade others to your way of thinking.'
			},
			{
				main: true,
				desc: 'Bribe costs for crime are decreased by 30%.',
				descAdv: 'Increases your chance to persuade others to your way of thinking.'
			},
			{
				main: false,
				desc: '',
				descAdv: 'Increases your chance to persuade others to your way of thinking.'
			},
			{
				main: false,
				desc: '',
				descAdv: 'Increases your chance to persuade others to your way of thinking.'
			},
			{
				main: false,
				desc: '',
				descAdv: ''
			},
			{
				main: false,
				desc: '',
				descAdv: 'Increases your chance to persuade others to your way of thinking.'
			},
			{
				main: false,
				desc: '',
				descAdv: 'Increases your chance to persuade others to your way of thinking.'
			},
			{
				main: false,
				desc: '',
				descAdv: 'Increases your chance to persuade others to your way of thinking.'
			},
			{
				main: false,
				desc: '',
				descAdv: ''
			},
		],
		current: 0
	},
	{
		title: 'Sagecraft',
		desc: 'Sagecraft is a Skill that allows players to craft gems by using different Shards found throughout Amalur. You can socket these Gems into your weapons, armor, or other equipment.',
		levels: [
			{
				main: false,
				desc: '',
				descAdv: 'Better quality shards drop more frequently.'
			},
			{
				main: true,
				desc: 'You can create powerful gems using lambent quality shards.',
				descAdv: 'Better quality shards drop more frequently.'
			},
			{
				main: true,
				desc: 'You can strengthen shards by combining two of the same quality to get one of the next highest quality.',
				descAdv: 'Better quality shards drop more frequently.'
			},
			{
				main: false,
				desc: '',
				descAdv: 'Better quality shards drop more frequently.'
			},
			{
				main: false,
				desc: '',
				descAdv: 'Better quality shards drop more frequently.'
			},
			{
				main: true,
				desc: 'You can create more powerful gems using pristine quality shards.',
				descAdv: 'Better quality shards drop more frequently.'
			},
			{
				main: false,
				desc: '',
				descAdv: 'Better quality shards drop more frequently.'
			},
			{
				main: true,
				desc: 'You can craft epic gems.',
				descAdv: 'Better quality shards drop more frequently.'
			},
			{
				main: false,
				desc: '',
				descAdv: 'Better quality shards drop more frequently.'
			},
			{
				main: true,
				desc: 'You can remove socketed gems from any socket at a Sagecraft Altar.',
				descAdv: 'Better quality shards drop more frequently.'
			},
		],
		current: 0
	},
	{
		title: 'Stealth',
		desc: 'Stealth is a Skill that grants the player the ability to remain undetected for longer periods of time by decreasing the sight range on NPCs.',
		levels: [
			{
				main: true,
				desc: '-5% Sight range on unaware NPCs while in stealth.',
				descAdv: 'Increases the duration of time you can remain hidden before others will notice you.'
			},
			{
				main: false,
				desc: '',
				descAdv: 'Increases the duration of time you can remain hidden before others will notice you.'
			},
			{
				main: true,
				desc: '-10% Sight range on unaware NPCs while in stealth.',
				descAdv: 'Increases the duration of time you can remain hidden before others will notice you.'
			},
			{
				main: false,
				desc: '',
				descAdv: 'Increases the duration of time you can remain hidden before others will notice you.'
			},
			{
				main: true,
				desc: '-15% Sight range on unaware NPCs while in stealth.',
				descAdv: 'Increases the duration of time you can remain hidden before others will notice you.'
			},
			{
				main: false,
				desc: '',
				descAdv: 'Increases the duration of time you can remain hidden before others will notice you.'
			},
			{
				main: true,
				desc: '-20% Sight range on unaware NPCs while in stealth.',
				descAdv: 'Increases the duration of time you can remain hidden before others will notice you.'
			},
			{
				main: false,
				desc: '',
				descAdv: 'Increases the duration of time you can remain hidden before others will notice you.'
			},
			{
				main: true,
				desc: '-30% Sight range on unaware NPCs while in stealth.',
				descAdv: 'Increases the duration of time you can remain hidden before others will notice you.'
			},
			{
				main: true,
				desc: '-40% Sight range on unaware NPCs while in stealth.',
				descAdv: 'Increases the duration of time you can remain hidden before others will notice you.'
			},
		],
		current: 0
	}];