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

  // 하단 카드 슬라이드

  const cardWrapper = document.querySelector(".card-wrapper");
  const cardGroups = document.querySelectorAll(".card-group");
  const paginationContainer = document.querySelector(".card-pagination");

  if (cardWrapper && cardGroups.length > 0) {
    const groupClone = cardGroups[0].cloneNode(true);
    cardWrapper.appendChild(groupClone);

    let groupIndex = 0;
    const groupCount = cardGroups.length;
    let groupInterval;

    const groupWidth = 893;
    if (paginationContainer) {
      paginationContainer.innerHTML = "";
      for (let i = 0; i < groupCount; i++) {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        if (i === 0) dot.classList.add("active");

        dot.addEventListener("click", () => {
          stopGroupAuto();
          moveGroupSlide(i);
          startGroupAuto();
        });
        paginationContainer.appendChild(dot);
      }
    }

    const dots = document.querySelectorAll(".dot");

    function updateDots(index) {
      dots.forEach((dot) => dot.classList.remove("active"));
      let activeIndex = index;
      if (index === groupCount) activeIndex = 0;
      if (dots[activeIndex]) dots[activeIndex].classList.add("active");
    }

    function moveGroupSlide(index) {
      cardWrapper.style.transition = "transform 1.0s ease";

      cardWrapper.style.transform = `translateX(-${index * groupWidth}px)`;
      groupIndex = index;
      updateDots(index);

      if (index === groupCount) {
        setTimeout(() => {
          cardWrapper.style.transition = "none";
          cardWrapper.style.transform = "translateX(0px)";
          groupIndex = 0;
          updateDots(0);
        }, 1000);
      }
    }

    function nextGroup() {
      if (groupIndex >= groupCount) return;
      moveGroupSlide(groupIndex + 1);
    }

    function startGroupAuto() {
      groupInterval = setInterval(nextGroup, 3000);
    }

    function stopGroupAuto() {
      clearInterval(groupInterval);
    }

    startGroupAuto();
  }
});
