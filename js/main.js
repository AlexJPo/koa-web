$(document).ready(function() {

	$('.tabs-item').on('click', function() {
		var tab_id = $(this).attr('data-tab');

		$('.tabs-item').removeClass('tabs-item-current');
		$('.tab-content').removeClass('tab-content-current');

		$(this).addClass('tabs-item-current');
		$("#"+tab_id).addClass('tab-content-current');
	});
});
