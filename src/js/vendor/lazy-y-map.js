//deadblog.ru/webdev/kak-sdelat-lazy-load-yandeks-kart-lenivaya-zagruzka/

https: document.addEventListener("DOMContentLoaded", function () {
  setTimeout(initYandexMap, 5000);
});

document.addEventListener("scroll", initYandexMapOnEvent);
document.addEventListener("mousemove", initYandexMapOnEvent);
document.addEventListener("touchstart", initYandexMapOnEvent);

function initYandexMapOnEvent(e) {
  initYandexMap();
  e.currentTarget.removeEventListener(e.type, initYandexMapOnEvent);
}

function initYandexMap() {
  if (window.yandexMapDidInit) {
    return false;
  }
  window.yandexMapDidInit = true;

  const script = document.createElement("script");
  script.type = "text/javascript";
  script.async = true;

  script.src =
    "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A5f15a6d762c404ba94d9d91392cd956bbb8798f5e10264eb3b8971442a6a1fa7&amp;width=100%25&amp;height=600&amp;lang=ru_RU&amp;scroll=true";

  document.getElementById("YandexMap").appendChild(script);
}
