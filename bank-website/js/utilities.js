function getInputFieldValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputFieldValue = inputField.value;
  const newAmount = parseFloat(inputFieldValue);
  inputField.value = "";
  if (inputFieldValue == "") {
    alert("Please enter your amount!");
    return 0;
  } else return newAmount;
}

function getTextElementValueById(textElementId) {
  const textElement = document.getElementById(textElementId);
  const textElementValue = textElement.innerText;
  const previousAmount = parseFloat(textElementValue);
  return previousAmount;
}

function addAmount(elementId, newAmount) {
  previousAmount = document.getElementById(elementId);
  previousAmount.innerText = newAmount;
}
