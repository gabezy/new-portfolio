export const initAnimateScroll = () => {
  const sectionsElements = document.querySelectorAll("[data-animate]");
  const mode = "active"
  if (sectionsElements.length) {
    let main, sections;
    [main, ...sections] = sectionsElements;

    main.classList.add(mode);
    const animateScroll = () => {
      sections.forEach(element => {
        const sectionTop = element.getBoundingClientRect().top;
        console.log(element)
        if (sectionTop < 700) {
          element.classList.add(mode);
        }
      });
    }

    window.addEventListener("scroll", animateScroll);
  }



}
