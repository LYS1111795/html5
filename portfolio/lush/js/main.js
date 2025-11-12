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

// 🚩 JavaScript를 이용한 Parallax (시차) 효과 구현

// 1. 필요한 요소를 선택합니다.
const shareImg = document.querySelector(".share_img");

// 2. 스크롤 이벤트를 감지하는 함수를 정의합니다.
function handleParallax() {
  // 현재 스크롤 위치 (페이지 상단으로부터 얼마나 내려왔는지)를 구합니다.
  const scrollTop = window.pageYOffset;

  // shareImg 요소가 페이지 상단으로부터 얼마나 떨어져 있는지 (위치)를 구합니다.
  // getBoundingClientRect().top은 뷰포트 기준, scrollTop을 더하면 문서 기준 위치가 됩니다.
  const imgOffsetTop = shareImg.getBoundingClientRect().top + scrollTop;

  // 뷰포트에서 요소가 얼마나 보여지는지를 기준으로 계산합니다.
  // 요소가 뷰포트 중간에 있을 때 움직임이 시작/끝나도록 조정합니다.

  // ⭐ 스크롤 위치에 따라 이미지를 이동시킬 거리(rate)를 계산합니다.
  // 스크롤 속도의 약 1/3 (0.3)로 느리게 움직이도록 설정합니다.
  const movementRate = 0.3;

  // 뷰포트의 상단부터 요소의 위치까지의 차이를 계산합니다.
  // 이 값을 스크롤에 따라 움직여 이미지가 느리게 따라오게 만듭니다.
  const scrollMovement = (scrollTop - imgOffsetTop) * movementRate;

  // 3. 계산된 값으로 이미지의 위치를 조정합니다.
  // CSS transform을 사용해 부드럽게 위아래로 움직입니다.
  shareImg.style.transform = `translateY(${scrollMovement}px)`;
}

// 4. 스크롤 이벤트에 함수를 연결합니다.
window.addEventListener("scroll", handleParallax);
