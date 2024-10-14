const carousel = document.querySelector('.carousel-slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let counter = 0;
const size = 220; // Width of one manhwa item (including margins)

nextBtn.addEventListener('click', () => {
    if (counter >= carousel.children.length - 1) return;
    carousel.style.transform = `translateX(${-size * ++counter}px)`;
});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    carousel.style.transform = `translateX(${-size * --counter}px)`;
});
