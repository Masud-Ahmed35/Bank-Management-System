
document.getElementById("btn-withdraw").addEventListener("click", function () {

    const withdrawField = document.getElementById("withdraw-field");
    const newWithdrawTotal = parseFloat(withdrawField.value);

    withdrawField.value = '';

    if (isNaN(newWithdrawTotal)) {
        alert("Please Enter a Valid Number!!!");
        return;
    }

    const withdrawTotalElement = document.getElementById("withdraw-total");
    const previousWithdrawTotal = parseFloat(withdrawTotalElement.innerText);

    // Set Main Balance After Withdrawal Money
    const mainBalanceElement = document.getElementById("main-balance");
    const previousMainBalance = parseFloat(mainBalanceElement.innerText);

    if (newWithdrawTotal > previousMainBalance) {
        alert("Vai Eto Taka Nai!!!");
        return;
    }

    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawTotal;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    const currentMainBalance = previousMainBalance - newWithdrawTotal;
    mainBalanceElement.innerText = currentMainBalance;

})