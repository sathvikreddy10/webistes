let tasks = [];
const list = document.getElementById('todo-list');
const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');

document.addEventListener('DOMContentLoaded', init);
form.addEventListener('submit', addTask);

function init() {
    const stored = localStorage.getItem('tasks');
    tasks = stored ? JSON.parse(stored) : [];
    tasks.forEach(task => addTaskElement(task));
}

function addTask(e) {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;
    const task = { id: Date.now(), text, completed: false };
    tasks.push(task);
    saveTasks();
    addTaskElement(task);
    input.value = '';
}

function addTaskElement(task) {
    const li = document.createElement('li');
    li.dataset.id = task.id;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', () => toggleTask(task.id, li));

    const span = document.createElement('span');
    span.textContent = task.text;
    if (task.completed) span.classList.add('completed');

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.addEventListener('click', () => removeTask(task.id, li));

    li.append(checkbox, span, removeBtn);
    list.appendChild(li);
}

function toggleTask(id, li) {
    const task = tasks.find(t => t.id === id);
    if (!task) return;
    task.completed = !task.completed;
    const span = li.querySelector('span');
    span.classList.toggle('completed', task.completed);
    saveTasks();
}

function removeTask(id, li) {
    tasks = tasks.filter(t => t.id !== id);
    li.remove();
    saveTasks();
}

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
