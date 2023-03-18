export const fixHeader = () => {
  const header = document.querySelector(".header");
  const topHeader = document.querySelector(".header__top");
  const hero = document.querySelector(".hero");
  const submenu = document.querySelector(".submenu__item-active");
  const container = document.querySelector(".site-container");
  const headerHeight = header.offsetHeight;
  const topHeaderHeight = topHeader.offsetHeight;
  const submenuHeight = submenu.offsetHeight;
  const heroHeight = hero.offsetHeight;

  window.addEventListener("scroll", () => {
    let scrollDistance = window.scrollY;

    if (scrollDistance >= 5) {
      container.classList.add("header--fill");
      container.classList.remove("header--no-fill");
    } else {
      container.classList.remove("header--fill");
      container.classList.add("header--no-fill");
    }

    if (scrollDistance >= heroHeight + topHeaderHeight - headerHeight + 1) {
      container.classList.add("header--fixed");
      hero.style.marginBottom = `${submenuHeight}px`;
      hero.style.marginTop = null;
    } else {
      container.classList.remove("header--fixed");
      hero.style.marginBottom = null;
    }
  });
};
