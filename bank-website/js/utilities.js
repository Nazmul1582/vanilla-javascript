function getInputFieldValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputFieldValue = inputField.value;
  const newAmount = parseFloat(inputFieldValue);
  return newAmount;
}

function getTextElementValueById(textElementId) {
  const textElement = document.getElementById(textElementId);
  const textElementValue = textElement.innerText;
  const previousAmount = parseFloat(textElementValue);
  return previousAmount;
}
