/** 
 * 
async function myFnc() {
    return 'Hello';

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Hello world'), 1000)
    })

    const res = await promise // Wait until promise is resolve

    return res;
}
myFnc()
    .then(res => console.log(res))

*/

async function getUsers(){
    // await response of the fetch all
    const response = await fetch('https://jsonplaceholder.typicode.com/users')

    // Only proceed its resolved
    const data = await response.json()

    // only proceed once second promise is resolved
    return data
}

getUsers().then(users => console.log(users))
