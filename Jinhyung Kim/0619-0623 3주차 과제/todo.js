const todoForm = document.querySelector('#todo-form');
const todoInput = todoForm.querySelector('input');
const addButton = todoForm.querySelector('button');
const todoList = document.querySelector('#todo-list');

const handleFormSubmit = (e) => {
  e.preventDefault();

  const newTodo = todoInput.value;
  if (newTodo === '') return;

  const todoItem = document.createElement('li');
  const todoContent = document.createElement('span');
  todoContent.innerText = newTodo;
  const deleteButton = document.createElement('button');
  deleteButton.addEventListener('click', handleClickDeleteButton);
  deleteButton.innerText = '❌';

  todoItem.appendChild(todoContent);
  todoItem.appendChild(deleteButton);
  todoList.appendChild(todoItem);

  todoInput.value = '';
  todoInput.focus();
}

const handleClickDeleteButton = (e) => {
  e.target.parentElement.remove();
}

todoForm.addEventListener('submit', handleFormSubmit);