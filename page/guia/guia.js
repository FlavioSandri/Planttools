// Funcionalidades específicas para a página de guias
document.addEventListener('DOMContentLoaded', function() {
  // Interatividade para os cards de guia
  const guideCards = document.querySelectorAll('.guide-card-apple, .tutorial-card-apple, .category-card-apple');
  
  guideCards.forEach(card => {
    // Efeito de hover para cards
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-12px)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
    
    // Clique nos cards (exceto nos links)
    card.addEventListener('click', function(e) {
      if (!e.target.closest('a') && !e.target.closest('button')) {
        const link = this.querySelector('a');
        if (link) {
          link.click();
        }
      }
    });
  });
  
  // Funcionalidade dos botões CTA
  const ctaButtons = document.querySelectorAll('.cta-button');
  
  ctaButtons.forEach(button => {
    button.addEventListener('click', function() {
      const buttonText = this.textContent.trim();
      
      // Efeito de clique
      this.style.transform = 'scale(0.95)';
      setTimeout(() => {
        this.style.transform = '';
      }, 150);
      
      // Ações específicas para cada botão
      if (buttonText.includes('Explorar Guias') || buttonText.includes('Explorar Todos os Guias')) {
        scrollToSection('.featured-guides');
      } else if (buttonText.includes('Ver Tutoriais')) {
        scrollToSection('.step-by-step-guides');
      } else if (buttonText.includes('Baixar App')) {
        // Simular download do app
        simulateAppDownload();
      }
    });
  });
  
  // Função para rolar suavemente para uma seção
  function scrollToSection(selector) {
    const section = document.querySelector(selector);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
  
  // Simular download do app
  function simulateAppDownload() {
    const button = event.target.closest('.cta-button');
    if (!button) return;
    
    const originalText = button.innerHTML;
    
    // Mostrar estado de loading
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Preparando Download...';
    button.disabled = true;
    
    // Simular processo de download
    setTimeout(() => {
      button.innerHTML = '<i class="fas fa-check"></i> Download Iniciado!';
      button.style.background = '#27ae60';
      
      // Restaurar após 2 segundos
      setTimeout(() => {
        button.innerHTML = originalText;
        button.disabled = false;
        button.style.background = '';
      }, 2000);
    }, 1500);
  }
  
  // Filtro de busca para guias (funcionalidade futura)
  const searchInput = document.querySelector('.search-input');
  if (searchInput) {
    searchInput.addEventListener('input', function(e) {
      const searchTerm = e.target.value.toLowerCase();
      filterGuides(searchTerm);
    });
  }
  
  function filterGuides(searchTerm) {
    const guides = document.querySelectorAll('.guide-card-apple, .tutorial-card-apple, .category-card-apple');
    
    guides.forEach(guide => {
      const title = guide.querySelector('h3')?.textContent.toLowerCase() || '';
      const description = guide.querySelector('p')?.textContent.toLowerCase() || '';
      
      if (title.includes(searchTerm) || description.includes(searchTerm)) {
        guide.style.display = 'block';
        guide.style.animation = 'fadeInUp 0.5s ease';
      } else {
        guide.style.display = 'none';
      }
    });
  }
  
  // Contador animado para estatísticas
  const statNumbers = document.querySelectorAll('.stat-number');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  statNumbers.forEach(stat => observer.observe(stat));
  
  function animateCounter(element) {
    const target = parseInt(element.textContent);
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      element.textContent = Math.floor(current) + (element.textContent.includes('+') ? '+' : '');
    }, 16);
  }
  
  // Sistema de favoritos para guias
  const guideLinks = document.querySelectorAll('.guide-link-apple, .tutorial-link-apple');
  
  guideLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Simular acesso ao guia
      const guideTitle = this.closest('.guide-card-apple, .tutorial-card-apple')
                         ?.querySelector('h3')?.textContent || 'Guia';
      
      // Mostrar feedback
      showToast(`Abrindo "${guideTitle}"...`);
      
      // Em uma implementação real, aqui iria para a página do guia
      setTimeout(() => {
        window.location.href = '#';
      }, 1000);
    });
  });
  
  // Função para mostrar toast messages
  function showToast(message) {
    // Remover toast anterior se existir
    const existingToast = document.querySelector('.toast-message');
    if (existingToast) {
      existingToast.remove();
    }
    
    // Criar novo toast
    const toast = document.createElement('div');
    toast.className = 'toast-message';
    toast.textContent = message;
    toast.style.cssText = `
      position: fixed;
      top: 100px;
      right: 20px;
      background: #2d5a42;
      color: white;
      padding: 12px 20px;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      z-index: 10000;
      animation: slideInRight 0.3s ease;
    `;
    
    document.body.appendChild(toast);
    
    // Remover após 3 segundos
    setTimeout(() => {
      toast.style.animation = 'slideOutRight 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }
  
  // Adicionar estilos CSS para animações do toast
  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideInRight {
      from {
        transform: translateX(100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
    
    @keyframes slideOutRight {
      from {
        transform: translateX(0);
        opacity: 1;
      }
      to {
        transform: translateX(100%);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
});

// Footer animations (opcional)
document.addEventListener('DOMContentLoaded', function() {
  // Observa quando o footer entra na viewport
  const footer = document.querySelector('.apple-footer');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
      }
    });
  }, { threshold: 0.1 });
  
  if (footer) {
    observer.observe(footer);
  }
  
  // Smooth scroll para links do footer
  document.querySelectorAll('.footer-link[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});