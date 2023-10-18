// control Image Carousel
function startCarousel() {
  let activeImage = 0;
  const image = document.querySelectorAll("#carousel img");

  function cycleImages() {
    if (!images[activeImage]) {
      clearInterval(intervalId);
      return;
    }
    image[activeImage].classList.remove("active");
    activeImage = (activeImage + 1) % images.length;
    image[activeImage].classList.add("active");
  }

  let intervalId = setInterval(cycleImages, 3000);
}
// Handle Edit Requests

// Handle Delete Request

// Handle error from server if unable to write date
