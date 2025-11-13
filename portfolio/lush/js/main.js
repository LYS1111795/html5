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

const surveyImgTarget = document.querySelector(".survey_img img");
const surveyContainer = surveyImgTarget.parentElement.parentElement;

function handleSurveyMoveMotion() {
  const rect = surveyContainer.getBoundingClientRect();

  if (rect.top < window.innerHeight && rect.bottom > 0) {
    const movementRate = 0.07;
    const viewCenter = window.innerHeight / 2;
    const offset = rect.top - viewCenter;
    const moveY = offset * movementRate * -1;
    surveyImgTarget.style.transform = `translate3d(0px, ${moveY}px, 0px) scale(1.1)`;
  }
}

window.addEventListener("scroll", handleSurveyMoveMotion);
handleSurveyMoveMotion();

const shareImgTarget = document.querySelector(".share_img img");
const container = shareImgTarget.parentElement;
function handleMoveMotion() {
  const rect = container.getBoundingClientRect();

  if (rect.top < window.innerHeight && rect.bottom > 0) {
    const movementRate = 0.07;
    const viewCenter = window.innerHeight / 2;
    const offset = rect.top - viewCenter;
    const moveY = offset * movementRate;
    shareImgTarget.style.transform = `translate3d(0px, ${moveY}px, 0px) scale(1.1)`;
  }
}
window.addEventListener("scroll", handleMoveMotion);
handleMoveMotion();

const shopImgTarget = document.querySelector(".shop_img img");
const shopContainer = shopImgTarget.parentElement.parentElement;

function handleShopMoveMotion() {
  const rect = shopContainer.getBoundingClientRect();

  if (rect.top < window.innerHeight && rect.bottom > 0) {
    const movementRate = 0.07;
    const viewCenter = window.innerHeight / 2;
    const offset = rect.top - viewCenter;
    const moveY = offset * movementRate;
    shopImgTarget.style.transform = `translate3d(0px, ${moveY}px, 0px) scale(1.1)`;
  }
}

window.addEventListener("scroll", handleShopMoveMotion);
handleShopMoveMotion();
