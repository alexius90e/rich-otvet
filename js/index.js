const swiper = new Swiper('.conclusions .swiper', {
  slidesPerView: 1,
  spaceBetween: 20,

  navigation: {
    prevEl: '.conclusions__slider-controls-prev',
    nextEl: '.conclusions__slider-controls-next',
  },
});

const exerciseStepsCards = document.querySelectorAll('.exercise__steps-card');

exerciseStepsCards.forEach((card) => {
  card.addEventListener('click', (event) => {
    const isOpenButton = event.target.classList.contains('exercise__steps-card-controls-button');
    const isInfo = event.target.classList.contains('exercise__steps-card-info');
    const isClose = event.target.classList.contains('exercise__steps-card-info-close');

    if (isOpenButton) event.currentTarget.classList.add('active')
    if (isInfo || isClose) event.currentTarget.classList.remove('active')
  });
});
