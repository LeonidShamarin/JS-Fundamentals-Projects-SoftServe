const checkNumInputs = (selector) => {
  const numInputs = document.querySelectorAll(selector);

  numInputs.forEach((item) => {
    item.addEventListener("input", () => {
      //регулярка, можна ввести тільки цифри
      item.value = item.value.replace(/\D/, "");
    });
  });
};
export default checkNumInputs;
