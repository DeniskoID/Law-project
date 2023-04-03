# Сайт «Ваше право»

> Выполняется в рамках курса 1Т-Спринт

### Количество разработчиков: 1

Проект находится в разработке и поставляется как есть.

Протестировано во всех современных браузерах и доступных устройствах.

Любые баги, недочеты, пожелания и исправления принимаются с **благодарностью**!

Верстка:

- проходит валидацию,
- соответствует БЭМ-нотации наименования классов
- основана на философии независимых, изолированных модулей и единиц.

## Страницы, готовые на сегодняшний день

### Уникальные страницы

- Главная
- Истории

### Типовые страницы

- Гражданские дела
- Уголовное право
- Корпоративное право
- Авторское право и IT
- Медицинское право

## Струтктурные классы

`.site-container` - глобальная обертка, в которой живет верстка основного лайаута. Прижимает футер к низу сайта.

`.footer`- обертка футера. Всегда внизу.

`.container` - глобальная обертка. Задает предельную ширину контенту. Центрует контент. Задает поля от границ экрана на мобильных устройствах.

`.nav` - класс обертки главного меню.

## Адаптер/Респонсив

Верстка выполнена в технике респонсива с 3 переломными точками на ширине `1024, 768, 576px`.

Данные экраны выбраны из соображений читаемости и удобства восприятия контента.

Дизайн для разрешений кроме `desktop` не был предоставлен и реализовывался силами разработчика.

Главное меню сворачивается в "бургер" на экране в 768 пикс.

`.mobile-menu__btn` - класс кнопки-бургера для открытия мобильного меню. Скрыт до экрана в 768 пикс.

## Функциональные классы

### Мобильное меню

На данный момент мобильное меню реализованно с помощью `checkbox`, для доступа к нему без JS.
В дальнейшем планируется добавить функционал с использованием скрипта. Для этого в стилях есть заготовки

`.burger--active` - накидывается на обертку меню `.nav` и бургер `.menu--active` для открытия мобильной версии меню

`.dis-scroll` - накидывается на `body`, для предотврашения скролла при открытом меню

Так же в файле `src → js → funtions → burger.js` имеется готовый скрипт

### Форма-обработчик

По требованию заказчика на сайте реализованно несколько форм с разным количеством инпутов.
Форма реализована с помощью тега `form`. Имеет атрибуты: name, action. В стилизации атрибуты не участвуют.

`.form-1, .form-2, .form-3` - классы формы. Не участвуют в стилизации. Могут быть использованы с любыми целями. Нужны для реализации валидации.

`input` - инпут формы. Имеет атрибуты: id, name. В стилизации атрибуты не участвуют. Обернут в лейбл, как обертку для стилизации.

`label` - Лейбл инпута. Обертка, контролирует размеры инпута. Задает стили визуальному полю для ввода инф-ции.

#### Состояние "ошибка ввода/отправки"

Для отображения ошибок используется плагин `just-validate`
Для маскИрования инпутов `type="tel"` используется плагин `inputmask`

## Кнопки

Все кнопки оформлены как тег `<button>`.

Внешний вид кнопки контролируется следующими классами и модификаторами

`.btn-reset` - дополнительный класс. Сбрасывает дефолтные стили

`.main-btn` - глобальный, родительский класс. Блок по БЭМ. Придает основные визуальные стили кнопке.

`.main-btn--stroked` - модификатор, убирает бекграунд и устанавливает непрозрачную обводку.

`.main-btn--filled` - модификатор, придает цветовой бекграунд.

`.warn-trigger` - временный класс. Открывает попап с сообщением о том, что страница находится в разработке".

## Анимация

#### Анимация на сайте реализована с помощью плагина `aos`.

К элемента добавляются атрибуты типа:

`data-aos="fade-in"`
`data-aos-delay="150"`
`data-aos-duration="1000"`
`data-aos-easing="ease-in-sine"`

# Gulp

> Используется Gulp 4

## Начало работы

Для работы с данной сборкой в новом проекте, склонируйте все содержимое репозитория <br>
`git clone <this repo>`
Затем, находясь в корне проекта, запустите команду `npm i`, которая установит все находящиеся в package.json зависимости.
После этого вы можете использовать любую из предложенных команд сборки (итоговые файлы попадают в папку **app** корневой директории): <br>
`gulp` - базовая команда, которая запускает сборку для разработки, используя browser-sync

`gulp build` - команда для продакшн-сборки проекта. Все ассеты сжаты и оптимизированы для выкладки на хостинг.

`gulp cache` - команда, которую стоит запускать после `gulp build`, если вам нужно загрузить новые файлы на хостинг без кэширования.

`gulp backend` - команда для бэкенд-сборки проекта. Она лишена ненужных вещей из dev-сборки, но не сжата, для удобства бэкендера.

`gulp zip` - команда собирает ваш готовый код в zip-архив.

## Структура папок и файлов

```
├── src/                          # Исходники
│   ├── js                        # Скрипты
│   │   └── main.js               # Главный скрипт
│   │   ├── _vars.js              # файл с переменными проекта
│   │   ├── _vendor.js            # файл с подключениями библиотек
│   │   ├── _functions.js         # файл с готовыми функциями на js
│   │   ├── _components.js        # файл с подключениями компонентов
│   │   ├── components            # js-компоненты
│   │   ├── vendor                # папка для загрузки локальных версий библиотек
│   ├── scss                      # Стили сайта (препроцессор sass в scss-синтаксисе)
│   │   └── main.scss             # Главный файл стилей
│   │   └── vendor.scss           # Файл для подключения стилей библиотек из папки vendor
│   │   └── _fonts.scss           # Файл для подключения шрифтов (можно использовать миксин)
│   │   └── _mixins.scss          # Файл для подключения миксинов из папки mixins
│   │   └── _vars.scss            # Файл для написания css- или scss-переменных
│   │   └── _settings.scss        # Файл для написания глобальных стилей
│   │   ├── components            # scss-компоненты
│   │   ├── mixins                # папка для сохранения готовых scss-компонентов
│   │   ├── vendor                # папка для хранения локальных css-стилей библиотек
│   ├── partials                  # папка для хранения html-частей страницы
│   ├── img                       # папка для хранения картинок
│   │   ├── svg                   # специальная папка для преобразования svg в спрайт
│   ├── resources                 # папка для хранения иных ассетов - php, видео-файлы, favicon и т.д.
│   │   ├── fonts                 # папка для хранения шрифтов в формате woff2
│   └── index.html                # Главный html-файл
└── gulpfile.js                   # файл с настройками Gulp
└── package.json                  # файл с настройками сборки и установленными пакетами
└── .editorconfig                 # файл с настройками форматирования кода
└── .ecrc                         # файл с настройками пакета editorconfig-checker (исключает ненужные папки)
└── .stylelintrc                  # файл с настройками stylelint
└── README.md                     # документация сборки
```

## Оглавление

1. [npm-скрипты](#npm-скрипты)
2. [Работа с html](#работа-с-html)
3. [Работа с CSS](#работа-с-css)
4. [Работа с JavaScript](#работа-с-javascript)
5. [Работа со шрифтами](#работа-со-шрифтами)
6. [Работа с изображениями](#работа-с-изображениями)

## npm-скрипты

Вы можете вызывать gulp-скрипты через npm.
Также в сборке есть возможность проверять код на соответствие конфигу (editorconfig) и валидировать html.

`npm run html` - запускает валидатор html, запускать нужно при наличии html-файлов в папке **app**.

`npm run code` - запускает editorconfig-checker для проверки соответствия конфиг-файлу.

## Работа с html

Благодаря плагину **gulp-file-include** вы можете разделять html-файл на различные шаблоны, которые должны храниться в папке **partials**. Удобно делить html-страницу на секции.

> Для вставки html-частей в главный файл используйте `@include('partials/filename.html')`

Если вы хотите создать многостраничный сайт - копируйте **index.html**, переименовывайте как вам нужно, и используйте.

При использовании команды `gulp build`, вы получите минифицированный html-код в одну строку для всех html-файлов.

## Работа с CSS

В сборке используется препроцессор **sass** в синтаксисе **scss**.

Стили, написанные в **components**, следует подключать в **main.scss**.
**ВАЖНО:** Обязательно удалить стили, которые написаны в **main.scss** для `.page__body`.

Чтобы подключить сторонние css-файлы (библиотеки) - положите их в папку **vendor** и подключите в файле **\_vendor.scss**

Если вы хотите создать свой миксин - делайте это в папке **mixins**, а затем подключайте в файл **\_mixins.scss**.

Если вы хотите использовать scss-переменные - подключите **\_vars.scss** также в main.scss или в любое другое место, где он нужен, но обязательно удалите **:root**.

> Для подключения css-файлов используйте директиву `@import`

В итоговой папке **app/css** создаются два файла: <br> **main.css** - для стилей страницы, <br> **vendor.css** - для стилей всех библиотек, использующихся в проекте.

При использовании команды `gulp build`, вы получите минифицированный css-код в одну строку для всех css-файлов.

## Работа с JavaScript

Для сборки JS-кода используется webpack.

JS-код лучше делить на компоненты - небольшие js-файлы, которые содержат свою, изолированную друг от друга реализацию. Такие файлы помещайте в папку **components**, а потом импортируйте в файл **\_components.js**

В файле **vars.js** должны храниться базовые переменные проекта, вроде нахождения элементов и т.д.

В файле **main.js** ничего менять не нужно, он сделан просто как результирующий.

Подключать сторонние библиотеки можно через npm, для этого существует файл **\_vendor.js**. Импортируйте туда подключения.

Если какой-то библиотеки нет в npm или просто нужно подключить что-либо локальным файлом - кладите его в папку **vendor** и точно так же импортируйте, но уже с путем до файла.

При использовании команды `gulp build`, вы получите минифицированный js-код в одну строку для всех js-файлов.

## Работа со шрифтами

Т.к. автор не поддерживает IE11, в сборке реализована поддержка только формата **woff2** (это значит, что в миксине подключения шрифтов используется только данный формат).

Загружайте файлы **woff2** в папку **resources/fonts**, а затем вызывайте миксин `@font-face` в файле **\_fonts.scss**.

Также не забудьте прописать эти же шрифты в `<link preload>` в html.

## Работа с изображениями

Любые изображения, кроме **favicon** кладите в папку **img**.

Если вам нужно сделать svg-спрайт, кладите нужные для спрайта svg-файлы в папку **img/svg**. При этом, такие атрибуты как fill, stroke, style будут автоматически удаляться. Иные svg-файлы просто оставляйте в папке **img**.

При использовании команды `gulp build`, вы получите минифицированные изображения в итоговой папке **img**.

В сборке доступна поддержка **webp** и **avif** форматов. Подключить их вы можете через тег `picture`. Для background можно использовать обычные **jpg** или **png**, либо использовать `image-set` там, где это возможно.
