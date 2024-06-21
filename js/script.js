// script.js
let currentIndex = 0;
const slides = document.querySelectorAll('.hero__img');

function showNextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlidePosition();
}

function updateSlidePosition() {
    const slidesContainer = document.querySelector('.slides');
    slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Automatically show the next slide every 3 seconds
setInterval(showNextSlide, 3000);

$(document).ready(function() {
    $('.slider-1').owlCarousel({
        items: 1,
        margin: 30,
        loop: true,


    })
    $('.slider-2').owlCarousel({
        items: 2,
        loop: true,
        margin: 10,
        merge: true,

    })



});