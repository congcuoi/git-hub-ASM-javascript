let slid 
slid = document.getElementsByClassName('img-banner');
let currentSlide = 0;

function nextSlide() {
    slid[currentSlide].classList.remove('banner');
    currentSlide = (currentSlide + 1) % slid.length;
    slid[currentSlide].classList.add('banner');
}
setInterval(nextSlide, 5000);
