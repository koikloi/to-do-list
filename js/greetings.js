const LoginForm = document.querySelector("#login-form");
const LoginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const LogoutButton = document.querySelector("#logout-form");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  LoginForm.classList.add(HIDDEN_CLASSNAME);
  const username = LoginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  LogoutButton.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
  LoginForm.classList.remove(HIDDEN_CLASSNAME);
  LoginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}

function onLogoutSubmit() {
  localStorage.removeItem(USERNAME_KEY);
  window.location.reload()
}

LogoutButton.addEventListener("click", onLogoutSubmit);