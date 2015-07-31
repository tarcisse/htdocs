$(document).ready(function(){
   $('.l-link').click(function(){
    a=$('#'+this.id).data('l-link');
   window.location.href='/?scroll='+a;
    
   });
});