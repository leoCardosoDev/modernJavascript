console.clear()
/**  LocalStorage **/

/* 
// set Local Storage item
localStorage.setItem('name', 'Leo')
localStorage.setItem('lastname', 'Cardoso')

// set Session Storage item
sessionStorage.setItem('name', 'Pri')

// remove from storage
localStorage.removeItem('name')
sessionStorage.removeItem('name')

// Get from Storage
const name = localStorage.getItem('name')
const last_name = localStorage.getItem('lastname')

localStorage.clear()
console.log(name, last_name)
*/

document.querySelector('form').addEventListener('submit', runSubmit)

function runSubmit(e) {

    const task = document.querySelector('#task').value
    let tasks

    if (localStorage.getItem('tasks') === null) {
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }

    tasks.push(task)
    localStorage.setItem('tasks', JSON.stringify(tasks))
    alert('Task saved')

    e.preventDefault()

}

const tasks = JSON.parse(localStorage.getItem('tasks'))
tasks.forEach(task => {
    console.log(task)
})