const tasks = [];

function renderTasks() {
  const taskList = document.getElementById('app');
  taskList.innerHTML = tasks.map((task, index) => `
    <div>
      <span>${task}</span>
      <button class="delete-task" data-index="${index}">Delete</button>
    </div>
  `).join('');
}//interfaz


function addTask(task) {
  if (task && task.trim() !== "") { 
    tasks.push(task);
    renderTasks();
  }//añade una tarea
}


function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}// Elimina una tarea 


document.getElementById('task-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const input = document.getElementById('task-input');
  addTask(input.value);
  input.value = ''; // Limpia el campo de entrada
});//envio del formulario


document.getElementById('app').addEventListener('click', (event) => {
  if (event.target.classList.contains('delete-task')) {
    const index = event.target.getAttribute('data-index');
    deleteTask(index);
  }
});//elimina tarea


document.addEventListener('DOMContentLoaded', () => {
  renderTasks();
});
