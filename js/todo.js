const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

function deleteToDo(event) {
    const Li = event.target.parentElement;
    Li.remove();
}

function paintTodo(newTOdo) {
    const Li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTOdo;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    Li.appendChild(span);
    Li.appendChild(button);
    toDoList.appendChild(Li);
}

function handleToDOSubmit(event) {
    event.preventDefault();
    const newTOdo = toDoInput.value;
    toDoInput.value = "";
    paintTodo(newTOdo);
}

toDoForm.addEventListener("submit", handleToDOSubmit);