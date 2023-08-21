const textField = document.getElementById("text-area");

// Reusable function for changing text format
function changeStyle(targetedElement, styledClass) {
  if (textField.className.includes(styledClass)) {
    textField.classList.remove(styledClass);
    targetedElement.classList.remove("focused");
  } else {
    textField.classList.add(styledClass);
    targetedElement.classList.add("focused");
  }
}

// Resusable function for changing text alignment
function changeAlignment(targetedElement, alignment) {
  if (targetedElement.className.includes("focused")) {
    targetedElement.classList.remove("focused");
    textField.style.removeProperty("text-align");
    return;
  }
  targetedElement.classList.add("focused");
  textField.style.textAlign = alignment;
}
