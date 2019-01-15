console.clear();

// document.getElementById()
console.log(document.getElementById('task-title'));

// Get things from the element
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);

// Change style
const taskTitle = document.getElementById('task-title');
taskTitle.style.background = '#333';
taskTitle.style.color = '#fff';
taskTitle.style.padding = '20px 10px';
taskTitle.style.display = 'none';

// Change content
setTimeout(function(){
    taskTitle.style.display = 'block';
}, 1000);
taskTitle.textContent = 'Task List';
taskTitle.innerText = 'My Tasks';
taskTitle.innerHTML = '<span style="color:red"> Task List</span>';

// document.querySelector()
console.log('QuerySelector: ', document.querySelector('#task-title'));
console.log('QuerySelector: ', document.querySelector('#task-title').tagName);
console.log('QuerySelector: ', document.querySelector('.card-title'));
document.querySelector('li').style.color = 'red'; // first one

document.querySelector('li:last-child').style.color = 'blue';
document.querySelector('li:nth-child(3)').style.color = 'green';
document.querySelector('li:nth-child(4)').textContent = 'Hello World';
document.querySelector('li:nth-child(odd)').style.background = '#666';
document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';