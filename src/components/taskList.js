import { getTasks, saveTasks } from '../services/storage.js';
import { counterPendings } from '../utils/counter.js';
import { createTaskItem } from './taskItem.js';

export function createTaskList(
  tasks,
  statusFilter = 'all',
  categoryFilter = 'all',
) {
  const list = document.querySelector('.task-list');
  list.innerHTML = '';

  let tasksFilter;
  if (statusFilter === 'active') {
    tasksFilter = tasks.filter((task) => !task.done);
  } else if (statusFilter === 'done') {
    tasksFilter = tasks.filter((task) => task.done);
  } else {
    tasksFilter = tasks;
  }

  if (categoryFilter !== 'all') {
    tasksFilter = tasksFilter.filter(
      (task) => task.category === categoryFilter,
    );
  }

  tasksFilter.forEach((task) => {
    list.appendChild(createTaskItem(task));
  });

  counterPendings();
}

export function initClearDone() {
  const events = ['click', 'touchstart'];
  const btn = document.querySelector('.btn-clear-done');
  events.forEach((event) => {
    btn.addEventListener(event, (e) => {
      e.preventDefault();
      const tasks = getTasks();
      const updated = tasks.filter((t) => !t.done);
      saveTasks(updated);
      createTaskList(updated);
    });
  });
}
