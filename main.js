$(document).ready(function() {
    $('.startupHeader__navBtn').click(function() {
    $(".startupHeader__nav").slideToggle();
    });

    $('.item1').hover(function() {
    $(".social-block1").slideToggle();
    });
       $('.item2').hover(function() {
    $(".social-block2").slideToggle();
    });
          $('.item3').hover(function() {
    $(".social-block3").slideToggle();
    });

   $('.item4').hover(function() {
    $(".social-block4").slideToggle();
    });

   $('.item5').hover(function() {
    $(".social-block5").slideToggle();
    });
      $('.item6').hover(function() {
    $(".social-block6").slideToggle();
    });

   $('.item7').hover(function() {
    $(".social-block7").slideToggle();
    });

   $('.item8').hover(function() {
    $(".social-block8").slideToggle();
    });
     


   $('.latestWorks-block1').hover(function() {
    $(".latestWorks__hover-block1").slideToggle();
    });
   $('.latestWorks-block2').hover(function() {
    $(".latestWorks__hover-block2").slideToggle();
    });

$('.latestWorks-block3').hover(function() {
    $(".latestWorks__hover-block3").slideToggle();
    });

$('.latestWorks-block4').hover(function() {
    $(".latestWorks__hover-block4").slideToggle();
    });

$('.latestWorks-block5').hover(function() {
    $(".latestWorks__hover-block5").slideToggle();
    });

$('.latestWorks-block6').hover(function() {
    $(".latestWorks__hover-block6").slideToggle();
    });

$('.latestWorks-block7').hover(function() {
    $(".latestWorks__hover-block7").slideToggle();
    });

$('.latestWorks-block8').hover(function() {
    $(".latestWorks__hover-block8").slideToggle();
    });

$('.latestWorks-block9').hover(function() {
    $(".latestWorks__hover-block9").slideToggle();
    });





   

    $('#owl-carousel1').owlCarousel ({
         items: 4,
         autoHeight: true,
         nav: true,
         dots: false,
         navText: ['<i class="fa fa-angle-left nav-btn" aria-hidden="true"></i>','<i class="fa fa-angle-right nav-btn" aria-hidden="true"></i>'],
	     responsive:{
        0:{
            items:1,
            nav:false
        },
         500:{
            items:3,
            nav:false
        },
        800:{
            items:4,
            nav:true
        }
    }

	});
	 $('#owl-carousel2').owlCarousel ({
	 	items: 1,
	 });
 });