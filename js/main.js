$(document).ready(function(){  // slick slider
   $('.about__gallery').slick({
      slidesToShow: 3,
      variableWidth: true,
      centerMode: true,
      responsive: [
         {
            breakpoint: 900,
            settings: {           
            slidesToShow: 2, 
            } 
         },
         {
            breakpoint: 768,
            settings: {
               slidesToShow: 1,
               arrows: false,
               dots: true,
            }
         }
      ]
   });
});

$(document).ready(function() {   // spoiler
   $('.about__cal-title').click(function(event) {
      $(this).toggleClass('active').next().slideToggle(300);
   })
}); 

$(document).ready(function() {   // burger menu 
   $('.header__burger').click(function(event) {
      $('.header__menu-list').toggleClass('active').next().slideToggle(300);
   });
}); 








