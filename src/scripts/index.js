import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import './views/component/resto-list';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#main-content'),
  menuItems: document.querySelectorAll('#drawer ul li a'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
