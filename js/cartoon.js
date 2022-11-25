document.body.parentNode.style.overflowY = 'hidden'
document.body.parentNode.style.overflowX = 'hidden'

var swiper = new Swiper('.swiper-container', {
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  speed: 7000,
  allowTouchMove: false,
  lazy: {
    loadPrevNext: true,
    loadPrevNextAmount: 3,
  },
  centeredSlides: true,
  spaceBetween: 50,
  slidesOffsetBefore: 40,
  loop: true,
  slidesPerView: 'auto',
  on: {
    slideChangeTransitionEnd: function () {
      this.slides
        .transition(this.params.autoplay.delay + this.params.speed)
        .transform('translate3d(-60px, 0, 0)')
    },
    slideChangeTransitionStart: function () {
      this.slides
        .transition(this.params.speed)
        .transform('translate3d(0, 0, 0)')
    },
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<div class="' + className + '"><span></span><i></i></div>'
    },
  },
/*   navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }, */
})
window.onresize = function () {
  swiper.update()
}
