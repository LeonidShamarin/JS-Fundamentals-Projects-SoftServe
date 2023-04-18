import checkNumInputs from "./checkNumInputs";

const forms = (state) => {
  const form = document.querySelectorAll("form"),
    inputs = document.querySelectorAll("input");

  // виклик ф-ції валідації чи цифра з модуля checkNumbers
  checkNumInputs('input[name ="user_phone"]');

  const message = {
    loading: "Завантаження...",
    success: "Дякую! Ми зв'яжемося з Вами найближчим часом!",
    failure: "Щось пішло не так...",
  };

  const saveFormDataToLocalStorage = (formData) => {
    // Отримання поточних даних з localStorage
    const dataFromLocalStorage =
      JSON.parse(localStorage.getItem("formData")) || {};
    // Перетворення FormData у об'єкт
    const data = Object.fromEntries(formData.entries ? formData.entries() : []);
    // Додавання нових даних до старих
    const updatedData = Object.assign({}, dataFromLocalStorage, data);
    // Збереження оновлених даних в localStorage
    localStorage.setItem("formData", JSON.stringify(updatedData));
  };

  const postData = async (url, data) => {
    // Save form data to local storage
    saveFormDataToLocalStorage(data);

    document.querySelector(".status").textContent = message.loading;
    let res = await fetch(url, {
      method: "POST",
      body: data,
    });
    return await res.text();
  };

  const clearInputs = () => {
    inputs.forEach((item) => {
      item.value = "";
    });
  };

  form.forEach((item) => {
    item.addEventListener("submit", (e) => {
      e.preventDefault();
      let statusMessage = document.createElement("div");
      statusMessage.classList.add("status");
      item.appendChild(statusMessage);
      const formData = new FormData(item);

      if (item.getAttribute("data-calc") === "end") {
        for (let key in state) {
          formData.append(key, state[key]);
        }
      }

      // збереження даних в localStorage
      saveFormDataToLocalStorage(formData);

      // відправка запиту
      postData("assets/server.php", formData)
        .then((res) => {
          console.log(res);
          statusMessage.textContent = message.success;
        })
        .catch(() => (statusMessage.textContent = message.failure))
        .finally(() => {
          clearInputs();
          setTimeout(() => {
            statusMessage.remove();
          }, 5000);
        });
    });
  });
};

export default forms;


