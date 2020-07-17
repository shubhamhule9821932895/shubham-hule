var navSlide = function () {
  let burger = document.querySelector(".burger");
  let nav = document.querySelector(".nav-links");
  let navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", function () {
    nav.classList.toggle("nav-active"); // trnaslating the navbar

    navLinks.forEach((links, index) => {
      // delaying and animating the links
      if (links.style.animation) {
        links.style.animation = "";
      } else {
        links.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 6 + 0.4
        }s`;
      }
    });
    burger.classList.toggle("toggle");
  });
};

navSlide();
//blogs carousel =========================================================================================

var swiper = new Swiper(".swiper-container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

//==================================================================

// Porfolio isotope and filter
$(window).on("load", function () {
  var portfolioIsotope = $(".portfolio-container").isotope({
    itemSelector: ".portfolio-item",
    layoutMode: "fitRows",
  });

  $("#portfolio-flters li").on("click", function () {
    $("#portfolio-flters li").removeClass("filter-active");
    $(this).addClass("filter-active");

    portfolioIsotope.isotope({
      filter: $(this).data("filter"),
    });
  });

  // Initiate venobox (lightbox feature used in portofilo)
  $(document).ready(function () {
    $(".venobox").venobox();
  });
});

//navSlide();
