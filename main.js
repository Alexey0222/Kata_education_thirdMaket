window.addEventListener('DOMContentLoaded', () => {

    const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
      let swiper;
      breakpoint = window.matchMedia(breakpoint);
  
      const enableSwiper = function(className, settings) {
        swiper = new Swiper(className, settings);
  
        if (callback) {
          callback(swiper);
        }
      }

      const checker = function() {
        if (breakpoint.matches) {
            enableSwiper(swiperClass, swiperSettings);
        } else if (swiper) {
            swiper.destroy(true, true);
            swiper = undefined;
        }
    };
  
      breakpoint.addEventListener('change', checker);
      checker();
    }
  
    resizableSwiper(
      '(max-width: 767px)', // условие для активации
      '.slider-first', // селектор Swiper-контейнера
      {
        loop: true,
        spaceBetween: 16,
        direction: 'horizontal',
        slidesPerView: "auto",
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },
    );
  
     // Кнопка "Показать все"
     const showMoreBtn = document.querySelector('.show-more-btn');
     const swiperWrapper = document.querySelector('.slider-first__wrapper');
 
     showMoreBtn.addEventListener('click', () => {
        const isOpen = swiperWrapper.classList.toggle('slider-first__wrapper--open');
        showMoreBtn.classList.toggle('show-more-btn--expanded');

    // Изменение текста кнопки
    showMoreBtn.querySelector('.show-more__text').textContent = 
        swiperWrapper.classList.contains('slider-first__wrapper--open') ? 'Свернуть' : 'Показать все';
});
});