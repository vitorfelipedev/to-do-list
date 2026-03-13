import createTask from '../models/task.js';
import { getTasks, saveTasks } from '../services/storage.js';
import { initFilters } from './filters.js';
import { createTaskList } from './taskList.js';

export function initForm() {
  const form = document.querySelector('.form-new-task');
  const formText = document.querySelector('#new-task-name');
  const formSelect = document.querySelector('#new-task-category');
  const formDate = document.querySelector('#new-task-date');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let messageTextError = document.querySelector('.error-text');
    if (formText.value.trim().length === 0) {
      if (!messageTextError) {
        messageTextError = document.createElement('p');
        messageTextError.textContent = 'Digite uma descrição válida';
        messageTextError.classList.add('error-text');
        formText.parentElement.insertAdjacentElement(
          'afterend',
          messageTextError,
        );
      }
      return;
    }
    if (messageTextError) {
      messageTextError.remove();
    }
    const newTask = createTask(
      formText.value,
      formSelect.value,
      formDate.value || null,
    );
    const tasks = getTasks();
    tasks.push(newTask);
    saveTasks(tasks);
    createTaskList(tasks);
    form.reset();
  });
}
