const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

addButton.addEventListener('click', addTask);


function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
   
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const label = document.createElement('label');
    label.textContent = taskText;

    taskItem.appendChild(checkbox);
    taskItem.appendChild(label);

    taskList.appendChild(taskItem);

    taskInput.value = '';
  }
}
