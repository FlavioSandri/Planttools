// Carousel functionality
document.addEventListener('DOMContentLoaded', function() {
  const track = document.getElementById('carouselTrack');
  const slides = Array.from(track.children);
  const nextButton = document.getElementById('carouselNext');
  const prevButton = document.getElementById('carouselPrev');
  const dotsContainer = document.getElementById('carouselDots');
  
  const slideWidth = slides[0].getBoundingClientRect().width;
  let currentSlide = 0;
  
  // Arrange slides next to one another
  const setSlidePosition = (slide, index) => {
    slide.style.left = (slideWidth + 30) * index + 'px';
  };
  slides.forEach(setSlidePosition);
  
  // Create dots
  slides.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('carousel-dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => moveToSlide(index));
    dotsContainer.appendChild(dot);
  });
  
  const dots = Array.from(dotsContainer.children);
  
  const moveToSlide = (targetIndex) => {
    const amountToMove = -targetIndex * (slideWidth + 30);
    track.style.transform = `translateX(${amountToMove}px)`;
    
    // Update current slide
    currentSlide = targetIndex;
    
    // Update dots
    dots.forEach(dot => dot.classList.remove('active'));
    dots[targetIndex].classList.add('active');
    
    // Update button states
    prevButton.style.opacity = targetIndex === 0 ? '0.5' : '1';
    nextButton.style.opacity = targetIndex === slides.length - 1 ? '0.5' : '1';
  };
  
  // Next button click
  nextButton.addEventListener('click', () => {
    if (currentSlide < slides.length - 1) {
      moveToSlide(currentSlide + 1);
    }
  });
  
  // Previous button click
  prevButton.addEventListener('click', () => {
    if (currentSlide > 0) {
      moveToSlide(currentSlide - 1);
    }
  });
  
  // Initialize button states
  prevButton.style.opacity = '0.5';
  
  // Touch swipe support
  let startX = 0;
  let currentX = 0;
  
  track.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
  });
  
  track.addEventListener('touchmove', e => {
    currentX = e.touches[0].clientX;
  });
  
  track.addEventListener('touchend', () => {
    const diff = startX - currentX;
    
    if (Math.abs(diff) > 50) { // Minimum swipe distance
      if (diff > 0 && currentSlide < slides.length - 1) {
        // Swipe left - next
        moveToSlide(currentSlide + 1);
      } else if (diff < 0 && currentSlide > 0) {
        // Swipe right - previous
        moveToSlide(currentSlide - 1);
      }
    }
  });
  
  // Keyboard navigation
  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft' && currentSlide > 0) {
      moveToSlide(currentSlide - 1);
    } else if (e.key === 'ArrowRight' && currentSlide < slides.length - 1) {
      moveToSlide(currentSlide + 1);
    }
  });
});