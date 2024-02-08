function getWindowWidth() {
  let ww = $(window).width();
  if (ww > 910) {
    $("html").addClass("pc").removeClass("mobile");
    $("#header #nav").css({
      display: "flex",
      width: "auto",
    });
    $("#nav .depth1 > li").removeClass("on");
    $("#nav .depth1 > li").find(".depth2").hide();
  } else {
    $("html").addClass("mobile").removeClass("pc");
    $("#header .menuopen")
      .find("i")
      .removeClass("fa-times")
      .addClass("fa-bars");
    $("#header #nav").css({
      display: "none",
      width: "100%",
    });
  }
}
getWindowWidth();
$(window).on("resize", function () {
  getWindowWidth();
});

$(".slideInner").slick({
  autoplay: true, // 슬라이더 자동재생
  dots: true, // 번호버튼 표시여부
  autoplaySpeed: 4000, // 자동재생 시간 간격(ms 단위생략) 3초
  speed: 300, //슬라이드 진출입 속도 0.3초
  arrows: true, // 이전, 다음 버튼 표시여부
  prevArrow:
    '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><i class="fa-solid fa-circle-arrow-left"></i></button>',
  nextArrow:
    '<button class="slick-next slick-arrow" aria-label="Next" type="button"><i class="fa-solid fa-circle-arrow-right"></i></button>',
});
$(".slideOuter1 .plapau i").on("click", function () {
  if ($(this).hasClass("fa-pause")) {
    $(".slideInner").slick("slickPause");
    $(this).removeClass("fa-pause").addClass("fa-play");
  } else {
    $(".slideInner").slick("slickPlay");
    $(this).removeClass("fa-play").addClass("fa-pause");
  }
});

$(".slideInner2").slick({
  autoplay: true, // 슬라이더 자동재생
  dots: true, // 번호버튼 표시여부
  autoplaySpeed: 4000, // 자동재생 시간 간격(ms 단위생략) 3초
  speed: 300, //슬라이드 진출입 속도 0.3초
  arrows: false, // 이전, 다음 버튼 표시여부
  fade: true,
});

//퍼레이드 슬라이드
var $swiperSelector = $(".swiper-container");

$swiperSelector.each(function (index) {
  var $this = $(this);
  $this.addClass("swiper-slider-" + index);

  var dragSize = $this.data("drag-size") ? $this.data("drag-size") : 50;
  var freeMode = $this.data("free-mode") ? $this.data("free-mode") : false;
  var loop = $this.data("loop") ? $this.data("loop") : false;
  var slidesDesktop = $this.data("slides-desktop")
    ? $this.data("slides-desktop")
    : 4;
  var slidesTablet = $this.data("slides-tablet")
    ? $this.data("slides-tablet")
    : 3;
  var slidesMobile = $this.data("slides-mobile")
    ? $this.data("slides-mobile")
    : 2.5;
  var spaceBetween = $this.data("space-between")
    ? $this.data("space-between")
    : 20;

  var swiper = new Swiper(".swiper-slider-" + index, {
    direction: "horizontal",
    loop: loop,
    slidesToShow: 3, // 무대에서 보여지는 슬라이드이미지에 갯수
    slidesToScroll: 1,
    freeMode: freeMode,
    autoplay: true,
    autoplaySpeed: 1000,
    spaceBetween: spaceBetween,
    breakpoints: {
      1920: {
        slidesPerView: slidesDesktop,
      },
      992: {
        slidesPerView: slidesTablet,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
      dragSize: dragSize,
    },
  });
});

// nav
$("#nav .depth1 > li").on("mouseover mouseout", function () {
  if ($("html").hasClass("pc")) {
    $(this).toggleClass("on");
    $(this).find(".depth2").stop().slideToggle(200);
  }
});
$("#nav .depth1 > li").on("click", function () {
  if ($("html").hasClass("mobile")) {
    $(this).toggleClass("on").siblings().removeClass("on");
    $(this).find(".depth2").stop().slideToggle(200);
    $(this).siblings().find(".depth2").stop().slideUp(200);
  }
});

$("#header .menuopen").on("click", function () {
  $(this).next().stop().slideToggle(200);
  if (!$(this).find("i").hasClass("fa-bars")) {
    $("#header #nav .depth2").slideUp();
    $("#nav .depth1 > li").removeClass("on");
    $(this).find("i").addClass("fa-bars").removeClass("fa-times");
  } else {
    $(this).find("i").addClass("fa-times").removeClass("fa-bars");
  }
});
