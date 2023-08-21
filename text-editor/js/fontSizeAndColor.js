const fontSizeField = document.getElementById("font-size");
const colorField = document.getElementById("colorField");

fontSizeField.addEventListener("change", function () {
  let fontSize = fontSizeField.value;
  textField.style.fontSize = `${fontSize}px`;
});

colorField.addEventListener("change", function () {
  const color = colorField.value;
  textField.style.color = `${color}`;
});
