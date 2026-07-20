const burgerBtn = document.querySelector('.burger-menu');
const mainNav = document.getElementById('main-nav');

if (burgerBtn && mainNav) {
  burgerBtn.addEventListener('click', () => {
    const open = mainNav.classList.toggle('is-open');
    burgerBtn.setAttribute('aria-expanded', String(open));
    burgerBtn.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('is-open');
      burgerBtn.setAttribute('aria-expanded', 'false');
      burgerBtn.setAttribute('aria-label', 'Abrir menu');
    });
  });
}

document.querySelectorAll('[data-scroll-target]').forEach((button) => {
  button.addEventListener('click', () => {
    const targetId = button.getAttribute('data-scroll-target');
    const dir = Number(button.getAttribute('data-dir')) || 1;
    const rail = document.getElementById(targetId);

    if (!rail) {
      return;
    }

    const distance = Math.max(rail.clientWidth * 0.85, 260);
    rail.scrollBy({ left: distance * dir, behavior: 'smooth' });
  });
});
