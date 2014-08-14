$(function(){
	//scroll to target hash alement
	// window.scrollBottom = function(){
		// var winHeight = $(window).height(),
		// 	lastSectionHeight = $('section:last-of-type').height(),
		// 	offset = lastSectionHeight - winHeight,
		// 	scrollLast = $('section:last-of-type').offset().top - $('#main').offset().top;

	// 		$('#body').stop().animate({
	// 			'scrollTop': scrollLast + offset,
	// 			queue: false
	// 		}, 30);
	// }
	var smoothScroll = function(target){
		var $target = $(target),
			offset = $target.offset().top;
		this.speed = 200;
		$('body').stop().animate({
				'scrollTop': offset,
				queue: false
			}, this.speed, 'linear', function () {
				window.location.hash = target;
				/*$(window).on('scroll',scrollCorrecting);*/
			});
	}
	
	$('nav a').on('click',function (e) {
			/*$(window).off('scroll');*/
			$('nav a').removeClass('active');
			$(this).addClass('active');
			e.preventDefault();		
			if(window.location.hash == target) return; 
			var target = this.hash;		
		 	smoothScroll(target);
		});

})

