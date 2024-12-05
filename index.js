let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("Slides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
// make the carsoul move in a time slot
function startSlideInterval() {
  slideInterval =setInterval(() => {
  plusSlides(1);
}, 3000);}
startSlideInterval();
let slides = document.getElementsByClassName("Slides");

// stops the carsoul moves on mouse over
for (let j=0;j<slides.length;j++) {
  slides[j].addEventListener("mouseover", () => {
    clearInterval(slideInterval); 
    console.log("stop");
  });

// move the carsoul on mouse out
slides[j].addEventListener("mouseout", () => {
  startSlideInterval(); 
  console.log("move again")
});
}

