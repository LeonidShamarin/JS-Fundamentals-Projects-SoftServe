import "./slider";
//імпортувати ф-цію з файла
import modals from "./modules/modals";
import tabs from "./modules/tabs";
import forms from "./modules/forms";
import changeModalState from "./modules/changeModalState";
import timer from "./modules/timer";
import images from "./modules/images";
//глобальний обробник подій на Window відповідає за то що  скрипти починають виконуватись тоді
// коли Домструктура на сторінці готова
window.addEventListener("DOMContentLoaded", () => {
  "use strict";
  //створюємо об'єкт з тими даними, які ми маємо відправити
  let modalState = {};
  //дату прописуєм
  let deadline = "2023-05-22";

  changeModalState(modalState);
  modals();
  tabs(".glazing_slider", ".glazing_block", ".glazing_content", "active");
  tabs(
    ".decoration_slider",
    ".no_click",
    ".decoration_content > div > div",
    "after_click"
  );
  tabs(
    ".balcon_icons",
    ".balcon_icons_img",
    ".big_img > img",
    "do_image_more",
    "inline-block"
  );
  forms(modalState);
  timer(".container1", deadline);
  images();
});
