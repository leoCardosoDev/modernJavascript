// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');


// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners(){
    // Add task event
  form.addEventListener('submit', addTask);

  //Remove Task Events
  taskList.addEventListener('click', removeTask);

  //Remove all task
  clearBtn.addEventListener('click', clearTask);

  //Filter Task Evente
  filter.addEventListener('keyup', filterTasks);
}

// Add Task
function addTask(e){

  if(taskInput.value === ''){
    alert('Adicione uma Tarefa');
  }
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

  // Clear input
  taskInput.value = '';

  e.preventDefault();
}

//Remove task
function removeTask(e){
  if(e.target.parentElement.classList.contains('delete-item')){
    if(confirm("Está certo disso?")){
      e.target.parentElement.parentElement.remove();
    }
  }
}

//Clear Task
function clearTask(){
  //taskList.innerHTML = '';

  //Faster
  while(taskList.firstChild){
    taskList.removeChild(taskList.firstChild);
  }
}

//Filter Tasks
function filterTasks(e){

  const text = e.target.value.toLowerCase();
  document.querySelectorAll('.collection-item').forEach(function(task){
    const item = task.firstChild.textContent;
    if(item.toLowerCase().indexOf(text) != -1){
      task.style.display = 'block';
    }else{
      task.style.display = 'none';
    }
    //console.log(item.toLowerCase().indexOf(text));
  });
  //console.log(text);
}