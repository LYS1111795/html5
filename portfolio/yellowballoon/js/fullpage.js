new fullpage("#fullpage", {
  licenseKey: "null",

  fixedElements: "header",

  afterLoad: function (origin, destination, direction) {
    if (destination.index === 1) {
      const reveals = document.querySelectorAll(
        ".section:nth-child(2) .line-reveal"
      );
      reveals.forEach((reveal, index) => {
        setTimeout(() => {
          reveal.classList.add("on-screen");
        }, index * 400);
      });
    }
  },
  onLeave: function (origin, destination, direction) {
    if (origin.index === 1) {
      const reveals = document.querySelectorAll(
        ".section:nth-child(2) .line-reveal"
      );
      reveals.forEach((reveal) => {
        reveal.classList.remove("on-screen");
      });
    }
  },
});
