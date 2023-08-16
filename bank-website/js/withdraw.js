// catch the withdraw button
const withdrawBtn = document.getElementById("withdrawBtn");

// withdraw function
withdrawBtn.addEventListener("click", function () {
  // get new withdraw amount
  const newWithdraw = getInputFieldValueById("withdrawInput");

  // get previous withdraw amount
  const previousWithdraw = getTextElementValueById("withdraw");

  const totalWithdraw = newWithdraw + previousWithdraw;

  // updated total withdraw
  addAmount("withdraw", totalWithdraw);
});
