var koaAbilities = [
	{
		row: [
			[
				{
					name: 'Brutal Weaponry I',
					type: '[Weapon Attacks]',
					desc: 'Unlocks Charge special attacks for the Longsword, Greatsword, and Hammer.',
					descAdv: [
						'Comet Strike - Hold and release the Longsword attack to dash into and slash your foes. Whirlwind - Hold and release the Greatsword attack to unleash a flurry of attacks. Minotaur Rush - Hold and release the Hammer attack to rush down enemies.',
						'Comet Strike Whirlwind and Minotaur Rush can apply additional damage over time.',
						'Comet Strike Whirlwind and Minotaur Rush generate bonus fate.'
					],  
					requires: '',
					requiresPoint: 0,
					reqAbility: false,
					maxLevel: 3,
					currentLevel: 0
				},
				{
					name: 'Longsword Mastery',
					type: '[Passive]',
					desc: 'A combination of perfect form and raw strength lend additional damage to your Longsword attacks.',
					descAdv: [
						'Physical Damage with Longswords: +4, Bonus Damage with Longswords: +5%',
						'Physical Damage with Longswords: +5, Bonus Damage with Longswords: +10%',
						'Physical Damage with Longswords: +6, Bonus Damage with Longswords: +15%',
						'Physical Damage with Longswords: +8, Bonus Damage with Longswords: +20%',
						'Physical Damage with Longswords: +10, Bonus Damage with Longswords: +25%',
						'Physical Damage with Longswords: +10, Bonus Damage with Longswords: +30%'
					],  
					requires: '',
					requiresPoint: 0,
					reqAbility: false,
					maxLevel: 5,
					currentLevel: 0
				},
				{
					name: 'Hammer Mastery',
					type: '[Passive]',
					desc: 'Raw muscle and a superb sense of balance makes you incredibly effective with the mighty Hammer.',
					descAdv: [
						'Physical Damage with Hammers: +8, Bonus Damage with Hammers: +5%',
						'Physical Damage with Hammers: +9, Bonus Damage with Hammers: +10%',
						'Physical Damage with Hammers: +10, Bonus Damage with Hammers: +15%',
						'Physical Damage with Hammers: +12, Bonus Damage with Hammers: +20%',
						'Physical Damage with Hammers: +14, Bonus Damage with Hammers: +25%',
						'Physical Damage with Hammers: +16, Bonus Damage with Hammers: +30%'
					],  
					requires: '',
					requiresPoint: 0,
					reqAbility: false,
					maxLevel: 5,
					currentLevel: 0
				},
				{
					name: 'Harpoon',
					type: '[Active]',
					desc: 'Snag an enemy and pull it back to you. May have the opposite effect with larger enemies.',
					descAdv: [
						'Physical Damage: 10, Piercing Damage: 8, Mana cost: 20',
						'Physical Damage: 15, Piercing Damage: 11, Mana cost: 23',
						'Physical Damage: 25, Piercing Damage: 14, Mana cost: 26',
						'Physical Damage: 30, Piercing Damage: 17, Mana cost: 30',
						'Physical Damage: 35, Piercing Damage: 20, Mana cost: 30'
					],  
					requires: '',
					requiresPoint: 0,
					reqAbility: false,
					maxLevel: 3,
					currentLevel: 0
				},
				{
					name: 'Skillful Defense',
					type: '[Passive]',
					desc: 'Your masterful use of shields greatly increases your damage resistance while blocking. At the highest level, you unlock a special Shield Bash move.',
					descAdv: [
						'Damage Mitigation while blocking: +10%',
						'Damage Mitigation while blocking: +15%',
						'Damage Mitigation while blocking: +20%',
						'Damage Mitigation while blocking: +25%',
						'Damage Mitigation while blocking: +30%',
					],  
					requires: '',
					requiresPoint: 0,
					reqAbility: false,
					maxLevel: 4,
					currentLevel: 0
				},
			],
			[
				{
					name: 'Brutal Weaponry II',
					type: '[Weapon Attacks]',
					desc: 'Unlocks special attacks from Block for the Longsword, Greatsword, and Hammer.',
					descAdv: [
						'Phantom Edge - Attack with the Longsword while blocking to duck under enemy attacks followed by a strong slash. Guillotine - Attack with the Greatsword while blocking to perform two heavy slams. Spine Bender - Attack with the Hammer while blocking to perform a devastating kick, hook, and smash.',
						'Phantom Edge, Guillotine, and Spine Bender can apply additional damage over time.',
						'Phantom Edge, Guillotine, and Spine Bender generate bonus fate.'
					],  
					requires: 'Requires 5 points in Might abilities, Requires Brutal Weaponry I',
					requiresPoint: 5,
					reqAbility: true,
					reqAbility1: 0,
					reqAbility2: 0,
					maxLevel: 3,
					currentLevel: 0
				},
				{
					name: 'Greatsword Mastery',
					type: '[Passive]',
					desc: 'Your brute strength enables you to wield the Greatsword with spectacular results.',
					descAdv: [
						'Physical Damage with Greatswords: +8, Bonus damage with Greatswords: +5%',
						'Physical Damage with Greatswords: +9, Bonus damage with Greatswords: +10%',
						'Physical Damage with Greatswords: +10, Bonus damage with Greatswords: +15%',
						'Physical Damage with Greatswords: +12, Bonus damage with Greatswords: +20%',
						'Physical Damage with Greatswords: +14, Bonus damage with Greatswords: +25%',
						'Physical Damage with Greatswords: +17, Bonus damage with Greatswords: +30%'
					],  
					requires: 'Requires 5 points in Might abilities',
					requiresPoint: 5,
					reqAbility: false,
					maxLevel: 6,
					currentLevel: 0
				},
				{
					name: 'Quake',
					type: '[Active]',
					desc: 'Smash the ground to cause a tremor, damaging enemies in an area. Cast the spell rapidly in succession to chain up to 3 attacks.',
					descAdv: [
						'Physical Damage per hit: 24-42, Mana cost per hit: 14',
						'Physical Damage per hit: 32-54, Mana cost per hit: 15',
						'Physical Damage per hit: 40-66, Mana cost per hit: 16',
						'Physical Damage per hit: 48-78, Mana cost per hit: 18',
						'Physical Damage per hit: 46-90, Mana cost per hit: 20'
					],  
					requires: 'Requires 5 points in Might abilities',
					requiresPoint: 5,
					reqAbility: false,
					maxLevel: 5,
					currentLevel: 0
				},
				{
					name: 'Adrenaline Surge',
					type: '[Passive]',
					desc: 'The threat of immediate death grants you a chance for a surge of health and a short span of greatly increased damage whenever you Health falls below 25%. Adrenaline Surge heals 20% health, grants bonus damage for 10 seconds, and has a 300 second cooldown.',
					descAdv: [
						'Chance to Trigger: 30%, Bonus Damage: 30%',
						'Chance to Trigger: 40%, Bonus Damage: 40%',
						'Chance to Trigger: 50%, Bonus Damage: 50%',
						'Chance to Trigger: 60%, Bonus Damage: 60%',
						'Chance to Trigger: 70%, Bonus Damage: 70%'
					],  
					requires: 'Requires 5 points in Might abilities',
					requiresPoint: 5,
					reqAbility: false,
					maxLevel: 5,
					currentLevel: 0
				},
				{
					name: 'Hardy Constitution',
					type: '[Passive]',
					desc: 'Your durable nature enables you to survive nearly anything, from sword wounds to magic flames. ',
					descAdv: [
						'Bonus Health: +5%, Bonus Elemental Resistance: +3%',
						'Bonus Health: +8%, Bonus Elemental Resistance: +5%',
						'Bonus Health: +11%, Bonus Elemental Resistance: +7%',
						'Bonus Health: +14%, Bonus Elemental Resistance: +9%',
						'Bonus Health: +17%, Bonus Elemental Resistance: +11%',
						'Bonus Health: +20%, Bonus Elemental Resistance: +13'
					],                 
					requires: 'Requires 5 points in Might abilities',
					requiresPoint: 5,
					reqAbility: false,
					maxLevel: 6,
					currentLevel: 0
				},
			],
			[
				{
					name: 'Concussive Force',
					type: '[Passive]',
					desc: 'Master over the art of blunt trauma grants you increased damage versus Stunned enemies.',
					descAdv: [
						'Bonus Damage: +20%',
						'Bonus Damage: +30%',
						'Bonus Damage: +40%',
						'Bonus Damage: +50%',
						'Bonus Damage: +60%'
					],
					requires: 'Requires 20 points in Might abilities',
					requiresPoint: 20,
					reqAbility: false,
					maxLevel: 5,
					currentLevel: 0
				},
				{
					name: 'Aftershock',
					type: '[Upgrade]',
					desc: 'The final hit of your Quake causes lasting tremors which can Stun your foes, and all Quake damage is increased.',
					descAdv: [
						'Bonus Quake Damage: +10%, Chance to Stun: 20%, Additional Quake Mana Cost: 10',
						'Bonus Quake Damage: +20%, Chance to Stun: 25%, Additional Quake Mana Cost: 12',
						'Bonus Quake Damage: +30%, Chance to Stun: 30%, Additional Quake Mana Cost: 14',
						'Bonus Quake Damage: +40%, Chance to Stun: 35%, Additional Quake Mana Cost: 16',
						'Bonus Quake Damage: +50%, Chance to Stun: 40%, Additional Quake Mana Cost: 18'
					],
					requires: 'Requires 20 points in Might abilities, Requires Quake',
					requiresPoint: 20,
					reqAbility: true,
					reqAbility1: 1,
					reqAbility2: 2,
					maxLevel: 5,
					currentLevel: 0
				},
				{
					name: 'Relentless Assault',
					type: '[Active]',
					desc: 'Grants a short-term resistance to interrupt at the expense of armor, allowing you to shrug off blows while taking slightly more damage.',
					descAdv: [
						'Duration (seconds): 6, Armor reduction: -50%, Mana Cost: 25',
						'Duration (seconds): 8, Armor reduction: -40%, Mana Cost: 30',
						'Duration (seconds): 10, Armor reduction: -30%, Mana Cost: 35',
						'Duration (seconds): 13, Armor reduction: -20%, Mana Cost: 40',
						'Duration (seconds): 16, Armor reduction: -10%, Mana Cost: 45',
						'Duration (seconds): 20, Armor reduction: -0%, Mana Cost: 50'
					],
					requires: 'Requires 20 points in Might abilities',
					reqAbility: false,
					requiresPoint: 20,
					maxLevel: 6,
					currentLevel: 0
				},
				{
					name: 'Power Strike',
					type: '[Upgrade]',
					desc: 'You achieve new heights of focus while an Adrenaline Surge is in effect, increasing your chance to deal Critical Hits.',
					descAdv: [
						'Increased Critical Hit Chance: +5%',
						'Increased Critical Hit Chance: +10%',
						'Increased Critical Hit Chance: +15%',
						'Increased Critical Hit Chance: +20%',
						'Increased Critical Hit Chance: +25%'
					],
					requires: 'Requires 20 points in Might abilities, Requires Adrenaline Surge',
					requiresPoint: 20,
					reqAbility: true,
					reqAbility1: 1,
					reqAbility2: 3,
					maxLevel: 5,
					currentLevel: 0
				},
				{
					name: 'Concussive Force',
					type: '[Passive]',
					desc: 'Master over the art of blunt trauma grants you increased damage versus Stunned enemies.',
					descAdv: [
						'Bonus Damage: +20%',
						'Bonus Damage: +30%',
						'Bonus Damage: +40%',
						'Bonus Damage: +50%',
						'Bonus Damage: +60%'
					],
					requires: 'Requires 20 points in Might abilities',
					requiresPoint: 20,
					reqAbility: false,
					maxLevel: 5,
					currentLevel: 0
				}
			],
			[
				{
					name: 'Brutal Weaponry III',
					type: '[Weapon Attacks]',
					desc: 'Unlocks special attacks from Dodge for the Longsword and Greatsword.',
					descAdv: [
						'Horizon Edge - attack with the Longsword while dodging to slice across multiple enemies. Gravedigger - Attack with the Greatsword while dodging to perform a leaping ground strike.',
						'Horizon Edge and Gravedigger can apply additional damage over time.',
						'Horizon Edge and Gravedigger generate bonus fate.'
					],
					requires: 'Requires 35 points in Might abilities, Requires Brutal Weaponry II',
					requiresPoint: 35,
					reqAbility: true,
					reqAbility1: 1,
					reqAbility2: 0,
					maxLevel: 3,
					currentLevel: 0
				},
				{
					name: 'Bulwark',
					type: '[Passive]',
					desc: 'Your impenetrable defenses often surprise your foes, stunning them as their blows bounce off of you in a fierce melee.',
					descAdv: [
						'Chance to Stun: +1%',
						'Chance to Stun: +2%',
						'Chance to Stun: +3%',
						'Chance to Stun: +4%',
						'Chance to Stun: +5%'
					],
					requires: 'Requires 35 points in Might abilities',
					requiresPoint: 35,
					reqAbility: false,
					maxLevel: 5,
					currentLevel: 0
				},
				{
					name: 'Battle Frenzy',
					type: '[Active - Sustained]',
					desc: 'Go into a berserker rage, dealing greater and greater amounts of damage with each enemy you defeat in a short time. The character is put into a berserker rage for a short period of time, dealing greater amounts of damage with each enemy defeated. The first kill grants 10% bonus damage, then the second kill grants 20% bonus damage. Battle Frenzy has a sustained mana cost equal to 30% of your maximum Mana.',
					descAdv: [
						'Maximum damage bonus unlocked: +20%, Kill 2 for maximum damage bonus, Buff duration: 10 seconds',
						'Maximum damage bonus unlocked: +40%, Kill 3 for maximum damage bonus, Buff duration: 11 seconds',
						'Maximum damage bonus unlocked: +60%, Kill 4 for maximum damage bonus, Buff duration: 12 seconds',
						'Maximum damage bonus unlocked: +80%, Kill 5 for maximum damage bonus, Buff duration: 13 seconds',
						'Maximum damage bonus unlocked: +100%, Kill 6 for maximum damage bonus, Buff duration: 15 seconds'
					],
					requires: 'Requires 35 points in Might abilities',
					reqAbility: false,
					requiresPoint: 35,
					maxLevel: 5,
					currentLevel: 0
				},
				{
					name: 'Vengeance',
					type: '[Upgrade]',
					desc: 'Your refined battle techniques allow you to reflect damage back at your opponents whenever Relentless Assault is in effect.',
					descAdv: [
						'Chance to reflect: 10%',
						'Chance to reflect: 12%',
						'Chance to reflect: 14%',
						'Chance to reflect: 16%',
						'Chance to reflect: 18%',
						'Chance to reflect: 20%'
					],
					requires: 'Requires 35 points in Might abilities, Requires Relentless Assault',
					reqAbility: true,
					reqAbility1: 2,
					reqAbility2: 2,
					requiresPoint: 35,
					maxLevel: 6,
					currentLevel: 0
				}
			],
			[
				{
					name: 'Brutal Weaponry IV',
					type: '[Weapon Attacks]',
					desc: 'Unlocks special attacks from Parry for the Longsword, Greatsword, and Hammer.',
					descAdv: [
						'Riposte - After a timed Parry, attack with the Longsword to perform a stylish combo. Gut Thrust - After a timed Parry, attack with the Greatsword to impale and launch your enemy. Crushing Blow - After a timed Parry, attack with the Hammer to lift and smash your enemy.',
						'Riposte, Gut Thrust, and Crushing Blow can apply additional damage over time.',
						'Riposte, Gut Thrust, and Crushing Blow generate bonus fate.'
					],
					requires: 'Requires 50 points in Might abilities, Requires Brutal Weaponry III',
					reqAbility: true,
					reqAbility1: 3,
					reqAbility2: 0,
					requiresPoint: 50,
					maxLevel: 3,
					currentLevel: 0
				},
				{
					name: 'Stoneskin',
					type: '[Upgrade]',
					desc: 'Your unquenchable rage grants you Physical and Piercing Damage Resistance while Battle Frenzy is active.',
					descAdv: [
						'Additional Physical and Piercing Resistance: +4%',
						'Additional Physical and Piercing Resistance: +8%',
						'Additional Physical and Piercing Resistance: +12%',
						'Additional Physical and Piercing Resistance: +16%',
						'Additional Physical and Piercing Resistance: +20%'
					],
					requires: 'Requires 50 points in Might abilities, Requires Battle Frenzy',
					reqAbility: true,
					reqAbility1: 3,
					reqAbility2: 2,
					requiresPoint: 50,
					maxLevel: 5,
					currentLevel: 0
				},
				{
					name: 'Bloodlust',
					type: '[Upgrade]',
					desc: 'While Relentless Assault is in effect, each of your strikes may grant you a measure of renewed vigor.',
					descAdv: [
						'Chance to steal health	Amount of health stolen: 20%, Amount of health stolen: 20',
						'Chance to steal health	Amount of health stolen: 20%, Amount of health stolen: 22',
						'Chance to steal health	Amount of health stolen: 20%, Amount of health stolen: 24',
						'Chance to steal health	Amount of health stolen: 20%, Amount of health stolen: 26',
						'Chance to steal health	Amount of health stolen: 20%, Amount of health stolen: 28'
					],
					requires: 'Requires 50 points in Might abilities, Requires Relentless Assault, Requires Vengeance',
					reqAbility: true,
					reqAbility1: 3,
					reqAbility2: 3,
					requiresPoint: 50,
					maxLevel: 5,
					currentLevel: 0
				},
				{
					name: 'War Cry',
					type: '[Active]',
					desc: 'Let loose a terrifying cry that intimidates enemies, reducing their Damage output. Can be upgraded to knock down enemies.',
					descAdv: [
						'Enemy damage reduction: -20%, Duration: 6 seconds, Mana cost: 15',
						'Enemy damage reduction: -25%, Duration: 8 seconds, Mana cost: 20',
						'Enemy damage reduction: -30%, Duration: 10 seconds, Mana cost: 25',
						'Enemy damage reduction: -35%, Duration: 12 seconds, Mana cost: 30',
						'Enemy damage reduction: -40%, Duration: 14 seconds, Mana cost: 35',
						'Enemy damage reduction: -45%, Duration: 16 seconds, Mana cost: 40'
					],                           
					requires: 'Requires 50 points in Might abilities',
					reqAbility: false,
					requiresPoint: 50,
					maxLevel: 6,
					currentLevel: 0
				}
			],
			[
				{
					name: 'Celerity',
					type: '[Upgrade]',
					desc: 'Unbridled rage propels you to inhuman speed while in Battle Frenzy. Once this ability is unlocked, Battle Frenzy leaves a trail of light as the player moves.',
					descAdv: [
						'Bonus Attack Speed: +5%',
						'Bonus Attack Speed: +10%',
						'Bonus Attack Speed: +15%',
						'Bonus Attack Speed: +20%'

					],
					requires: 'Requires 70 points in Might abilities, Requires Battle Frenzy, Requires Stoneskin',
					reqAbility: true,
					reqAbility1: 4,
					reqAbility2: 1,
					requiresPoint: 70,
					maxLevel: 4,
					currentLevel: 0
				},
				{
					name: 'Wrath',
					type: '[Active]',
					desc: 'Jump skyward, hurling nearby enemies along with you into the air and slamming them back down. Button mash to increase damage.',
					descAdv: [
						'Physical Damage per impulse: 50, Physical Damage on final hit: 300, Mana cost: 120 +10 per impulse',
						'Physical Damage per impulse: 55, Physical Damage on final hit: 360, Mana cost: 130 +10 per impulse',
						'Physical Damage per impulse: 60, Physical Damage on final hit: 420, Mana cost: 140 +10 per impulse',
						'Physical Damage per impulse: 65, Physical Damage on final hit: 480, Mana cost: 150 +10 per impulse',
						'Physical Damage per impulse: 70, Physical Damage on final hit: 540, Mana cost: 160 +10 per impulse',
						'Physical Damage per impulse: 75, Physical Damage on final hit: 600, Mana cost: 170 +10 per impulse'
					],
					requires: 'Requires 70 points in Might abilities, Requires Quake, Requires Aftershock',
					reqAbility: true,
					reqAbility1: 2,
					reqAbility2: 1,
					requiresPoint: 70,
					maxLevel: 6,
					currentLevel: 0
				},
				{
					name: 'Terror',
					type: '[Upgrade]',
					desc: 'Your War Cry gains the ability to reduce enemy Armor, opening foes up for your attacks and sometimes causing them to panic.',
					descAdv: [
						'Enemy armor reduction: -10%, Chance to cause Panic: 0%',
						'Enemy armor reduction: -20%, Chance to cause Panic: 0%',
						'Enemy armor reduction: -30%, Chance to cause Panic: 10%',
						'Enemy armor reduction: -40%, Chance to cause Panic: 14%',
						'Enemy armor reduction: -50%, Chance to cause Panic: 18%',
						'Enemy armor reduction: -60%, Chance to cause Panic: 20%'
					],
					requires: 'Requires 70 points in Might abilities, Requires War Cry',
					reqAbility: true,
					reqAbility1: 4,
					reqAbility2: 3,
					requiresPoint: 70,
					maxLevel: 6,
					currentLevel: 0
				}
			]
		],
		points: 0
	},
	{
		row: [
			[
				{
					name: 'Precise Weaponry I',
					type: '[Weapon Attacks]',
					desc: 'Unlocks Charge special attacks for Daggers and Faeblades.',
					reqAbility: false,
					reqAbility1: '',
					reqAbility2: '',
					requires: '',
					descAdv: [
						' Daggers: Shadow Strike - Hold and release the Daggers to begin a dashing combo that can be chained up to 5 times. Faeblade: Twisted Claw - Hold and release the Faeblades attack to spiral through your enemies.',
						'Shadow Strike and Twisted Claw apply an additional damage over time effect.',
						'Shadow Strike and Twisted Claw generate extra Fate.'
					],
					maxLevel: 3,
					currentLevel: 0,
					requiresPoint: 0
				},
				{
					name: 'Dagger Mastery',
					type: '[Passive]',
					desc: 'Your prowess with Daggers lets you get the most out of every cut and thrust. Adds Physical Damage to Daggers and an overall Daggers damage boost.',
					reqAbility: false,
					reqAbility1: '',
					reqAbility2: '',
					requires: '',
					descAdv: [
						'Physical Damage with Daggers: +2, Bonus Damage with Daggers: +5%',
						'Physical Damage with Daggers: +3, Bonus Damage with Daggers: +10%',
						'Physical Damage with Daggers: +4, Bonus Damage with Daggers: +15%',
						'Physical Damage with Daggers: +6, Bonus Damage with Daggers: +20%',
						'Physical Damage with Daggers: +8, Bonus Damage with Daggers: +25%',
						'Physical Damage with Daggers: +10, Bonus Damage with Daggers: +30%'
					],
					maxLevel: 6,
					currentLevel: 0,
					requiresPoint: 0
				},
				{
					name: 'Longbow Mastery',
					type: '[Passive]',
					desc: 'Your skill at archery grants you a large bonus to damage while using a Longbow and increases the number of arrows that can be fired before reloading your quiver. Adds Physical Damage to Longbows and an overall Longbow damage boost. Increases the number of arrows in your quiver. Unlocking this ability increases the size of your quiver by one.',
					reqAbility: false,
					reqAbility1: '',
					reqAbility2: '',
					requires: '',
					descAdv: [
						'Physical Damage with Longbows: +2, Bonus Damage with Longbows: +5%',
						'Physical Damage with Longbows: +3, Bonus Damage with Longbows: +10%',
						'Physical Damage with Longbows: +4, Bonus Damage with Longbows: +15%',
						'Physical Damage with Longbows: +5, Bonus Damage with Longbows: +20%',
						'Physical Damage with Longbows: +6, Bonus Damage with Longbows: +25%',
						'Physical Damage with Longbows: +7, Bonus Damage with Longbows: +30%'
					],
					maxLevel: 6,
					currentLevel: 0,
					requiresPoint: 0
				},
				{
					name: 'Shadow Flare',
					type: '[Active]',
					desc: 'Weaving a burst of shadow magic to wound and stagger enemies in an arc before you. Quickly press the button again to throw a volley of shadowy blades, dealing Pierce and Bleeding Damage.',
					reqAbility: false,
					reqAbility1: '',
					reqAbility2: '',
					requires: '',
					descAdv: [
						'Attack 1 Range: 4 meters, Attack 1 Physical Damage: 3, Attack 1 Cost: 5 mana, Attack 2: 3 projectiles, Attack 2 Piercing Damage: 20, Attack 2 Bleeding Damage: 10 over 5s, Attack 2 Cost: 5 mana',
						'Attack 1 Range: 5 meters, Attack 1 Physical Damage: 5, Attack 1 Cost: 7 mana, Attack 2: 3 projectiles, Attack 2 Piercing Damage: 35, Attack 2 Bleeding Damage: 10 over 5s, Attack 2 Cost: 10 mana',
						'Attack 1 Range: 5 meters, Attack 1 Physical Damage: 8, Attack 1 Cost: 10 mana, Attack 2: 5 projectiles, Attack 2 Piercing Damage: 50, Attack 2 Bleeding Damage: 12 over 6s, Attack 2 Cost: 15 mana',
						'Attack 1 Range: 6 meters, Attack 1 Physical Damage: 12, Attack 1 Cost: 15 mana, Attack 2: 5 projectiles, Attack 2 Piercing Damage: 65, Attack 2 Bleeding Damage: 12 over 6s, Attack 2 Cost: 20 mana',
						'Attack 1 Range: 6 meters, Attack 1 Physical Damage: 17, Attack 1 Cost: 20 mana, Attack 2: 5 projectiles, Attack 2 Piercing Damage: 70, Attack 2 Bleeding Damage: 14 over 7s, Attack 2 Cost: 25 mana'
					],
					maxLevel: 5,
					currentLevel: 0,
					requiresPoint: 0
				},
				{
					name: 'Assassin\'s Art',
					type: '[Passive]',
					desc: 'Your deadly grace allows you to deal tremendous amounts of damage from stealth. Unlocks new sneak attacks with Daggers or Faeblades that can instantly kill an unaware enemy if you deal enough damage. Also increases the damage of these sneak attacks and all critical strike damage dealt on unaware enemies while in stealth.',
					reqAbility: false,
					reqAbility1: '',
					reqAbility2: '',
					requires: '',
					descAdv: [
						'Critical Damage when attacking from Stealth: +10%, Increased sneak attack damage: +0%',
						'Critical Damage when attacking from Stealth: +20%, Increased sneak attack damage: +30%',
						'Critical Damage when attacking from Stealth: +30%, Increased sneak attack damage: +60%',
						'Critical Damage when attacking from Stealth: +40%, Increased sneak attack damage: +90%',
						'Critical Damage when attacking from Stealth: +50%, Increased sneak attack damage: +120%',
						'Critical Damage when attacking from Stealth: +60%, Increased sneak attack damage: +150%'
					],
					maxLevel: 6,
					currentLevel: 0,
					requiresPoint: 0
				}
			],
			[
				{
					name: 'Precise Weaponry II',
					type: '[Weapon Attacks]',
					desc: 'Unlocks Delayed special attacks for Daggers and Faeblades.',
					reqAbility: true,
					reqAbility1: 0,
					reqAbility2: 0,
					requires: 'Requires 5 points in Finesse abilities, Requires Precise Weaponry I',
					descAdv: [
						'Crossfire - A delayed attack with the Daggers that stabs and slices. Timing the second attack perfectly guarantees a critical hit. Talon Strikes - A delayed attack with the Faeblades that launches your enemy into the air.',
						'Both Crossfire and Talon Strikes apply an additional damage over time effect.',
						'Both Crossfire and Talon Strikes generate extra Fate.'
					],
					maxLevel: 3,
					currentLevel: 0,
					requiresPoint: 5
				},
				{
					name: 'Faeblade Mastery',
					type: '[Passive]',
					desc: 'Diligent practice has granted you mastery over the Faeblades, chief weapon of the Summer Court Fae. Adds Physical Damage to Faeblades and an overall Faeblade damage boost.',
					reqAbility: false,
					reqAbility1: 0,
					reqAbility2: 0,
					requires: 'Requires 5 points in Finesse abilities, Requires Precise Weaponry I',
					descAdv: [
						'Physical Damage with Faeblades: +2, Bonus Damage with Faeblades: +5%',
						'Physical Damage with Faeblades: +3, Bonus Damage with Faeblades: +10%',
						'Physical Damage with Faeblades: +4, Bonus Damage with Faeblades: +15%',
						'Physical Damage with Faeblades: +5, Bonus Damage with Faeblades: +20%',
						'Physical Damage with Faeblades: +6, Bonus Damage with Faeblades: +25%',
						'Physical Damage with Faeblades: +7, Bonus Damage with Faeblades: +30%'
					],
					maxLevel: 6,
					currentLevel: 0,
					requiresPoint: 5
				},
				{
					name: 'Drawpower',
					type: '[Passive]',
					desc: 'With your incredible drawpower, each arrow you fire can penetrate even the thickest armor or carapace. Also Increases the size of your quiver. Unlocking this ability increases the size of your quiver by one.',
					reqAbility: true,
					reqAbility1: 0,
					reqAbility2: 2,
					requires: 'Requires 5 points in Finesse abilities, Requires Longbow Mastery',
					descAdv: [
						'Piercing Damage with Longbows: +1, Bonus Piercing Damage with Longbows: +9%',
						'Piercing Damage with Longbows: +2, Bonus Piercing Damage with Longbows: +12%',
						'Piercing Damage with Longbows: +3, Bonus Piercing Damage with Longbows: +15%',
						'Piercing Damage with Longbows: +4, Bonus Piercing Damage with Longbows: +18%',
						'Piercing Damage with Longbows: +5, Bonus Piercing Damage with Longbows: +21%'
					],
					maxLevel: 5,
					currentLevel: 0,
					requiresPoint: 5
				},
				{
					name: 'Envenomed Edge',
					type: '[Active - Sustained]',
					desc: 'The careful application of vile poisons to all your edged weapons and arrowheads allows you to weaken your opponents. That ability adds Poison Damage to all edged-weapon attacks. "Edged weapons" means: Daggers, Faeblades, Longswords, Greatswords, and Chakrams. That at all levels there is a 15% chance for the enemy to be poisoned for 5 seconds and the ability has a sustained mana cost of 25% of your maximum Mana.',
					reqAbility: false,
					reqAbility1: 0,
					reqAbility2: 0,
					requires: 'Requires 5 points in Finesse abilities',
					descAdv: [
						'Poison Damage Dealt: 10',
						'Poison Damage Dealt: 20',
						'Poison Damage Dealt: 30',
						'Poison Damage Dealt: 40',
						'Poison Damage Dealt: 50',
						'Poison Damage Dealt: 60'
					],
					maxLevel: 6,
					currentLevel: 0,
					requiresPoint: 5
				},
				{
					name: 'Frost Trap',
					type: '[Active]',
					desc: 'Plant a Frost Trap which causes Ice and Freezing damage to all nearby enemies when it explodes. A maximum of 4 traps can be placed at a time.',
					reqAbility: false,
					reqAbility1: 0,
					reqAbility2: 0,
					requires: 'Requires 5 points in Finesse abilities',
					descAdv: [
						'Ice Damage: 30, Freezing Damage: 4 over 2 seconds, Mana cost: 20',
						'Ice Damage: 35, Freezing Damage: 6 over 3 seconds, Mana cost: 25',
						'Ice Damage: 40, Freezing Damage: 10 over 4 seconds, Mana cost: 30',
						'Ice Damage: 45, Freezing Damage: 12 over 5 seconds, Mana cost: 35'
					],
					maxLevel: 4,
					currentLevel: 0,
					requiresPoint: 5
				}
			],
			[
				{
					name: 'Arrow Storm',
					type: '[Weapon Attacks]',
					desc: 'Your skill with the Longbow allows you to fire a volley of arrows into the sky, raining death down on your foes. Also Increases the size of your quiver. Unlocking this ability increases the size of your quiver by one.',
					reqAbility: true,
					reqAbility1: 1,
					reqAbility2: 2,
					requires: 'Requires 20 points in Finesse abilities, Requires Longbow Mastery, Requires Drawpower',
					descAdv: [
						'Unlocks the Arrow Storm move.',
						'Increase its damage by 20% and 40%, respectively',
						'Increase its damage by 20% and 40%, respectively'
					],
					maxLevel: 3,
					currentLevel: 0,
					requiresPoint: 20
				},
				{
					name: 'Inoculation',
					type: '[Passive]',
					desc: 'Your extensive experience with Poisons grants you heightened resistance to their effects.',
					reqAbility: true,
					reqAbility1: 1,
					reqAbility2: 3,
					requires: 'Requires 20 points in Finesse abilities, Requires Envenomed Edge',
					descAdv: [
						'Increased Poison Resistance: +10%',
						'Increased Poison Resistance: +20%',
						'Increased Poison Resistance: +30%',
						'Increased Poison Resistance: +40%',
						'Increased Poison Resistance: +50%'
					],
					maxLevel: 5,
					currentLevel: 0,
					requiresPoint: 20
				},
				{
					name: 'Icy Explosion',
					type: '[Upgrade]',
					desc: 'Your roguish ingenuity allows you to build Frost Traps deal additional damage and disorient your enemies.',
					reqAbility: true,
					reqAbility1: 1,
					reqAbility2: 4,
					requires: 'Requires 20 points in Finesse abilities, Requires Frost Trap',
					descAdv: [
						'Increased Frost Trap damage: +10, Chance to Stun: 20%, Stun Duration (seconds): 3',
						'Increased Frost Trap damage: +15, Chance to Stun: 25%, Stun Duration (seconds): 3',
						'Increased Frost Trap damage: +20, Chance to Stun: 30%, Stun Duration (seconds): 4',
						'Increased Frost Trap damage: +25, Chance to Stun: 35%, Stun Duration (seconds): 4',
						'Increased Frost Trap damage: +30, Chance to Stun: 40%, Stun Duration (seconds): 5'
					],
					maxLevel: 5,
					currentLevel: 0,
					requiresPoint: 20
				},
				{
					name: 'Lunge',
					type: '[Active]',
					desc: 'Lunge past your foes with preternatural speed to attack them from behind. The initial cast puts the player directly behind the target; the player then must press the attack button to actually strike.',
					reqAbility: false,
					reqAbility1: 0,
					reqAbility2: 0,
					requires: 'Requires 20 points in Finesse abilities',
					descAdv: [
						'Damag: 40, Mana cost: 40',
						'Damag: 55, Mana cost: 45',
						'Damag: 70, Mana cost: 50',
						'Damag: 85, Mana cost: 55',
						'Damag: 100, Mana cost: 60'
					],
					maxLevel: 5,
					currentLevel: 0,
					requiresPoint: 20
				}
			],
			[
				{
					name: 'Precise Weaponry III',
					type: '[Weapon Attacks]',
					desc: 'Unlocks special attacks from Dodge for Daggers and Faeblades.',
					reqAbility: true,
					reqAbility1: 1,
					reqAbility2: 0,
					requires: 'Requires 35 points in Finesse abilities, Requires Precise Weaponry II',
					descAdv: [
						'Cross Slash - Attack with the Daggers while dodging to perform a launching attack. Cyclone - Attack with the Faeblades while dodging to perform a spinning leap attack.',
						'Both Cross Slash and Cyclone apply an additional damage over time effect.',
						'Both Cross Slash and Cyclone generate extra Fate.'
					],
					maxLevel: 3,
					currentLevel: 0,
					requiresPoint: 35
				},
				{
					name: 'Smoke Bomb',
					type: '[Active]',
					desc: 'Throw down a smokescreen to stun enemies and blind them to your presence for a short duration. When activating this skill, the character becomes invisible for 6 seconds. The duration of the invisibility does not increase when leveling up. However, the stun duration of enemies affected does increase with each of the four levels of this ability. The invisibility acts as a faux stealth, as such you can quickly sneak behind and attack as if from stealth. This can mean that the smoke bomb is a free assassination on one target.',
					reqAbility: false,
					reqAbility1: 0,
					reqAbility2: 0,
					requires: 'Requires 35 points in Finesse abilities',
					descAdv: [
						'Damage: 7, Stun Duration: 2, Mana Cost: 40',
						'Damage: 10, Stun Duration: 3, Mana Cost: 45',
						'Damage: 14, Stun Duration: 4, Mana Cost: 50',
						'Damage: 19, Stun Duration: 5, Mana Cost: 55'
					],
					maxLevel: 4,
					currentLevel: 0,
					requiresPoint: 35
				},
				{
					name: 'Barbed Arrows',
					type: '[Passive]',
					desc: 'By Affixing small barbs to your arrows, each Longbow shot has a chance to deal heavy Bleeding Damage to your foes. Also Increases the size of your quiver. Unlocking this ability increases the size of your quiver by one.',
					reqAbility: true,
					reqAbility1: 2,
					reqAbility2: 0,
					requires: 'Requires 35 points in Finesse abilities, Requires Longbow Mastery, Requires Drawpower, Requires Arrow Storm',
					descAdv: [
						'Chance to cause Bleeding Damage: 10%, Bleeding Damage inflicted over 5 seconds: 80',
						'Chance to cause Bleeding Damage: 12%, Bleeding Damage inflicted over 5 seconds: 90',
						'Chance to cause Bleeding Damage: 14%, Bleeding Damage inflicted over 5 seconds: 100',
						'Chance to cause Bleeding Damage: 17%, Bleeding Damage inflicted over 5 seconds: 110',
						'Chance to cause Bleeding Damage: 20%, Bleeding Damage inflicted over 5 seconds: 120'
					],
					maxLevel: 5,
					currentLevel: 0,
					requiresPoint: 35
				},
				{
					name: 'Enduring Agony',
					type: '[Passive]',
					desc: 'Secret techniques enable you to extend the duration of all you Poison and Bleeding attacks. Also increases Shadow Flare damage. Enduring Agony does not increase the damage per second of bleeding and poison abilities, but it does increase their duration, which effectively increases their damage by extending the duration of the effect.',
					reqAbility: true,
					reqAbility1: 0,
					reqAbility2: 3,
					requires: 'Requires 35 points in Finesse abilities, Requires Shadow Flare',
					descAdv: [
						'Bleeding and Poison Damage Increase: +20%, Shadow Flare bonus damage: +10%',
						'Bleeding and Poison Damage Increase: +30%, Shadow Flare bonus damage: +20%',
						'Bleeding and Poison Damage Increase: +40%, Shadow Flare bonus damage: +30%',
						'Bleeding and Poison Damage Increase: +55%, Shadow Flare bonus damage: +40%',
						'Bleeding and Poison Damage Increase: +70%, Shadow Flare bonus damage: +50%'
					],
					maxLevel: 5,
					currentLevel: 0,
					requiresPoint: 35
				},
				{
					name: 'Blade Honing',
					type: '[Active - Sustained]',
					desc: 'The razor sharp blades of your weapons cut into your foes with ease. While this Ability is active, Critical Hit Damage for Longswords, Daggers, Faeblades, and Greatswords is substantially increased. This ability has a sustained mana cost equal to 15% of your maximum Mana.',
					reqAbility: false,
					reqAbility1: 0,
					reqAbility2: 0,
					requires: 'Requires 35 points in Finesse abilities',
					descAdv: [
						'Increased Critical Hit damage: +10%',
						'Increased Critical Hit damage: +15%',
						'Increased Critical Hit damage: +20%',
						'Increased Critical Hit damage: +25%',
						'Increased Critical Hit damage: +30%'
					],
					maxLevel: 5,
					currentLevel: 0,
					requiresPoint: 35
				}
			],
			[
				{
					name: 'Precise Weaponry IV',
					type: '[Weapon Attacks]',
					desc: 'Unlocks special attacks from Parry for Daggers and Faeblades.',
					reqAbility: true,
					reqAbility1: 3,
					reqAbility2: 0,
					requires: 'Requires 50 points in Finesse abilities, Requires Precise Weaponry III',
					descAdv: [
						'Punishment - After a timed Parry, attack with the Daggers to perform a series of rapid strikes. Savage Wing - After a timed Parry, attack with the Faeblades to perform a spinning jump attack.',
						'Both Punishment and Savage Wing apply an additional damage over time effect.',
						'Both Punishment and Savage Wing generate extra Fate.'
					],
					maxLevel: 3,
					currentLevel: 0,
					requiresPoint: 50
				},
				{
					name: 'Poison Bomb',
					type: '[Weapon Attacks]',
					desc: 'Further tinkering has enabled you to add a deadly Poison cloud to the effects of your Smoke Bomb.',
					reqAbility: true,
					reqAbility1: 3,
					reqAbility2: 1,
					requires: 'Requires 50 points in Finesse abilities, Requires Smoke Bomb',
					descAdv: [
						'Poison Damage over 5 seconds: 30',
						'Poison Damage over 5 seconds: 60',
						'Poison Damage over 5 seconds: 90',
						'Poison Damage over 5 seconds: 120'
					],
					maxLevel: 4,
					currentLevel: 0,
					requiresPoint: 50
				},
				{
					name: 'Scattershot',
					type: '[Weapon Attacks]',
					desc: 'Your skill with Longbows enables you to fire multiple arrows simultaneously. Also Increases the size of your quiver. Unlocking this ability increases the size of your quiver by one.',
					reqAbility: true,
					reqAbility1: 3,
					reqAbility2: 2,
					requires: 'Requires 50 points in Finesse abilities, Requires Longbow Mastery, Requires Drawpower, Requires Arrow Storm, Requires Barbed Arrows',
					descAdv: [
						'Charged Arrows Fired: 1, Uncharged Arrows Fired: 2',
						'Charged Arrows Fired: 3, Uncharged Arrows Fired: 0',
						'Charged Arrows Fired: 3, Uncharged Arrows Fired: 2',
						'Charged Arrows Fired: 5, Uncharged Arrows Fired: 0',
						'Charged Arrows Fired: 5, Uncharged Arrows Fired: 2',
						'Charged Arrows Fired: 7, Uncharged Arrows Fired: 0'
					],
					maxLevel: 6,
					currentLevel: 0,
					requiresPoint: 50
				},
				{
					name: 'Mysterious Toxins',
					type: '[Passive]',
					desc: 'The skilled mixing of obscure toxins allows your Poison attacks to propagate to other enemies. Despite the its description, Mysterious Toxins does not cause Poison Damage to "propagate" as Shocking Damage does. Instead, poisoned enemies have a chance to create a poison cloud when they die, which will deal poison damage to other enemies.',
					reqAbility: true,
					reqAbility1: 2,
					reqAbility2: 1,
					requires: 'Requires 50 points in Finesse abilities, Requires Envenomed Edge, Requires Inoculation',
					descAdv: [
						'Chance to create poison cloud: 10%, poison cloud damage: 150',
						'Chance to create poison cloud: 20%, poison cloud damage: 175',
						'Chance to create poison cloud: 30%, poison cloud damage: 200',
						'Chance to create poison cloud: 40%, poison cloud damage: 225',
						'Chance to create poison cloud: 50%, poison cloud damage: 250'
					],
					maxLevel: 5,
					currentLevel: 0,
					requiresPoint: 50
				}
			],
			[
				{
					name: 'Gambit',
					type: '[Active]',
					desc: 'With an acrobatic leap, you distribute explosives across the battlefield that damage and launch enemies. Each level drops 7 traps for 80 mana, or the button may be held down to drop 18 traps for 120 mana. The traps drop in a 5 meter radius.',
					reqAbility: false,
					reqAbility1: 0,
					reqAbility2: 0,
					requires: 'Requires 70 points in Finesse abilities, Requires Envenomed Edge, Requires Inoculation',
					descAdv: [
						'Damage per Trap: 80',
						'Damage per Trap: 90',
						'Damage per Trap: 100',
						'Damage per Trap: 110',
						'Damage per Trap: 120',
						'Damage per Trap: 130'
					],                    
					maxLevel: 6,
					currentLevel: 0,
					requiresPoint: 70
				},
				{
					name: 'Paralytic Poisons',
					type: '[Passive]',
					desc: 'You have discovered long hidden secrets of poisoncraft, enabling your poison attacks to temporarily stun your opponents. Stun duration is 5 seconds.',
					reqAbility: true,
					reqAbility1: 4,
					reqAbility2: 3,
					requires: 'Requires 70 points in Finesse abilities, Requires Envenomed Edge, Requires Inoculation, Requires Mysterious Toxins',
					descAdv: [
						'Chance to stun: 2%',
						'Chance to stun: 4%',
						'Chance to stun: 6%',
						'Chance to stun: 8%'
					],                    
					maxLevel: 4,
					currentLevel: 0,
					requiresPoint: 70
				},
				{
					name: 'Execution',
					type: '[Passive]',
					desc: 'With anatomical precision, you deal out higher damage to bleeding foes.',
					reqAbility: false,
					reqAbility1: 0,
					reqAbility2: 0,
					requires: 'Requires 70 points in Finesse abilities, Requires Envenomed Edge, Requires Inoculation, Requires Mysterious Toxins',
					descAdv: [
						'Chance for bonus damage: 10%, Bonus damage: 100',
						'Chance for bonus damage: 11%, Bonus damage: 120',
						'Chance for bonus damage: 12%, Bonus damage: 140',
						'Chance for bonus damage: 13%, Bonus damage: 160',
						'Chance for bonus damage: 14%, Bonus damage: 180'
					],
					maxLevel: 5,
					currentLevel: 0,
					requiresPoint: 70
				}
			]
		],
		points: 0
	},
	{
		row: [
			[
				{
					name: 'Arcane Weaponry I',
					type: '[Weapon Attacks]',
					desc: 'Unlocks Charge special attacks for the Staff and Chakrams.',
					reqAbility: false,
					reqAbility1: 0,
					reqAbility2: 0,
					requires: '',
					descAdv: [
						'Unlocks Charge special attacks for the Staff and Chakrams and decreases the cost of Sceptre attacks from 6% of your Mana to 5%. Charged Entropy - Charges the Staff before slamming it into the ground and releasing a radial area of effect attack, can be quick charged for a point blank, held for (1 flash) for short range or held (2 flashes) for longer range and more damage. Maelstrom - Charges the Chakrams then releases them to orbit the character in an increasing radius area of effect attack, can be quick charged for a very short, single chakram throw, held for (1 flash) for short range or held (2 flashes) for longer range and more damage.',
						'Charged Entropy and Maelstrom apply an additional damage over time effect.',
						'Charged Entropy and Maelstrom generate extra Fate'
					],
					maxLevel: 3,
					currentLevel: 0,
					requiresPoint: 0
				},
				{
					name: 'Sceptre Mastery',
					type: '[Passive]',
					desc: 'Long hours of study and practice enable you to wield Sceptres very effectively. Adds Physical Damage to Sceptres and an overall Sceptre damage boost.',
					reqAbility: false,
					reqAbility1: 0,
					reqAbility2: 0,
					requires: '',
					descAdv: [
						'Physical Damage with Sceptres: +2, Bonus Damage with Sceptres: +5%',
						'Physical Damage with Sceptres: +3, Bonus Damage with Sceptres: +10%',
						'Physical Damage with Sceptres: +4, Bonus Damage with Sceptres: +15%',
						'Physical Damage with Sceptres: +6, Bonus Damage with Sceptres: +20%',
						'Physical Damage with Sceptres: +8, Bonus Damage with Sceptres: +25%',
						'Physical Damage with Sceptres: +10, Bonus Damage with Sceptres: +30%'
					],
					maxLevel: 6,
					currentLevel: 0,
					requiresPoint: 0
				},
				{
					name: 'Staff Mastery',
					type: '[Passive]',
					desc: 'You\'ve learned to channel incredible amounts of energy through your Staff, increasing its damage output considerably. Adds Physical Damage to Staves and an overall Staff damage boost.',
					reqAbility: false,
					reqAbility1: 0,
					reqAbility2: 0,
					requires: '',
					descAdv: [
						'Physical Damage with Staffs: +6, Bonus Damage with Staffs: +5%',
						'Physical Damage with Staffs: +7, Bonus Damage with Staffs: +10%',
						'Physical Damage with Staffs: +8, Bonus Damage with Staffs: +15%',
						'Physical Damage with Staffs: +10, Bonus Damage with Staffs: +20%',
						'Physical Damage with Staffs: +12, Bonus Damage with Staffs: +25%',
						'Physical Damage with Staffs: +14, Bonus Damage with Staffs: +30%'
					],
					maxLevel: 6,
					currentLevel: 0,
					requiresPoint: 0
				},
				{
					name: 'Storm Bolt',
					type: '[Active]',
					desc: 'Launch a burst of electrical energy which deals Lightning and Shocking Damage. At higher levels, it can Stun enemies. At level 4, Storm Bolt gains a Shocking Damage AoE on impact.',
					reqAbility: false,
					reqAbility1: 0,
					reqAbility2: 0,
					requires: '',
					descAdv: [
						'Lightning Damage: 40, Chance to Stun: 0%, Stun Duration: 0 sec, Area Shocking Damage: 0, Mana Cost: 20',
						'Lightning Damage: 50, Chance to Stun: 0%, Stun Duration: 0 sec, Area Shocking Damage: 0, Mana Cost: 23',
						'Lightning Damage: 60, Chance to Stun: 20%, Stun Duration: 3 sec, Area Shocking Damage: 0, Mana Cost: 26',
						'Lightning Damage: 70, Chance to Stun: 25%, Stun Duration: 4 sec, Area Shocking Damage: 12, Mana Cost: 29',
						'Lightning Damage: 80, Chance to Stun: 30%, Stun Duration: 4 sec, Area Shocking Damage: 15, Mana Cost: 32',
						'Lightning Damage: 90, Chance to Stun: 35%, Stun Duration: 4 sec, Area Shocking Damage: 18, Mana Cost: 35'
					],
					maxLevel: 6,
					currentLevel: 0,
					requiresPoint: 0
				}
			],
			[
				{
					name: 'Arcane Weaponry II',
					type: '[Weapon Attacks]',
					desc: 'Unlocks special attacks from Block for the Staff and Sceptre and decreases the cost of Sceptre attacks from 5% of your Mana to 4%.',
					reqAbility: true,
					reqAbility1: 0,
					reqAbility2: 0,
					requires: 'Requires 5 points in Sorcery abilities, Requires Arcane Weaponry I',
					descAdv: [
						'Mage\'s Vortex - Attack with your staff while holding Block to summon a small tornado at the feet of enemies in front of you while you take a spinning step backwards. Warding Blast - Press Attack while holding Block to perform a Sceptre blast that launches an enemy followed by a short ranged "shielding" attack while stepping forward slightly. Needs to be channeled to launch enemies up and away, otherwise it simply damages.',
						'Mage\'s Vortex and Warding Blast apply an additional damage over time effect.',
						'Mage\'s Vortex and Warding Blast generate extra Fate.'
					],
					maxLevel: 3,
					currentLevel: 0,
					requiresPoint: 5
				},
				{
					name: 'Chakram Mastery',
					type: '[Passive]',
					desc: 'Your unique mix of arcane and martial talent enables you to deal incredible damage with Chakrams. Adds Physical Damage to Chakrams and an overall Chakram damage boost.',
					reqAbility: false,
					reqAbility1: 0,
					reqAbility2: 0,
					requires: 'Requires 5 points in Sorcery abilities',
					descAdv: [
						'Physical Damage with Chakrams: +2, Bonus Damage with Chakrams: +5%',
						'Physical Damage with Chakrams: +3, Bonus Damage with Chakrams: +10%',
						'Physical Damage with Chakrams: +4, Bonus Damage with Chakrams: +15%',
						'Physical Damage with Chakrams: +6, Bonus Damage with Chakrams: +20%',
						'Physical Damage with Chakrams: +8, Bonus Damage with Chakrams: +25%',
						'Physical Damage with Chakrams: +10, Bonus Damage with Chakrams: +30%'
					],
					maxLevel: 6,
					currentLevel: 0,
					requiresPoint: 5
				},
				{
					name: 'Sphere of Protection',
					type: '[Active - Sustained]',
					desc: 'While active, Sphere of Protection creates a magical barrier that blocks a percentage of damage from each incoming attack. Sustained Cost: 30% Mana',
					reqAbility: false,
					reqAbility1: 0,
					reqAbility2: 0,
					requires: 'Requires 5 points in Sorcery abilities',
					descAdv: [
						'Damage Resistance: +5%',
						'Damage Resistance: +6%',
						'Damage Resistance: +7%',
						'Damage Resistance: +8%',
						'Damage Resistance: +10%',
						'Damage Resistance: +12%'
					],
					maxLevel: 6,
					currentLevel: 0,
					requiresPoint: 5
				},
				{
					name: 'Mark of Flame',
					type: '[Active]',
					desc: 'Tap the button to tag your targets with a magical Mark. Press and hold the button to detonate all Marked enemies with a fiery explosion. When finished marking enemies, the mark causes a fiery explosion. The explosion will hit any enemies nearby. The ability Smolder upgrades Mark of Flame by increasing its damage.',
					reqAbility: false,
					reqAbility1: 0,
					reqAbility2: 0,
					requires: 'Requires 5 points in Sorcery abilities',
					descAdv: [
						'Maximum Targets Marked: 3, Fire Damage on Execution: 100, Burning Damage on Execution: 10, Execute Mana Cost: 30',
						'Maximum Targets Marked: 3, Fire Damage on Execution: 130, Burning Damage on Execution: 15, Execute Mana Cost: 33',
						'Maximum Targets Marked: 4, Fire Damage on Execution: 160, Burning Damage on Execution: 20, Execute Mana Cost: 36',
						'Maximum Targets Marked: 4, Fire Damage on Execution: 190, Burning Damage on Execution: 25, Execute Mana Cost: 39',
						'Maximum Targets Marked: 5, Fire Damage on Execution: 220, Burning Damage on Execution: 30, Execute Mana Cost: 42'
					],
					maxLevel: 5,
					currentLevel: 0,
					requiresPoint: 5
				},
				{
					name: 'Conservative Casting',
					type: '[Passive]',
					desc: 'Having unlocked countless arcane secrets, you are able to power your Abilities with far less Mana.',
					reqAbility: false,
					reqAbility1: 0,
					reqAbility2: 0,
					requires: 'Requires 5 points in Sorcery abilities',
					descAdv: [
						'Mana Cost Reduction: 10%',
						'Mana Cost Reduction: 13%',
						'Mana Cost Reduction: 16%',
						'Mana Cost Reduction: 19%',
						'Mana Cost Reduction: 22%'
					],
					maxLevel: 5,
					currentLevel: 0,
					requiresPoint: 5
				}
			],
			[
				{
					name: 'Summon Faer Gorta',
					type: '[Active]',
					desc: 'Use magic to rapidly construct a Faer Gorta who will fight by your side. Summon last 120 seconds.',
					reqAbility: false,
					reqAbility1: 0,
					reqAbility2: 0,
					requires: 'Requires 20 points in Sorcery abilities',
					descAdv: [
						'Health and Damage Bonus: +0%, Mana Cost: 65',
						'Health and Damage Bonus: +10%, Mana Cost: 60',
						'Health and Damage Bonus: +25%, Mana Cost: 65',
						'Health and Damage Bonus: +50%, Mana Cost: 70',
						'Health and Damage Bonus: +75%, Mana Cost: 75',
						'Health and Damage Bonus: +100%, Mana Cost: 80'
					],
					maxLevel: 6,
					currentLevel: 0,
					requiresPoint: 20
				},
				{
					name: 'Healing Surge',
					type: '[Active]',
					desc: 'Your magic knits together flesh and bone, healing your wounds. Holding the button longer restores more health. Healing Surge always costs 30% of your maximum Mana to cast, and up to 20% of your maximum Mana to sustain the charge. All levels also restore 20% of your maximum Health immediately upon cast and 10% on finishing the charge.',
					reqAbility: false,
					reqAbility1: 0,
					reqAbility2: 0,
					requires: 'Requires 20 points in Sorcery abilities',
					descAdv: [
						'Health restored while charging: 10%',
						'Health restored while charging: 20%',
						'Health restored while charging: 30%',
						'Health restored while charging: 40%',
						'Health restored while charging: 50%'
					],
					maxLevel: 5,
					currentLevel: 0,
					requiresPoint: 20
				},
				{
					name: 'Chain Lightning',
					type: '[Passive]',
					desc: 'Increases the Storm Bolt damage, and causes Shocking Damage to bounce between your enemies more frequently.',
					reqAbility: true,
					reqAbility1: 0,
					reqAbility2: 2,
					requires: 'Requires 20 points in Sorcery abilities, Requires Storm Bolt',
					descAdv: [
						'Increased chance to propagate: 10%, Increased Storm Bolt damage: +10%',
						'Increased chance to propagate: 20%, Increased Storm Bolt damage: +20%',
						'Increased chance to propagate: 30%, Increased Storm Bolt damage: +30%',
						'Increased chance to propagate: 40%, Increased Storm Bolt damage: +40%',
						'Increased chance to propagate: 50%, Increased Storm Bolt damage: +50%'
					],
					maxLevel: 5,
					currentLevel: 0,
					requiresPoint: 20
				},
				{
					name: 'Ice Barrage',
					type: '[Active]',
					desc: 'Sends a scattered blast of ice shards into the air to crash down upon your foes, dealing Ice and Freezing Damage. Ice Barrage causes both Ice and Freezing Damage. Frostshackle and Winter\'s Embrace upgrade this ability.',
					reqAbility: false,
					reqAbility1: 0,
					reqAbility2: 0,
					requires: 'Requires 20 points in Sorcery abilities, Requires Storm Bolt',
					descAdv: [
						'Projectiles: 5, Ice Damage per projectile: 15, Freezing Damage per projectile: 3, Mana Cost: 25',
						'Projectiles: 5, Ice Damage per projectile: 18, Freezing Damage per projectile: 4, Mana Cost: 30',
						'Projectiles: 7, Ice Damage per projectile: 21, Freezing Damage per projectile: 5, Mana Cost: 35',
						'Projectiles: 7, Ice Damage per projectile: 24, Freezing Damage per projectile: 5, Mana Cost: 40',
						'Projectiles: 9, Ice Damage per projectile: 27, Freezing Damage per projectile: 5, Mana Cost: 45'
					],
					maxLevel: 5,
					currentLevel: 0,
					requiresPoint: 20
				}
			],
			[
				{
					name: 'Arcane Weaponry III',
					type: '[Weapon Attacks]',
					desc: 'Unlocks Delayed special attacks for the Staff and Chakrams and decreases the cost of Sceptre attacks from 4% of your Mana to 3%.',
					reqAbility: true,
					reqAbility1: 1,
					reqAbility2: 0,
					requires: 'Requires 35 points in Sorcery abilities, Requires Arcane Weaponry II',
					descAdv: [
						'Arcane Fury - Press Attack -> Pause -> Attack to perform a 2-part attack with a staff that launches enemies into the air and away from you. Elemental Escape - Press Attack -> Pause Attack to attack an enemy with both Chakrams then launch them into the ground at the enemy\'s feet, blasting them backwards while you jump away.',
						'Arcane Fury and Elemental Escape apply an additional damage over time effect.',
						'Arcane Fury and Elemental Escape generate extra Fate.'
					],
					maxLevel: 3,
					currentLevel: 0,
					requiresPoint: 35
				},
				{
					name: 'Transference',
					type: '[Upgrade]',
					desc: 'Causes the attacks of a summoned Faer Gorta to siphon health from enemies and return it to you.',
					reqAbility: true,
					reqAbility1: 2,
					reqAbility2: 0,
					requires: 'Requires 35 points in Sorcery abilities, Requires Summon Faer Gorta',
					descAdv: [
						'Chance to Siphon Health: 25%',
						'Chance to Siphon Health: 35%',
						'Chance to Siphon Health: 45%',
						'Chance to Siphon Health: 55%',
						'Chance to Siphon Health: 70%'
					],
					maxLevel: 5,
					currentLevel: 0,
					requiresPoint: 35
				},
				{
					name: 'Sphere of Reprisal',
					type: '[Upgrade]',
					desc: 'While Sphere of Protection is active, ethereal orbs are created around you which deal damage to enemies they hit. These small orbs will respawn a short time after hitting enemies.',
					reqAbility: true,
					reqAbility1: 1,
					reqAbility2: 2,
					requires: 'Requires 35 points in Sorcery abilities, Requires Sphere of Protection',
					descAdv: [
						'Physical Damage per projectile: 50, Projectiles: 2',
						'Physical Damage per projectile: 55, Projectiles: 2',
						'Physical Damage per projectile: 60, Projectiles: 2',
						'Physical Damage per projectile: 65, Projectiles: 4',
						'Physical Damage per projectile: 70, Projectiles: 4'
					],
					maxLevel: 5,
					currentLevel: 0,
					requiresPoint: 35
				},
				{
					name: 'Smolder',
					type: '[Passive]',
					desc: 'Your mastery over the power of fire allows you to increase the effectiveness of all Burning effects, as well as the damage done by Mark of Flame. It also increases damage from Mark of Flame.',
					reqAbility: true,
					reqAbility1: 1,
					reqAbility2: 3,
					requires: 'Requires 35 points in Sorcery abilities, Requires Mark of Flame',
					descAdv: [
						'Burning Damage increase: +20%, Mark of Flame bonus damage: +10%',
						'Burning Damage increase: +40%, Mark of Flame bonus damage: +20%',
						'Burning Damage increase: +60%, Mark of Flame bonus damage: +30%',
						'Burning Damage increase: +80%, Mark of Flame bonus damage: +40%',
						'Burning Damage increase: +100%, Mark of Flame bonus damage: +50%'
					],
					maxLevel: 5,
					currentLevel: 0,
					requiresPoint: 35
				},
				{
					name: 'Frostshackle',
					type: '[Passive]',
					desc: 'Your knowledge of eldritch frost allows you to extend the duration of all Freezing effects, slowing enemies down for a longer time. Also increases the damage caused by Ice Barrage.',
					reqAbility: true,
					reqAbility1: 2,
					reqAbility2: 3,
					requires: 'Requires 35 points in Sorcery abilities, Requires Ice Barrage',
					descAdv: [
						'Increased Freezing duration: 25%, Increased Ice Barrage damage: +10%',
						'Increased Freezing duration: 50%, Increased Ice Barrage damage: +20%',
						'Increased Freezing duration: 75%, Increased Ice Barrage damage: +30%',
						'Increased Freezing duration: 100%, Increased Ice Barrage damage: +40%',
						'Increased Freezing duration: 150%, Increased Ice Barrage damage: +50%'
					],
					maxLevel: 5,
					currentLevel: 0,
					requiresPoint: 35
				}
			],
			[
				{
					name: 'Arcane Weaponry IV',
					type: '[Weapon Attacks]',
					desc: 'Unlocks Charge special attacks for the Staff and Chakrams and decreases the cost of Sceptre attacks from 6% of your Mana to 5%.',
					reqAbility: true,
					reqAbility1: 3,
					reqAbility2: 0,
					requires: 'Requires 50 points in Sorcery abilities, Requires Arcane Weaponry III',
					descAdv: [
						'Charged Entropy - Charges the Staff before slamming it into the ground and releasing a radial area of effect attack, can be quick charged for a point blank, held for (1 flash) for short range or held (2 flashes) for longer range and more damage. Maelstrom - Charges the Chakrams then releases them to orbit the character in an increasing radius area of effect attack, can be quick charged for a very short, single chakram throw, held for (1 flash) for short range or held (2 flashes) for longer range and more damage.',
						'Charged Entropy and Maelstrom apply an additional damage over time effect.',
						'Charged Entropy and Maelstrom generate extra Fate'
					],
					maxLevel: 3,
					currentLevel: 0,
					requiresPoint: 50
				},
				{
					name: 'Masterful Construction',
					type: '[Upgrade]',
					desc: 'Your summoned Faer Gorta swings for more hits in its attack chain, and gains a chance to critical.',
					reqAbility: true,
					reqAbility1: 3,
					reqAbility2: 1,
					requires: 'Requires 50 points in Sorcery abilities, Requires Summon Faer Gorta, Requires Transference',
					descAdv: [
						'Chance to Critical Hit: +7%, Chain attack hits: 3',
						'Chance to Critical Hit: +10%, Chain attack hits: 3',
						'Chance to Critical Hit: +13%, Chain attack hits: 5',
						'Chance to Critical Hit: +16%, Chain attack hits: 5',
						'Chance to Critical Hit: +19%, Chain attack hits: 7'
					],
					maxLevel: 5,
					currentLevel: 0,
					requiresPoint: 50
				},
				{
					name: 'Elemental Rage',
					type: '[Active]',
					desc: 'Combine the mystic elements of Fire, Lightning, and Ice into a devastating chain of attacks. Lightning pulses with the first cast, dealing Lightning Damage and drawing enemies in. Fire torches enemies in the area on the second cast, dealing Fire Damage and moving you away from enemies. The third cast finishes with an icy explosion, dealing Ice Damage in the area and slowing enemies.',
					reqAbility: false,
					reqAbility1: 0,
					reqAbility2: 0,
					requires: 'Requires 50 points in Sorcery abilities',
					descAdv: [
						'Lightning Damage: 90, Lightning cast mana cost: 55, Fire Damage: 130, Fire cast mana cost: 55, Ice Damage: 100, Ice cast mana cost: 60',
						'Lightning Damage: 105, Lightning cast mana cost: 60, Fire Damage: 150, Fire cast mana cost: 60, Ice Damage: 110, Ice cast mana cost: 65',
						'Lightning Damage: 120, Lightning cast mana cost: 65, Fire Damage: 170, Fire cast mana cost: 65, Ice Damage: 125, Ice cast mana cost: 70',
						'Lightning Damage: 135, Lightning cast mana cost: 70, Fire Damage: 190, Fire cast mana cost: 70, Ice Damage: 145, Ice cast mana cost: 75',
						'Lightning Damage: 150, Lightning cast mana cost: 75, Fire Damage: 210, Fire cast mana cost: 75, Ice Damage: 170, Ice cast mana cost: 80'
					],
					maxLevel: 5,
					currentLevel: 0,
					requiresPoint: 50
				},
				{
					name: 'Tempest',
					type: '[Upgrade]',
					desc: 'Hold the button for Storm Bolt to summon forth lightning from the heavens, smiting all nearby foes.',
					reqAbility: true,
					reqAbility1: 2,
					reqAbility2: 2,
					requires: 'Requires 50 points in Sorcery abilities, Requires Storm Bolt, Requires Chain Lightning',
					descAdv: [
						'Lightning Damage: 360, Shocking Damage: 30, Mana Cost: 135',
						'Lightning Damage: 400, Shocking Damage: 35, Mana Cost: 145',
						'Lightning Damage: 440, Shocking Damage: 40, Mana Cost: 155',
						'Lightning Damage: 480, Shocking Damage: 45, Mana Cost: 165',
						'Lightning Damage: 520, Shocking Damage: 50, Mana Cost: 175'
					],
					maxLevel: 5,
					currentLevel: 0,
					requiresPoint: 50
				}
			],
			[
				{
					name: 'Sphere of Retribution',
					type: '[Upgrade]',
					desc: 'Sphere of Protection gains the power to fire off deadly ethereal splinters when enemies draw near. At level 2 enemies who draw close will be staggered, at level 4 enemies may be knocked down by the splinters, and there is a nearly guaranteed chance to knock down enemies at level 5 and higher.',
					reqAbility: true,
					reqAbility1: 3,
					reqAbility2: 2,
					requires: 'Requires 70 points in Sorcery abilities, Requires Sphere of Protection, Requires Sphere of Reprisal',
					descAdv: [
						'Physical Damage per projectile: 110',
						'Physical Damage per projectile: 120',
						'Physical Damage per projectile: 130',
						'Physical Damage per projectile: 140',
						'Physical Damage per projectile: 150'
					],
					maxLevel: 5,
					currentLevel: 0,
					requiresPoint: 70
				},
				{
					name: 'Meteor',
					type: '[Active]',
					desc: 'Calls forth a meteor from the skies, dealing massive damage to the area before you.',
					reqAbility: true,
					reqAbility1: 3,
					reqAbility2: 3,
					requires: 'Requires 70 points in Sorcery abilities, Requires Mark of Flame, Requires Smolder',
					descAdv: [
						'Fire Damage: 500, Burning Damage: 75, Mana Cost: 250',
						'Fire Damage: 550, Burning Damage: 80, Mana Cost: 260',
						'Fire Damage: 600, Burning Damage: 85, Mana Cost: 270',
						'Fire Damage: 650, Burning Damage: 90, Mana Cost: 280',
						'Fire Damage: 700, Burning Damage: 95, Mana Cost: 290'
					],
					maxLevel: 5,
					currentLevel: 0,
					requiresPoint: 70
				},
				{
					name: 'Winter\'s Embrace',
					type: '[Upgrade]',
					desc: 'Hold the button for Ice Barrage to launch a persistent cloud of ice shards which lasts for a duration. Enemies in the blizzard suffer periodic Ice, Piercing, and Freezing Damage.',
					reqAbility: true,
					reqAbility1: 3,
					reqAbility2: 3,
					requires: 'Requires 70 points in Sorcery abilities, Requires Ice Barrage, Requires Frostshackle',
					descAdv: [
						'Damage: 10 Ice Damage, 5 Piercing Damage, Duration: 15 seconds, Mana Cost: 180',
						'Damage: 15 Ice Damage, 10 Piercing Damage, Duration: 15 seconds, Mana Cost: 190',
						'Damage: 20 Ice Damage, 15 Piercing Damage, Duration: 15 seconds, Mana Cost: 200',
						'Damage: 25 Ice Damage, 20 Piercing Damage, Duration: 15 seconds, Mana Cost: 210',
						'Damage: 30 Ice Damage, 25 Piercing Damage, Duration: 15 seconds, Mana Cost: 220'
					],
					maxLevel: 5,
					currentLevel: 0,
					requiresPoint: 70
				}
			]
		],
		points: 0
	}
];