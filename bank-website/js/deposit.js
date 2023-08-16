// hold deposit button
const depositBtn = document.getElementById("depositBtn");

// deposit function
depositBtn.addEventListener("click", function () {
  // get new deposit amount
  const newDeposit = getInputFieldValueById("depositInput");

  // get previous deposit amount
  const previousDeposit = getTextElementValueById("deposit");

  const totalDeposit = previousDeposit + newDeposit;

  // updated deposit amount
  addAmount("deposit", totalDeposit);
});
