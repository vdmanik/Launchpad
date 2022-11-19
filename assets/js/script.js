$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 1) {
	    $(".customnav").css("background" , "#5F5F5F");
	    $(".customnav").css("opacity" , "0.9");
	    $(".nav_t").css("color" , "white");
	    $(".nav_i").attr("src","assets/image/navi_lo.png");
	  }
	  else{
		  $(".customnav").css("background" , "#E3E2DF");
      $(".nav_t").css("color" , "black");  	
      $(".nav_i").attr("src","assets/image/navi_logo.png");
	  }
  })
})


$(".owl-carousel").owlCarousel({
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    loop: true,
    responsiveClass: true,
    nav: true,
    loop: true,
    responsive: {
      0: {
        items: 1,
        stagePadding: 0,
        margin: 0,
        nav: false,
      },
      300:{
        items:1,
        stagePadding: 10,
        margin: 10,
        nav: false,
      },
      500:{
        items:1,
        stagePadding: 100,
        margin: 50,
        nav: false,
      },
      952:{
        items:1,
        stagePadding: 100,
        margin: 60,
        nav: false,
      },
      1000: {
        items: 1,
        margin: 80,
        stagePadding: 200,
        nav: false,
      },
      1200:{
        items: 1,
        margin: 100,
        stagePadding: 350,
      }
    },
  });