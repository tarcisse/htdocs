$(document).ready(function(){
$("a").click(function(e){
		if($(this).data("type-lien")=="noClick"){
			e.preventDefault();
		}
	});
	
});