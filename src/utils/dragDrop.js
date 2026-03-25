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
}
