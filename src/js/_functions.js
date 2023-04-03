// Данный файл - лишь собрание подключений готовых компонентов.

// Фиксируем header после скрола на определённую величину
import { fixHeader } from "./functions/fix-header";

fixHeader();

// Реализация модальных окон
import { modals } from "./functions/modals";

modals();

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

// Получение высоты шапки сайта (не забудьте вызвать функцию)
import { getHeaderHeight } from "./functions/header-height";

getHeaderHeight();

// Подключение анимаций по скроллу
import AOS from "aos";

AOS.init();

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
// validateForms(".form-1-2", rules1_2, afterForm);
validateForms(".form-2", rules2, afterForm);
validateForms(".form-3", rules3, afterForm);
// validateForms(".form-4", rules4, afterForm);

// const afterForm = () => {
//   console.log("Произошла отправка, тут можно писать любые действия");
// };
