document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('certModal');
    const modalImg = document.getElementById('certImage');
    const closeModal = document.querySelector('.close-modal');
    const skillTags = document.querySelectorAll('.skill-tag');

    skillTags.forEach(tag => {
        tag.addEventListener('click', () => {
            const certSrc = tag.getAttribute('data-cert');
            if (certSrc) {
                modal.style.display = 'block';
                modalImg.src = certSrc;
            }
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
