export const getHeaderHeight = () => {
  const headerHeight = document?.querySelector(".header").offsetHeight;
  document
    .querySelector(":root")
    .style.setProperty("--header-height", `${headerHeight}px`);

  // Для трёхуровнего меню

  const topHeader = document?.querySelector(".header__top").offsetHeight;
  document
    .querySelector(":root")
    .style.setProperty("--header-top-height", `${topHeader}px`);

  const bottomHeader = document?.querySelector(".header__bottom").offsetHeight;
  document
    .querySelector(":root")
    .style.setProperty("--header-bottom-height", `${bottomHeader}px`);

  const cubMenu = document?.querySelector(".submenu").offsetHeight;
  document
    .querySelector(":root")
    .style.setProperty("--submenu-height", `${cubMenu}px`);
};
