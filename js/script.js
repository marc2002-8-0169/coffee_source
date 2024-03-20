document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.querySelector('.carousel');
  const items = document.querySelectorAll('.carousel-item .product-item');
  const affogatoItem = document.querySelector('.product-item.d-none');

  let currentIndex = 0;
  let sliding = false;

  function slideCarousel(direction) {
    if (sliding) return;
    sliding = true;

    currentIndex = direction === 'next' ? (currentIndex + 1) % items.length : (currentIndex - 1 + items.length) % items.length;

    const firstIndexToShow = currentIndex % items.length;
    const secondIndexToShow = (currentIndex + 1) % items.length;
    const thirdIndexToShow = (currentIndex + 2) % items.length;

    items.forEach(item => item.classList.add('d-none'));
    items[firstIndexToShow].classList.remove('d-none');
    items[secondIndexToShow].classList.remove('d-none');
    items[thirdIndexToShow].classList.remove('d-none');

    setTimeout(function () {
      sliding = false;
    }, 100);
  }

  carousel.addEventListener('click', function (event) {
    const target = event.target;
    if (target.classList.contains('carousel-control-prev')) {
      slideCarousel('prev');
    } else if (target.classList.contains('carousel-control-next')) {
      slideCarousel('next');
    }
  });
});


