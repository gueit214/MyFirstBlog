let slideIndex = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
setTimeout(() => showSlide(0), 1000);

function showSlide(n) {
  let i;
  slideIndex[0]++;

  if (n > 0) {
    let button = document.getElementsByClassName('startbutton1_' + n);
    button[0].style.display = "none"; //button 없애기
  }

  let slides = document.getElementsByClassName("slide" + n);
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  if (slideIndex[0] > slides.length) {
    slideIndex[0] = 1;
  }
  slides[slideIndex[0] - 1].style.display = "block";

  let dots = document.getElementsByClassName("dot" + n);
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[slideIndex[0] - 1].className += " active";
  if (slideIndex[0] < slides.length) {
    if (n == 0) setTimeout(() => showSlide(n), 2000);
    else setTimeout(() => showSlide(n), 1000);
  } else slideIndex[0] = 0;
}

function movebutton(n, m) {
  let i;
  let dots = document.getElementsByClassName("dot" + n);
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[m].className += " active";

  let slides = document.getElementsByClassName("slide" + n);
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[m].style.display = "block";
}