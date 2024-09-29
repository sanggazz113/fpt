document.querySelectorAll('.show-more').forEach(button => {
    button.addEventListener('click', function() {
        const section = this.closest('section');
        if (!section) return;

        const swiperSlides = section.querySelectorAll('.swiper-slide.combo');
        swiperSlides.forEach((slide, index) => {
            if (index >= 3) {
                slide.classList.toggle('hidden');
            }
        });

        const buttonText = this.querySelector('.button-text');
        const svg = this.querySelector('svg'); // Ensure you're selecting the correct SVG element

        if (buttonText && svg) {
            if (buttonText.textContent.includes('Xem thêm')) {
                buttonText.textContent = 'Thu gọn';
                svg.classList.add("rotate-180");
            } else {
                buttonText.textContent = 'Xem thêm 7 gói khác';
                svg.classList.remove("rotate-180");
            }
        }
    });
});
