function getTipAmountPerPerson(billAmount, noOfPeople, tipPercentage) {
  let totalTip = billAmount * (tipPercentage / 100);
  let result = totalTip / noOfPeople;
  return Number(result.toFixed(2));
}

function getTotalAmountPerPerson(billAmount, noOfPeople, tipAmountPerPerson) {
  let billPerPerson = billAmount / noOfPeople;
  let result = billPerPerson + tipAmountPerPerson;

  return Number(result.toFixed(2));
}
