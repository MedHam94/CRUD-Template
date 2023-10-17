// control Image Carousel
const carouselImages = document.querySelectorAll("#carousel img");
const totalImages = carouselImages.length + 1;
const intervalTime = 3000; //3 seconde
let currentImageIndex = 0;

function showImages(index) {
  for (let i = 0; i < carouselImages.length; i++) {
    if (i === index) {
      carouselImages[i].style.display = "block";
    } else {
      carouselImages[i].style.display = "none";
    }
  }
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % totalImages;
  showImages(currentImageIndex);
}

function startCarousel() {
  setInterval(() => {
    nextImage();
  }, intervalTime);
}

showImages(0);
// Handle Edit Requests

// Handle Delete Request

// Handle error from server if unable to write date
