$(function () {
  function nextani() {
    $(".slide").animate({ marginTop: "-300px" }, 500, function () {
      $(".slide li").eq(0).appendTo(".slide");
      $(".slide").css({ marginTop: "0" });
    });
  }
  setInterval(function () {
    nextani();
  }, 1000);
});
