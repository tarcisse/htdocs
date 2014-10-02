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
	
	
	$('#close-menu').click(function(){
		$('.pos').fadeOut(100,function(){
			$('#header').slideUp(300);
		});
	   $('#open-menu').show();
	    $('#close-menu').hide();
	});
	
	$('.mysb-menu li a h10' && '#shop-mysb').click(function(){
		
		if($('#header').is(":visible")){
			  $('.pos').fadeOut(100,function(){
			  $('#header').slideUp(300);
		  });
		 $('#open-menu').show();
		  $('#close-menu').hide();
		}
		
		if($('#mysb').is(":hidden")){
			  $('#bottom-submenu').show();
			  $('.subsub-nav').hide();
				  $('#mysb').show();
			  $('#mysb-footer').fadeIn();
		}
		else{
			$('#mysb').hide();
		}
	});
	
	$(document).click(function(){
    	$("#mysb").hide();
		$('#mysb-footer').hide();
	});
	
	$(".mysb-menu li a h10" && '#shop-mysb').click(function(e){
    	e.stopPropagation();
	});
	$("#mysb-profil").click(function(e){
    	e.stopPropagation();
	});
	
	$('.bottom-menu').hover(function(){
		if($('#mysb-profil').is(":hidden")){
			  $('#bottom-submenu').show();
			  $('.subsub-nav').hide();
				  $('#sb-'+this.id).show();
			  $('#menu-footer').show();
		}
		/*$('.subpos').css("position", "absolute");*/
	});
	
	$('.bottom-menu').mouseout(function(){
		$('#menu-footer,#top-menu,#mysb-menu').mouseover(function(){
			$('#menu-footer').hide();
			$('#bottom-submenu').hide();	
		});
		
	});

})