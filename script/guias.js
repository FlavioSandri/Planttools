// Guides Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
  // Search functionality
  const searchBox = document.querySelector('.search-box-guides input');
  const searchBtn = document.querySelector('.search-btn-guides');
  
  if (searchBox && searchBtn) {
    function performSearch() {
      const query = searchBox.value.trim();
      if (query) {
        alert(`Buscando por: ${query}`);
        // Aqui você implementaria a busca real
        // window.location.href = `busca.html?q=${encodeURIComponent(query)}`;
      }
    }
    
    searchBtn.addEventListener('click', performSearch);
    
    searchBox.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        performSearch();
      }
    });
  }
  
  // Category cards interaction
  const categoryCards = document.querySelectorAll('.category-card');
  categoryCards.forEach(card => {
    card.addEventListener('click', function() {
      const category = this.querySelector('h3').textContent;
      alert(`Navegando para categoria: ${category}`);
      // Aqui você redirecionaria para a página da categoria
      // window.location.href = `categoria.html?cat=${encodeURIComponent(category)}`;
    });
  });
  
  // Guide cards interaction
  const guideLinks = document.querySelectorAll('.guide-link, .tutorial-link, .solution-link');
  guideLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const guideTitle = this.closest('.guide-card, .tutorial-card, .solution-card')
                          .querySelector('h3').textContent;
      alert(`Abrindo guia: ${guideTitle}`);
      // Aqui você redirecionaria para a página do guia
      // window.location.href = `guia.html?title=${encodeURIComponent(guideTitle)}`;
    });
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Animation on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  // Observe elements for animation
  document.querySelectorAll('.category-card, .guide-card, .tutorial-card, .solution-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
});