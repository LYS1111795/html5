const wrapper = document.querySelector(".slider-wrapper");
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

let currentSlide = 0;

function nextSlide() {
  currentSlide++;

  if (currentSlide >= totalSlides) {
    currentSlide = 0;
  }

  const movePercentage = currentSlide * -33.3333;
  wrapper.style.transform = `translateX(${movePercentage}%)`;
}

setInterval(nextSlide, 3000);
