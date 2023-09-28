export const initMobileMenu = () => {
  const mobileMediaMatches = window.matchMedia("(max-width: 800px)").matches;
  const browserMenus = document.querySelectorAll("[data-menu='browser']");
  const mobileMenu = document.querySelector("[data-menu='mobile']");
  const openMobileMenuButton = document.querySelector("[data-menu='open mobile menu']");
  const html = document.documentElement;

  const openMenu = () => {
    openMobileMenuButton.style.display = "none";
    mobileMenu.classList.remove("hidden");
    mobileMenu.classList.add("active");
    setTimeout(() => {
      clickOutSideMobileMenu();
    })
  }

  const clickOutSideMobileMenu = () => {
    const attribute = "data-outside";
    if (html.hasAttribute(attribute)) {
      html.setAttribute(attribute, "");
      html.addEventListener("click", closeMenu)
    } else {
      html.removeAttribute(attribute);
      html.removeEventListener("click", closeMenu);
    }
  }

  const closeMenu = () => {
    mobileMenu.classList.add("hidden");
    mobileMenu.classList.remove("active");
    openMobileMenuButton.style.display = "flex";
  }




  openMobileMenuButton.addEventListener("click", openMenu);
}


