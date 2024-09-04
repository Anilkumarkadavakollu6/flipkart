let currentIndex = 0;
const banners = document.querySelectorAll('.banner');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

function showBanner(index) {
    banners.forEach((banner, i) => {
        banner.style.display = i === index ? 'block' : 'none';
    });
}

function showNextBanner() {
    currentIndex = (currentIndex + 1) % banners.length;
    showBanner(currentIndex);
}

function showPrevBanner() {
    currentIndex = (currentIndex - 1 + banners.length) % banners.length;
    showBanner(currentIndex);
}

nextBtn.addEventListener('click', showNextBanner);
prevBtn.addEventListener('click', showPrevBanner);


showBanner(currentIndex);
setInterval(showNextBanner, 5000);
