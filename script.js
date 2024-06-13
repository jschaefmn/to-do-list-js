document.addEventListener('DOMContentLoaded', (event) => {
  document.getElementById('taskInput').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    addTask();
  }
  });
});

// addtask function to get id of taskInput and add task to not started list. Also creating start button, complete button and delete button.
function addTask(){
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();
  if(taskText === '') return;

  const taskItem = document.createElement('li');
  taskItem.textContent = taskText;

  // create action buttons
  const startButton = createButton('Start', () => moveTask(taskItem, 'inProgress', inProgressButtons));
  const completeButton = createButton('Complete', () => moveTask(taskItem, 'completed', completedButtons));
  const deleteButton = createButton('Delete', () => taskItem.remove());

  // append buttons to  task item
  taskItem.appendChild(startButton);
  taskItem.appendChild(completeButton);
  taskItem.appendChild(deleteButton);

  // add task to not start list
  document.getElementById('notStarted').appendChild(taskItem);
  taskInput.value = '';
}

// createButton function to create button element
function createButton(text, onClick) {
  const button = document.createElement('button');

  button.textContent = text;
  button.addEventListener('click', onClick);
  return button;
}

