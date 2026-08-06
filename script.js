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

const testimonialCards = document.querySelectorAll('.testimonial-card');
const videoModal = document.getElementById('video-modal');
const modalVideo = videoModal?.querySelector('.video-modal__video');
const modalTitle = videoModal?.querySelector('#video-modal-title');
const modalSources = modalVideo?.querySelector('source');

const closeModal = () => {
  if (!videoModal || !modalVideo) {
    return;
  }

  videoModal.classList.remove('is-open');
  videoModal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
  modalVideo.pause();
  modalVideo.currentTime = 0;
};

testimonialCards.forEach((card) => {
  card.addEventListener('click', () => {
    if (!videoModal || !modalVideo || !modalSources || !modalTitle) {
      return;
    }

    const videoSrc = card.getAttribute('data-video-src');
    const title = card.getAttribute('data-title');

    modalSources.src = videoSrc;
    modalVideo.load();
    modalTitle.textContent = title;
    videoModal.classList.add('is-open');
    videoModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    modalVideo.play().catch(() => {});
  });
});

document.querySelectorAll('[data-close-modal]').forEach((element) => {
  element.addEventListener('click', closeModal);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeModal();
  }
});
