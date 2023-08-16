function getInputFieldValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputFieldValue = inputField.value;
  const newAmount = parseFloat(inputFieldValue);
  return newAmount;
}
