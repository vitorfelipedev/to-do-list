const TASKS_KEY = 'tasks';

export function getTasks() {
  const tasks = localStorage.getItem(TASKS_KEY);
  if (tasks === null) return [];
  try {
    return JSON.parse(tasks);
  } catch {
    return [];
  }
}
export function saveTasks(tasks) {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
export function clearTasks() {
  localStorage.removeItem('tasks');
}
