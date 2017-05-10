  $(document).ready(function(){

  	             /************ the open scene animation*********** */
	             /*show animation screen*/

	             $(".animation").css("display","block");

                 /* hide the scroll bar only at home page when animation is playing*/
                 if($("body").hasClass("homePage") && $(window).width()>768){
                	 $("body").css("overflow-y","hidden");
                 }
                 /* animation of logo, scale down and disapper*/
                 setTimeout(function(){
                 $(".animation").animate({width: "3.2rem",
                   	"left": "5.47rem","top":"2.2rem"});                  
                 }, 3000);

 				 /* when the animation layer disapper, call back the scroll bar*/
                 setTimeout(function(){
                  $(".animation-layer").css("display","none");
                  if($("body").hasClass("homePage") && $(window).width()>768){
                  	  $("body").css("overflow-y","visible");
                    }
           		 }, 3400);

           		/*********** end of animation **********/
                

               /************  drop down burger menu for mobile device************/
	            $(".burger-menu").click(function(){
                     /* close burger menu*/
	            	 if($(".mobile-nav").hasClass("active")){ /*click the burger menu when it has been actived*/
	            	 	$(".mobile-nav").removeClass("active");
	            	 	$("body,html").css("overflow-y","visible");
	            	 	$(".content-section").css("display","block");
	            	 	$("#one").css("transform","");
		                $("#two").css("opacity","1");
		                $("#three").css("transform","");
	                    $(".burger-content div").css("background-color","black"); 
	            	 }

	            	/* open burger menu*/
	            	 else{
	            	    $(".mobile-nav").addClass("active"); /*click the burger menu when it has been closed*/
	            	    $("body,html").css("overflow-y","hidden");
	            	    $(".content-section").css("display","none");
	            	    $("#one").css("transform","translateY(0.5rem) rotate(45deg)");
		                $("#two").css("opacity","0");
		                $("#three").css("transform","translateY(-0.5rem) rotate(-45deg)");
		                $(".burger-content div").css("background-color","white"); 
	                 }
	            });

               /************  end of drop down burger menu ************/

              /************* about page function *************/
				/* control the animation and scroll bar when about page get opened*/
   				$(".about").click(function(){
                    /*add about page to screen and play animation after waiting*/
	            	$(".about-page").css("display","block");
	            	setTimeout(function(){
                    	$(".about-page").css("transform","translate(0,0)");
                    }, 30);
                    $("body").css("overflow-y","hidden");
                    $(".content-section").css("display","none"); /*remove all contents from background*/
                   
	            });

                /* control the animation and scroll bar when about page get closed*/
	            $(".image-container img").click(function(){
                     $(".about-page").css("transform","translate(100%,0)");
                     setTimeout(function(){
	                 $(".about-page").css("display","none");                
	                 }, 900);

	                 if ($(window).width() >= 450){  /*the contents will show up only when user use desktop version*/
						 $(".content-section").css("display","block");
					 }else{
						 $(".content-section").css("display","none"); /*the contents on mobile version controlled by burger menu rather than about*/
					 }

                     $("body").css("overflow-y","visible");
	            });
                        



                /*control the existence of scroll bar when about page get opend */
                 /*   if ($(window).width() >= 450){	
	                    $("body").css("overflow-y","hidden");
	                    }
               		 else{
                	$("body").css("overflow-y","visible");
               		 }

 					 if($("body").hasClass("homePage") && $(window).width()<768){
               		  $(".mobile-section").css("display","none")
               	     }*/
				/* enable the scroll bar for mobile size*/
               /*  if ($(window).width()<= 450){	
                     $(".about").click(function(){*/
                   	 	 /*open about me and allow user to scroll window*/
                 /*   	 $("body,html").css("overflow-y","visible");
                     });*/

                    /*disable the scroll bar when about page get closed*/
                   /* $(".image-container img").click(function(){
 						$("body,html").css("overflow-y","hidden");
                    });
                 }
*/
              
	       
	         
 
               
                /************* imageholder for big-size image ************ */
					var imageScreen=$("#imageScreen");
			        var pop=$("#popup-cover");
			        var images=$(".book-intro img");
			        var detailedImg=$("#detailedImg");
    
			        images.each(function() {
			            $(this).click(function() {
			                  // detailedImg.attr("src")=$(this).attr("src");
			                  var imgSrc=$(this).attr("src");
			                  detailedImg.attr("src",imgSrc);
			                  imageScreen.css("display","block");
			                  pop.css("display","block");
			                  $("body").css("overflow-y","hidden");
			            });
			        });  

			        $(".cancel").click(function(){
			            imageScreen.css("display","none");
			            pop.css("display","none");
			            $("body").css("overflow-y","visible");
			         });
				 /************* end for imageHolder ************ */

			    /*************  button for scrolling back top ************ */
	            $(window).scroll(function(){
	            	 var yPos=$(window).scrollTop();
	                 if(yPos>0){
	                 	$(".moveUp").css({"display":"block", "opacity": "1"});
	                 }
	                 else{
						$(".moveUp").css({"display":"none","opacity": "0"});
	                 }
	            });

	            $(".moveUp").click(function(){
                    $("body,html").animate({scrollTop:0},500);/*----html for firefox.*/
	            });
                
	            /*************  button for scrolling back top *************/
                

});

    