// document.addEventListener("DOMContentLoaded", () => {
//   const sliderWrapper = document.querySelector(".slider-wrapper");
//   const slides = document.querySelectorAll(".slide");
//   const prevBtn = document.querySelector(".prev-btn");
//   const nextBtn = document.querySelector(".next-btn");

//   let currentIndex = 0;
//   const slideCount = slides.length;
//   let slideInterval;

//   function updateSlider() {
//     const offset = -currentIndex * 100;
//     sliderWrapper.style.transform = `translateX(${offset}%)`;
//   }

//   function moveToNextSlide() {
//     currentIndex++;
//     if (currentIndex >= slideCount) {
//       currentIndex = 0;
//     }
//     updateSlider();
//   }

//   function moveToPrevSlide() {
//     currentIndex--;
//     if (currentIndex < 0) {
//       currentIndex = slideCount - 1;
//     }
//     updateSlider();
//   }

//   function startAutoSlide() {
//     slideInterval = setInterval(moveToNextSlide, 9000);
//   }

//   function stopAutoSlide() {
//     clearInterval(slideInterval);
//   }

//   nextBtn.addEventListener("click", () => {
//     stopAutoSlide();
//     moveToNextSlide();
//     startAutoSlide();
//   });

//   prevBtn.addEventListener("click", () => {
//     stopAutoSlide();
//     moveToPrevSlide();
//     startAutoSlide();
//   });

//   startAutoSlide();
// });

document.addEventListener("DOMContentLoaded", () => {
  const sliderWrapper = document.querySelector(".slider-wrapper");
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  const firstSlideClone = slides[0].cloneNode(true);
  sliderWrapper.appendChild(firstSlideClone);

  let currentIndex = 0;
  const slideCount = slides.length;
  let slideInterval;

  function moveSlide(index) {
    sliderWrapper.style.transition = "transform 0.5s ease";
    sliderWrapper.style.transform = `translateX(-${index * 100}%)`;
    currentIndex = index;

    if (index === slideCount) {
      setTimeout(() => {
        sliderWrapper.style.transition = "none";
        sliderWrapper.style.transform = "translateX(0%)";
        currentIndex = 0;
      }, 500);
    }
  }

  function moveToNextSlide() {
    if (currentIndex >= slideCount) return;
    moveSlide(currentIndex + 1);
  }

  function moveToPrevSlide() {
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

  function startAutoSlide() {
    slideInterval = setInterval(moveToNextSlide, 3000);
  }

  function stopAutoSlide() {
    clearInterval(slideInterval);
  }

  nextBtn.addEventListener("click", () => {
    stopAutoSlide();
    moveToNextSlide();
    startAutoSlide();
  });

  prevBtn.addEventListener("click", () => {
    stopAutoSlide();
    moveToPrevSlide();
    startAutoSlide();
  });

  startAutoSlide();
});
