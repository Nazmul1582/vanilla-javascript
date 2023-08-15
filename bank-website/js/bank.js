// hold html element
const deposit = document.getElementById("deposit");
const withdraw = document.getElementById("withdraw");
const balance = document.getElementById("balance");

const depositInput = document.getElementById("depositInput");
const withdrawInput = document.getElementById("withdrawInput");
const depositBtn = document.getElementById("depositBtn");
const withdrawBtn = document.getElementById("withdrawBtn");

// deposit function
depositBtn.addEventListener("click", function () {
  let totalDeposit = parseInt(deposit.innerText);
  let totalBalance = parseInt(balance.innerText);
  let depositMoney = parseInt(depositInput.value);
  deposit.innerText = depositMoney + totalDeposit;
  balance.innerText = depositMoney + totalBalance;
  depositInput.value = "";
});
