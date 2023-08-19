// hold html elements
const boldBtn = document.getElementById("bold");
const italicBtn = document.getElementById("italic");
const underlineBtn = document.getElementById("underline");

boldBtn.addEventListener("click", function () {
  changeStyle(boldBtn, "bold");
});

italicBtn.addEventListener("click", function () {
  changeStyle(italicBtn, "italic");
});

underlineBtn.addEventListener("click", function () {
  changeStyle(underlineBtn, "underline");
});
