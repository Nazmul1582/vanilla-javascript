// hold deposit button
const depositBtn = document.getElementById("depositBtn");

// deposit function
depositBtn.addEventListener("click", function () {
  // get new deposit amount
  const newDepositAmount = getInputFieldValueById("depositInput");

  // get previous deposit amount
  const previousDeposit = getTextElementValueById("deposit");
  console.log(previousDeposit);
});
