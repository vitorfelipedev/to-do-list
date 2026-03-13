import { getTasks } from '../services/storage.js';
import { createTaskList } from './taskList.js';

export function initFilters() {
  const events = ['click', 'touchstart'];
  const filterStatus = document.querySelectorAll('.filter-status .filter-btn');
  const filterCategory = document.querySelectorAll(
    '.filter-category .filter-btn',
  );

  let currentStatus = 'all';
  let currentCategory = 'all';

  function renderList() {
    const tasks = getTasks();
    createTaskList(tasks, currentStatus, currentCategory);
  }

  filterStatus.forEach((btn) => {
    events.forEach((event) => {
      btn.addEventListener(event, () => {
        removeActive(filterStatus);
        btn.classList.add('active');
        currentStatus = btn.dataset.filter;
        renderList();
      });
    });
  });

  filterCategory.forEach((btn) => {
    events.forEach((event) => {
      btn.addEventListener(event, () => {
        removeActive(filterCategory);
        btn.classList.add('active');
        currentCategory = btn.dataset.category;
        renderList();
      });
    });
  });

  renderList();
}

function removeActive(buttons) {
  buttons.forEach((btn) => btn.classList.remove('active'));
}
