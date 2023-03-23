// Данный файл - лишь собрание подключений готовых компонентов.
// Рекомендуется создавать отдельный файл в папке components и подключать все там

// Фиксируем header после скрола на определённую величину
import { fixHeader } from "./functions/fix-header";

fixHeader();

// Реализация модальных окон
import { modals } from "./functions/modals";

modals();

// Определение операционной системы на мобильных
// import { mobileCheck } from "./functions/mobile-check";
// console.log(mobileCheck());

// Определение ширины экрана
// import { isMobile, isTablet, isDesktop } from './functions/check-viewport';
// if (isDesktop()) {
//   console.log('...')
// }

// Троттлинг функции (для ресайза, ввода в инпут, скролла и т.д.)
import { throttle } from "./functions/throttle";
let getHeight = () => {
  getHeaderHeight();
};
let fixHead = () => {
  fixHeader();
};
let func1 = throttle(getHeight);
let func2 = throttle(fixHead);
// window.addEventListener("resize", func);

window.addEventListener("resize", func1);
window.addEventListener("resize", func2);

// Фикс фулскрин-блоков
// import './functions/fix-fullheight';

// Реализация бургер-меню
// import { burger } from './functions/burger';

// Реализация остановки скролла (не забудьте вызвать функцию)
// import { disableScroll } from './functions/disable-scroll';

// Реализация включения скролла (не забудьте вызвать функцию)
// import { enableScroll } from './functions/enable-scroll';

// Реализация табов
// import GraphTabs from 'graph-tabs';
// const tabs = new GraphTabs('tab');

// Получение высоты шапки сайта (не забудьте вызвать функцию)
import { getHeaderHeight } from "./functions/header-height";

getHeaderHeight();

// Подключение плагина кастом-скролла
// import 'simplebar';

// Подключение плагина для позиционирования тултипов
// import { createPopper, right} from '@popperjs/core';
// createPopper(el, tooltip, {
//   placement: 'right'
// });

// Подключение свайпера
// import Swiper, { Navigation, Pagination } from "swiper";
// Swiper.use([Navigation, Pagination]);
// const swiper = new Swiper(el, {
//   slidesPerView: "auto",
// });

// Подключение анимаций по скроллу
import AOS from "aos";

AOS.init();

// Подключение параллакса блоков при скролле
// import Rellax from 'rellax';
// const rellax = new Rellax('.rellax');

// Подключение плавной прокрутки к якорям
// import SmoothScroll from 'smooth-scroll';
// const scroll = new SmoothScroll('a[href*="#"]');

// Подключение событий свайпа на мобильных
// import 'swiped-events';
// document.addEventListener('swiped', function(e) {
//   console.log(e.target);
//   console.log(e.detail);
//   console.log(e.detail.dir);
// });

import { validateForms } from "./functions/validate-forms";
const afterForm = () => {
  console.log("Произошла отправка, тут можно писать любые действия");
};

const rules1 = [
  [".name", [{ rule: "required", errorMessage: "Обязательное поле" }]],
  [".phone-1", [{ rule: "required", errorMessage: "Обязательное поле" }]],
];
const rules1_2 = [
  [".name", [{ rule: "required", errorMessage: "Обязательное поле" }]],
  [".phone-1", [{ rule: "required", errorMessage: "Обязательное поле" }]],
];
const rules2 = [
  [".name", [{ rule: "required", errorMessage: "Обязательное поле" }]],
  [".phone", [{ rule: "required", errorMessage: "Обязательное поле" }]],
];
const rules3 = [
  [".name", [{ rule: "required", errorMessage: "Обязательное поле" }]],
  [
    ".email",
    [
      { rule: "required", errorMessage: "Обязательное поле" },
      { rule: "email", errorMessage: "Некорректный email" },
    ],
  ],
  [".phone-3", [{ rule: "required", errorMessage: "Обязательное поле" }]],
];
const rules4 = [
  [".name", [{ rule: "required", errorMessage: "Обязательное поле" }]],
  [
    ".email",
    [
      { rule: "required", errorMessage: "Обязательное поле" },
      { rule: "email", errorMessage: "Некорректный email" },
    ],
  ],
  [".phone-3", [{ rule: "required", errorMessage: "Обязательное поле" }]],
];

validateForms(".form-1", rules1, afterForm);
validateForms(".form-1-2", rules1_2, afterForm);
validateForms(".form-2", rules2, afterForm);
validateForms(".form-3", rules3, afterForm);
validateForms(".form-4", rules4, afterForm);

// const afterForm = () => {
//   console.log("Произошла отправка, тут можно писать любые действия");
// };
