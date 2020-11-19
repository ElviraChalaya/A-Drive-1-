
/* slider */

const slides = document.querySelectorAll('.gallery__item'),
      dots   = document.querySelectorAll('.dot');
     
let index = 0;

const activeSlide = n => {
    for(slide of slides){
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}

const activeDot = n => {
    for(dot of dots){
        dot.classList.remove('active');
    }
    dots[n-1].classList.add('active');
}

const prepareCurrentSlide = ind => {
    activeSlide(ind);
    activeDot(ind);
}

dots.forEach((item,indexDot) => {
    item.addEventListener('click', () =>{
        index = indexDot + 1;
        prepareCurrentSlide(index);
    })
})
