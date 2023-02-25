document.getElementById('btn-diposit').addEventListener('click', function () {
    const dipositField = document.getElementById('diposit-field');
    const newDipositAmountString = dipositField.value;
    const newDipositAmount = parseFloat(newDipositAmountString)
    // diposit total 
    const dipositTotalElement = document.getElementById('diposit-total');
    const previousDipositTotalString = dipositTotalElement.innerText;
    const previousDipositTotal = parseFloat(previousDipositTotalString);
    const currentDipositTotal = previousDipositTotal + newDipositAmount;

    dipositTotalElement.innerText = currentDipositTotal;

    // balance total 
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    const currentBalanceTotal = previousBalanceTotal + newDipositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;

    dipositField.value = '';

})