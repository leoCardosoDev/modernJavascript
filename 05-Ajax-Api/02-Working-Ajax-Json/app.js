document.getElementById('button1').addEventListener('click', loadCustomer)
document.getElementById('button2').addEventListener('click', loadCustomers)

function loadCustomer(e){
    const xhr = new XMLHttpRequest()

    xhr.open('GET', 'customer.json', true)

    xhr.onload = function(){
        if(this.status === 200){
            const customer = JSON.parse(this.responseText)
            const output = `
            <ul>
            <li>ID: ${customer.id}</li>
            <li>Name: ${customer.name}</li>
            <li>Company: ${customer.company}</li>
            <li>Phone: ${customer.phone}</li>
            </ul>
            `
            document.getElementById('customer').innerHTML = output
        }
    }

    xhr.send()
    
    e.preventDefault()
}

function loadCustomers(e){

    xhr = new XMLHttpRequest()

    xhr.open('GET', 'customers.json', true)

    xhr.onload = function(){
        if(this.status === 200){
            const customers = JSON.parse(this.responseText)
            let output = '<ul>'
            customers.forEach( customer => {
                output += `
                <li>ID: ${customer.id}</li>
                <li>Name: ${customer.name}</li>
                <li>Company: ${customer.company}</li>
                <li>Phone: ${customer.phone}</li>
                <hr>
                `
            });
            output += '</ul>'
            document.getElementById('customers').innerHTML = output  
        }
    }

    xhr.send()

    e.preventDefault()
}