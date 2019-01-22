// Define UI vars
const form = document.querySelector('#task-form')
const taskList = document.querySelector('.collection')
const clearBtn = document.querySelector('.clear-tasks')
const filter = document.querySelector('#filter')
const taskInput = document.querySelector('#task')

// Load all event listeners
loadEventListeners()

function loadEventListeners() {
    // DOM load event
    document.addEventListener('DOMContentLoaded', getTaks)
    // Add task event
    form.addEventListener('submit', addTask)
    // Remove Task event
    taskList.addEventListener('click', removeTask)
    // Clear Task Event
    clearBtn.addEventListener('click', clearTasks)
    // Filter Tasks event
    filter.addEventListener('keyup', filterTask)
}

// Function Create LI
function createList(list) {
    // Create li element
    const li = document.createElement('li')
    // add class
    li.className = 'collection-item'
    // Create text node an append to li
    li.appendChild(document.createTextNode(list))
    // Create new link element
    const link = document.createElement('a')
    // Add class
    link.className = 'delete-item secondary-content'
    link.setAttribute('href', '#')
    // Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>'
    // Append the link to li
    li.appendChild(link)
    // Append li to ul
    taskList.appendChild(li)
}

// Get Tasks from LocalStorage
function getTaks() {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.forEach(task => {
        createList(task)
    })
}

// addTask
function addTask(e) {
    if (taskInput.value === '') {
        alert('Add a task')
    }
    createList(taskInput.value)
    // Storage in Local
    storeTaskInLocalStorage(taskInput.value);
    // Clear input
    taskInput.value = ''
    e.preventDefault()
}

// Remove Task
function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are you sure?')) {
            e.target.parentElement.parentElement.remove()

            // Remove from LS
            removeTaskFromLS(e.target.parentElement.parentElement)
        }
    }

}
// Remove Local Storage~
function removeTaskFromLS(taskItem) {
    let tasks
    if (localStorage.getItem('tasks') === null) {
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.forEach((task, index) => {
        if (taskItem.textContent === task) {
            tasks.splice(index, 1)
        }
    })
    localStorage.setItem('tasks', JSON.stringify(tasks))
}
// Clear all tasks
function clearTasks() {
    if (confirm('Are you sure?')) {
        //taskList.innerHTML = ''
        //faster
        while (taskList.firstChild) {
            taskList.removeChild(taskList.firstChild)
        }

        // Clear from local storage
        clearTasksFromLS()
    }
}

// Clear from local storage
function clearTasksFromLS(){
    localStorage.clear()
}

// Filter Task
function filterTask(e) {
    const text = e.target.value.toLowerCase()
    document.querySelectorAll('.collection-item').forEach(task => {
        const item = task.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            task.style.display = 'block'
        } else {
            task.style.display = 'none'
        }
    })
}
// Sore Task
function storeTaskInLocalStorage(task) {
    let tasks
    if (localStorage.getItem('tasks') === null) {
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.push(task)
    localStorage.setItem('tasks', JSON.stringify(tasks))
}
