const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

function paintTodo(newTOdo) {
    const Li = document.createElement("li");
    const span = document.createElement("span");
    Li.appendChild(span);
    span.innerText = newTOdo;
    toDoList.appendChild(Li);
}

function handleToDOSubmit(event) {
    event.preventDefault();
    const newTOdo = toDoInput.value;
    toDoInput.value = "";
    paintTodo(newTOdo);
}

toDoForm.addEventListener("submit", handleToDOSubmit);