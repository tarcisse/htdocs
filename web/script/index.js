$(document).ready(function(){
	
	/*paralix effect*/
	var $window = $(window);
	$('section[data-type="background"]').each(function(){
        var $bgobj = $(this); // assigning the object
    
        $(window).scroll(function() {
            var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
            
            // Put together our final background position
            var coords = '50% '+ yPos + 'px';

            // Move the background
            $bgobj.css({ backgroundPosition: coords });
        }); 
    });    
	
	/* Social hovers */
	$("#social ul li").hover(
		function() {
			$("#social").addClass($(this).data("network")).addClass("active");
			$("#social h3").html($(this).data("text"));
		},
		function() {
			$("#social").removeClass();
			$("#social h3").html("Follow us");
		}
	);
	
	$('.subnav').hover(function(){
		a=this.id;
		$('#support').css('background-image','url(web/images/bg/'+a+'.jpg)');
	});
	
	/*Form MouseLeave*/
	$('#form').mouseleave(function(){
		if ($("#form2").is(":hidden") && $("#form3").is(":hidden")){
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
	$('#form3').mouseleave(function(){
		if ($("#form").is(":hidden")){
			$('#form3').hide();
			$('#logo').show();
		}
	});
	
	
	
	
		
		$('#logo_haut img').css('transition-property','all');
		$('#logo_haut img').css('transition-duration','2s');
		
		$('#logo_haut img').css('opacity','0.8');
		contenu=$('#logo_haut').width();
	image=$('#logo_haut img').width();
	taille=(contenu-image)/2;
	taille2=contenu/2;
	//alert(taille);
	//$('#logo_haut img').css('left',taille+'px');
	
	
  /*$( "#logo_haut img" ).animate({
    left: taille,
  }, 1, function() {*/
  $('#titre_logo').css('left',taille2+'px');
   $('#titre_logo').fadeIn(4000);
  //});
  
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
  
  $('#error').click(function(){
	$('#form').hide();
	$('#form3').show();
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
  
  /*Language*/
  $('#language').click(function(){
	$("#lang").show();
  });
  $("#lang").click(function() {
	  if($("#lang-container").data('clicked')){
    alert("ok");}
  });
  //lorqu'on clique à l'extérieur de la zone
  $("#lang").click(function() {
  	$('#lang').hide();
  });
  $('#lang li').click(function(event){
   	event.stopPropagation();
  });
  //selction de la langue
  $('#fr').click(function(){
	document.getElementById("language").innerHTML = "Langue : Français";
   	$("#lang").hide();
  });
  $('#nl').click(function(){
	document.getElementById("language").innerHTML = "Taal : Nederlands";
   	$("#lang").hide();
  });
  $('#en').click(function(){
	document.getElementById("language").innerHTML = "Language : English";
   	$("#lang").hide();
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