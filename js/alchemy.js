$(document).ready(function() {

  changePotionType(0);
  $('table').width($(window).width() - 19);

  $(window).on('resize', function() {
    var currenWidth = $(window).width();
    var newWidth = $(window).width() - 19;
    var minWindth = 1120;

    if (currenWidth > minWindth) {
      $('table').width(newWidth);
    }
  });

  $('.tab-item').on('click', function() {
    var tabItem = $(this);
		var abilitiesIndex = tabItem.data('grade');
		var tabContetn = $('.tab-content');

		$('.tab-item').removeClass('tab-item-active');
		tabItem.addClass('tab-item-active');

		tabContetn.removeClass('tab-content-active');
		tabContetn.each(function() {
			if (abilitiesIndex === tabItem.data('grade')) {
				tabItem.addClass('tab-content-active');
			}
		});

    changePotionType(abilitiesIndex);
	});
});

function changePotionType(gradeIndex) {
  var currentGrade = koaAlchemy[gradeIndex].potions;

  showReceips(currentGrade, gradeIndex);
}

function showReceips(obj, gradeIndex) {
  var htmlTemplate = '';

  for (var i = 0; i < obj.length; ++i) {
    htmlTemplate += '<tr class="receip" data-grade=' + gradeIndex + ' data-receip=' + i + ' onClick="showIngredients(this);">';
    htmlTemplate += '<td>' + obj[i].name + '</td>';
    htmlTemplate += '<td>' + obj[i].effect + '</td>';
    htmlTemplate += '</tr>';
  }

  $('.receips').html('').append(htmlTemplate);
}

function showIngredients(obj) {
  var receipItem = $(obj);
  var gradeIndex = receipItem.data('grade');
  var receipIndex = receipItem.data('receip');
  var reagents = koaAlchemy[gradeIndex].potions[receipIndex].reagents;

  $('.receip').removeClass('receip-item-active');
  receipItem.addClass('receip-item-active');

  drawIngredients(reagents);
}

function drawIngredients(obj) {
  var htmlTemplate = '';
  
  for (var i = 0; i < obj.length; i++) {
    htmlTemplate += '<div class="ingredients-item">';
    htmlTemplate += '<img class="ingredients-item-img" src=' + obj[i].img + '>';
    htmlTemplate += '<div class="ingredients-item-name">' + obj[i].name + '</div>';
    htmlTemplate += '<div class="ingredients-item-count">x' + obj[i].count + '</div>';
    htmlTemplate += '</div>';
  }

  $('.ingredients-list').html('').append(htmlTemplate);
}
