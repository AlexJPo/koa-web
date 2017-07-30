$(document).ready(function() {
	var totalPoint = 0;

	$(document).on("contextmenu",function(e){
		e.preventDefault();
	});

	$('.block').on('click', function() {
		var nextStep = 2;
		var maxPoint = 40;
		var skillLevel = $(this).data('level');
		var skillIndex = $(this).data('skill');
		var levelDifference = skillLevel - koaSkills[skillIndex].current;
		var milestones = $(this).find('.milestone');

		$(this).addClass('active');

		if (skillLevel > koaSkills[skillIndex].current && levelDifference < nextStep) {
			totalPoint++;
			koaSkills[skillIndex].current++;

			$(this).addClass('block-active');
			milestones.addClass('milestone-active');

			checkNoPoint();
		}

		if (levelDifference === 0) {
			totalPoint--;
			koaSkills[skillIndex].current--;

			$(this).removeClass('block-active');
			milestones.removeClass('milestone-active');

			checkNoPoint();
		}

		if (totalPoint < maxPoint) {
			$('.points-spend').text(totalPoint);
		}
	});

	$('.block').on('mouseover', function(){
		var skillIndex = $(this).data('skill');
		var levelIndex = $(this).data('level') - 1;
		var findedSkill = koaSkills[skillIndex].levels[levelIndex];

		if (findedSkill.main) {
			$('.milestone-text').text('Milestone');
		} else {
			$('.milestone-text').text('');
		}

		$('.desc-skill-level-desc').text(findedSkill.desc);
		$('.desc-skill-textAdv').text(findedSkill.descAdv);
	}).on('mouseout' ,function(){
		$(this).removeClass('active-label');
	});

	$('.skill-name').on('mouseover', function(){
		var skillIndex = $(this).data('skill');

		$(this).addClass('active-label');

		$('.desc-skill-text').text(koaSkills[skillIndex].desc);
	}).on('mouseout' ,function(){
		$(this).removeClass('active-label');
	});

	$('.skill-table-row').on('mouseover', function(){
		var skillIndex = $(this).data('skill');

		$('.desc-skill-name').text(koaSkills[skillIndex].title);
		$('.desc-skill-text').text(koaSkills[skillIndex].desc);

		$(this).find('.default-label').addClass('active-label');
	}).on('mouseout' ,function(){
		$('.default-label').removeClass('active-label');
	});;

	function checkNoPoint() {
		var l = koaSkills.length
			pointsInSkill = 0;

		for (var i = 0; i < l; ++i) {
			if (koaSkills[i].current >  pointsInSkill) {
				pointsInSkill = koaSkills[i].current;
			}
		}

		if (pointsInSkill > 0 && pointsInSkill < 5) {
			$('.basic-level').addClass('skill-level-active');
			$('.advanced-level').removeClass('skill-level-active');
			$('.master-level').removeClass('skill-level-active');
		} else if (pointsInSkill > 4 && pointsInSkill < 8) {
			$('.advanced-level').addClass('skill-level-active');
			$('.master-level').removeClass('skill-level-active');
		} else if (pointsInSkill > 7) {
			$('.master-level').addClass('skill-level-active');
		} else {
			$('.skill-level').removeClass('skill-level-active');
		}
	}
});
