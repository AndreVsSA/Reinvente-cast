// Burger menu toggle
const burgerBtn = document.querySelector('.burger-menu');
const mainNav = document.getElementById('main-nav');

if (burgerBtn && mainNav) {
  burgerBtn.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('is-open');
    burgerBtn.classList.toggle('is-open', isOpen);
    burgerBtn.setAttribute('aria-expanded', String(isOpen));
    burgerBtn.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
  });

  // Close menu when a nav link is clicked
  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('is-open');
      burgerBtn.classList.remove('is-open');
      burgerBtn.setAttribute('aria-expanded', 'false');
      burgerBtn.setAttribute('aria-label', 'Abrir menu');
    });
  });
}

document.querySelectorAll('.btn').forEach((button) => {
  button.addEventListener('mousemove', (event) => {
    const rect = button.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    button.style.setProperty('--mx', `${x}px`);
    button.style.setProperty('--my', `${y}px`);
  });
});

const faqItems = Array.from(document.querySelectorAll('.faq-item'));

faqItems.forEach((item) => {
  const trigger = item.querySelector('.faq-question');
  if (!trigger) {
    return;
  }

  trigger.addEventListener('click', () => {
    const isActive = item.classList.contains('is-active');

    faqItems.forEach((entry) => {
      entry.classList.remove('is-active');
      const button = entry.querySelector('.faq-question');
      if (button) {
        button.setAttribute('aria-expanded', 'false');
      }
    });

    if (!isActive) {
      item.classList.add('is-active');
      trigger.setAttribute('aria-expanded', 'true');
    }
  });
});
