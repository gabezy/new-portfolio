export const initMobileMenu = () => {
  const mobileMenu = document.querySelector("[data-menu='mobile']");
  const openMobileMenuButton = document.querySelector("[data-menu='open mobile menu']");
  const html = document.documentElement;

  const openMenu = () => {
    openMobileMenuButton.style.display = "none";
    mobileMenu.classList.remove("hidden");
    mobileMenu.classList.add("active");
    setTimeout(() => {
      html.setAttribute("data-outside", "");
      html.addEventListener("click", clickOutSideMobileMenu)
    })
  }

  const closeMenu = () => {
    mobileMenu.classList.add("deactivate");
    setTimeout(() => {
      mobileMenu.classList.add("hidden");
      mobileMenu.classList.remove("deactivate");
    }, 500)
    mobileMenu.classList.remove("active");
    openMobileMenuButton.style.display = "flex";
    html.removeAttribute("data-outside");
    html.removeEventListener("click", clickOutSideMobileMenu)
  }

  const clickOutSideMobileMenu = (e) => {
    const target = e.target;
    if (target !== mobileMenu) {
      closeMenu();
    }
  }


  openMobileMenuButton.addEventListener("click", openMenu);
}


