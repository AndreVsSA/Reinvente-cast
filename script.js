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
