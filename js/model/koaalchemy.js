var koaAlchemy = [
	{
		grade: 'minor',
		potions: [
			{
				name : 'Minor Alchemist\'s Art',
				reagents : [
					{ name : 'Embereyes', count : 1, img : 'img/alchemy/embereyes.png' },
					{ name : 'Sky Blossom', count : 1, img : 'img/alchemy/sky_blossom.png' }
				],
				effect : 'Temporarily increases your alchemy skill by 1'
			},
			{
				name : 'Minor Assassin\'s Evasion',
				reagents : [
					{ name : 'Cripplespore Caps', count : 1, img : 'img/alchemy/cripplespore_caps.png' },
					{ name : 'Sky Blossom', count : 1, img : 'img/alchemy/sky_blossom.png' }
				],
				effect : 'Temporarily increases your stealth skill by 1'
			},
			{
				name : 'Minor Blacksmith\'s Craft',
				reagents : [
					{ name : 'tindertwig', count : 1, img : 'img/alchemy/tinderwig.png' },
					{ name : 'Sky Blossom', count : 1, img : 'img/alchemy/sky_blossom.png' }
				],
				effect : 'Temporarily increases your blacksmith skill by 1'
			},
			{
				name : 'Minor Blazing Salve',
				reagents : [
					{ name : 'tindertwig', count : 2, img : 'img/alchemy/tinderwig.png' },
					{ name : 'Scarwood Bark', count : 1, img : 'img/alchemy/scarwood_bark.png' }
				],
				effect : 'Increases the damage you do with fire-based attacks: +10 Fire Damage, +25% Fire Damage'
			},
			{
				name : 'Minor Bleeding Resistance',
				reagents : [
					{ name : 'Scarlet Flowstone', count : 2, img : 'img/alchemy/scarlet_flowstone.png' },
					{ name : 'Ysa\'s Breath', count : 1, img : 'img/alchemy/ysas_breath.png' }
				],
				effect : 'Decreases bleeding damage received by 25%'
			},
			{
				name : 'Minor Burning Sentinel',
				reagents : [
					{ name : 'tindertwig', count : 2, img : 'img/alchemy/tinderwig.png' },
					{ name : 'Edelweiss', count : 1, img : 'img/alchemy/edelweiss.png' }
				],
				effect : 'Temporarily gives a 50% chance to Burn enemies when attacked'
			},
			{
				name : 'Minor Current Stopper',
				reagents : [
					{ name : 'Eel Petal', count : 2, img : 'img/alchemy/eel_petal.png' },
					{ name : 'Ysa\'s Breath', count : 1, img : 'img/alchemy/ysas_breath.png' }
				],
				effect : 'Decreases lightning damage received by 25%'
			},
			{
				name : 'Minor Dispelling Boost',
				reagents : [
					{ name : 'Star Thistle', count : 2, img : 'img/alchemy/star_thisle.png' },
					{ name : 'Sky Blossom', count : 1, img : 'img/alchemy/sky_blossom.png' }
				],
				effect : 'Temporarily increases your dispelling skill by 1'
			},
			{
				name : 'Minor Experience Booster',
				reagents : [
					{ name : 'Prismere Dust', count : 2, img : 'img/alchemy/prismere_dust.png' },
					{ name : 'Leechwood Bark', count : 1, img : 'img/alchemy/leechwood_bark.png' }
				],
				effect : 'Increases the XP you receive per kill by 10%'
			},
			{
				name : 'Minor Flameguard',
				reagents : [
					{ name : 'tindertwig', count : 1, img : 'img/alchemy/tinderwig.png' },
					{ name : 'Ysa\'s Breath', count : 1, img : 'img/alchemy/ysas_breath.png' }
				],
				effect : 'Decreases fire damage received by 25%'
			},
			{
				name : 'Minor Flesh Eater',
				reagents : [
					{ name : 'Black Cohosh', count : 2, img : 'img/alchemy/black_cohosh.png' },
					{ name : 'Leechwood Bark', count : 2, img : 'img/alchemy/leechwood_bark.png' }
				],
				effect : 'Increase the damage you do with health absorption attacks: +10 Health Stolen Per Hit'
			},
			{
				name : 'Minor Force Potion',
				reagents : [
					{ name : 'Sativa Fibers', count : 2, img : 'img/alchemy/sativa_fibers.png' },
					{ name : 'Scarwood Bark', count : 1, img : 'img/alchemy/scarwood_bark.png' }
				],
				effect : 'Increases physical damage: +25% Physical Damage'
			},
			{
				name : 'Minor Freezing Sentinel',
				reagents : [
					{ name : 'White Flake', count : 2, img : 'img/alchemy/white_flake.png' },
					{ name : 'Edelweiss', count : 1, img : 'img/alchemy/edelweiss.png' }
				],
				effect : 'Temporarily gives a 50% chance to Freeze enemies when attacked'
			},
			{
				name : 'Minor Frostbite',
				reagents : [
					{ name : 'White Flake', count : 2, img : 'img/alchemy/white_flake.png' },
					{ name : 'Ysa\'s Breath', count : 1, img : 'img/alchemy/ysas_breath.png' }
				],
				effect : 'Increases the damage you do with ice-based attacks: +10 Ice Damage, +25% Ice Damage'
			},
			{
				name : 'Minor Frostguard',
				reagents : [
					{ name : 'White Flake', count : 1, img : 'img/alchemy/white_flake.png' },
					{ name : 'Scarwood Bark', count : 1, img : 'img/alchemy/scarwood_bark.png' }
				],
				effect : 'Decreases ice damage received by 25%'
			},
			{
				name : 'Minor Hardened Shell',
				reagents : [
					{ name : 'Sativa Fibers', count : 2, img : 'img/alchemy/sativa_fibers.png' },
					{ name : 'Ysa\'s Breath', count : 2, img : 'img/alchemy/ysas_breath.png' }
				],
				effect : 'Increase your physical-based resistance by 25%'
			},
			{
				name : 'Minor Healing Potion',
				reagents : [
					{ name : 'Black Cohosh', count : 2, img : 'img/alchemy/black_cohosh.png' },
					{ name : 'Embereyes', count : 1, img : 'img/alchemy/embereyes.png' }
				],
				effect : 'Restores a small amount of your health'
			},
			{
				name : 'Minor Health Regen Potion',
				reagents : [
					{ name : 'Black Cohosh', count : 2, img : 'img/alchemy/black_cohosh.png' },
					{ name : 'Scarlet Flowstone', count : 1, img : 'img/alchemy/scarlet_flowstone.png' }
				],
				effect : 'Increases your health regeneration rate by a small amount: 5 health regen per second for 60 seconds'
			},
			{
				name : 'Minor Jeweled Shilelagh',
				reagents : [
					{ name : 'White Flake', count : 1, img : 'img/alchemy/white_flake.png' },
					{ name : 'Sky Blossom', count : 1, img : 'img/alchemy/sky_blossom.png' }
				],
				effect : 'Temporarily increases your sagecraft skill by 1'
			},
			{
				name : 'Minor Lightning Sentinel',
				reagents : [
					{ name : 'Eel Petal', count : 2, img : 'img/alchemy/eel_petal.png' },
					{ name : 'Edelweiss', count : 1, img : 'img/alchemy/edelweiss.png' }
				],
				effect : 'Temporarily gives a 50% chance to Shock enemies when attacked'
			},
			{
				name : 'Minor Lightning Storm',
				reagents : [
					{ name : 'Eel Petal', count : 2, img : 'img/alchemy/eel_petal.png' },
					{ name : 'Scarwood Bark', count : 1, img : 'img/alchemy/scarwood_bark.png' }
				],
				effect : 'Increases the damage you do with lightning-based attacks: +10 Lightning Damage, +25% Lightning Damage'
			},
			{
				name : 'Minor Magebane',
				reagents : [
					{ name : 'Star Thistle', count : 2, img : 'img/alchemy/star_thisle.png' },
					{ name : 'Ysa\'s Breath', count : 2, img : 'img/alchemy/ysas_breath.png' }
				],
				effect : 'Decreases all magic damage received by 25%'
			},
			{
				name : 'Minor Magic Amplification',
				reagents : [
					{ name : 'Star Thistle', count : 2, img : 'img/alchemy/star_thisle.png' },
					{ name : 'Scarwood Bark', count : 2, img : 'img/alchemy/scarwood_bark.png' }
				],
				effect : 'Increase all magic damage: 25%'
			},
			{
				name : 'Minor Magic Precision',
				reagents : [
					{ name : 'Scarab Salts', count : 2, img : 'img/alchemy/scarab_salts.png' },
					{ name : 'Star Thistle', count : 1, img : 'img/alchemy/star_thisle.png' }
				],
				effect : 'Increases the chance that you will perform critical strikes with magic by 10%'
			},
			{
				name : 'Minor Mana Potion',
				reagents : [
					{ name : 'Softscrabble Powder', count : 2, img : 'img/alchemy/softscrabble_powder.png' },
					{ name : 'Embereyes', count : 1, img : 'img/alchemy/embereyes.png' }
				],
				effect : 'Restores a small amount of your mana'
			},
			{
				name : 'Minor Mana Regen Potion',
				reagents : [
					{ name : 'Softscrabble Powder', count : 2, img : 'img/alchemy/softscrabble_powder.png' },
					{ name : 'Scarlet Flowstone', count : 1, img : 'img/alchemy/scarlet_flowstone.png' }
				],
				effect : 'Increases your Mana regeneration rate by a small amount: 5 mana regen per second for 60 seconds'
			},
			{
				name : 'Minor Mana Sap',
				reagents : [
					{ name : 'Softscrabble Powder', count : 2, img : 'img/alchemy/softscrabble_powder.png' },
					{ name : 'Leechwood Bark', count : 2, img : 'img/alchemy/leechwood_bark.png' }
				],
				effect : 'Increases the damage you do with mana absorption attacks: +10 Mana Stolen Per Hit'
			},
			{
				name : 'Minor Merchant\'s Command',
				reagents : [
					{ name : 'Sativa Fibers', count : 1, img : 'img/alchemy/sativa_fibers.png' },
					{ name : 'Sky Blossom', count : 1, img : 'img/alchemy/sky_blossom.png' }
				],
				effect : 'Temporarily increases your mercantile skill by 1'
			},
			{
				name : 'Minor Piercing Serum',
				reagents : [
					{ name : 'Scarwood Bark', count : 2, img : 'img/alchemy/scarwood_bark.png' },
					{ name : 'Scarlet Flowstone', count : 1, img : 'img/alchemy/scarlet_flowstone.png' }
				],
				effect : 'Increases your piercing damage attacks: +10 Piercing Damage, +25% Piercing Damage'
			},
			{
				name : 'Minor Precision',
				reagents : [
					{ name : 'Scarab Salts', count : 2, img : 'img/alchemy/scarab_salts.png' },
					{ name : 'Sativa Fibers', count : 1, img : 'img/alchemy/sativa_fibers.png' }
				],
				effect : 'Increases the chance that you will perform critical strikes by 10%'
			},
			{
				name : 'Minor Social Grace',
				reagents : [
					{ name : 'Leechwood Bark', count : 1, img : 'img/alchemy/leechwood_bark.png' },
					{ name : 'Sky Blossom', count : 1, img : 'img/alchemy/sky_blossom.png' }
				],
				effect : 'Temporarily increases your persuasion skill by 1'
			},
			{
				name : 'Minor Sorcerer\'s Intelligence',
				reagents : [
					{ name : 'Softscrabble Powder', count : 2, img : 'img/alchemy/softscrabble_powder.png' },
					{ name : 'Star Thistle', count : 2, img : 'img/alchemy/star_thisle.png' }
				],
				effect : 'Increases your total mana pool for a limited time by a small amount'
			},
			{
				name : 'Minor Serpent\'s Venom',
				reagents : [
					{ name : 'Cripplespore Caps', count : 2, img : 'img/alchemy/cripplespore_caps.png' },
					{ name : 'Scarwood Bark', count : 1, img : 'img/alchemy/scarwood_bark.png' }
				],
				effect : 'Increases damage you do with poison-based attacks: +10 Poison Damage, +25% Poison Damage'
			},
			{
				name : 'Minor Slashing Fury',
				reagents : [
					{ name : 'Scarlet Flowstone', count : 2, img : 'img/alchemy/scarlet_flowstone.png' },
					{ name : 'Scarwood Bark', count : 1, img : 'img/alchemy/scarwood_bark.png' }
				],
				effect : 'Increases your bleeding damage attacks: +10 Bleeding Damage, +25% Bleeding Damage'
			},
			{
				name : 'Minor Steeled Curtain',
				reagents : [
					{ name : 'Seaflax', count : 2, img : 'img/alchemy/seaflax.png' },
					{ name : 'Ysa\'s Breath', count : 1, img : 'img/alchemy/ysas_breath.png' }
				],
				effect : 'Increases your total armor by 25%'
			},
			{
				name : 'Minor Thief\'s Cunning',
				reagents : [
					{ name : 'Eel Petal', count : 1, img : 'img/alchemy/eel_petal.png' },
					{ name : 'Sky Blossom', count : 1, img : 'img/alchemy/sky_blossom.png' }
				],
				effect : 'Temporarily increases your lockpicking skill by 1'
			},
			{
				name : 'Minor Tracker\'s Draught',
				reagents : [
					{ name : 'Scarab Salts', count : 1, img : 'img/alchemy/scarab_salts.png' },
					{ name : 'Sky Blossom', count : 1, img : 'img/alchemy/sky_blossom.png' }
				],
				effect : 'Temporarily increases your detect hidden skill by 1'
			},
			{
				name : 'Minor Venomguard',
				reagents : [
					{ name : 'Cripplespore Caps', count : 2, img : 'img/alchemy/cripplespore_caps.png' },
					{ name : 'Ysa\'s Breath', count : 1, img : 'img/alchemy/ysas_breath.png' }
				],
				effect : 'Decreases poison damage received by 25%'
			},
			{
				name : 'Minor Warrior\'s Strength',
				reagents : [
					{ name : 'Black Cohosh', count : 2, img : 'img/alchemy/black_cohosh.png' },
					{ name : 'Sativa Fibers', count : 2, img : 'img/alchemy/sativa_fibers.png' }
				],
				effect : 'Increases your total health for a limited time by a small amount'
			},
			{
				name : 'Purification Potion',
				reagents : [
					{ name : 'Embereyes', count : 2, img : 'img/alchemy/embereyes.png' },
					{ name : 'Ysa\'s Breath', count : 2, img : 'img/alchemy/ysas_breath.png' }
				],
				effect : 'Cures any non-magical diseases you may have and grants immunity to all diseases for a short duration'
			}
		]
	},
	{
		grade: 'greater',
		potions: [
			{
				name : 'Greater Alchemist\'s Art',
				reagents : [
					{ name : 'Embereyes', count : 2, img : 'img/alchemy/embereyes.png' },
					{ name : 'Sky Blossom', count : 2, img : 'img/alchemy/sky_blossom.png' },
					{ name : 'Bloodroot', count : 1, img : 'img/alchemy/bloodroot.png' }
				],
				effect : 'Temporarily increases your alchemy skill by 2'
			},
			{
				name : 'Greater Assassin\'s Evasion',
				reagents : [
					{ name : 'Cripplespore Caps', count : 2, img : 'img/alchemy/cripplespore_caps.png' },
					{ name : 'Sky Blossom', count : 2, img : 'img/alchemy/sky_blossom.png' },
					{ name : 'Bloodroot', count : 1, img : 'img/alchemy/bloodroot.png' }
				],
				effect : 'Temporarily increases your stealth skill by 2'
			},
			{
				name : 'Greater Blacksmith\'s Craft',
				reagents : [
					{ name : 'tindertwig', count : 2, img : 'img/alchemy/tinderwig.png' },
					{ name : 'Sky Blossom', count : 2, img : 'img/alchemy/sky_blossom.png' },
					{ name : 'Bloodroot', count : 1, img : 'img/alchemy/bloodroot.png' }
				],
				effect : 'Temporarily increases your blacksmith skill by 2'
			},
			{
				name : 'Greater Blazing Salve',
				reagents : [
					{ name : 'tindertwig', count : 3, img : 'img/alchemy/tinderwig.png' },
					{ name : 'Scarwood Bark', count : 2, img : 'img/alchemy/scarwood_bark.png' },
					{ name : 'Bloodroot', count : 1, img : 'img/alchemy/bloodroot.png' }
				],
				effect : 'Increases the damage you do with fire-based attacks: +20 Fire Damage, +50% Fire Damage'
			},
			{
				name : 'Greater Bleeding Resistance',
				reagents : [
					{ name : 'Scarlet Flowstone', count : 2, img : 'img/alchemy/scarlet_flowstone.png' },
					{ name : 'Ysa\'s Breath', count : 2, img : 'img/alchemy/ysas_breath.png' },
					{ name : 'Seaflax', count : 1, img : 'img/alchemy/seaflax.png' }
				],
				effect : 'Decreases bleeding damage received by 50%'
			},
			{
				name : 'Greater Burning Sentinel',
				reagents : [
					{ name : 'tindertwig', count : 3, img : 'img/alchemy/tinderwig.png' },
					{ name : 'Edelweiss', count : 2, img : 'img/alchemy/edelweiss.png' },
					{ name : 'Seaflax', count : 1, img : 'img/alchemy/seaflax.png' }
				],
				effect : 'Temporarily gives a 60% chance to Burn enemies when attacked'
			},
			{
				name : 'Greater Current Stopper',
				reagents : [
					{ name : 'Eel Petal', count : 2, img : 'img/alchemy/eel_petal.png' },
					{ name : 'Ysa\'s Breath', count : 2, img : 'img/alchemy/ysas_breath.png' },
					{ name : 'Seaflax', count : 1, img : 'img/alchemy/seaflax.png' }
				],
				effect : 'Decreases lightning damage received by 50%'
			},
			{
				name : 'Greater Dispelling Boost',
				reagents : [
					{ name : 'Star Thistle', count : 2, img : 'img/alchemy/star_thisle.png' },
					{ name : 'Sky Blossom', count : 2, img : 'img/alchemy/sky_blossom.png' },
					{ name : 'Bloodroot', count : 1, img : 'img/alchemy/bloodroot.png' }
				],
				effect : 'Temporarily increases your dispelling skill by 2'
			},
			{
				name : 'Greater Experience Booster',
				reagents : [
					{ name : 'Prismere Dust', count : 3, img : 'img/alchemy/prismere_dust.png' },
					{ name : 'Leechwood Bark', count : 2, img : 'img/alchemy/leechwood_bark.png' },
					{ name : 'Bloodroot', count : 1, img : 'img/alchemy/bloodroot.png' }
				],
				effect : 'Increases the XP you receive per kill by 15%'
			},
			{
				name : 'Greater Flameguard',
				reagents : [
					{ name : 'tindertwig', count : 2, img : 'img/alchemy/tinderwig.png' },
					{ name : 'Ysa\'s Breath', count : 2, img : 'img/alchemy/ysas_breath.png' },
					{ name : 'Seaflax', count : 1, img : 'img/alchemy/seaflax.png' }
				],
				effect : 'Decreases fire damage received by 50%'
			},
			{
				name : 'Greater Flesh Eater',
				reagents : [
					{ name : 'Black Cohosh', count : 3, img : 'img/alchemy/black_cohosh.png' },
					{ name : 'Leechwood Bark', count : 3, img : 'img/alchemy/leechwood_bark.png' },
					{ name : 'Scarwood Bark', count : 1, img : 'img/alchemy/scarwood_bark.png' }
				],
				effect : 'Increase the damage you do with health absorption attacks: +15 Health Stolen Per Hit'
			},
			{
				name : 'Greater Force Potion',
				reagents : [
					{ name : 'Sativa Fibers', count : 3, img : 'img/alchemy/sativa_fibers.png' },
					{ name : 'Scarwood Bark', count : 3, img : 'img/alchemy/scarwood_bark.png' },
					{ name : 'Bloodroot', count : 1, img : 'img/alchemy/bloodroot.png' }
				],
				effect : 'Increases physical damage: +50% Physical Damage'
			},
			{
				name : 'Greater Freezing Sentinel',
				reagents : [
					{ name : 'White Flake', count : 3, img : 'img/alchemy/white_flake.png' },
					{ name : 'Edelweiss', count : 2, img : 'img/alchemy/edelweiss.png' },
					{ name : 'Seaflax', count : 1, img : 'img/alchemy/seaflax.png' }
				],
				effect : 'Temporarily gives a 60% chance to Freeze enemies when attacked'
			},
			{
				name : 'Greater Frostbite',
				reagents : [
					{ name : 'White Flake', count : 3, img : 'img/alchemy/white_flake.png' },
					{ name : 'Scarwood Bark', count : 2, img : 'img/alchemy/scarwood_bark.png' },
					{ name : 'Bloodroot', count : 1, img : 'img/alchemy/bloodroot.png' }
				],
				effect : 'Increases the damage you do with ice-based attacks: +20 Ice Damage, +50% Ice Damage'
			},
			{
				name : 'Greater Frostguard',
				reagents : [
					{ name : 'White Flake', count : 2, img : 'img/alchemy/white_flake.png' },
					{ name : 'Ysa\'s Breath', count : 2, img : 'img/alchemy/ysas_breath.png' },
					{ name : 'Seaflax', count : 1, img : 'img/alchemy/seaflax.png' }
				],
				effect : 'Decreases ice damage received by 50%'
			},
			{
				name : 'Greater Hardened Shell',
				reagents : [
					{ name : 'Sativa Fibers', count : 3, img : 'img/alchemy/sativa_fibers.png' },
					{ name : 'Ysa\'s Breath', count : 3, img : 'img/alchemy/ysas_breath.png' },
					{ name : 'Seaflax', count : 1, img : 'img/alchemy/seaflax.png' }
				],
				effect : 'Increase your physical-based resistance by 50%'
			},
			{
				name : 'Greater Healing Potion',
				reagents : [
					{ name : 'Black Cohosh', count : 3, img : 'img/alchemy/black_cohosh.png' },
					{ name : 'Embereyes', count : 2, img : 'img/alchemy/embereyes.png' },
					{ name : 'Bloodroot', count : 1, img : 'img/alchemy/bloodroot.png' }
				],
				effect : 'Restores a moderate amount of your health'
			},
			{
				name : 'Greater Health Regen Potion',
				reagents : [
					{ name : 'Black Cohosh', count : 3, img : 'img/alchemy/black_cohosh.png' },
					{ name : 'Scarlet Flowstone', count : 2, img : 'img/alchemy/scarlet_flowstone.png' },
					{ name : 'Bloodroot', count : 1, img : 'img/alchemy/bloodroot.png' }
				],
				effect : 'Increases your health regeneration rate by a moderate amount: 20 health regen per second for 60 seconds'
			},
			{
				name : 'Greater Jeweled Shilelagh',
				reagents : [
					{ name : 'White Flake', count : 2, img : 'img/alchemy/white_flake.png' },
					{ name : 'Sky Blossom', count : 2, img : 'img/alchemy/sky_blossom.png' },
					{ name : 'Bloodroot', count : 1, img : 'img/alchemy/bloodroot.png' }
				],
				effect : 'Temporarily increases your sagecraft skill by 2'
			},
			{
				name : 'Greater Lightning Sentinel',
				reagents : [
					{ name : 'Eel Petal', count : 3, img : 'img/alchemy/eel_petal.png' },
					{ name : 'Edelweiss', count : 2, img : 'img/alchemy/edelweiss.png' },
					{ name : 'Seaflax', count : 1, img : 'img/alchemy/seaflax.png' }
				],
				effect : 'Temporarily gives a 60% chance to Shock enemies when attacked'
			},
			{
				name : 'Greater Lightning Storm',
				reagents : [
					{ name : 'Eel Petal', count : 3, img : 'img/alchemy/eel_petal.png' },
					{ name : 'Scarwood Bark', count : 2, img : 'img/alchemy/scarwood_bark.png' },
					{ name : 'Bloodroot', count : 1, img : 'img/alchemy/bloodroot.png' }
				],
				effect : 'Increases the damage you do with lightning-based attacks: +20 Lightning Damage, +50% Lightning Damage'
			},
			{
				name : 'Greater Magebane',
				reagents : [
					{ name : 'Star Thistle', count : 3, img : 'img/alchemy/star_thisle.png' },
					{ name : 'Ysa\'s Breath', count : 3, img : 'img/alchemy/ysas_breath.png' },
					{ name : 'Seaflax', count : 1, img : 'img/alchemy/seaflax.png' }
				],
				effect : 'Decreases all magic damage received by 50%'
			},
			{
				name : 'Greater Magic Amplification',
				reagents : [
					{ name : 'Star Thistle', count : 3, img : 'img/alchemy/star_thisle.png' },
					{ name : 'Scarwood Bark', count : 3, img : 'img/alchemy/scarwood_bark.png' },
					{ name : 'Bloodroot', count : 1, img : 'img/alchemy/bloodroot.png' }
				],
				effect : 'Increase all magic damage: 50%'
			},
			{
				name : 'Greater Magic Precision',
				reagents : [
					{ name : 'Scarab Salts', count : 3, img : 'img/alchemy/scarab_salts.png' },
					{ name : 'Star Thistle', count : 2, img : 'img/alchemy/star_thisle.png' },
					{ name : 'Scarwood Bark', count : 1, img : 'img/alchemy/scarwood_bark.png' }
				],
				effect : 'Increases the chance that you will perform critical strikes with magic by 15%'
			},
			{
				name : 'Greater Mana Potion',
				reagents : [
					{ name : 'Softscrabble Powder', count : 3, img : 'img/alchemy/softscrabble_powder.png' },
					{ name : 'Embereyes', count : 2, img : 'img/alchemy/embereyes.png' },
					{ name : 'Bloodroot', count : 1, img : 'img/alchemy/bloodroot.png' }
				],
				effect : 'Restores a moderate amount of your mana'
			},
			{
				name : 'Greater Mana Regen Potion',
				reagents : [
					{ name : 'Softscrabble Powder', count : 3, img : 'img/alchemy/softscrabble_powder.png' },
					{ name : 'Scarlet Flowstone', count : 2, img : 'img/alchemy/scarlet_flowstone.png' },
					{ name : 'Bloodroot', count : 1, img : 'img/alchemy/bloodroot.png' }
				],
				effect : 'Increases your Mana regeneration rate by a moderate amount: 20 mana regen per second for 60 seconds'
			},
			{
				name : 'Greater Mana Sap',
				reagents : [
					{ name : 'Softscrabble Powder', count : 3, img : 'img/alchemy/softscrabble_powder.png' },
					{ name : 'Leechwood Bark', count : 3, img : 'img/alchemy/leechwood_bark.png' },
					{ name : 'Scarwood Bark', count : 1, img : 'img/alchemy/scarwood_bark.png' }
				],
				effect : 'Increases the damage you do with mana absorption attacks: +15 Mana Stolen Per Hit'
			},
			{
				name : 'Greater Merchant\'s Command',
				reagents : [
					{ name : 'Sativa Fibers', count : 2, img : 'img/alchemy/sativa_fibers.png' },
					{ name : 'Sky Blossom', count : 2, img : 'img/alchemy/sky_blossom.png' },
					{ name : 'Bloodroot', count : 1, img : 'img/alchemy/bloodroot.png' }
				],
				effect : 'Temporarily increases your mercantile skill by 2'
			},
			{
				name : 'Greater Piercing Serum',
				reagents : [
					{ name : 'Scarwood Bark', count : 3, img : 'img/alchemy/scarwood_bark.png' },
					{ name : 'Ysa\'s Breath', count : 3, img : 'img/alchemy/ysas_breath.png' },
					{ name : 'Sativa Fibers', count : 1, img : 'img/alchemy/sativa_fibers.png' }
				],
				effect : 'Increases your piercing damage attacks: +20 Piercing Damage, +50% Piercing Damage'
			},
			{
				name : 'Greater Precision',
				reagents : [
					{ name : 'Scarab Salts', count : 3, img : 'img/alchemy/scarab_salts.png' },
					{ name : 'Sativa Fibers', count : 2, img : 'img/alchemy/sativa_fibers.png' },
					{ name : 'Scarwood Bark', count : 1, img : 'img/alchemy/scarwood_bark.png' }
				],
				effect : 'Increases the chance that you will perform critical strikes by 15%'
			},
			{
				name : 'Greater Social Grace',
				reagents : [
					{ name : 'Leechwood Bark', count : 2, img : 'img/alchemy/leechwood_bark.png' },
					{ name : 'Sky Blossom', count : 2, img : 'img/alchemy/sky_blossom.png' },
					{ name : 'Bloodroot', count : 1, img : 'img/alchemy/bloodroot.png' }
				],
				effect : 'Temporarily increases your persuasion skill by 2'
			},
			{
				name : 'Greater Sorcerer\'s Intelligence',
				reagents : [
					{ name : 'Softscrabble Powder', count : 3, img : 'img/alchemy/softscrabble_powder.png' },
					{ name : 'Star Thistle', count : 3, img : 'img/alchemy/star_thisle.png' },
					{ name : 'Bloodroot', count : 1, img : 'img/alchemy/bloodroot.png' }
				],
				effect : 'Increases your total mana pool for a limited time by a moderate amount'
			},
			{
				name : 'Greater Serpent\'s Venom',
				reagents : [
					{ name : 'Cripplespore Caps', count : 3, img : 'img/alchemy/cripplespore_caps.png' },
					{ name : 'Scarwood Bark', count : 2, img : 'img/alchemy/scarwood_bark.png' },
					{ name : 'Bloodroot', count : 1, img : 'img/alchemy/bloodroot.png' }
				],
				effect : 'Increases damage you do with poison-based attacks: +20 Poison Damage, +50% Poison Damage'
			},
			{
				name : 'Greater Slashing Fury',
				reagents : [
					{ name : 'Scarlet Flowstone', count : 3, img : 'img/alchemy/scarlet_flowstone.png' },
					{ name : 'Scarwood Bark', count : 2, img : 'img/alchemy/scarwood_bark.png' },
					{ name : 'Bloodroot', count : 1, img : 'img/alchemy/bloodroot.png' }
				],
				effect : 'Increases your bleeding damage attacks: +20 Bleeding Damage, +50% Bleeding Damage'
			},
			{
				name : 'Greater Steeled Curtain',
				reagents : [
					{ name : 'Seaflax', count : 2, img : 'img/alchemy/seaflax.png' },
					{ name : 'Ysa\'s Breath', count : 2, img : 'img/alchemy/ysas_breath.png' },
					{ name : 'Bloodroot', count : 1, img : 'img/alchemy/bloodroot.png' }
				],
				effect : 'Increases your total armor by 50%'
			},
			{
				name : 'Greater Thief\'s Cunning',
				reagents : [
					{ name : 'Eel Petal', count : 2, img : 'img/alchemy/eel_petal.png' },
					{ name : 'Sky Blossom', count : 2, img : 'img/alchemy/sky_blossom.png' },
					{ name : 'Bloodroot', count : 1, img : 'img/alchemy/bloodroot.png' }
				],
				effect : 'Temporarily increases your lockpicking skill by 2'
			},
			{
				name : 'Greater Tracker\'s Draught',
				reagents : [
					{ name : 'Scarab Salts', count : 2, img : 'img/alchemy/scarab_salts.png' },
					{ name : 'Sky Blossom', count : 2, img : 'img/alchemy/sky_blossom.png' },
					{ name : 'Bloodroot', count : 1, img : 'img/alchemy/bloodroot.png' }
				],
				effect : 'Temporarily increases your detect hidden skill by 2'
			},
			{
				name : 'Greater Venomguard',
				reagents : [
					{ name : 'Cripplespore Caps', count : 2, img : 'img/alchemy/cripplespore_caps.png' },
					{ name : 'Ysa\'s Breath', count : 2, img : 'img/alchemy/ysas_breath.png' },
					{ name : 'Seaflax', count : 1, img : 'img/alchemy/seaflax.png' }
				],
				effect : 'Decreases poison damage received by 50%'
			},
			{
				name : 'Greater Warrior\'s Strength',
				reagents : [
					{ name : 'Black Cohosh', count : 3, img : 'img/alchemy/black_cohosh.png' },
					{ name : 'Sativa Fibers', count : 3, img : 'img/alchemy/sativa_fibers.png' },
					{ name : 'Bloodroot', count : 1, img : 'img/alchemy/bloodroot.png' }
				],
				effect : 'Increases your total health for a limited time by a moderate amount'
			},
			{
				name : 'Liquid Seduction',
				reagents : [
					{ name : 'Scarwood Bark', count : 1, img : 'img/alchemy/scarwood_bark.png' },
					{ name : 'tindertwig', count : 1, img : 'img/alchemy/tinderwig.png' },
					{ name : 'Sky Blossom', count : 1, img : 'img/alchemy/sky_blossom.png' }
				],
				effect : 'Makes it easier to socialize with and persuade the opposite sex'
			},
			{
				name : 'Minor Damage Boost',
				reagents : [
					{ name : 'Sativa Fibers', count : 3, img : 'img/alchemy/sativa_fibers.png' },
					{ name : 'Star Thistle', count : 3, img : 'img/alchemy/star_thisle.png' },
					{ name : 'Scarwood Bark', count : 2, img : 'img/alchemy/scarwood_bark.png' }
				],
				effect : 'Increases the damage of all your attacks: +15% damage'
			},
			{
				name : 'Minor Damage Deflection',
				reagents : [
					{ name : 'Sativa Fibers', count : 2, img : 'img/alchemy/sativa_fibers.png' },
					{ name : 'Star Thistle', count : 2, img : 'img/alchemy/star_thisle.png' },
					{ name : 'Ysa\'s Breath', count : 1, img : 'img/alchemy/ysas_breath.png' }
				],
				effect : 'Decreases all damage received by 25%'
			},
			{
				name : 'Minor Phasewalk',
				reagents : [
					{ name : 'Star Thistle', count : 2, img : 'img/alchemy/star_thisle.png' },
					{ name : 'Cripplespore Caps', count : 1, img : 'img/alchemy/cripplespore_caps.png' },
					{ name : 'Sky Blossom', count : 2, img : 'img/alchemy/sky_blossom.png' }
				],
				effect : 'Renders the user invisible'
			}
		]
	},
	{
		grade: 'master',
		potions : [
			{
				name : 'Fate Potion',
				reagents : [
					{ name : 'Essence of Fate', count : 4, img : 'img/alchemy/essence_of_fate.png' }
				],
				effect : 'A potion to instantly fill your Fate energy bar completely'
			},
			{
				name : 'Greater Damage Boost',
				reagents : [
					{ name : 'Sativa Fibers', count : 4, img : 'img/alchemy/sativa_fibers.png' },
					{ name : 'Star Thistle', count : 4, img : 'img/alchemy/star_thisle.png' },
					{ name : 'Scarwood Bark', count : 3, img : 'img/alchemy/scarwood_bark.png' },
					{ name : 'Essence of Fate', count : 1, img : 'img/alchemy/essence_of_fate.png' }
				],
				effect : 'Increases the damage of all your attacks: +20% damage'
			},
			{
				name : 'Greater Damage Deflection',
				reagents : [
					{ name : 'Sativa Fibers', count : 3, img : 'img/alchemy/sativa_fibers.png' },
					{ name : 'Star Thistle', count : 3, img : 'img/alchemy/star_thisle.png' },
					{ name : 'Ysa\'s Breath', count : 2, img : 'img/alchemy/ysas_breath.png' },
					{ name : 'Essence of Fate', count : 1, img : 'img/alchemy/essence_of_fate.png' }
				],
				effect : 'Decreases all damage received by 50%'
			},
			{
				name : 'Greater Phasewalk',
				reagents : [
					{ name : 'Star Thistle', count : 2, img : 'img/alchemy/star_thisle.png' },
					{ name : 'Cripplespore Caps', count : 1, img : 'img/alchemy/cripplespore_caps.png' },
					{ name : 'Sky Blossom', count : 2, img : 'img/alchemy/sky_blossom.png' },
					{ name : 'Essence of Fate', count : 1, img : 'img/alchemy/essence_of_fate.png' }
				],
				effect : 'Renders the user invisible'
			},
			{
				name : 'Master Alchemist\'s Art',
				reagents : [
					{ name : 'Embereyes', count : 2, img : 'img/alchemy/embereyes.png' },
					{ name : 'Sky Blossom', count : 2, img : 'img/alchemy/sky_blossom.png' },
					{ name : 'Bloodroot', count : 2, img : 'img/alchemy/bloodroot.png' },
					{ name : 'Essence of Fate', count : 1, img : 'img/alchemy/essence_of_fate.png' }
				],
				effect : 'Temporarily increases your alchemy skill by 3'
			},
			{
				name : 'Master Assassin\'s Evasion',
				reagents : [
					{ name : 'Cripplespore Caps', count : 2, img : 'img/alchemy/cripplespore_caps.png' },
					{ name : 'Sky Blossom', count : 2, img : 'img/alchemy/sky_blossom.png' },
					{ name : 'Bloodroot', count : 2, img : 'img/alchemy/bloodroot.png' },
					{ name : 'Essence of Fate', count : 1, img : 'img/alchemy/essence_of_fate.png' }
				],
				effect : 'Temporarily increases your stealth skill by 3'
			},
			{
				name : 'Master Blacksmith\'s Craft',
				reagents : [
					{ name : 'tindertwig', count : 2, img : 'img/alchemy/tinderwig.png' },
					{ name : 'Sky Blossom', count : 2, img : 'img/alchemy/sky_blossom.png' },
					{ name : 'Bloodroot', count : 2, img : 'img/alchemy/bloodroot.png' },
					{ name : 'Essence of Fate', count : 1, img : 'img/alchemy/essence_of_fate.png' }
				],
				effect : 'Temporarily increases your blacksmith skill by 3'
			},
			{
				name : 'Master Blazing Salve',
				reagents : [
					{ name : 'tindertwig', count : 3, img : 'img/alchemy/tinderwig.png' },
					{ name : 'Scarwood Bark', count : 2, img : 'img/alchemy/scarwood_bark.png' },
					{ name : 'Bloodroot', count : 1, img : 'img/alchemy/bloodroot.png' },
					{ name : 'Essence of Fate', count : 1, img : 'img/alchemy/essence_of_fate.png' }
				],
				effect : 'Increases the damage you do with fire-based attacks: +30 Fire Damage, +75% Fire Damage'
			},
			{
				name : 'Master Bleeding Resistance',
				reagents : [
					{ name : 'Scarlet Flowstone', count : 2, img : 'img/alchemy/scarlet_flowstone.png' },
					{ name : 'Ysa\'s Breath', count : 2, img : 'img/alchemy/ysas_breath.png' },
					{ name : 'Seaflax', count : 1, img : 'img/alchemy/seaflax.png' },
					{ name : 'Essence of Fate', count : 1, img : 'img/alchemy/essence_of_fate.png' }
				],
				effect : 'Decreases bleeding damage received by 75%'
			},
			{
				name : 'Master Burning Sentinel',
				reagents : [
					{ name : 'tindertwig', count : 3, img : 'img/alchemy/tinderwig.png' },
					{ name : 'Edelweiss', count : 2, img : 'img/alchemy/edelweiss.png' },
					{ name : 'Seaflax', count : 1, img : 'img/alchemy/seaflax.png' },
					{ name : 'Essence of Fate', count : 1, img : 'img/alchemy/essence_of_fate.png' }
				],
				effect : 'Temporarily gives a 70% chance to Burn enemies when attacked'
			},
			{
				name : 'Master Current Stopper',
				reagents : [
					{ name : 'Eel Petal', count : 2, img : 'img/alchemy/eel_petal.png' },
					{ name : 'Ysa\'s Breath', count : 2, img : 'img/alchemy/ysas_breath.png' },
					{ name : 'Seaflax', count : 1, img : 'img/alchemy/seaflax.png' },
					{ name : 'Essence of Fate', count : 1, img : 'img/alchemy/essence_of_fate.png' }
				],
				effect : 'Decreases lightning damage received by 75%'
			},
			{
				name : 'Master Dispelling Boost',
				reagents : [
					{ name : 'Star Thistle', count : 2, img : 'img/alchemy/star_thisle.png' },
					{ name : 'Sky Blossom', count : 2, img : 'img/alchemy/sky_blossom.png' },
					{ name : 'Bloodroot', count : 2, img : 'img/alchemy/bloodroot.png' },
					{ name : 'Essence of Fate', count : 1, img : 'img/alchemy/essence_of_fate.png' }
				],
				effect : 'Temporarily increases your dispelling skill by 3'
			},
			{
				name : 'Master Experience Booster',
				reagents : [
					{ name : 'Prismere Dust', count : 3, img : 'img/alchemy/prismere_dust.png' },
					{ name : 'Leechwood Bark', count : 2, img : 'img/alchemy/leechwood_bark.png' },
					{ name : 'Bloodroot', count : 2, img : 'img/alchemy/bloodroot.png' },
					{ name : 'Essence of Fate', count : 1, img : 'img/alchemy/essence_of_fate.png' }
				],
				effect : 'Increases the XP you receive per kill by 20%'
			},
			{
				name : 'Master Flameguard',
				reagents : [
					{ name : 'tindertwig', count : 2, img : 'img/alchemy/tinderwig.png' },
					{ name : 'Ysa\'s Breath', count : 2, img : 'img/alchemy/ysas_breath.png' },
					{ name : 'Seaflax', count : 1, img : 'img/alchemy/seaflax.png' },
					{ name : 'Essence of Fate', count : 1, img : 'img/alchemy/essence_of_fate.png' }
				],
				effect : 'Decreases fire damage received by 75%'
			},
			{
				name : 'Master Flesh Eater',
				reagents : [
					{ name : 'Black Cohosh', count : 3, img : 'img/alchemy/black_cohosh.png' },
					{ name : 'Leechwood Bark', count : 3, img : 'img/alchemy/leechwood_bark.png' },
					{ name : 'Scarwood Bark', count : 2, img : 'img/alchemy/scarwood_bark.png' },
					{ name : 'Essence of Fate', count : 1, img : 'img/alchemy/essence_of_fate.png' }
				],
				effect : 'Increase the damage you do with health absorption attacks: +20 Health Stolen Per Hit'
			},
			{
				name : 'Master Force Potion',
				reagents : [
					{ name : 'Sativa Fibers', count : 3, img : 'img/alchemy/sativa_fibers.png' },
					{ name : 'Scarwood Bark', count : 3, img : 'img/alchemy/scarwood_bark.png' },
					{ name : 'Bloodroot', count : 2, img : 'img/alchemy/bloodroot.png' },
					{ name : 'Essence of Fate', count : 1, img : 'img/alchemy/essence_of_fate.png' }
				],
				effect : 'Increases physical damage: +75% Physical Damage'
			},
			{
				name : 'Master Freezing Sentinel',
				reagents : [
					{ name : 'White Flake', count : 3, img : 'img/alchemy/white_flake.png' },
					{ name : 'Edelweiss', count : 2, img : 'img/alchemy/edelweiss.png' },
					{ name : 'Seaflax', count : 1, img : 'img/alchemy/seaflax.png' },
					{ name : 'Essence of Fate', count : 1, img : 'img/alchemy/essence_of_fate.png' }
				],
				effect : 'Temporarily gives a 70% chance to Freeze enemies when attacked'
			},
			{
				name : 'Master Frostbite',
				reagents : [
					{ name : 'White Flake', count : 3, img : 'img/alchemy/white_flake.png' },
					{ name : 'Scarwood Bark', count : 2, img : 'img/alchemy/scarwood_bark.png' },
					{ name : 'Bloodroot', count : 1, img : 'img/alchemy/bloodroot.png' },
					{ name : 'Essence of Fate', count : 1, img : 'img/alchemy/essence_of_fate.png' }
				],
				effect : 'Increases the damage you do with ice-based attacks: +30 Ice Damage, +75% Ice Damage'
			},
			{
				name : 'Master Frostguard',
				reagents : [
					{ name : 'White Flake', count : 2, img : 'img/alchemy/white_flake.png' },
					{ name : 'Ysa\'s Breath', count : 2, img : 'img/alchemy/ysas_breath.png' },
					{ name : 'Seaflax', count : 1, img : 'img/alchemy/seaflax.png' },
					{ name : 'Essence of Fate', count : 1, img : 'img/alchemy/essence_of_fate.png' }
				],
				effect : 'Decreases ice damage received by 75%'
			},
			{
				name : 'Master Hardened Shell',
				reagents : [
					{ name : 'Sativa Fibers', count : 3, img : 'img/alchemy/sativa_fibers.png' },
					{ name : 'Ysa\'s Breath', count : 3, img : 'img/alchemy/ysas_breath.png' },
					{ name : 'Seaflax', count : 2, img : 'img/alchemy/seaflax.png' },
					{ name : 'Essence of Fate', count : 1, img : 'img/alchemy/essence_of_fate.png' }
				],
				effect : 'Increase your physical-based resistance by 75%'
			},
			{
				name : 'Master Healing Potion',
				reagents : [
					{ name : 'Black Cohosh', count : 3, img : 'img/alchemy/black_cohosh.png' },
					{ name : 'Embereyes', count : 2, img : 'img/alchemy/embereyes.png' },
					{ name : 'Bloodroot', count : 1, img : 'img/alchemy/bloodroot.png' },
					{ name : 'Essence of Fate', count : 1, img : 'img/alchemy/essence_of_fate.png' }
				],
				effect : 'Restores a large amount of your health'
			},
			{
				name : 'Master Health Regen Potion',
				reagents : [
					{ name : 'Black Cohosh', count : 3, img : 'img/alchemy/black_cohosh.png' },
					{ name : 'Scarlet Flowstone', count : 2, img : 'img/alchemy/scarlet_flowstone.png' },
					{ name : 'Bloodroot', count : 1, img : 'img/alchemy/bloodroot.png' },
					{ name : 'Essence fo Fate', count : 1, img : 'img/alchemy/essence_of_fate.png' }
				],
				effect : 'Increases your health regeneration rate by a large amount'
			},
			{
				name : 'Master Jeweled Shilelagh',
				reagents : [
					{ name : 'White Flake', count : 2, img : 'img/alchemy/white_flake.png' },
					{ name : 'Sky Blossom', count : 2, img : 'img/alchemy/sky_blossom.png' },
					{ name : 'Bloodroot', count : 2, img : 'img/alchemy/bloodroot.png' },
					{ name : 'Essence of Fate', count : 1, img : 'img/alchemy/essence_of_fate.png' }
				],
				effect : 'Temporarily increases your sagecraft skill by 3'
			},
			{
				name : 'Master Lightning Sentinel',
				reagents : [
					{ name : 'Eel Petal', count : 3, img : 'img/alchemy/eel_petal.png' },
					{ name : 'Edelweiss', count : 2, img : 'img/alchemy/edelweiss.png' },
					{ name : 'Seaflax', count : 1, img : 'img/alchemy/seaflax.png' },
					{ name : 'Essence of Fate', count : 1, img : 'img/alchemy/essence_of_fate.png' }
				],
				effect : 'Temporarily gives a 70% chance to Shock enemies when attacked'
			},
			{
				name : 'Master Lightning Storm',
				reagents : [
					{ name : 'Eel Petal', count : 3, img : 'img/alchemy/eel_petal.png' },
					{ name : 'Scarwood Bark', count : 2, img : 'img/alchemy/scarwood_bark.png' },
					{ name : 'Bloodroot', count : 1, img : 'img/alchemy/bloodroot.png' },
					{ name : 'Essence of Fate', count : 1, img : 'img/alchemy/essence_of_fate.png' }
				],
				effect : 'Increases the damage you do with lightning-based attacks: +30 Lightning Damage, +75% Lightning Damage'
			},
			{
				name : 'Master Magebane',
				reagents : [
					{ name : 'Star Thistle', count : 3, img : 'img/alchemy/star_thisle.png' },
					{ name : 'Ysa\'s Breath', count : 3, img : 'img/alchemy/ysas_breath.png' },
					{ name : 'Seaflax', count : 2, img : 'img/alchemy/seaflax.png' },
					{ name : 'Essence of Fate', count : 1, img : 'img/alchemy/essence_of_fate.png' }
				],
				effect : 'Decreases all magic damage received by 75%'
			},
			{
				name : 'Master Magic Amplification',
				reagents : [
					{ name : 'Star Thistle', count : 3, img : 'img/alchemy/star_thisle.png' },
					{ name : 'Scarwood Bark', count : 3, img : 'img/alchemy/scarwood_bark.png' },
					{ name : 'Bloodroot', count : 2, img : 'img/alchemy/bloodroot.png' },
					{ name : 'Essence of Fate', count : 1, img : 'img/alchemy/essence_of_fate.png' }
				],
				effect : 'Increase all magic damage: 75%'
			},
			{
				name : 'Master Magic Precision',
				reagents : [
					{ name : 'Scarab Salts', count : 3, img : 'img/alchemy/scarab_salts.png' },
					{ name : 'Star Thistle', count : 2, img : 'img/alchemy/star_thisle.png' },
					{ name : 'Scarwood Bark', count : 2, img : 'img/alchemy/scarwood_bark.png' },
					{ name : 'Essence of Fate', count : 1, img : 'img/alchemy/essence_of_fate.png' }
				],
				effect : 'Increases the chance that you will perform critical strikes with magic by 30%'
			},
			{
				name : 'Master Mana Potion',
				reagents : [
					{ name : 'Softscrabble Powder', count : 3, img : 'img/alchemy/softscrabble_powder.png' },
					{ name : 'Embereyes', count : 2, img : 'img/alchemy/embereyes.png' },
					{ name : 'Bloodroot', count : 1, img : 'img/alchemy/bloodroot.png' },
					{ name : ' Essence of Fate', count : 1, img : 'img/alchemy/essence_of_fate.png' }
				],
				effect : 'Restores a large amount of your mana'
			},
			{
				name : 'Master Mana Regen Potion',
				reagents : [
					{ name : 'Softscrabble Powder', count : 3, img : 'img/alchemy/softscrabble_powder.png' },
					{ name : 'Scarlet Flowstone', count : 2, img : 'img/alchemy/scarlet_flowstone.png' },
					{ name : 'Bloodroot', count : 1, img : 'img/alchemy/bloodroot.png' },
					{ name : ' Essence of Fate', count : 1, img : 'img/alchemy/essence_of_fate.png' }
				],
				effect : 'Increases your Mana regeneration rate by a large amount'
			},
			{
				name : 'Master Mana Sap',
				reagents : [
					{ name : 'Softscrabble Powder', count : 3, img : 'img/alchemy/softscrabble_powder.png' },
					{ name : 'Leechwood Bark', count : 3, img : 'img/alchemy/leechwood_bark.png' },
					{ name : 'Scarwood Bark', count : 2, img : 'img/alchemy/scarwood_bark.png' },
					{ name : ' Essence of Fate', count : 1, img : 'img/alchemy/essence_of_fate.png' }
				],
				effect : 'Increases the damage you do with mana absorption attacks: +20 Mana Stolen Per Hit'
			},
			{
				name : 'Master Merchant\'s Command',
				reagents : [
					{ name : 'Sativa Fibers', count : 2, img : 'img/alchemy/sativa_fibers.png' },
					{ name : 'Sky Blossom', count : 2, img : 'img/alchemy/sky_blossom.png' },
					{ name : 'Bloodroot', count : 2, img : 'img/alchemy/bloodroot.png' },
					{ name : 'Essence of Fate', count : 1, img : 'img/alchemy/essence_of_fate.png' }
				],
				effect : 'Temporarily increases your mercantile skill by 3'
			},
			{
				name : 'Master Piercing Serum',
				reagents : [
					{ name : 'Scarwood Bark', count : 3, img : 'img/alchemy/scarwood_bark.png' },
					{ name : 'Ysa\'s Breath', count : 3, img : 'img/alchemy/ysas_breath.png' },
					{ name : 'Sativa Fibers', count : 2, img : 'img/alchemy/sativa_fibers.png' },
					{ name : 'Essence of Fate', count : 1, img : 'img/alchemy/essence_of_fate.png' }
				],
				effect : 'Increases your piercing damage attacks: +30 Piercing Damage, +75% Piercing Damage'
			},
			{
				name : 'Master Precision',
				reagents : [
					{ name : 'Scarab Salts', count : 3, img : 'img/alchemy/scarab_salts.png' },
					{ name : 'Sativa Fibers', count : 2, img : 'img/alchemy/sativa_fibers.png' },
					{ name : 'Scarwood Bark', count : 2, img : 'img/alchemy/scarwood_bark.png' },
					{ name : 'Essence of Fate', count : 1, img : 'img/alchemy/essence_of_fate.png' }
				],
				effect : 'Increases the chance that you will perform critical strikes by 30%'
			},
			{
				name : 'Master Social Grace',
				reagents : [
					{ name : 'Leechwood Bark', count : 2, img : 'img/alchemy/leechwood_bark.png' },
					{ name : 'Sky Blossom', count : 2, img : 'img/alchemy/sky_blossom.png' },
					{ name : 'Bloodroot', count : 2, img : 'img/alchemy/bloodroot.png' },
					{ name : 'Essence of Fate', count : 1, img : 'img/alchemy/essence_of_fate.png' }
				],
				effect : 'Temporarily increases your persuasion skill by 3'
			},
			{
				name : 'Master Sorcerer\'s Intelligence',
				reagents : [
					{ name : 'Softscrabble Powder', count : 3, img : 'img/alchemy/softscrabble_powder.png' },
					{ name : 'Star Thistle', count : 3, img : 'img/alchemy/star_thisle.png' },
					{ name : 'Bloodroot', count : 1, img : 'img/alchemy/bloodroot.png' },
					{ name : 'Essence of Fate', count : 1, img : 'img/alchemy/essence_of_fate.png' }
				],
				effect : 'Increases your total mana pool for a limited time by a large amount'
			},
			{
				name : 'Master Serpent\'s Venom',
				reagents : [
					{ name : 'Cripplespore Caps', count : 3, img : 'img/alchemy/cripplespore_caps.png' },
					{ name : 'Scarwood Bark', count : 2, img : 'img/alchemy/scarwood_bark.png' },
					{ name : 'Bloodroot', count : 1, img : 'img/alchemy/bloodroot.png' },
					{ name : 'Essence of Fate', count : 1, img : 'img/alchemy/essence_of_fate.png' }
				],
				effect : 'Increases damage you do with poison-based attacks: +30 Poison Damage, +75% Poison Damage'
			},
			{
				name : 'Master Slashing Fury',
				reagents : [
					{ name : 'Scarlet Flowstone', count : 3, img : 'img/alchemy/scarlet_flowstone.png' },
					{ name : 'Scarwood Bark', count : 2, img : 'img/alchemy/scarwood_bark.png' },
					{ name : 'Bloodroot', count : 1, img : 'img/alchemy/bloodroot.png' },
					{ name : 'Essence of Fate', count : 1, img : 'img/alchemy/essence_of_fate.png' }
				],
				effect : 'Increases your bleeding damage attacks: +30 Bleeding Damage, +75% Bleeding Damage'
			},
			{
				name : 'Master Steeled Curtain',
				reagents : [
					{ name : 'Seaflax', count : 2, img : 'img/alchemy/seaflax.png' },
					{ name : 'Ysa\'s Breath', count : 2, img : 'img/alchemy/ysas_breath.png' },
					{ name : 'Bloodroot', count : 1, img : 'img/alchemy/bloodroot.png' },
					{ name : 'Essence of Fate', count : 1, img : 'img/alchemy/essence_of_fate.png' }
				],
				effect : 'Increases your total armor by 75%'
			},
			{
				name : 'Master Thief\'s Cunning',
				reagents : [
					{ name : 'Eel Petal', count : 2, img : 'img/alchemy/eel_petal.png' },
					{ name : 'Sky Blossom', count : 2, img : 'img/alchemy/sky_blossom.png' },
					{ name : 'Bloodroot', count : 1, img : 'img/alchemy/bloodroot.png' },
					{ name : 'Essence of Fate', count : 1, img : 'img/alchemy/essence_of_fate.png' }
				],
				effect : 'Temporarily increases your lockpicking skill by 3'
			},
			{
				name : 'Master Tracker\'s Draught',
				reagents : [
					{ name : 'Scarab Salts', count : 2, img : 'img/alchemy/scarab_salts.png' },
					{ name : 'Sky Blossom', count : 2, img : 'img/alchemy/sky_blossom.png' },
					{ name : 'Bloodroot', count : 2, img : 'img/alchemy/bloodroot.png' },
					{ name : 'Essence of Fate', count : 1, img : 'img/alchemy/essence_of_fate.png' }
				],
				effect : 'Temporarily increases your detect hidden skill by 3'
			},
			{
				name : 'Master Venomguard',
				reagents : [
					{ name : 'Cripplespore Caps', count : 2, img : 'img/alchemy/cripplespore_caps.png' },
					{ name : 'Ysa\'s Breath', count : 2, img : 'img/alchemy/ysas_breath.png' },
					{ name : 'Seaflax', count : 1, img : 'img/alchemy/seaflax.png' },
					{ name : 'Essence of Fate', count : 1, img : 'img/alchemy/essence_of_fate.png' }
				],
				effect : 'Decreases poison damage received by 75%'
			},
			{
				name : 'Master Warrior\'s Strength',
				reagents : [
					{ name : 'Black Cohosh', count : 3, img : 'img/alchemy/black_cohosh.png' },
					{ name : 'Sativa Fibers', count : 3, img : 'img/alchemy/sativa_fibers.png' },
					{ name : 'Bloodroot', count : 1, img : 'img/alchemy/bloodroot.png' },
					{ name : 'Essence of Fate', count : 1, img : 'img/alchemy/essence_of_fate.png' }
				],
				effect : 'Increases your total health for a limited time by a large amount'
			}
		]
	}
];
