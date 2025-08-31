// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

function displayTodos() {
  const ulElement = document.querySelector('ul');
  ulElement.innerHTML = '';

  todoList.forEach((todo) => {
    const li = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = `todo-${todo.id}`;
    checkbox.checked = todo.completed;
    checkbox.addEventListener('change', () =>
      updateTodoStatus(todo.id, checkbox.checked)
    );

    const label = document.createElement('label');
    label.htmlFor = `todo-${todo.id}`;
    label.textContent = todo.task;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.addEventListener('click', () => deleteTodo(todo.id, li));

    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(deleteBtn);
    ulElement.appendChild(li);
  });
}

function updateTodoStatus(id, completed) {
  const todo = todoList.find((item) => item.id === id);
  if (todo) {
    todo.completed = completed;
    console.log('Updated todoList:', todoList);
  }
}

function deleteTodo(id, liElement) {
  const index = todoList.findIndex((item) => item.id === id);
  if (index !== -1) {
    todoList.splice(index, 1);
    liElement.parentNode.removeChild(liElement);
    console.log('Updated todoList:', todoList);
  }
}

function addTodo(task) {
  const newId =
    todoList.length > 0 ? Math.max(...todoList.map((item) => item.id)) + 1 : 1;
  const newTodo = {
    id: newId,
    task: task,
    completed: false,
  };
  todoList.push(newTodo);
  displayTodos();
  console.log('Updated todoList:', todoList);
}

const dialog = document.querySelector('dialog');
const addBtn = document.querySelector('.add-btn');
const form = document.querySelector('form');
const input = document.querySelector('input[type="text"]');

addBtn.addEventListener('click', () => {
  dialog.showModal();
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const task = input.value.trim();
  if (task) {
    addTodo(task);
    input.value = '';
    dialog.close();
  }
});

dialog.addEventListener('click', (e) => {
  if (e.target === dialog) {
    dialog.close();
  }
});

displayTodos();
