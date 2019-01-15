// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');


// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
  //DOM Load Event
  document.addEventListener('DOMContentLoaded', getTasks);
  // Add task event
  form.addEventListener('submit', addTask);

  //Remove Task Events
  taskList.addEventListener('click', removeTask);

  //Remove all task
  clearBtn.addEventListener('click', clearTask);

  //Filter Task Evente
  filter.addEventListener('keyup', filterTasks);
}

// Get Tasks from Local Storage
function getTasks() {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task){
    let li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(task));

    let link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';

    li.appendChild(link);

    taskList.appendChild(li);
  });

}

// Add Task
function addTask(e) {

  if (taskInput.value !== '') {

    // Create li element
    const li = document.createElement('li');

    // Add class
    li.className = 'collection-item';

    // Create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));

    // Create new link element
    const link = document.createElement('a');
    // Add class
    link.className = 'delete-item secondary-content';

    // Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>'

    // Append the link to li
    li.appendChild(link);

    // Append li to ul
    taskList.appendChild(li);

    //Store in Local Storage
    storeTaskInLocalStorage(taskInput.value);

    // Clear input
    taskInput.value = '';
  } else {
    alert('Adicione uma Tarefa');
  }
  e.preventDefault();
}

//Store Task
function storeTaskInLocalStorage(task) {
  let tasks;

  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

//Remove task
function removeTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm("Está certo disso?")) {
      let el =  e.target.parentElement.parentElement;
      el.remove();

      //Remove From Local Storage
      removeTaskFromLocalStorage(el);
    }
  }
}

// Remove Task From Local Storage
function removeTaskFromLocalStorage(taskItem){
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  }else{
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.forEach(function(task, index){
    if(taskItem.textContent === task){
      tasks.splice(index, 1);
    }
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Clear Task
function clearTask() {
  //taskList.innerHTML = '';

  //Faster
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
  // Clear Tasks From LocalStorage
  clearTasksFromLocalStorage();
}
// Clear Tasks From LocalStorage
function clearTasksFromLocalStorage(){
  localStorage.clear();
}

//Filter Tasks
function filterTasks(e) {

  const text = e.target.value.toLowerCase();
  document.querySelectorAll('.collection-item').forEach(function (task) {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
    //console.log(item.toLowerCase().indexOf(text));
  });
  //console.log(text);
}