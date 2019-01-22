console.clear()

//Listen for submit
document.getElementById('loan-form').addEventListener('submit', e => {
    // Hide Results
    document.getElementById('results').style.display = 'none'
    // show loader
    document.getElementById('loading').style.display = 'block'

    setTimeout(calculateResults, 500)

    e.preventDefault()
})

// Calculate
function calculateResults() {
    // UI var
    const amount = document.getElementById('amount')
    const interest = document.getElementById('interest')
    const years = document.getElementById('years')
    const monthlyPayment = document.getElementById('monthly-payment')
    const totalPayment = document.getElementById('total-payment')
    const totalInterest = document.getElementById('total-interest')

    const principal = parseFloat(amount.value)
    const calculatedInterest = parseFloat(interest.value) / 100 / 12
    const calculatedPayments = parseFloat(years.value) * 12

    // Compute monthly payment
    const x = Math.pow(1 + calculatedInterest, calculatedPayments)
    const monthly = (principal * x * calculatedInterest) / (x - 1)

    if (isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2)
        totalPayment.value = (monthly * calculatedPayments).toFixed(2)
        totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2)
        document.getElementById('results').style.display = 'block'
        document.getElementById('loading').style.display = 'none'
    } else {
        document.getElementById('loading').style.display = 'none'
        showError('Please, check your numbers')
    }
}

// show error
function showError(error){
    document.querySelector('.btn-dark').setAttribute('disabled', 'disabled')
    // Create div
    const errorDiv = document.createElement('div')
    // Get elements
    const card = document.querySelector('.card')
    const heading = document.querySelector('.heading')
    // Add Class
    errorDiv.className = 'alert alert-danger'
    // Create Text node
    errorDiv.appendChild(document.createTextNode(error))
    // Insert error above heading
    card.insertBefore(errorDiv, heading)
    // Clear error after 3 secundos
    setTimeout(clearError, 3000)
}
function clearError(){
    document.querySelector('.alert').remove()
    document.querySelector('.btn-dark').removeAttribute('disabled')
}