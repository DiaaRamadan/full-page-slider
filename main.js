// get controll btns

const NEXTBTN = document.querySelector('.next');
const PREVBTN = document.querySelector('.prev');


let slideWidth = document.querySelector('body').clientWidth;

let transitionWidth = slideWidth;


// Next Button
let numberOfSlides = document.querySelectorAll('.item');
let goSlides = 1;
NEXTBTN.addEventListener('click', function(e){
    goSlides += 1;
    let currentSlide = document.querySelector('.show');
    currentSlide.style.transform = 'translatex(-'+transitionWidth+'px)';
    currentSlide.classList.remove('show');
    if(goSlides <= numberOfSlides.length){
        currentSlide.nextElementSibling.classList.add('show');
        currentSlide.nextElementSibling.style.transform = 'translatex(-'+transitionWidth+'px)';
    }else{

        currentSlide.parentElement.firstElementChild.classList.add('show');
        numberOfSlides.forEach(item => item.style.transform = 'translateX(0)');
        goSlides = 1;
        transitionWidth = 0;
    }

    transitionWidth += slideWidth;
});