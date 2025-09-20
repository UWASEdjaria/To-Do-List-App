
let head = document.getElementById('head');
let input = document.getElementById('TaskInput');
let button = document.getElementById('button');
let taskList = document.getElementById('TaskList');

function addTask() {
    const TaskInput = inputField.value.trim();
    if (TaskList == "") {
        alert("Task Name is Required")
        return;
    }
    
    const li = document.createElement("li");
    const span = document.createElement("span");
    const deleteButton = document.createElement("deleteButton");

    deleteButton.classList.add("delete-btn")
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
       TaskList.removeChild(li)
    })
       span.textContent = textText;

    span.addEventListener("click", () => {
        li.classList.toggle("line-through")
    })
     li.appendChild(span);
    li.appendChild(deleteButton);

    
    taskList.appendChild(li);
    inputField.value = "";














};