import { initAnimateScroll } from "./animateScroll";
import { initMobileMenu } from "./mobileMenu";
import { initShowSlide } from "./showSlides";

const html = document.querySelector("html");

html.classList.add("js");


initAnimateScroll();
initShowSlide();
initMobileMenu();
