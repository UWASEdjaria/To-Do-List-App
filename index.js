let input = document.getElementById('TaskInput');
let button = document.getElementById('button');
let taskList = document.getElementById('TaskList');


let deleteBtn = document.createElement("button");
deleteBtn.textContent = "Delete All";
deleteBtn.className = "w-full mt-2 bg-red-500 text-white p-2 rounded-lg hover:bg-red-600";

function addTask() {
    const TaskInput = input.value.trim();
    if (taskList == "") {
        alert("Task Name is Required")
        return;
}};
