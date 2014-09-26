$(document).ready(function(){
	$('#nav').localScroll();
	
	$('#open-menu').click(function(){
		$('.pos').css("position", "absolute");
	    $('#header').slideDown(300, function(){
			$('.pos').fadeIn(500);
		});
	    $('#open-menu').hide();
		$('#close-menu').show();
	});
	
	$('#close-menu').click(function(){
		$('.pos').fadeOut(100,function(){
			$('#header').slideUp(300);
		});
	   $('#open-menu').show();
	    $('#close-menu').hide();
	});
	
	
	$('.bottom-menu').hover(function(){
		$('.subsub-nav').hide();
			$('#sb-'+this.id).show();
		if ($("#bottom-submenu").is(":hidden")){
			$("#bottom-submenu").slideDown(300);
		}
		
	});
	
	$('#banner').mouseleave(function(){
		
			$('#bottom-submenu').slideUp(300);
		
		
	});
})