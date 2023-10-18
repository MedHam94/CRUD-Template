// control Image Carousel
function startCarousel() {
  let activeImage = 0;
  const images = document.querySelectorAll("#carousel img");

  function startCycle() {
    if (!images[activeImage]) {
      clearInterval(intervalId);
      return;
    }

    images[activeImage].classList.remove("active");
    activeImage = (activeImage + 1) % images.length;
    images[activeImage].classList.add("active");
  }

  let intervalId = setInterval(startCycle, 3000);

  startCycle();
}
// Handle Edit Requests

// Handle Delete Request

// Handle error from server if unable to write date
window.onload = function () {
  startCarousel();
};
