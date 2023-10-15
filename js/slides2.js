var slidePosition2 = 1;
SlideShow2(slidePosition2);

// forward/Back controls
function plusSlides2(n) {
  SlideShow2(slidePosition2 += n);
}

//  images controls
function currentSlide2(n) {
  SlideShow2(slidePosition2 = n);
  
}

function SlideShow2(n) {
  var i;
  var slides2 = document.getElementsByClassName("Containers2");
  var circles2 = document.getElementsByClassName("dots2");
  if (n > slides2.length) {slidePosition2 = 1}
  if (n < 1) {slidePosition2 = slides2.length}
  for (i = 0; i < slides2.length; i++) {
      slides2[i].style.display = "none";
  }
  for (i = 0; i < circles2.length; i++) {
      circles2[i].className = circles2[i].className.replace(" enable", "");
  }
  slides2[slidePosition2-1].style.display = "block";
  circles2[slidePosition2-1].className += " enable";

  
} 