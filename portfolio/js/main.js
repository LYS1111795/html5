$(document).ready(function () {
  const FIXED_HEADER_HEIGHT = 80;
  const SECTION_GAP_HEIGHT = 20;
  const TOTAL_OFFSET = FIXED_HEADER_HEIGHT + SECTION_GAP_HEIGHT;

  $(".top-content a").on("click", function (e) {
    const targetId = $(this).attr("href");

    if (targetId && targetId.startsWith("#") && $(targetId).length) {
      e.preventDefault();

      const targetPosition = $(targetId).offset().top;

      let finalOffset = TOTAL_OFFSET;

      if (targetId === "#visual-section") {
        finalOffset = 0;
      }

      const scrollTo = targetPosition - finalOffset;

      $("html, body").animate(
        {
          scrollTop: Math.max(0, scrollTo),
        },
        800
      );
    }
  });
});
