let indexToShow = 0;
let slides = document.getElementsByClassName("slide");



showSlides();


function changeSlide(index){
    indexToShow += index;
    if(indexToShow === -1) {
        indexToShow = slides.length - 1;
    }
    if(indexToShow >= slides.length) {
        indexToShow = 0;
    }
    showSlides();
}
function showSlides(){
    for (i=0;i<slides.length;i++) {
        slides[i].style.display = "none";
    }
    slides[indexToShow].style.display = "block"
}