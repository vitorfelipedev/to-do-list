export default class Theme {
  constructor(target, events) {
    this.button = document.querySelector(target);
    this.events = events || ['click', 'touchstart'];
    this.changeMode = this.changeMode.bind(this);
  }

  loadLocalStorage() {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
      document.body.classList.add('dark-mode');
    }
  }

  changeMode(event) {
    event.preventDefault();
    document.body.classList.toggle('dark-mode');
    let theme = 'light';
    if (document.body.classList.contains('dark-mode')) {
      theme = 'dark';
    }
    localStorage.setItem('theme', theme);
  }

  addEventButton() {
    this.events.forEach((event) => {
      this.button.addEventListener(event, this.changeMode);
    });
  }
  init() {
    this.loadLocalStorage();
    if (this.button) {
      this.addEventButton();
    }
  }
}
