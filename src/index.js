import { initFilters } from './components/filters.js';
import { initForm } from './components/form.js';
import Theme from './utils/theme.js';

const theme = new Theme('.btn-toggle-theme');
theme.init();

initFilters();
initForm();
