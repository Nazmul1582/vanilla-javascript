// catch the withdraw button
const withdrawBtn = document.getElementById("withdrawBtn");

// withdraw function
withdrawBtn.addEventListener("click", function () {
  // get new withdraw amount
  const newWithdrawAmount = getInputFieldValueById("withdrawInput");
  console.log(newWithdrawAmount);
});
