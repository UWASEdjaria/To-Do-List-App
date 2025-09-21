const input = document.getElementById('TaskInput');
const button = document.getElementById('button');
const taskList = document.getElementById('TaskList');
const deleteAllBtn = document.getElementById('deleteAllBtn');
const darkModeBtn = document.getElementById('toggleMode');
const body = document.body;

function addTask() {
  const taskText = input.value.trim();
  if (!taskText) return alert("Task Name is Required");
  const li = document.createElement('li');
  li.className = "flex justify-between items-center p-2 border-b border-gray-200 dark:border-gray-600";
  const span = document.createElement("span");
  span.textContent = taskText;
  span.className = "cursor-pointer flex-1";
  span.onclick = () => li.classList.toggle("line-through");
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "ml-2 bg-red-500 text-white p-1 px-3 rounded-lg hover:bg-red-600";
  deleteBtn.onclick = () => taskList.removeChild(li);
  li.appendChild(span);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);
  input.value = "";
}

input.onkeydown = e => e.key === "Enter" && addTask();
button.onclick = addTask;
deleteAllBtn.onclick = () => (taskList.innerHTML = '');

function setTheme(dark) {
  body.classList.toggle('dark', dark);
  body.classList.toggle('bg-gray-900', dark);
  body.classList.toggle('bg-purple-300', !dark);
  darkModeBtn.textContent = dark ? "Light Mode" : "Dark Mode";
  localStorage.setItem('theme', dark ? 'dark' : 'light');
}
setTheme(localStorage.getItem('theme') === 'dark');
darkModeBtn.onclick = () => setTheme(!body.classList.contains('dark'));