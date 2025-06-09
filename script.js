const slides = document.querySelectorAll('.slider .slide');
const texts = document.querySelectorAll('.slider .slider-text');
let currentSlide = 0;
setInterval(() => {
  slides[currentSlide].classList.remove('active');
  if (texts.length > 0) {
    texts[currentSlide].classList.remove('active');
  }
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
  if (texts.length > 0) {
    texts[currentSlide].classList.add('active');
  }
}, 3000); // Change slide every 3 seconds
// Responsive Menu Toggle
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
  
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  
  
  })