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

  // Sticky Navbar
  document.addEventListener("DOMContentLoaded", function () {
    const dataSpyList = document.querySelectorAll('[data-bs-spy="scroll"]');
    dataSpyList.forEach((dataSpyEl) => {
      bootstrap.ScrollSpy.getOrCreateInstance(dataSpyEl, {
        target: "#navbarNav",
        offset: 100,
        smoothScroll: true,
      });
    });

    document.querySelectorAll(".navbar-nav a.nav-link").forEach((link) => {
      link.addEventListener("click", function (e) {
        if (this.hash !== "") {
          e.preventDefault();
          const hash = this.hash;

          document.querySelectorAll(".navbar-nav a.nav-link").forEach((l) => {
            l.classList.remove("active");
          });
          this.classList.add("active");

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

    window.addEventListener("scroll", () => {
      const scrollPosition = window.scrollY;

      document.querySelectorAll("section").forEach((section) => {
        const sectionTop = section.offsetTop - 150; // 150px de margen
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          const currentId = section.getAttribute("id");
          document
            .querySelectorAll(".navbar-nav a.nav-link")
            .forEach((link) => {
              link.classList.remove("active");
              if (link.getAttribute("href") === `#${currentId}`) {
                link.classList.add("active");
              }
            });
        }
      });
    });
  });
})(jQuery);
