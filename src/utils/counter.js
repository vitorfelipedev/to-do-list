import { getTasks } from '../services/storage.js';

export function counterPendings() {
  const tasks = getTasks();
  const count = tasks.filter((t) => !t.done).length;
  document.querySelector('.number-pendings').textContent = count;
}
