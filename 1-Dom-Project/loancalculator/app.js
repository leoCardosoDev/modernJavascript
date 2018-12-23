// Listen For Submit
document.getElementById('loan-form').addEventListener('submit', function (e) {
  document.querySelector('input[type="submit"]').disabled = true;
  //hidden
  document.querySelector('#results').style.display = 'none';
  //show loader
  document.querySelector('#loading').style.display = 'block';

  setTimeout(calculateResults, 1000);
  e.preventDefault();
});


// Calculate Results
function calculateResults(e) {
  //UI vars
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  const principal = parseFloat(amount.value);
  const calculateInterest = parseFloat(interest.value) / 100 / 12;
  const calculatePayments = parseFloat(years.value) * 12;

  // Compute monthly payment
  const x = Math.pow(1 + calculateInterest, calculatePayments);
  const monthly = (principal * x * calculateInterest) / (x - 1);

  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatePayments).toFixed(2);
    totalInterest.value = ((monthly * calculatePayments) - principal).toFixed(2);

    document.querySelector('#results').style.display = 'block';
    document.querySelector('#loading').style.display = 'none';
  } else {
    document.querySelector('input[type="submit"]').disabled = true;
    showError('Please check your numbers');
  }

}

function showError(error) {
  document.querySelector('#results').style.display = 'none';
  document.querySelector('#loading').style.display = 'none';

  const errorDiv = document.createElement('div');

  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading')
  errorDiv.className = 'alert alert-danger';
  errorDiv.appendChild(document.createTextNode(error));

  card.insertBefore(errorDiv, heading);
  setTimeout(clearError, 2000);

  function clearError() {
    document.querySelector('.alert').remove();
    document.querySelector('input[type="submit"]').disabled = false;
  }
}