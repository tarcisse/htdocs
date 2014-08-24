 $(document).ready(function(){
                            
                            
                            
                            setTimeout(function(){
                              $( "#pgarde" ).animate({opacity:0},
                          function() {
                $( "#pgarde" ).css('-webkit-transform','scale(1.10)');                      
                           });
    
                            },9000);
                            
                            
                             setTimeout(function(){

                               $("#principale").fadeIn(8000);
                                },12000);
                             setTimeout(function(){
                                $( "#pgarde" ).remove();
                             },30000);
                            
                            
                             //à enlever
                           
                           /* $( "#pgarde" ).remove();*/
                            $("#principale").show();
                          // $( document ).tooltip();
                            
                             $('#slide').show();
                              $('.menu').hide();
                              $('.tcmenu').hide();
                          
                            
                            
                                                   
                                  
                                  $('#slide').load('3DGallery/galerie.html',function(){
                                           $('#slide').hide();       
                                  });
                                  
                              setTimeout(function(){
                                                    
                            $('#slide').show('drop',function(){
                                                      $('#slide').effect('bounce');
                                                       var e=setInterval(function(event){
                                   $('.dg-prev').trigger('click');
                                   alert(event.type);
                                  // alert('ok');
                             },10000);
                                                      
                                    $('#pied2').slideDown(function(){
                                                     
                                                                $('#rss').show('drop',function(){
                                                                                 
                                                                    $('#skype').show('drop',function(){
                                                                              $('#google').show('drop',function(){
                                                                                 
                                                                                 $('#twiter').show('drop',function(){
                                                                                    $('#facebook').show('drop',function(){
                                                                                      $('#pied1').slideDown(function(){
                                                                                          $('#catalogue').show('drop',function(){
                                                                                               $('#sb').show('drop',function(){
                                                                                                  $('#societe').show('drop',function(){
                                                                                                            
                                                                                                        $('#accueil').show('drop');
                                                                                                         $('#logo').show('slide'); 
                                                                                                  });          
                                                                                               });             
                                                                                          });                   
                                                                                                        
                                                                                     });
                                                                                      
                                                                                                            
                                                                                                            
                                                                                    });
                                                                                    
                                                                                     
                                                                                 });
                                                                              });  
                                                                    });             
                                                                });               
                                                    
                                                      
                              });                  
                                                      
                                                      
                            });
                              
                              //width:300px;
                                                     
                            },15000);
                             // },1000); 
                     var a='';       
             ////transparence du dessus
             $('.menu').hover(function(){
                 a=this.id;
                 $('#trans').css('opacity','1');
                 $('.tcmenu').hide();
                 $('.corps').css('opacity','0.1');
                 $('#s'+a).fadeIn('500');  
                 
             });
                            
               $('#menu').mouseleave(function() {
                     $('.tcmenu').hide('explode');      
                   $('#trans').css('opacity','0.1');
                   $('.corps').css('opacity','1');
                    
               });
                             
                        });