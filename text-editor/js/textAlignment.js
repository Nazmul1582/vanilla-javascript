const alignLeft = document.getElementById("align-left");
const alignCenter = document.getElementById("align-center");
const alignRight = document.getElementById("align-right");
const alignJustify = document.getElementById("align-justify");

alignLeft.addEventListener("click", function () {
  changeAlignment(alignLeft, "left", alignCenter, alignRight, alignJustify);
});

alignCenter.addEventListener("click", function () {
  changeAlignment(alignCenter, "center", alignLeft, alignRight, alignJustify);
});

alignRight.addEventListener("click", function () {
  changeAlignment(alignRight, "right", alignLeft, alignCenter, alignJustify);
});

alignJustify.addEventListener("click", function () {
  changeAlignment(alignJustify, "justify", alignLeft, alignCenter, alignRight);
});
