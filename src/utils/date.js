export function formatDate(dateStr) {
  const [year, month, day] = dateStr.split('-');
  return `${day}/${month}/${year}`;
}

export function isOverdue(dateStr) {
  const today = new Date().toISOString().slice(0, 10);
  return dateStr < today;
}

export function isDueToday(dateStr) {
  const today = new Date().toISOString().slice(0, 10);
  return dateStr === today;
}
