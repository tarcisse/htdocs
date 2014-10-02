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
	
	/*lorsqu'on clique sur un bottom-menu, généralement
	 *le submenu ne doit pas se dérouler et il doit donc rester caché
	 *sans cette variable subMenu la div submenu s'affiche toujours après le click ce qui n'est pas propre je trouve
	 */
	/*var $subMenu = "no";
	$('#menu-footer,#top-menu,#content').mouseover(function(){
			$subMenu = "yes";
	});
	$('#Hair, #Make-Up, #Accessoiries, #Bodycare ').mouseout(function(){
			$subMenu = "yes";
	});
	
	$('#Hair, #Make-Up, #Accessoiries, #Bodycare ').click(function(){
		$subMenu = "no";
	});*/
	$('.bottom-menu').hover(function(){
		if($('#mysb-profil').is(":hidden")){
			//if($subMenu=="yes"){
			  $('#bottom-submenu').show();
			  $('.subsub-nav').hide();
				  $('#sb-'+this.id).show();
			  $('#menu-footer').show();
			//}
		}
		/*$('.subpos').css("position", "absolute");*/
	});
	
	$('.bottom-menu').mouseout(function(){
		$('#menu-footer,#top-menu,#content').mouseover(function(){
			$('#menu-footer').hide();
			$('#bottom-submenu').hide();	
		});
		
	});

})