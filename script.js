document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Menú de navegación para móviles
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Cerrar el menú al hacer clic en un enlace (en móviles)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // 2. Animación de aparición al hacer scroll (Scroll Reveal)
    const sections = document.querySelectorAll('.section');
    
    // Configuración del observador
    const revealOptions = {
        threshold: 0.1, // Se activa cuando el 10% de la sección es visible
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    // Aplicar estilos iniciales ocultos a las secciones
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.8s ease-out';
        
        revealOnScroll.observe(section);
    });
});