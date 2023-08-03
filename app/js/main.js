const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 50,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    navigation: {
        nextEl: '.swiper-button-right',
        prevEl: '.swiper-button-left',
    },
    breakpoints: {
        200: {
            slidesPerView: 1,
        },
        600: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        1150: {
            slidesPerView: 3,
        }
    }
});

const btn = document.querySelector('.btn-menu');
const nav = document.querySelector('.nav');
const body = document.querySelector('body');

btn.addEventListener('click', ()=> {
    nav.classList.toggle('nav--open');
    btn.classList.toggle('btn-menu--open');
    body.classList.toggle("no-scroll");
})

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener("click", function (event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href');
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}