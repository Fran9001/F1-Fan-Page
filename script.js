document.addEventListener('DOMContentLoaded', function() {
    const imgLinks = document.querySelectorAll('.img-link');
    
    imgLinks.forEach(function(imgLink) {
        imgLink.addEventListener('click', function() {
            const url = imgLink.getAttribute('data-url');
            window.location.href = url;
        });
    });
});

let slideIndex = 0;
const slides = document.querySelector('.slides');
const images = slides.querySelectorAll('img');
const totalSlides = images.length;

function moveSlide(n) {
    slideIndex += n;
    if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    } else if (slideIndex >= totalSlides) {
        slideIndex = 0;
    }
    slides.style.transform = `translateX(${-slideIndex * 100}%)`;
}

setInterval(() => {
moveSlide(1);
}, 3000);