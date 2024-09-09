// Carousel Auto-Slider
const carouselImages = document.querySelectorAll('.carousel img');
let currentIndex = 0;

function carouselSlide() {
    carouselImages[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % carouselImages.length;
    carouselImages[currentIndex].style.display = 'block';
}

// Initialize the carousel
carouselImages.forEach((img, index) => {
    if (index !== 0) img.style.display = 'none';
});

setInterval(carouselSlide, 5000);
