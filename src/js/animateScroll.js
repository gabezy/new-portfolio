export const initAnimateScroll = () => {
  const sectionsElements = document.querySelectorAll("[data-animate='scroll left']");
  const mode = "active"
  if (sectionsElements.length) {
    let apresetation, sections;
    [apresetation, ...sections] = sectionsElements;


    apresetation.classList.add(mode);
    const animateScroll = () => {
      sections.forEach(element => {
        const sectionTop = element.getBoundingClientRect().top;
        if (sectionTop < 700) {
          element.classList.add(mode);
        }
      });
    }

    window.addEventListener("scroll", animateScroll);
  }
}
