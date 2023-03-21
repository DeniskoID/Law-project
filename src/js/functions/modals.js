export const modals = () => {
  function bindModal(
    triggerSelector,
    modalSelector,
    closeSelector,
    closeClickOverlay = true
  ) {
    const trigger = document.querySelectorAll(triggerSelector);
    const modal = document.querySelector(modalSelector);
    const close = document.querySelector(closeSelector);
    const windows = document.querySelectorAll("[data-modal]");

    const header = document.querySelector(".header");
    const scroll = calcScroll();

    const inputs = document.querySelectorAll(`${modalSelector} input`);

    // Очищаем форму после закрытия
    const clearInputs = () => {
      inputs.forEach((item) => {
        item.value = "";
      });
    };

    trigger.forEach((item) => {
      item.addEventListener("click", (e) => {
        if (e.target) {
          e.preventDefault();
        }

        windows.forEach((item) => {
          item.style.display = "hidden";
        });

        modal.style.display = "flex";
        document.body.style.overflow = "hidden";

        // Фикс смещение окна при overflow hidden
        document.body.style.marginRight = `${scroll}px`;
        header.style.paddingRight = `${scroll}px`;

        // document.body.classList.add('modal-open');
      });
    });

    close.addEventListener("click", () => {
      windows.forEach((item) => {
        item.style.display = "none";
      });
      modal.style.display = "none";
      document.body.style.overflow = "";

      // Фикс смещение окна при overflow hidden
      document.body.style.marginRight = `0px`;
      header.style.paddingRight = `0px`;
      // document.body.classList.remove('modal-open');
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal && closeClickOverlay) {
        windows.forEach((item) => {
          item.style.display = "none";
        });
        modal.style.display = "none";
        document.body.style.overflow = "";

        // Фикс смещение окна при overflow hidden
        document.body.style.marginRight = `0px`;
        header.style.paddingRight = `0px`;
        // document.body.classList.remove('modal-open');

        clearInputs();
      }
    });
  }
  // Показать модальное окно через какое-то время

  function showModalByTime(selector, time) {
    setTimeout(() => {
      document.querySelector(selector).style.display = "block";
      document.body.style.overflow = "hidden";
    }, time);
  }

  // Определяем ширину скролла для фикса скачка при открытии и закрытии модалки
  function calcScroll() {
    let div = document.createElement("div");

    div.style.width = "50px";
    div.style.height = "50px";
    div.style.overflow = "scroll";
    div.style.visibility = "hidden";

    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollWidth;
  }
  // ==========================

  bindModal(".callback-btn", ".popup-consult", ".popup__close");
  bindModal(".hero__btn-help", ".popup-help", ".popup-help-close");
  bindModal(".hero__btn-question", ".popup-free", ".popup-free-close");
  bindModal(".emergency", ".popup-emergency", ".popup-emergency .popup__close");
};
