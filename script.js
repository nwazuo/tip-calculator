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

// selectors
const billInput = document.querySelector(".bill-amount");
const peopleInput = document.querySelector(".no-of-people");
const tipButtons = document.querySelectorAll(".tips button");
const customTipInput = document.querySelector(".tips .custom");
const resetBtn = document.querySelector(".reset");

const tipAmountPerPersonDisplay = document.querySelector(".tip-amount");
const totalPerPersonDisplay = document.querySelector(".total-amount");

// button click handler
tipButtons.forEach((tips) => {
  tips.addEventListener("click", (event) => {
    // clear the button-active state from all tip buttons
    tipButtons.forEach((node) => {
      node.classList.remove("button-active");
    });

    // add the button-active state to the clicked button
    event.target.classList.add("button-active");
    console.log(parseInt(event.target.textContent.substr(0, 2)));

    // retrieve the value of button clicked and recalculate the result
    tipPercentage = Number(event.target.textContent.substr(0, 2));
    calculateResult(billAmount, noOfPeople, tipPercentage);
  });
});

let billAmount = Number(billInput.value);
let noOfPeople = Number(peopleInput.value);
let tipPercentage = 15;

function calculateResult(billAmount, noOfPeople, tipPercentage) {
  const tipAmountPerPerson = getTipAmountPerPerson(
    billAmount,
    noOfPeople,
    tipPercentage
  );
  const totalPerPerson = getTotalAmountPerPerson(
    billAmount,
    noOfPeople,
    tipAmountPerPerson
  );

  console.log("tip amount per person => ", tipAmountPerPerson);
  console.log("total per person => ", totalPerPerson);
  displayResult(tipAmountPerPerson, totalPerPerson);
}

function displayResult(tipPerPerson, totalPerPerson) {
  let tipPerPersonText = `$${tipPerPerson}`;
  let totalPerPersonText = `$${totalPerPerson}`;

  // change the text content of the nodes to display result
  tipAmountPerPersonDisplay.textContent = tipPerPersonText;
  totalPerPersonDisplay.textContent = totalPerPersonText;
}

billInput.addEventListener("input", (event) => {
  // change associated value to the new input
  billAmount = Number(event.target.value);
  // call the function that calculates and displays our result
  calculateResult(billAmount, noOfPeople, tipPercentage);
});

//Number of People
peopleInput.addEventListener("input", (event) => {
  noOfPeople = Number(event.target.value);

  let peopleError = document.querySelector(".people-error");

  if (noOfPeople == 0) {
    event.target.classList.add("input-error");
    peopleError.classList.remove("hidden");
  } else {
    event.target.classList.remove("input-error");
    peopleError.classList.add("hidden");
  }

  calculateResult(billAmount, noOfPeople, tipPercentage);
});

//Custom Input
customTipInput.addEventListener("input", (event) => {
  tipPercentage = Number(event.target.value);

  calculateResult(billAmount, noOfPeople, tipPercentage);
});

// add the reset feature
