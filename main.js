document.addEventListener('DOMContentLoaded', () => {

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---- Project modals ----
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-modal');
      const modal = document.getElementById(id);
      if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeModal(overlay);
    });
    const closeBtn = overlay.querySelector('[data-close]');
    if (closeBtn) closeBtn.addEventListener('click', () => closeModal(overlay));
  });

  function closeModal(overlay) {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay.active').forEach(closeModal);
    }
  });

  // ---- Mobile nav toggle ----
  const navToggle = document.getElementById('navToggle');
  const navigation = document.getElementById('navigation');
  if (navToggle && navigation) {
    navToggle.addEventListener('click', () => navigation.classList.toggle('open'));
    navigation.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => navigation.classList.remove('open'))
    );
  }

});
