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

const ulElement = document.querySelector('ul');

todoList.forEach(todo => {
  const checked = todo.completed ? 'checked' : '';
  const htmlString = `
    <li>
      <input type="checkbox" id="todo-${todo.id}" ${checked}>
      <label for="todo-${todo.id}">${todo.task}</label>
    </li>
  `;

  ulElement.insertAdjacentHTML('beforeend', htmlString);
});
