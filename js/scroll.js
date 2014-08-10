$(function(){
	//scroll to target hash alement
	var smoothScroll = function(target){
		var $target = $(target);
		this.speed = 200;
		$('#body').stop().animate({
				'scrollTop': $target.offset().top,
				queue: false
			}, this.speed, 'linear', function () {
				window.location.hash = target;
				/*$(window).on('scroll',scrollCorrecting);*/
			});
	}
	
	//autoco

	/*$(window).on('scroll',scrollCorrecting);*/

	/*$('#scrollTop').on('click',function (e){
		$('#scrollBot').show().attr('href',window.location.hash).css('display','block');

	});*/
	//binding scroll to hash-links
	$('nav a').on('click',function (e) {
			/*$(window).off('scroll');*/
			$('nav a').removeClass('selected');
			$(this).addClass('selected');
			e.preventDefault();		
			if(window.location.hash == target) return; 
			var target = this.hash;		
		 	smoothScroll(target);
		});

})

