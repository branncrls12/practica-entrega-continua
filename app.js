document.getElementById('addBtn').addEventListener('click', addTask);
function addTask() {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();
    if (taskText === '') { alert('Por favor, ingresa una tarea'); return; }
    const li = document.createElement('li');
    li.textContent = taskText;
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Eliminar';
    deleteBtn.addEventListener('click', () => li.remove());
    li.appendChild(deleteBtn);
    document.getElementById('taskList').appendChild(li);
    input.value = '';
}