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
		$('#main-nav').css('background-image','url(web/images/'+a+'.jpg)');
	});
		
	
});