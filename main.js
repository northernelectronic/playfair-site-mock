const nav = document.getElementById('site-nav');
const toggle = document.getElementById('nav-toggle');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  nav.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const form = document.getElementById('mock-form');
const result = document.getElementById('form-result');
if (form && result) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    result.hidden = false;
    result.focus();
  });
}
