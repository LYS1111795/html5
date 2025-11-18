$(function () {
  $(".sub").slideUp();
  $(".main_menu >li").hover(
    function () {
      $(".sub").stop().slideDown();
      $("header").addClass("on");
      $(".main_menu >li >a").css("color", "#333");
      $(".headwrap").addClass("on");
      $(".logo").addClass("on");
    },
    function () {
      $(".sub").stop().slideUp();
      $("header").removeClass("on");
      $(".main_menu >li >a").css("color", "#fff");
      $(".headwrap").removeClass("on");
      $(".logo").removeClass("on");
    }
  );
  $(window).on("wheel", function () {
    console.log(event.wheelDelta);
    if (event.wheelDelta < 0) {
      $("header").addClass("active");
    } else {
      $("header").removeClass("active");
    }
  });
});
