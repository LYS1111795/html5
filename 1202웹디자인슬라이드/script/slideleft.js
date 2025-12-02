$(function () {
  function nextani() {
    $(".slide").animate({ marginLeft: "-1200px" }, 500, function () {
      $(".slide li").eq(0).appendTo(".slide");
      $(".slide").css({ marginLeft: "0" });
    });
  }
  setInterval(function () {
    nextani();
  }, 1000);
});
