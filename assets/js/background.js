//Function for slideshow 
var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 5000);

function nextSlide() {
//change the current slide class to not appear
 slides[currentSlide].className = 'slide';
 //cycle through slides, then back to 0 to create neverending loop
 currentSlide = (currentSlide + 1) % slides.length;
 //change class to showing again
 slides[currentSlide].className = 'slide showing';
}