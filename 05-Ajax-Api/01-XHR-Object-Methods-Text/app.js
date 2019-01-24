document.getElementById('button').addEventListener('click', loadData)

function loadData(){
    // Create an XHR Object
    const xhr = new XMLHttpRequest()

    // OPEN
    xhr.open('GET', '_data.txt', true)
    // console.log('READYSTATE: ', xhr.readyState)

    // Optional - Used for spinners/loaders
    xhr.onprogress = function(){
        console.log('readState: ', xhr.readyState)
    }

    // xhr.onload -- comment*
    xhr.onload = function() {
        console.log('readystate: ', xhr.readyState)
        if(this.status === 200){
            // console.log(this.responseText)
            document.getElementById('output').innerHTML = `
            <h1>${this.responseText}</h1>
            `
        }
    }

/* 
    // xhr.onreadystatechange**
    xhr.onreadystatechange = function(){
        console.log('READYSTATE: ', xhr.readyState)
        if(this.status == 200 && this.readyState === 4){
            console.log(this.responseText)
        }
    }
 */

    xhr.onerror = function(){
        console.log('Request error...')
    }

    // Send
    xhr.send()
}

/**
 * -- *xhr.onload -- comment
** - HTTP STATUS
** -- 200: "OK"
** -- 403: "Forbidden"
** -- 404: "Not Found"
*/

/**
 * -- **xhr.onreadystatechange
 ** - Ready State Value
 ** -- 0: request not initialized
 ** -- 1: server connection established
 ** -- 2: request received
 ** -- 3: processing request
 ** -- 4: request finished and response is ready
 */