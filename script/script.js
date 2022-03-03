let openMobileMenu = document.querySelector('.open-mobile');
let header = document.querySelector('.header');

openMobileMenu.onclick = function() {
    if(header.classList.contains('open')){
        header.classList.remove('open');
    }else{
        header.classList.add('open');
    }
    
}




  var number = document.querySelector('#appointmentCount'),
  numberTop = number.getBoundingClientRect().top,
  start = 0, end = 5700;

window.addEventListener('scroll', function onScroll() {
  if(window.pageYOffset > numberTop - window.innerHeight / 2) {
      this.removeEventListener('scroll', onScroll);
      var interval = setInterval(function() {
          number.innerHTML = ++start;
          if(start == end) {
              clearInterval(interval);
          }
      }, 5);
  }
});
