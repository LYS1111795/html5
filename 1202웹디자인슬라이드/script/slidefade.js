$(function () {
  $(".slide li:gt(0)").fadeOut();
  function nextani() {
    $(".slide li:first")
      .fadeOut(500)
      .next()
      .fadeIn(500)
      .end()
      .appendTo(".slide");
  }
  setInterval(function () {
    nextani();
  }, 1000);
});
