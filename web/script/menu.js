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
	
	$('#bottom-menu ul li').hover(function(){
		$('#bottom-submenu').fadeIn(function(){
			$("#subsub-nav").slideDown(100);
		});
	});
	
	$('#bottom-menu ul li').mouseleave(function(){
		$("#subsub-nav").hide();
			$('#bottom-submenu').hide();
		
		
	});
})