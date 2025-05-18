input=document.getElementById("todo-input");
priority=document.getElementById("todo-priority");
btn=document.getElementById("add-todo");
btn.addEventListener("click", addTodo);
function addTodo() {
    if (input.value === "") {
        alert("Please enter a todo item.");
        console.log("Todo item cannot be empty.");
        return;
    }
    
    const todoText = input.value;
    const todoPriority = priority.value;
    const todoList = document.getElementById("todo-list");
    const li = document.createElement("li");
    checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "todo-checkbox";
    li.appendChild(checkbox);
    li.textContent = todoText + " Priority: " + todoPriority;
    li.className = "todo-item";
    todoList.appendChild(li);
    (document.getElementById("todo-input")).value = "";
    const tododate=document.getElementById("todo-date");
    date= document.createElement("span");
    date.textContent = " Date: " + tododate.value ;
    li.appendChild(date);
}
