// export const fixHeader = () => {
//   const header = document.querySelector(".header");
//   const topHeader = document.querySelector(".header__top");
//   const hero = document.querySelector(".hero");
//   const submenu = document.querySelector(".submenu");
//   const container = document.querySelector(".site-container");
//   const headerHeight = header.offsetHeight;
//   const topHeaderHeight = topHeader.offsetHeight;
//   const submenuHeight = submenu.offsetHeight;
//   const heroHeight = hero.offsetHeight;
//   const documentWidth = document.documentElement.clientWidth;
//   console.log(documentWidth);
//   container.classList.remove("header--fixed");

//   if (documentWidth < 768) {
//     console.log("<768");
//     container.classList.remove("header--fixed");
//     window.removeEventListener("scroll", myClick);
//     return;
//   } else {
//     console.log("++++");
//     window.addEventListener("scroll", () => {
//       // console.log("~~~~~");
//       let scrollDistance = window.scrollY;

//       if (scrollDistance >= 5) {
//         container.classList.add("header--fill");
//         container.classList.remove("header--no-fill");
//       } else {
//         container.classList.remove("header--fill");
//         container.classList.add("header--no-fill");
//       }

//       if (scrollDistance >= heroHeight + topHeaderHeight - headerHeight + 1) {
//         container.classList.add("header--fixed");
//         hero.style.marginBottom = `${submenuHeight}px`;
//         hero.style.marginTop = null;
//       } else {
//         container.classList.remove("header--fixed");
//         hero.style.marginBottom = null;
//       }
//     });
//   }
// };

export const fixHeader = () => {
  const header = document.querySelector(".header");
  const topHeader = document.querySelector(".header__top");
  const hero = document.querySelector(".hero");
  const submenu = document.querySelector(".submenu");
  const container = document.querySelector(".site-container");
  const headerHeight = header.offsetHeight;
  const topHeaderHeight = topHeader.offsetHeight;
  const submenuHeight = submenu.offsetHeight;
  const heroHeight = hero.offsetHeight;
  const documentWidth = document.documentElement.clientWidth;

  if (documentWidth <= 768) {
    container.classList.remove("header--fixed");
    window.removeEventListener("scroll", scrollFix);
  } else {
    window.addEventListener("scroll", scrollFix);
  }

  function scrollFix() {
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
  }
};
