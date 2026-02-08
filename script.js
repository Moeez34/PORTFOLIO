
document.addEventListener('DOMContentLoaded', () => {
    const aboutToggle = document.getElementById('about-toggle');
    const aboutModal = document.getElementById('about-modal');
    const modalClose = document.querySelector('.modal-close');
    const modalOverlay = document.querySelector('.modal-overlay');

    function openModal(e) {
        if (e) e.preventDefault();
        aboutModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        aboutModal.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (aboutToggle) {
        aboutToggle.addEventListener('click', openModal);
    }

    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }

    if (modalOverlay) {
        modalOverlay.addEventListener('click', closeModal);
    }

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && aboutModal.classList.contains('active')) {
            closeModal();
        }
    });
});
