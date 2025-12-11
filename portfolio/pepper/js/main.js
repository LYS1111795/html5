document.addEventListener("DOMContentLoaded", () => {
  const sliderWrapper = document.querySelector(".slider-wrapper");
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  if (sliderWrapper && slides.length > 0) {
    const firstSlideClone = slides[0].cloneNode(true);
    sliderWrapper.appendChild(firstSlideClone);
    let currentIndex = 0;
    const slideCount = slides.length;
    let slideInterval;

    function moveSlide(index) {
      sliderWrapper.style.transition = "transform 1.0s ease";

      sliderWrapper.style.transform = `translateX(-${index * 100}%)`;
      currentIndex = index;

      if (index === slideCount) {
        setTimeout(() => {
          sliderWrapper.style.transition = "none";
          sliderWrapper.style.transform = "translateX(0%)";
          currentIndex = 0;
        }, 1000);
      }
    }

    function nextMain() {
      if (currentIndex < slideCount) moveSlide(currentIndex + 1);
    }

    function prevMain() {
      if (currentIndex <= 0) {
        sliderWrapper.style.transition = "none";
        sliderWrapper.style.transform = `translateX(-${slideCount * 100}%)`;
        currentIndex = slideCount;
        setTimeout(() => {
          sliderWrapper.style.transition = "transform 0.5s ease";
          moveSlide(slideCount - 1);
        }, 10);
      } else {
        moveSlide(currentIndex - 1);
      }
    }

    function startAuto() {
      slideInterval = setInterval(nextMain, 3000);
    }

    function stopAuto() {
      clearInterval(slideInterval);
    }

    if (nextBtn)
      nextBtn.addEventListener("click", () => {
        stopAuto();
        nextMain();
        startAuto();
      });
    if (prevBtn)
      prevBtn.addEventListener("click", () => {
        stopAuto();
        prevMain();
        startAuto();
      });
    startAuto();
  }

  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  if (tabBtns.length > 0 && tabContents.length > 0) {
    tabBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();

        tabBtns.forEach((b) => b.classList.remove("active"));

        tabContents.forEach((c) => c.classList.remove("active"));
        tabContents.forEach((c) => (c.style.display = "none"));

        btn.classList.add("active");

        const targetId = btn.getAttribute("data-tab");
        const targetContent = document.getElementById(targetId);

        if (targetContent) {
          targetContent.classList.add("active");
          targetContent.style.display = "block";
        }
      });
    });
  } else {
    console.error(
      "탭 버튼이나 내용을 찾을 수 없습니다. HTML 클래스명을 확인하세요."
    );
  }
});

//

$(document).ready(function () {
  // 1. 햄버거 버튼 클릭 시 메뉴 열기
  // (.right-icons 안에 있는 두 번째 a태그가 햄버거라고 가정)
  $(".right-icons a:last-child").click(function (e) {
    e.preventDefault(); // 링크 이동 막기
    $(".mobile-nav-layer").addClass("active"); // 메뉴 보이기
    $("body").css("overflow", "hidden"); // 뒤에 본문 스크롤 막기
  });

  // 2. 닫기(X) 버튼 클릭 시 메뉴 닫기
  $(".btn-close").click(function () {
    $(".mobile-nav-layer").removeClass("active"); // 메뉴 숨기기
    $("body").css("overflow", "auto"); // 스크롤 다시 허용
  });
});
