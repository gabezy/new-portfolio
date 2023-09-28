export const initShowSlide = () => {
  const slides = document.querySelectorAll("[data-slide]");
  const dots = document.querySelectorAll(".dot");
  const previousButton = document.querySelector(".prev")
  const nextButton = document.querySelector(".next")
  let slideIndex = 1;


  const previousSlide = () => {
    slideIndex--;
    showSlides(slideIndex);
  }

  const nextSlide = () => {
    slideIndex++
    showSlides(slideIndex);
  }

  const currentSlide = (n) => {
    slideIndex = n;
    showSlides(slideIndex);
  }



  const showSlides = (n) => {

    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    slides.forEach((slide) => {
      slide.style.display = "none";
    })
    dots.forEach((dot) => {
      dot.classList.remove("slideon");
    });

    const currentElementIndex = slideIndex - 1;


    slides[currentElementIndex].style.display = "block";
    dots[currentElementIndex].classList.add("slideon");
  }

  showSlides(slideIndex)
  //TODO: add listener for touch event
  const events = ["click"]
  events.forEach(event => {
    previousButton.addEventListener(event, previousSlide);
    nextButton.addEventListener(event, nextSlide);
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      const slideToGo = ++index;
      currentSlide(slideToGo);
    })
  });

}
