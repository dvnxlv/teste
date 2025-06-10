document.addEventListener('DOMContentLoaded', () => {
    // Função para animar as fotos
    function animatePhotos(container) {
        const photos = container.querySelectorAll('.photo-item');
        photos.forEach((photo, index) => {
            photo.style.opacity = '0';
            photo.style.transform = 'translateY(20px)';
            setTimeout(() => {
                photo.style.transition = 'all 0.5s ease';
                photo.style.opacity = '1';
                photo.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }

    // Função para mudar de página
    function changePage(pageNumber) {
        // Atualiza botões de navegação
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.page === pageNumber.toString()) {
                btn.classList.add('active');
            }
        });

        // Atualiza páginas
        document.querySelectorAll('.photo-page').forEach(page => {
            page.classList.remove('active');
            if (page.dataset.page === pageNumber.toString()) {
                page.classList.add('active');
                // Anima as fotos da nova página
                animatePhotos(page);
            }
        });
    }

    // Adiciona eventos aos botões de navegação
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            changePage(btn.dataset.page);
        });
    });

    // Anima as fotos da primeira página
    animatePhotos(document.querySelector('.photo-page.active'));

    // Adiciona efeito de hover nas fotos
    document.querySelectorAll('.photo-item').forEach(photo => {
        photo.addEventListener('mouseenter', () => {
            photo.style.transform = 'scale(1.05)';
        });
        
        photo.addEventListener('mouseleave', () => {
            photo.style.transform = 'scale(1)';
        });
    });
}); 