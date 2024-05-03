new Swiper('.possibilities__swiper',{
    pagination:{
        el: '.swiper-pagination',
        clickable: true,
    },
    spaceBetween: '30',
    breakpoints:{
        0:{
            slidesPerView: 1
        },
        560:{
            slidesPerView: 2
        },
        992:{
            slidesPerView: 3
        },
        1200:{
            slidesPerView:4
        }
    }
});