const tabs = (
  headerSelector,
  tabSelector,
  contentSelector,
  activeClass,
  display = "block"
) => {
  const header = document.querySelector(headerSelector),
    tab = document.querySelectorAll(tabSelector),
    content = document.querySelectorAll(contentSelector);
  function hideTabContent() {
    content.forEach((item) => {
      item.style.display = "none";
    });
    tab.forEach((item) => {
      item.classList.remove(activeClass);
    });
  }
  function showTabContent(i = 0) {
    content[i].style.display = display;
    tab[i].classList.add(activeClass);
  }
  //ф-ція прибирає контент і клас активності
  hideTabContent();
  showTabContent();
  //відстежити який таб клікнув користувач,делегування подій
  //header - блок що об'єднює всі наші таби
  header.addEventListener("click", (e) => {
    //e.target - той елемент на якому відбулась подія,куда клікнув користувач.
    const target = e.target;
    //відділити крапку, бо в фунції закладено спочатку посилання на селектор,через крапку  (tabSelector.replace(/\./, "")
    //.class=>class, за рах регулярних виразів забрали крапку
    //коли ми вдостовірились що клікнули в таб, починаємо пребирати ці таби один за другим
    //при чому ми запам'ятовуємо не тільки той таб який ми перебираємо, але й його номер по порядку
    //якщо в нашому преборі виконалась умова if (target == item || target.parentNode == item)-
    //таб на який клікнув користувач рівний табу що перебирається, ми запам'ятовуємо i-індекс його
    //і починаємо його використовувати за допомогою тих функцій які ми описали hideTabContent();showTabContent();
    // тобто, клікнули на 3-таб, скрипт переконався що ми клікнули точно на 3таб, взяв цифру 2
    //так як в нас відлік починається з нуля, і підставив сюди 2ку showTabContent(2); і фукція
    //showTabContent виконалась з двійкою
    if (
      target &&
      (target.classList.contains(tabSelector.replace(/\./, "")) ||
        target.parentNode.classList.contains(tabSelector.replace(/\./, "")))
    ) {
      tab.forEach((item, i) => {
        if (target == item || target.parentNode == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
};
export default tabs;
