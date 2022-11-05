const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

let toDos = [];

// 로컬스토리지에 저장 //
function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// 삭제 버튼 누르면 해당 리스트의 텍스트 삭제 //
// 필터를 사용해서 삭제한 toDo의 아이디 이외의 toDo만 배열에 남김 //
function deleteToDo(event) {
    const Li = event.target.parentElement;
    Li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(Li.id));
    saveToDos();
}

// newTOdo에 저장된 텍스트를 span에 입력 후 옆에 X버튼 생성 후 리스트에 입력 //
function paintTodo(newTOdo) {
    const Li = document.createElement("li");
    Li.id = newTOdo.id;
    const span = document.createElement("span");
    span.innerText = newTOdo.Text;
    const button = document.createElement("button");
    button.innerHTML = "🗑️";
    button.addEventListener("click", deleteToDo);
    Li.appendChild(span);
    Li.appendChild(button);
    toDoList.appendChild(Li);
}

// 제출된 텍스트를 ewTOdo에 입력 후 화면에 출력 //
function handleToDOSubmit(event) {
    event.preventDefault();
    const newTOdo = toDoInput.value;
    toDoInput.value = "";
    const newTOdoObj = {
        Text:newTOdo,
        id: Date.now(),
    }
    toDos.push(newTOdoObj);
    paintTodo(newTOdoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDOSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo);
}