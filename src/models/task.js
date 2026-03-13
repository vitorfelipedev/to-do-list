export function createTask(text, category, dueDate = null) {
  const task = {
    id: Date.now().toString(36) + Math.random().toString(36).slice(2),
    text: text.trim(),
    category: category,
    dueDate: dueDate,
    done: false,
    createdAt: new Date().toISOString(),
  };
  return task;
}
