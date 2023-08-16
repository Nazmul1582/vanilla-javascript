// catch the withdraw button
const withdrawBtn = document.getElementById("withdrawBtn");

// withdraw function
withdrawBtn.addEventListener("click", function () {
  // get previous balance
  const previousBalance = getTextElementValueById("balance");
  // get new withdraw amount
  const newWithdraw = getInputFieldValueById("withdrawInput");

  // get previous withdraw amount
  const previousWithdraw = getTextElementValueById("withdraw");

  if (previousBalance >= newWithdraw) {
    const totalWithdraw = newWithdraw + previousWithdraw;

    // updated total withdraw
    addAmount("withdraw", totalWithdraw);

    const totalBalance = previousBalance - newWithdraw;

    // updated total balance
    addAmount("balance", totalBalance);
  } else {
    alert("You do not have suficient balance!");
  }
});
