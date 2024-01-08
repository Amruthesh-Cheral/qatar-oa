$(document).ready(function () {
  var showHeaderAt = 150;

  var win = $(window),
    body = $("body");
  header = $(".qatar-oa-header");

  // Show the fixed header only on larger screen devices

  if (win.width() > 400) {
    // When we scroll more than 150px down, we set the
    // "fixed" class on the body element.

    win.on("scroll", function (e) {
      if (win.scrollTop() > showHeaderAt) {
        body.addClass("fixed");
        header.addClass("header-active");
      } else {
        body.removeClass("fixed");
        header.removeClass("header-active");
      }
    });
  }
});



// MOBILE MENU CLICK

function menuClick() {
  $("#mobileSubmenu").toggle();
}
// MOBILE MENU CLICK

// website loader
window.addEventListener("load", () => {
  setTimeout(() => {
    const loader = document.getElementById("loader");
    if (loader) {
      loader.style.display = "none";
    }
  }, 3000);
});
// website loader

// BANNER SLIDER
let activeSlide = 0;
const slides = document.querySelectorAll(".qatar-oa-banner__slide");

let left = document.querySelector("#click-left");

left.onclick = function () {
  updatePrevSlide();
};

let right = document.querySelector("#click-right");

right.onclick = function () {
  updateNextSlide();
};

function updateNextSlide() {
  slides[activeSlide].classList.add("prev");
  let nextSlide = activeSlide < slides.length - 1 ? activeSlide + 1 : 0;
  slides[nextSlide].classList.remove("prev");
  slides[nextSlide].classList.remove("next");
  slides[nextSlide].classList.add("active");

  if (nextSlide < slides.length - 1) {
    slides[nextSlide + 1].classList.add("next");
    slides[nextSlide + 1].classList.remove("prev");
  } else {
    slides[0].classList.remove("prev");
    slides[0].classList.add("next");
  }
  activeSlide = nextSlide;
}

function updatePrevSlide() {
  slides[activeSlide].classList.add("next");
  let prevSlide = activeSlide > 0 ? activeSlide - 1 : slides.length - 1;
  slides[prevSlide].classList.remove("next");
  slides[prevSlide].classList.remove("prev");
  slides[prevSlide].classList.add("active");

  if (prevSlide > 0) {
    slides[prevSlide - 1].classList.add("prev");
    slides[prevSlide - 1].classList.remove("next");
  } else {
    slides[slides.length - 1].classList.remove("next");
    slides[slides.length - 1].classList.add("prev");
  }

  activeSlide = prevSlide;
}
// BANNER SLIDER

// HIGHER STUDIES
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName(
    "qatar-oa-high-study__tabcontent"
  );
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("qatar-oa-high-study__tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Trigger a click event on the first tab element
var firstTab = document.getElementsByClassName(
  "qatar-oa-high-study__tablinks"
)[0];
firstTab.click();
// HIGHER STUDIES

// TESTIMONIAL
$('.qatar-oa-testimonial__wrapper').slick({
  centerMode: true,
  centerPadding: '60px',
  draggable: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: true,
  autoplay: true,
  autoplaySpeed: 1000,
  speed: 600,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: false,
        autoplay: false,
        centerPadding: '40px',
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
         autoplay: false,
        centerMode: false,
        centerPadding: '40px',
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});
// TESTIMONIAL
// GALLERY
$('.qatar-oa-media-gallery__wrapper').slick({
  centerMode: true,
  centerPadding: '160px',
  slidesToShow: 1,
  draggable: true,
  infinite: true,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  autoplay: true,
  autoplaySpeed: 1000,
  speed: 600,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
// GALLERY
// CAMPUS
$('.qatar-oa-campus__wrapper').slick({
  infinite: true,
  centerPadding: '60px',
  slidesToShow: 1,
  draggable: true,
  variableWidth: true,
  autoplay: true,
  autoplaySpeed: 1000,
  speed: 600,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
// CAMPUS

// SCROLL TOP BOTTOM
function tobottom(){
  console.log('scroll top');
	$('html,body').animate({ scrollTop: ($('html').height())-($(window).height())}, 3000, 'easeInOutQuad')											 
}
function totop(){
	$('html,body').animate({ scrollTop: (0)}, 1000, 'easeInOutQuad')											 
}
// SCROLL TOP BOTTOM
