document.addEventListener('DOMContentLoaded', function() {
  const carouselSlide = document.querySelector('.carousel-slide');
  const reviews = document.querySelectorAll('.review');
  let currentIndex = 0;

  function moveToNextSlide() {
    currentIndex++;
    if (currentIndex >= reviews.length) {
      currentIndex = 0;
    }
    carouselSlide.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  // Move to the next slide every 5 seconds
  let autoSlide = setInterval(moveToNextSlide, 5000);

  // Buttons for manual navigation
  document.getElementById('next').addEventListener('click', () => {
    clearInterval(autoSlide); // Stop the autoplay temporarily
    moveToNextSlide();
    autoSlide = setInterval(moveToNextSlide, 5000); // Restart autoplay
  });

  document.getElementById('prev').addEventListener('click', () => {
    clearInterval(autoSlide); // Stop the autoplay temporarily
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = reviews.length - 1;
    }
    carouselSlide.style.transform = `translateX(-${currentIndex * 100}%)`;
    autoSlide = setInterval(moveToNextSlide, 5000); // Restart autoplay
  });
});
