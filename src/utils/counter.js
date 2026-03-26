import { getTasks } from '../services/storage.js';

export function counterPendings() {
  const tasks = getTasks();
  const total = tasks.length;
  const pending = tasks.filter((t) => !t.done).length;
  const completed = total - pending;

  document.querySelector('.number-pendings').textContent = pending;
  document.querySelector('.qtde-task-completed').textContent = completed;
  document.querySelector('.qtde-task-total').textContent = total;
}
