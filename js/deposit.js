
document.getElementById("btn-deposit").addEventListener("click", function () {
    // Deposit Section
    const depositField = document.getElementById("deposit-field");
    const newDepositTotal = parseFloat(depositField.value);

    const depositTotalElement = document.getElementById("deposit-total");
    const previousDepositTotal = parseFloat(depositTotalElement.innerText);

    const currentDepositTotal = previousDepositTotal + newDepositTotal;
    depositTotalElement.innerText = currentDepositTotal;

    // Main Balance Section
    const mainBalanceElement = document.getElementById("main-balance");
    const previousMainBalance = parseFloat(mainBalanceElement.innerText);

    const currentMainBalance = newDepositTotal + previousMainBalance;
    mainBalanceElement.innerText = currentMainBalance;



    depositField.value = '';

})