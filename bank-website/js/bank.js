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
  let totalDeposit = parseFloat(deposit.innerText);
  let totalBalance = parseFloat(balance.innerText);
  let depositMoney = parseFloat(depositInput.value);
  deposit.innerText = depositMoney + totalDeposit;
  balance.innerText = depositMoney + totalBalance;
  depositInput.value = "";
});

// withdraw function
withdrawBtn.addEventListener("click", function () {
  let totalWithdraw = parseFloat(withdraw.innerText);
  let totalBalance = parseFloat(balance.innerText);
  let withdrawMoney = parseFloat(withdrawInput.value);

  if (totalBalance >= withdrawMoney) {
    withdraw.innerText = totalWithdraw + withdrawMoney;
    balance.innerText = totalBalance - withdrawMoney;
    withdrawInput.value = "";
  } else {
    withdrawInput.value = "";
    alert("You do not have suficient balance!");
  }
});
