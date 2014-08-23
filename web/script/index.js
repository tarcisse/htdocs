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
		
});