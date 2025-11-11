window.onscroll = function () {
  let ht = document.documentElement.scrollTop;
  console.log(ht);
  if (ht >= 500) {
    document.querySelector("header").classList.add("on");
    document.querySelector("header").style.border =
      " 1px solid rgba(0, 0, 0, 0.164)";
    document.querySelector(".menu a").classList.add("on");
    document.querySelectorAll(".gnb ul li").forEach(function (v, k) {
      v.querySelector("a").classList.add("on");
    });
  } else {
    document.querySelector("header").classList.remove("on");
    document.querySelector("header").style.border =
      " 1px solid rgba(255, 255, 255, 0.164)";
    document.querySelector(".menu a").classList.remove("on");
    document.querySelectorAll(".gnb ul li").forEach(function (v, k) {
      v.querySelector("a").classList.remove("on");
    });
  }
};
