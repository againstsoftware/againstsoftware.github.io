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

  // Navbar scroll spy
  document.addEventListener("DOMContentLoaded", function () {
    var scrollSpy = new bootstrap.ScrollSpy(document.body, {
      target: "#navbarNav",
      offset: 100,
    });

    document.querySelectorAll(".navbar-nav a.nav-link").forEach((link) => {
      if (this.hash !== "") {
        e.preventDefault();
        const hash = this.hash;

        document.querySelector(hash).scrollIntoView({
          behavior: "smooth",
        });

        // En móvil cerrar tras pulsar un enlace
        const navbarToggle = document.querySelector(".navbar-toggler");
        if (window.getComputedStyle(navbarToggle).display !== "none") {
          document.querySelector(".navbar-collapse").classList.remove("show");
        }
      }
    });
  });
})(jQuery);
