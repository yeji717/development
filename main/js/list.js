const TodoForm = document.querySelector("#todo-form");
const TodoInform = TodoForm.querySelector("input");
const Todolist = document.querySelector("#todo-list");

const TODOS_KEY = "todos";
let toDos = [ ];

function deleteToDo(event){
    const li = event.target.parentElement;
    console.log(typeof li.id);
    toDos = toDos.filter(todo => {return todo.id !== parseInt(li.id)});
    saveTodo();
    li.remove();
}

function saveTodo(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = 'x';
    button.addEventListener("click",deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    Todolist.appendChild(li);
}

function handleToDoSubmit(e){
    e.preventDefault();
    const newTodo = TodoInform.value;
    TodoInform.value = "";
    const newTodoObj = {text:newTodo, id:Date.now()};
    toDos.push(newTodoObj);
    saveTodo();
    paintToDo(newTodoObj);
    console.log(toDos);
}

TodoForm.addEventListener("submit",handleToDoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);
if(savedTodos !== null){
    const parsedToDos = JSON.parse(savedTodos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}