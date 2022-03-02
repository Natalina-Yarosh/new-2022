let openMobileMenu = document.querySelector('.open-mobile');
let header = document.querySelector('.header');

openMobileMenu.onclick = function() {
    if(header.classList.contains('open')){
        header.classList.remove('open');
    }else{
        header.classList.add('open');
    }
    
}