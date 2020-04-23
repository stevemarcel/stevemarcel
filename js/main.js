// Sticky navbar backgrond opacity
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    document.querySelector('#navbar').style.opacity = 0.8;
  } else {
    document.querySelector('#navbar').style.opacity = 1;
  }
});

// Smooth Scrolling
$('.btn').on('click', (event) => {
  if (this.hash !== '') {
    event.preventDefault();
    const hash = this.hash;
    $('html, body').animate({
        scrollTop: $(hash).offset().top
      },
      800
    );
  }
});