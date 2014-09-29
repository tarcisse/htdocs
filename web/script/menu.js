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
		$('#bottom-submenu').show();
		$('.subsub-nav').hide();
			$('#sb-'+this.id).show();
		$('.menu-footer').fadeIn();
	});

	$('.menu-footer,#top-menu').hover(function(){
		$('#bottom-submenu').hide();
		$('.menu-footer').hide();
		
	});
})