// hold deposit button
const depositBtn = document.getElementById("depositBtn");

// deposit function
depositBtn.addEventListener("click", function () {
  // get new deposite amount
  const newDepositAmount = getInputFieldValueById("depositInput");

  console.log(newDepositAmount);
});
