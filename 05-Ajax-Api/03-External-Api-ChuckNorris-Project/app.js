document.querySelector('.get-jokes').addEventListener('click', getJokes)

function getJokes(e){
    let number = document.querySelector('input[type="number"]').value
    if(number === ''){
        number = 1
    }
    
    const xhr = new XMLHttpRequest()

    xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`, true)

    xhr.onload = function(){
        if(this.status === 200){
            const response = JSON.parse(this.response)
            let output = ''
            if(response.type === 'success'){
                const values = response.value
                values.forEach(joke => {
                    output += `
                        <li>${joke.joke}</li>
                        <hr>
                    `
                })
                document.querySelector('.jokes').innerHTML = output
            }else{
                output += '<li>Something went wrong</li>'
            }
        }
    }

    xhr.send()

    e.preventDefault()
}