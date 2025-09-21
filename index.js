
const input = document.getElementById('TaskInput');
const taskList = document.getElementById('TaskList');

const deleteAllBtn = document.getElementById('deleteAllBtn');
const toggleModeBtn = document.getElementById('toggleMode');
let tasks = [];

function setDarkMode(enabled) {
    if (enabled) {
        document.body.classList.add('dark');
        localStorage.setItem('darkMode', 'true');
    } else {
        document.body.classList.remove('dark');
        localStorage.setItem('darkMode', 'false');
    }
}

function loadDarkMode() {
    const mode = localStorage.getItem('darkMode');
    if (mode === 'true') {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
}

toggleModeBtn.addEventListener('click', () => {
    const isDark = document.body.classList.contains('dark');
    setDarkMode(!isDark);
});

loadDarkMode();

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const stored = localStorage.getItem('tasks');
    tasks = stored ? JSON.parse(stored) : [];
}

function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = "flex justify-between items-center p-2 border-b border-gray-200";
        const span = document.createElement('span');
        span.textContent = task.text;
        span.className = `flex-1 cursor-pointer ${task.completed ? 'line-through text-gray-400 dark:text-gray-500' : ''}`;
        span.addEventListener('click', () => {
            task.completed = !task.completed;
            saveTasks();
            renderTasks();
        });
        span.addEventListener('dblclick', () => {
            const editInput = document.createElement('input');
            editInput.type = 'text';
            editInput.value = task.text;
            editInput.className = 'flex-1 p-1 border rounded dark:bg-gray-700 dark:text-white';
            editInput.addEventListener('keydown', (e) => {
                if(e.key === 'Enter') {
                    task.text = editInput.value;
                    saveTasks();
                    renderTasks();
                }
            });
            editInput.addEventListener('blur', () => {
                task.text = editInput.value;
                saveTasks();
                renderTasks();
            });
            li.replaceChild(editInput, span);
            editInput.focus();
        });
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "ml-2 bg-red-500 text-white p-1 px-3 rounded hover:bg-red-600";
        deleteBtn.addEventListener('click', () => {
            tasks.splice(index, 1);
            saveTasks();
            renderTasks();
        });
        li.appendChild(span);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
}

function addTask() {
    const text = input.value.trim();
    if(!text) return alert("Task name is required");
    tasks.push({text, completed:false});
    input.value = '';
    saveTasks();
    renderTasks();
}

input.addEventListener('keydown', e => {
    if(e.key === 'Enter') addTask();
});

if (deleteAllBtn) {
    deleteAllBtn.addEventListener('click', () => {
        tasks = [];
        saveTasks();
        renderTasks();
    });
}

loadTasks();
renderTasks();

