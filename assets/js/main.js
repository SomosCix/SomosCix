$(function () {
  "use strict";

  //===== Prealoder

  $(window).on("load", function (event) {
    $("#preloader").delay(500).fadeOut(500);
  });

  //===== Mobile Menu

  $(".navbar-toggler").on("click", function () {
    console.log($(this));
    $(this).toggleClass("active");
    $(".navbar-collapse").toggleClass("show");
  });

  $(".navbar-nav a").on("click", function () {
    $(".navbar-toggler").removeClass("active");
  });

  //===== close navbar-collapse when a  clicked

  $(".navbar-nav a").on("click", function () {
    $(".navbar-collapse").removeClass("show");
  });

  //===== Sticky

  $(window).on("scroll", function (event) {
    var scroll = $(window).scrollTop();
    if (scroll < 10) {
      $(".navigation").removeClass("sticky");
    } else {
      $(".navigation").addClass("sticky");
    }
  });

  //===== Section Menu Active

  var scrollLink = $(".page-scroll");
  // Active link switching
  $(window).scroll(function () {
    var scrollbarLocation = $(this).scrollTop();

    scrollLink.each(function () {
      var sectionOffset = $(this.hash).offset().top - 90;

      if (sectionOffset <= scrollbarLocation) {
        const text = $(this).context.innerText;
        if (
          text == "CHICLAYO" ||
          text == "GALERÍA" ||
          text == "VIDEOS" ||
          text == "JUEGOS"
        ) {
          $(this).parent().addClass("active2");
          $(this).parent().siblings().removeClass("active");
          $(this).parent().siblings().removeClass("active2");
        } else {
          $(this).parent().addClass("active");
          $(this).parent().siblings().removeClass("active");
          $(this).parent().siblings().removeClass("active2");
        }
      }
    });
  });

  //====== Magnific Popup

  $(".video-popup").magnificPopup({
    type: "iframe",
    // other options
  });

  // $(".abrirTest").magnificPopup({
  //   src: $('<div class="white-popup">Dynamically created element</div>'), // Dynamically created element
  //   type: "inline",
  // });

  //===== Slick

  $(".people-active").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 800,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  });

  $(".testimonial-active").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 800,
    arrows: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow:
      "<i class='lni lni-arrow-left-circle' style='margin-bottom: auto; margin-top: auto; cursor: pointer; font-size: 2rem;'></i>",
    nextArrow:
      "<i class='lni lni-arrow-right-circle' style='margin-bottom: auto; margin-top: auto; cursor: pointer; font-size: 2rem;'></i>",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  });

  //===== Back to top

  // Show or hide the sticky footer button
  $(window).on("scroll", function (event) {
    if ($(this).scrollTop() > 600) {
      $(".back-to-top").fadeIn(200);
    } else {
      $(".back-to-top").fadeOut(200);
    }
  });

  //Animate the scroll to yop
  $(".back-to-top").on("click", function (event) {
    event.preventDefault();

    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1500
    );
  });

  setButton();
  //=====
});

function setButton() {
  const file = document.querySelector("#file");
  file.addEventListener("change", handleFiles, false);
}

async function handleFiles() {
  const fileList = this.files[0]; /* now you can work with the file list */
  const url = (await fileToUrl(fileList)).toString();
  const img = document.querySelector("#visualizer");
  img.src = url;
}

async function fileToUrl(file) {
  return new Promise((res) => {
    const reader = new FileReader();
    reader.onload = function () {
      res(reader.result);
    };
    reader.readAsDataURL(file);
  });
}
