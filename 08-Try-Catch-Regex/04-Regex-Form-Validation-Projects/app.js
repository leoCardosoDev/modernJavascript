const name = document.getElementById('name')
const zip = document.getElementById('zipcode')
const email = document.getElementById('email')
const phone = document.getElementById('phone')

name.addEventListener('blur', validateName)
zip.addEventListener('blur', validateZip)
email.addEventListener('blur', validateEmail)
phone.addEventListener('blur', validatePhone)

function validateName(){
    const re = /^[a-zA-Z]{2,10}$/

    if(!re.test(name.value)){
        name.classList.add('is-invalid')
    }else{
        name.classList.remove('is-invalid')
    }
}

function validateZip(){
    const re = /^[0-9]{5}(-[0-9]{3})?$/

    if(!re.test(zip.value)){
        zip.classList.add('is-invalid')
    }else{
        zip.classList.remove('is-invalid')
    }
}

function validateEmail(){
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-z]{2,5})$/

    if(!re.test(email.value)){
        email.classList.add('is-invalid')
    }else{
        email.classList.remove('is-invalid')
    }
}

function validatePhone(){
    const re = /^\(?\d{2}\)?[-. ]?\d{4,5}[-. ]?\d{4}$/

    if(!re.test(phone.value)){
        phone.classList.add('is-invalid')
    }else{
        phone.classList.remove('is-invalid')
    }
}