// Animação quando a página carrega
document.addEventListener('DOMContentLoaded', function() {
  // Animação inicial do hero section
  const fadeElements = document.querySelectorAll('.fade-in, .fade-in-up');
  
  fadeElements.forEach(element => {
    const delay = element.getAttribute('data-delay') || 0;
    setTimeout(() => {
      element.style.animationPlayState = 'running';
    }, delay * 1000);
  });
  
  // Inicializa o observer para animações no scroll
  initScrollAnimations();
});

// Animação durante o scroll (apenas quando entra na tela)
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Adiciona delay baseado no data-delay
        const delay = entry.target.getAttribute('data-delay') || 0;
        
        setTimeout(() => {
          entry.target.classList.add('active');
        }, delay * 1000);
        
        // Para após a primeira animação (não observa mais)
        observer.unobserve(entry.target);
      }
      // Remove o else para não fazer animação reversa
    });
  }, observerOptions);

  // Observa todos os elementos com classes de animação no scroll
  const scrollElements = document.querySelectorAll('.scroll-fade-in, .scroll-slide-in');
  scrollElements.forEach(el => {
    observer.observe(el);
  });
}

// Efeito parallax suave para a hero section (opcional)
document.addEventListener('scroll', function() {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector('.hero');
  const heroContent = document.querySelector('.hero-content');
  
  if (hero && heroContent) {
    const rate = scrolled * -0.5;
    heroContent.style.transform = `translateY(${rate}px)`;
  }
});