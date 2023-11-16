window.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('calc-form');
  if (form) {
    setupIntialValues();
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +document.getElementById('loan-amount').value,
    years: +document.getElementById('loan-years').value,
    rate: +document.getElementById('loan-rate').value,
  };
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const loanData = { amount: 10000, years: 10, rate: 3 };
  const amountUI = document.querySelector('#loan-amount');
  amountUI.value = loanData.amount;

  const yearsUI = document.querySelector('#loan-years');
  yearsUI.value = loanData.years;

  const rateUI = document.querySelector('#loan-rate');
  rateUI.value = loanData.rate;

  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  updateMonthly(calculateMonthlyPayment(getCurrentUIValues()));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const monthlyRate = values.rate / 100 / 12;
  const toatlPayments = values.years * 12;
  const monthlyPayment = (values.amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -toatlPayments));
  return monthlyPayment.toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyUI = document.querySelector('#monthly-payment');
  monthlyUI.innerText = `$${monthly}`;
}
