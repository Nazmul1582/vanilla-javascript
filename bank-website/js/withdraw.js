// catch the withdraw button
const withdrawBtn = document.getElementById("withdrawBtn");

// withdraw function
withdrawBtn.addEventListener("click", function () {
  // get new withdraw amount
  const newWithdrawAmount = getInputFieldValueById("withdrawInput");

  // get previous withdraw amount
  const previousWithdraw = getTextElementValueById("withdraw");
  console.log(previousWithdraw);
});
