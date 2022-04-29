jQuery(document).ready(function () {
    jQuery("#owl-def").owlCarousel({
      lazyLoad:true,
      loop: true,
      margin: 10,
      items: 1,
      center: true,
      dots:true,
      dotsEach:1,
      autoplay:true,
      autoplaySpeed:2500,
      slideTransition: 'ease',
      navText: [jQuery('.am-prev'),jQuery('.am-next')],
      nav:true,
      responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    },
  
    });
  
  
  });

jQuery(document).ready(function () {
    jQuery("#owl-carousel-smooth").owlCarousel({
      autoplay: true,
      loop: true,
      margin: 10,
      dots: false,
      autoplayTimeout: 3000,
      autoplaySpeed: 3000,
      slideTransition: 'linear',
      autoplayHoverPause: false,
      dotsSpeed: 6000,
      responsive: {
          0: {
              items: 1
          },
          600: {
              items: 3
          },
          1000: {
              items: 4
          }
      },
  
  
    });
  
  
  });