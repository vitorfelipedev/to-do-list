import { createTaskList } from '../components/taskList.js';
import { getTasks, saveTasks } from '../services/storage.js';

export function initDragDrop(li, id) {
  li.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', id);
    li.classList.add('dragging');
  });
  li.addEventListener('dragover', (e) => {
    e.preventDefault();
    li.classList.add('drag-over');
  });
  li.addEventListener('drop', (e) => {
    e.preventDefault();
    const draggedId = e.dataTransfer.getData('text/plain');
    const targetId = id;
    li.classList.remove('drag-over');

    if (draggedId === targetId) return;

    const tasks = getTasks();
    const fromIndex = tasks.findIndex((t) => t.id === draggedId);
    const toIndex = tasks.findIndex((t) => t.id === targetId);
    const [item] = tasks.splice(fromIndex, 1);
    tasks.splice(toIndex, 0, item);

    saveTasks(tasks);
    createTaskList(tasks);
  });
  li.addEventListener('dragend', () => {
    li.classList.remove('drag-over');
    li.classList.remove('dragging');
  });
  li.addEventListener('dragleave', () => {
    li.classList.remove('drag-over');
  });

  let draggedId = null;
  let targetId = null;
  li.addEventListener(
    'touchstart',
    (e) => {
      draggedId = id;
      li.classList.add('dragging');
    },
    { passive: true },
  );
  li.addEventListener(
    'touchmove',
    (e) => {
      e.preventDefault();
      const pos = e.touches[0];
      const elementBelow = document.elementFromPoint(pos.clientX, pos.clientY);
      const targetLi = elementBelow?.closest('.task-item');

      document.querySelectorAll('.task-item').forEach((item) => {
        item.classList.remove('drag-over');
      });

      if (targetLi && targetLi !== li) {
        targetLi.classList.add('drag-over');
        targetId = targetLi.dataset.id;
      }
    },
    { passive: false },
  );
  li.addEventListener('touchend', (e) => {
    li.classList.remove('dragging');
    document.querySelectorAll('.task-item').forEach((item) => {
      item.classList.remove('drag-over');
    });

    if (!draggedId || !targetId || draggedId === targetId) return;

    const tasks = getTasks();
    const fromIndex = tasks.findIndex((t) => t.id === draggedId);
    const toIndex = tasks.findIndex((t) => t.id === targetId);
    const [item] = tasks.splice(fromIndex, 1);
    tasks.splice(toIndex, 0, item);

    saveTasks(tasks);
    createTaskList(tasks);

    draggedId = null;
    targetId = null;
  });
}
