
(function($){
	$(function(){
        
        $(".burger").click(function(){
            $(".nav-wrap").slideToggle();
            $('body').toggleClass('overflow-hidden');
        });


	})// End ready function.
})(jQuery)

