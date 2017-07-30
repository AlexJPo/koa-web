var maxPoint = 120;

$(document).ready(function() {
	$(document).on("contextmenu",function(e){
		e.preventDefault();
	});

	$('.tab-item').on('click', function() {
		var abilitiesIndex = $(this).data('abilities');
		var tabContetn = $('.tab-content');

		$('.tab-item').removeClass('tab-item-active');
		$(this).addClass('tab-item-active');

		tabContetn.removeClass('tab-content-active');
		tabContetn.each(function() {
			if (abilitiesIndex === $(this).data('abilities')) {
				$(this).addClass('tab-content-active');
			}
		});
	});

	$('.ability-icon ').on('mousedown', function(e) {
		var abilityIndex = $(this).data('abilities');
		var rowIndex = $(this).data('row');
		var skillIndex = $(this).data('skill');
		var currentLevelJq = $(this).find('.current-level');

		var currentAbility = koaAbilities[abilityIndex].row[rowIndex][skillIndex];
		var abilitiesPoints = koaAbilities[abilityIndex].points;

		var totalPoints = getTotalAblitiesPoints();

		if (abilitiesPoints < maxPoint && totalPoints < maxPoint) {
			if (e.which === 1) {
				if (currentAbility.reqAbility) {
					var reqAbility = koaAbilities[abilityIndex].row[currentAbility.reqAbility1][currentAbility.reqAbility2];

					if (reqAbility.currentLevel > 0 && koaAbilities[abilityIndex].points >= currentAbility.requiresPoint) {
						activateAbilities(currentLevelJq, currentAbility, abilityIndex);
					}
				} else {
					if (koaAbilities[abilityIndex].points >= currentAbility.requiresPoint) {
						activateAbilities(currentLevelJq, currentAbility, abilityIndex);
					}
				}

				if (currentAbility.maxLevel === currentAbility.currentLevel) {
					currentLevelJq.addClass('filled-level');
				}
			}

			currentAbility = koaAbilities[abilityIndex].points;

			$('.spendPoint').each(function() {
				if (abilityIndex === $(this).data('abilities')) {
					$(this).text(currentAbility);
				}
			});

			$('.points-spend').text(getTotalAblitiesPoints());

			if (currentAbility >= 5 && currentAbility < 20) {
				updateTableRow(abilityIndex, 1);
			} else if (currentAbility >= 20 && currentAbility < 35) {
				updateTableRow(abilityIndex, 2);
			} else if (currentAbility >= 35 && currentAbility < 50) {
				updateTableRow(abilityIndex, 3);
			} else if (currentAbility >= 50 && currentAbility < 70) {
				updateTableRow(abilityIndex, 4);
			} else if (currentAbility >= 70 ) {
				updateTableRow(abilityIndex, 5);
			}
		}
	});

	$('.ability-icon').on('mouseover', function(){
		var abilityIndex = $(this).data('abilities');
		var rowIndex = $(this).data('row');
		var skillIndex = $(this).data('skill');

		var currentAbility = koaAbilities[abilityIndex].row[rowIndex][skillIndex];
		var currentAbilityPoints = koaAbilities[abilityIndex].points;

		$('.ability-req').html('');
		$('.ability-textAdv').html('');
		$('.current-level-text').text('');

		$('.ability-name').text(currentAbility.name);
		$('.ability-text').text(currentAbility.desc);
		$('.ability-type-text').text(currentAbility.type);

		updateAbilityLevel(currentAbility);

		if (currentAbility.requires !== '') {
			var splitedReq = currentAbility.requires.split(',');
			var li = '';

			for (var i = 0; i < splitedReq.length; i++) {
				if (currentAbility.currentLevel > 0) {
					li += '<li><span class="req-white">' + splitedReq[i] + '</span></li>';
				} else {
					li += '<li><span class="req-red">' + splitedReq[i] + '</span></li>';
				}
			}
			$('.ability-req').append(li);
		}

		if (currentAbility.currentLevel === 0) {
			$('.ability-textAdv').append('<li><span class="req-white">' +  currentAbility.descAdv[0] + '</span></li>');
		}

		updateCurrentLevel(currentAbility);
	}).on('mouseout' ,function(){
		$(this).removeClass('active-label');
	});

	function updateAbilityLevel(obj) {
		$('.level-text').text('Level ' + obj.currentLevel + ' of ' + (obj.maxLevel));
	}
	function updateCurrentLevel(obj) {
		var abilityTextAdv = $('.ability-textAdv');

		if (obj.currentLevel > 0) {
			$('.current-level-text').text('Current level:');
			if (obj.currentLevel === obj.maxLevel) {
				abilityTextAdv.html('').append('<li class="req-white">' + obj.descAdv[obj.currentLevel-1] + '</li>');
			} else {
				abilityTextAdv.html('').append('<li class="req-white">' + obj.descAdv[obj.currentLevel] + '</li>');
			}
		}
	}
	function updateTableRow(abilityIndex, indexRow){
		var abilityTableRow = $('.abilities-table-row' + indexRow + '[data-abilities='+ abilityIndex +']');
		var abilityRow = $('.abilities-row' + indexRow + '[data-abilities='+ abilityIndex +']');

		abilityTableRow.find('.block-arrow').each(function(){
			if ($(this).data('abilities') === abilityIndex) {
				$(this).addClass('active-arrow');
			}
		});
		abilityRow.find('.current-level').each(function() {
			if ($(this).data('abilities') === abilityIndex && $(this).text() === '') {
				$(this).text('0');
			}
		});
		abilityRow.find('.block-arrow').each(function() {
			if (abilityRow.data('abilities') === abilityIndex) {
				$(this).addClass('active-arrow');
			}
		});
	}
	function activateAbilities(currentLevelJq, ability, abilityIndex) {
		if (ability.currentLevel < ability.maxLevel) {
			ability.currentLevel++;
			koaAbilities[abilityIndex].points++;

			updateAbilityLevel(ability);
			updateCurrentLevel(ability);

			currentLevelJq.text(ability.currentLevel);
		}
	}
	function getTotalAblitiesPoints() {
		var result = 0;

		for (var i = 0; i < 3; i++) {
			result += koaAbilities[i].points;
		}

		return result;
	}
});

	function resetAll() {
		$('.block-arrow').removeClass('active-arrow');

		$('.current-level-text').text('');
		$('.current-level').text('');

		$('.ability-type-text').text('');
		$('.ability-name').text('');
		$('.ability-text').text('');

		$('.level-text').text('');
		$('.points-spend').text('0');

		$('.ability-req').html('');
		$('.ability-textAdv').html('');

		clearModel();

		$('.abilities-table-row0').find('.block-arrow').each(function() {
			$(this).addClass('active-arrow');
		});

		$('.spendPoint').each(function() {
			$(this).text('0');
		});

		$('.abilities-row0').find('.current-level').each(function() {
			$(this).text('0');
			if ($(this).hasClass('filled-level')) {
				$(this).removeClass('filled-level');
			}
		});
	}
	function clearModel() {
		var l = koaAbilities.length;

		for (var i = 0; i < l; i++) {
			var skills = koaAbilities[i].row;
			var skillsLength = koaAbilities[i].row.length;

			if (koaAbilities[i].points > 0) {
				for (var j = 0; j < skillsLength; j++) {
					var abilityLength = skills[j].length;

					for (var k = 0; k < abilityLength; k++) {
						if (skills[j][k].currentLevel > 0) {
							skills[j][k].currentLevel = 0;
						}
					}
				}
			}
			koaAbilities[i].points = 0;
		}
	}
