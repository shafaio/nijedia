function prevSlide() {
  const container = document.querySelector("#scroll-swiper");
  container.scrollBy({ left: -290, behavior: "smooth" });
}

function nextSlide() {
  const container = document.querySelector("#scroll-swiper");
  container.scrollBy({ left: 290, behavior: "smooth" });
}
