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
	
	
	$('#bottom-menu li').hover(function(){
		$('#bottom-submenu').show();
		$('.subsub-nav').hide();
			$('#sb-'+this.id).show();
		$('.menu-footer').fadeIn();
	});

	$('#bottom-menu li').mouseleave(function(){
		$('.menu-footer').hide();
		
		/*if($("#bottom-submenu").is(":visible")){
			  $("#bottom-submenu").mouseout(function(){
				  $('#bottom-submenu').hide();
			  })
		}*/
		
		
		/*$(".subsub-nav").mouseleave(function(){
			$('#bottom-submenu').hide();
			
		});
		
		if($("#bottom-submenu").is(":hidden")){
			
		}
		else{
			if(){
			}	
			if($('.subsub-nav').hover()){
			}
			$('#bottom-submenu').hide();
		}*/
	});
})