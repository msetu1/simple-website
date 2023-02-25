document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawTotalString = withdrawField.value;
    const newWithdrawTotal = parseFloat(newWithdrawTotalString);

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);


    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawTotal;
    withdrawTotalElement.innerText = currentWithdrawTotal;


    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const currentBalanceTotal = previousBalanceTotal - newWithdrawTotal;
    balanceTotalElement.innerText = currentBalanceTotal;

    withdrawField.value = '';

})