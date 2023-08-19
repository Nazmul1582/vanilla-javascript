const textField = document.getElementById("text-area");

// Reusable function for changing text format
function changeStyle(targetedElement, styledClass) {
  if (textField.className.includes(styledClass)) {
    textField.classList.remove(styledClass);
    targetedElement.classList.remove("focused");
    return;
  }
  textField.classList.add(styledClass);
  targetedElement.classList.add("focused");
}
