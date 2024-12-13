(function ($) {
  "use strict";

  // Initiate the wowjs
  new WOW().init();

  // testimonial carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    items: 1,
    smartSpeed: 1500,
    dots: true,
    dotsData: true,
    loop: true,
    margin: 25,
    nav: true,
    navText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>',
    ],
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").addClass("active");
    } else {
      $(".back-to-top").removeClass("active");
    }
  });

  $(document).on("click", ".back-to-top", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });
})(jQuery);
