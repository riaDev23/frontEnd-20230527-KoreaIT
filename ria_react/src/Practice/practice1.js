let prev = document.querySelector(".prevBtn");
let next = document.querySelector(".nextBtn");
let slideContainer = document.querySelector("#slideContainer");
let slides = document.querySelectorAll(".slide");
let slideIndex = 0;

prev.addEventListener("click", () => {
  slideIndex--;
  if (slideIndex < 0) slideIndex = slides.length - 1;
  console.log(slideIndex);
  updateSlidePosition();
});

next.addEventListener("click", () => {
  slideIndex++;
  if (slideIndex > slides.length - 1) slideIndex = 0;
  console.log(slideIndex);
  updateSlidePosition();
});

function updateSlidePosition() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.transform = `translateX(${-slideIndex * 100}%)`;
  }
}
