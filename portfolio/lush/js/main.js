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

const shareImgTarget = document.querySelector(".share_img img");

function handleMoveMotion() {
  const container = shareImgTarget.parentElement;
  const rect = container.getBoundingClientRect();

  if (rect.top < window.innerHeight && rect.bottom > 0) {
    // ⭐ movementRate: 스크롤 속도의 '아주 미세한 3% (0.03)'만 반영합니다.
    const movementRate = 0.05;

    // 뷰포트 중앙 (window.innerHeight / 2)을 기준으로 이미지가 움직이도록 계산합니다.
    // rect.top 값이 변함에 따라 moveY 값이 미세하게 변합니다.
    const viewCenter = window.innerHeight / 5;
    const moveY = (rect.top - viewCenter) * movementRate;
    shareImgTarget.style.transform = `translate3d(0px, ${moveY}px, 0px) scale(1.1)`;
  }
}

window.addEventListener("scroll", handleMoveMotion);
handleMoveMotion();
