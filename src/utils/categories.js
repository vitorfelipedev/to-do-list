export const CATEGORY_LABELS = {
  personal: 'Pessoal',
  work: 'Trabalho',
  health: 'Saúde',
  study: 'Estudos',
  finance: 'Finanças',
};

export function getCategoryLabel(category) {
  return CATEGORY_LABELS[category] || category;
}
