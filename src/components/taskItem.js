import { getCategoryLabel } from '../utils/categories.js';
import { formatDate, isDueToday, isOverdue } from '../utils/date.js';
import { initDragDrop } from '../utils/dragDrop.js';
import { initTaskActions } from './taskActions.js';

export function createTaskItem(task) {
  const li = document.createElement('li');
  li.classList.add('task-item');
  li.setAttribute('data-id', task.id);
  li.setAttribute('data-category', task.category);
  li.setAttribute('draggable', 'true');
  li.classList.toggle('done', task.done);

  const checkbox = document.createElement('label');
  checkbox.classList.add('task-checkbox-label');
  const checkboxInput = document.createElement('input');
  checkboxInput.classList.add('task-checkbox');
  checkboxInput.type = 'checkbox';
  checkboxInput.name = 'completed';
  checkboxInput.checked = task.done;
  const checkboxSpan = document.createElement('span');
  checkboxSpan.classList.add('task-checkbox-custom');
  checkboxSpan.setAttribute('aria-hidden', 'true');
  checkbox.appendChild(checkboxInput);
  checkbox.appendChild(checkboxSpan);

  const content = document.createElement('div');
  content.classList.add('task-content');
  const contentName = document.createElement('span');
  contentName.classList.add('task-name');
  contentName.textContent = task.text;
  const contentMeta = document.createElement('div');
  contentMeta.classList.add('task-meta');
  const contentCategory = document.createElement('span');
  contentCategory.classList.add('task-category');
  contentCategory.setAttribute('data-category', task.category);
  contentCategory.textContent = getCategoryLabel(task.category);
  task.category;
  const contentDate = document.createElement('span');
  if (task.dueDate) {
    contentDate.classList.add('task-date');
    contentDate.setAttribute('data-date', task.dueDate);
    contentDate.textContent = formatDate(task.dueDate);
    if (isOverdue(task.dueDate)) {
      contentDate.classList.add('overdue');
    } else if (isDueToday(task.dueDate)) {
      contentDate.classList.add('due-today');
    }
  }
  contentMeta.appendChild(contentCategory);
  contentMeta.appendChild(contentDate);
  content.appendChild(contentName);
  content.appendChild(contentMeta);

  const actions = document.createElement('div');
  actions.classList.add('task-actions');
  const btnEdit = document.createElement('button');
  btnEdit.type = 'button';
  btnEdit.classList.add('btn-edit');
  btnEdit.setAttribute('aria-label', 'Editar tarefa');
  const imgEdit = document.createElement('img');
  imgEdit.src = './src/assets/icons/edit.svg';
  imgEdit.alt = '';
  btnEdit.appendChild(imgEdit);

  const btnDelete = document.createElement('button');
  btnDelete.type = 'button';
  btnDelete.classList.add('btn-delete');
  btnDelete.setAttribute('aria-label', 'Excluir tarefa');
  const imgDelete = document.createElement('img');
  imgDelete.src = './src/assets/icons/delete.svg';
  imgDelete.alt = '';
  btnDelete.appendChild(imgDelete);

  actions.appendChild(btnEdit);
  actions.appendChild(btnDelete);

  li.appendChild(checkbox);
  li.appendChild(content);
  li.appendChild(actions);

  initTaskActions(li, task);
  initDragDrop(li, task.id);
  return li;
}
