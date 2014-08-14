
window.onload = setTimeout(function(){

    var scrollBot = $('body').outerHeight() - $(window).height();

    $(document).on('scroll',function(){
        scrolled = $(window).scrollTop();
        $('.map').css('transform','translateY(' + 0.5*(scrolled - scrollBot)+'px)');
        $('#main-bg').css('transform','translateY(' + 0.5*scrolled + 'px)');
    }); 
}, 700);
