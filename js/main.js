
window.onload = function(){

    var scrollBot = $('body').height() - $(window).height() ;

    $(document).on('scroll',function(){
        scrolled = $('body').scrollTop();
        // if(scrolled == scrollBot)
        //     alert('intheend');
        // console.log(scrolled);
        $('.map').css('bottom',0.3*(scrollBot - scrolled)+'px');
    }); 
}
