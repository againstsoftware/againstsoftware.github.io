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

  // Simple navbar scroll spy
  document.addEventListener("DOMContentLoaded", function () {
    var scrollSpy = new bootstrap.ScrollSpy(document.body, {
      target: "#navbarNav",
      offset: 100,
    });

    document.querySelectorAll(".navbar-nav a.nav-link").forEach((link) => {
      link.addEventListener("click", function (e) {
        if (this.hash !== "") {
          e.preventDefault();
          const hash = this.hash;

          document.querySelector(hash).scrollIntoView({
            behavior: "smooth",
          });

          // Close mobile menu after clicking
          const navbarToggle = document.querySelector(".navbar-toggler");
          if (window.getComputedStyle(navbarToggle).display !== "none") {
            document.querySelector(".navbar-collapse").classList.remove("show");
          }
        }
      });
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
    const navbarHeight = navbar.offsetHeight;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const header = entry.target.querySelector(".section-header");
          const nextSection = entry.target.nextElementSibling;
          
          if (!header) return;

          if (entry.isIntersecting) {
            header.style.position = "sticky";
            header.style.top = `${navbarHeight}px`;

            // Only handle the case where headers would overlap
            if (nextSection) {
              const sectionRect = entry.target.getBoundingClientRect();
              const headerRect = header.getBoundingClientRect();
              
              if (sectionRect.bottom <= headerRect.height + navbarHeight) {
                header.style.position = "absolute";
                header.style.top = `${entry.target.offsetHeight - headerRect.height}px`;
              }
            }
          }
        });
      },
      {
        threshold: [0],
        rootMargin: `-${navbarHeight}px 0px 0px 0px`
      }
    );

    // Observe each section
    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });
  });
})(jQuery);