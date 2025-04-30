const taskList = document.getElementById('taskList');
const todoInput = document.getElementById('todoInput');

function addTask() {
    const taskText = todoInput.value.trim();
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement('li');
    li.textContent = taskText;

    // Add a delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete');
    deleteBtn.onclick = () => li.remove();

    // Toggle completed status
    li.onclick = () => li.classList.toggle('completed');

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    // Clear input field
    todoInput.value = '';
}

todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});
