import { getTasks, saveTasks } from '../services/storage.js';
import { createTaskList } from './taskList.js';

export function initTaskActions(li, task) {
  const id = li.dataset.id;
  const checkbox = li.querySelector('.task-checkbox');
  const btnEdit = li.querySelector('.btn-edit');
  const btnDelete = li.querySelector('.btn-delete');
  const nameSpan = li.querySelector('.task-name');
  const events = ['click', 'touchstart'];

  function completeTask() {
    const tasks = getTasks();
    const t = tasks.find((t) => t.id === id);
    t.done = !t.done;
    li.classList.toggle('done', t.done);
    checkbox.checked = t.done;
    saveTasks(tasks);
    createTaskList(getTasks());
  }

  function removeTask(e) {
    e.preventDefault();
    const tasks = getTasks();
    const updated = tasks.filter((t) => t.id !== id);
    saveTasks(updated);
    li.remove();
  }

  function editTask(e) {
    e.preventDefault();
    const tasks = getTasks();
    const input = document.createElement('input');
    input.type = 'text';
    input.classList.add('task-name-input');
    input.value = nameSpan.textContent;
    nameSpan.replaceWith(input);
    input.focus();

    let confirmado = false;

    function confirmar() {
      if (confirmado) return;
      confirmado = true;
      const newText = input.value.trim();
      if (newText) {
        const t = tasks.find((t) => t.id === id);
        t.text = newText;
        saveTasks(tasks);
        nameSpan.textContent = newText;
      }
      input.replaceWith(nameSpan);
    }

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') confirmar();
    });
    input.addEventListener('blur', confirmar);
  }

  checkbox.addEventListener('change', completeTask);
  events.forEach((e) => {
    btnDelete.addEventListener(e, removeTask);
    btnEdit.addEventListener(e, editTask);
  });
}
