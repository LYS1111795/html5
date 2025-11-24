$(document).ready(function () {
  const FIXED_HEADER_HEIGHT = 80;

  $(".menu a").on("click", function (e) {
    e.preventDefault();

    const targetId = $(this).attr("href");

    if (targetId && $(targetId).length) {
      const targetPosition = $(targetId).offset().top;

      const scrollTo = targetPosition - FIXED_HEADER_HEIGHT;

      $("html, body").animate(
        {
          scrollTop: scrollTo,
        },
        800
      );
    }
  });
});
