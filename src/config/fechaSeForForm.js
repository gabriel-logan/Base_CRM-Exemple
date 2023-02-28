/**
export default function fechaSeForForm() {
  window.addEventListener('click', (e) => {
    e.preventDefault();
    const el = e.target;

    const navMenu = document.querySelector('#nav_menu');

    // eslint-disable-next-line no-unused-vars
    const section = document.querySelector('section');

    const divForm = document.querySelector('#div_form');

    const form = document.querySelector('form');

    const button = document.querySelector('button');

    const input = document.querySelectorAll('input');

    const h3Form = document.querySelector('#base h3');

    input.forEach((inputs) => {
      if (el === inputs) {
        navMenu.style.transform = 'translateX(-100%)';
      }
    });

    if (el === section || el === divForm || el === button || el === form || el === h3Form) {
      navMenu.style.transform = 'translateX(-100%)';
    }
  });
}
*/
