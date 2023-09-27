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
  previousButton.addEventListener("click", previousSlide);
  nextButton.addEventListener("click", nextSlide);

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      const slideToGo = ++index;
      currentSlide(slideToGo);
    })
  });

}
