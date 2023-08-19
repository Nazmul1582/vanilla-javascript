// hold html elements
const boldBtn = document.getElementById("bold");
const italicBtn = document.getElementById("italic");
const underlineBtn = document.getElementById("underline");

boldBtn.addEventListener("click", function () {
  changeStyle(boldBtn, "bold");
});
