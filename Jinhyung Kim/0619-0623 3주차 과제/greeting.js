const loginForm = document.querySelector('#login-form');
const loginInput = loginForm.querySelector('input');
const loginButton = loginForm.querySelector('button');
const greeting = document.querySelector('#greeting');

const handleLoginFormSubmit = (e) => {
  e.preventDefault();

  const username = loginInput.value;

  if (username === '') return;
  greeting.textContent = `${username}님, 안녕하세요!`;

  loginForm.classList.add('hidden');
  greeting.classList.remove('hidden');

  localStorage.setItem('username', username);
};

const savedUsername = localStorage.getItem('username');

if (savedUsername === null) {
  loginForm.classList.remove('hidden');
  loginForm.addEventListener('submit', handleLoginFormSubmit);
} else {
  greeting.classList.remove('hidden');
  greeting.innerText = `${savedUsername}님, 안녕하세요!`;
}