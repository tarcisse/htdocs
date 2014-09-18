$(function(){
	/* Social hovers */
	$("#social ul li").hover(
		function() {
			$("#social").addClass($(this).data("network")).addClass("active");
			$("#social h1").html($(this).data("text"));
		},
		function() {
			$("#social").removeClass();
			$("#social h1").html("Follow us");
		}
	);
	
	$('.subnav').hover(function(){
		a=this.id;
		$('#support').css('background-image','url(web/images/'+a+'.jpg)');
	});
	
	/*Form MouseLeave*/
	$('#form').mouseleave(function(){
		if ($("#form2").is(":hidden")){
			$('#form').hide();
			$('#logo').show();
		}
	});
	$('#form2').mouseleave(function(){
		if ($("#form").is(":hidden")){
			$('#form2').hide();
			$('#logo').show();
		}
	});
	
	
	
	
		
		$('#logo_haut img').css('transition-property','all');
		$('#logo_haut img').css('transition-duration','2s');
		
		$('#logo_haut img').css('opacity','0.4');
		contenu=$('#logo_haut').width();
	image=$('#logo_haut img').width();
	taille=(contenu-image)/2;
	taille2=contenu/2;
	//alert(taille);
	//$('#logo_haut img').css('left',taille+'px');
	
	
	$( "#logo_haut img" ).animate({
    left: taille,
  }, 1, function() {
  $('#titre_logo').css('left',taille2+'px');
   $('#titre_logo').fadeIn(4000);
  });
  
  /*MyS&B Home Event*/
  var connect = "membre"; //state
  
  $('#logo').click(function(){
	  $('#logo').hide();
	  if(connect == "membre"){
		$('#form').fadeIn(1000);
	  }else{
		$('#form2').fadeIn(1000);
	  }
  });
	
  $('#login').click(function(){
	$('#form').hide();
	$('#logo').show();
  });
	
  $('#new-count').click(function(){
	connect="count";
	$('#form').hide();
	$('#form2').show();
  });
	
  $('#my-count').click(function(){
	connect="membre";
	$('#form2').hide();
	$('#form').show();
  });
  
  $('#valide').click(function(){
	$('#form2').hide();
	$('#logo').show();
  });
	


	/*$('*').off();
	$('*').remove();
	alert('ok');*/
/*************************************************script pour les changement des pages********************************************************/
	$('a').click(function(event){
		
		if($(this).data('chargement')=='ajax')
		{
			event.preventDefault();
			$('#page_pricipale').css({
    
   
"padding:0; font-family":" Arial, Helvetica, sans-serif",
"margin":"auto auto auto auto",
"color":"#424849",
"font-size":"12px",
"-moz-transform": "scale(0.5)",
"-webkit-transform":" scale(0.3)",
"transition-property": "all",
     "-webkit-transition-duration": "0.5s",
    "-webkit-transition-timing-function": "ease-out",
    "box-shadow": "1px 1px 3px #000",
    });
			$('*').unbind('clik');
		}
		
		
	});
	
/*********************************************fin de script pour le changement de pages**************************************************/
	
	
	
});