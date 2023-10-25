let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Automatic Slideshow - change image every 5 seconds
let slideInterval = setInterval(function() {
  plusSlides(1);
}, 2000); 

// Pause the slideshow when the user interacts with it
let slideshowContainer = document.getElementsByClassName("container")[0];
slideshowContainer.addEventListener("mouseenter", function() {
  clearInterval(slideInterval);
});

// Resume the slideshow when the user stops interacting with it
slideshowContainer.addEventListener("mouseleave", function() {
  slideInterval = setInterval(function() {
    plusSlides(1);
  }, 2000); 
});

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("images");
  let dots = document.getElementsByClassName("dots");
  let captionText = document.getElementById("caption");
  let numberText = document.getElementsByClassName("numberText");


  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
  numberText.innerHTML = slideIndex + "/" + slides.length;
}

