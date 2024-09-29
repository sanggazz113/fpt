const bannerSwiper = new Swiper('.myBannerSwiper', {
    spaceBetween: 16,
    pagination: {
        el: '.banner-pagination',
        clickable: true,
    },
});

const comboSwiper1 = new Swiper('.myComboSwiper1', {
    slidesPerView: 3,
    spaceBetween: 10,
    navigation: {
        nextEl: '.combo-next1',
        prevEl: '.combo-prev1',
    },
    pagination: {
        el: '.combo-pagination1',
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 24,
        },
    },
});

const comboSwiper2 = new Swiper('.myComboSwiper2', {
    slidesPerView: 3,
    spaceBetween: 10,
    navigation: {
        nextEl: '.combo-next2',
        prevEl: '.combo-prev2',
    },
    pagination: {
        el: '.combo-pagination2',
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 16,
        },
    },
});

const comboSwiper3 = new Swiper('.myComboSwiper3', {
    slidesPerView: 3,
    spaceBetween: 10,
    navigation: {
        nextEl: '.combo-next3',
        prevEl: '.combo-prev3',
    },
    pagination: {
        el: '.combo-pagination3',
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 16,
        },
    },
});

const comboSwiper4 = new Swiper('.myComboSwiper4', {
    spaceBetween: 10,
    navigation: {
        nextEl: '.combo-next4',
        prevEl: '.combo-pre4',
    },
    pagination: {
        el: '.combo-pagination4',
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 24,
        },
    },
});

const comboSwiperDetail = new Swiper('.myComboSwiperDetail', {
    slidesPerView: 1,
    spaceBetween: 24,
    navigation: {
        nextEl: '.combo-next-detail',
        prevEl: '.combo-pre-detail',
    },
    pagination: {
        el: '.combo-pagination-detail',
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 24,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 24,
        },
        1024: {
            slidesPerView: 1,
            spaceBetween: 24,
        },
    },
});


const comboSwiper5 = new Swiper('.myComboSwiper5', {
    loop: true,
    autoplay: {
        delay: 3000,
    },
    navigation: {
        nextEl: '.combo-next5',
        prevEl: '.combo-pre5',
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 0,
        },
        1024: {
            slidesPerView: 7,
            spaceBetween: 24,
        },
    },
});


const comboSwiperDetail2 = new Swiper('.comboSwiperDetail2', {
    navigation: {
        nextEl: '.combo-next-detail-2',
        prevEl: '.combo-prev-detail-2',
    },
    pagination: {
        el: '.combo-pagination-detail-2',
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1.5,
            spaceBetween: 16,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 24,
        },
    },
});

const comboSwiperDetail3 = new Swiper('.comboSwiperDetail3', {
    navigation: {
        nextEl: '.combo-next-detail-3',
        prevEl: '.combo-prev-detail-3',
    },
    pagination: {
        el: '.combo-pagination-detail-3',
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1.5,
            spaceBetween: 16,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 24,
        },
    },
});

const comboSwiperDetail4 = new Swiper('.comboSwiperDetail4', {
    loop: false,
    navigation: {
        nextEl: '.combo-next-detail-4',
        prevEl: '.combo-prev-detail-4',
    },
    pagination: {
        el: '.combo-pagination-detail-4 ',
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1.5,
            spaceBetween: 16,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 24,
        },
    },
});

function initializeSwiper() {
    if (window.innerWidth < 768) {
        comboSwiper1.disable()
        comboSwiper2.disable()
        comboSwiper3.disable()

        comboSwiper1.destroy()
        comboSwiper2.destroy()
        comboSwiper3.destroy()
    }
}

window.addEventListener('load', function() {
    initializeSwiper();
});
