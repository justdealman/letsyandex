function animate() {
	$('.animate').each(function() {
		if ( $(this).offset().top < $(document).scrollTop()+$(window).height() ) {
			$(this).addClass('complete');
		}
	});
}
$(document).ready(function() {
	animate();
	$(window).bind('scroll', function() {
		animate();
	});
	if ( $('.statistics').length > 0 ) {
		var firmStat = true;
		$(window).bind('scroll', function() {
			if ( $('.statistics > div').offset().top < $(document).scrollTop()+$(window).height()-$('.statistics > div').height()/2 && firmStat == true ) {
				firmStat = false;
				$('.statistics .chart').drawDoughnutChart([
					{ value: 108, color:'#e74129' },
					{ value: 252, color:'#ba2d18' }
				]);
				$('.statistics .grow').addClass('complete');
				setTimeout(function() {
					$('.statistics .tip').addClass('complete');
				}, 1250);
			}
		});
	}
});