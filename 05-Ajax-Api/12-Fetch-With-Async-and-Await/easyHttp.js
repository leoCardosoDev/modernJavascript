/**
 * EasyHttp Library
 * Library for making HTTP Requests
 * 
 * @version 2.0.0
 * @author Leo Cardoso
 * @license MIT
 * 
 **/

class EasyHTTP {

    // Make HTTP GET Request
    async get(url) {
        const response = await fetch(url)
        const data = await response.json()
        return data
    }

    // Make HTTP POST Request
    async post(url, data) {

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        const dataRes = await response.json()
        return dataRes

    }

    // Make HTTP PUT Request
    async put(url, data) {
       const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
        })
        const dataRes = await response.json()
        
        return dataRes

    }

    // Make HTTP DELETE Request
    async delete(url) {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        })

        const resData = await 'Resource was deleted with success!'
        return resData
    }
}