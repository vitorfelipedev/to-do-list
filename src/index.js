import { createFilters } from './components/filters.js';
import Theme from './utils/theme.js';

const theme = new Theme('.btn-toggle-theme');
theme.init();

createFilters();
