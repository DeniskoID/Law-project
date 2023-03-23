//deadblog.ru/webdev/kak-sdelat-lazy-load-yandeks-kart-lenivaya-zagruzka/
const yMap = document.getElementById("YandexMap");

if (yMap) {
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
      "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A64d6611c43389e0990df7171f57ab57cfb7441e0580975781693754d73114d06&amp;width=100%&amp;height=600&amp;lang=ru_RU&amp;scroll=true";

    document.getElementById("YandexMap").appendChild(script);
  }
}
