const input = document.getElementById("inputTask");
const addBtn = document.getElementById("addBtn");
const ul = document.getElementById("taskList");
const deleteBtn = document.getElementById("deleteBtn");
const themeBtn = document.getElementById("themeBtn");
const select = document.getElementById("taskCategory");

// Add new task
addBtn.addEventListener("click", function (event) {
  event.preventDefault(); // stop form refresh

  if (input.value.trim() === "") {
    alert("Please enter your task");
    return;
  }

  // create new li
  const li = document.createElement("li");
  li.className = "flex justify-between items-center bg-gray-100 p-2 rounded";

  // text of task
  const taskText = document.createElement("span");
  taskText.textContent = input.value;

  // delete button for each task
  const dlt = document.createElement("button");
  dlt.textContent = "Delete";
  dlt.className = "bg-red-500 text-white px-2 py-1 rounded ml-2";

  // delete this specific task
  dlt.addEventListener("click", function () {
    li.remove();
  });

  li.appendChild(taskText);
  li.appendChild(dlt);
  ul.appendChild(li);

  input.value = ""; // clear input
});

// Delete all tasks
deleteBtn.addEventListener("click", function () {
  ul.innerHTML = "";
});

// Dark/Light mode toggle
themeBtn.addEventListener("click", function () {
  if (themeBtn.textContent === "Dark Mode") {
    themeBtn.textContent = "Light Mode";
    input.classList.remove("text-black");
    input.classList.add("text-white");
    select.classList.remove("text-black");
    select.classList.add("text-white");
  } else {
    themeBtn.textContent = "Dark Mode";
    input.classList.remove("text-white");
    input.classList.add("text-black");
    select.classList.remove("text-white");
    select.classList.add("text-black");
  }
  document.body.classList.toggle("bg-black");
  document.body.classList.toggle("text-white");
});
