// Header functionality
document.addEventListener('DOMContentLoaded', function() {
  const hamburgerMenu = document.getElementById('hamburgerMenu');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
  const mobileSearchBtn = document.querySelector('.mobile-search-btn');
  const mobileSearchInput = document.querySelector('.mobile-search-input');
  
  // Toggle do menu hambúrguer
  if (hamburgerMenu) {
    hamburgerMenu.addEventListener('click', function(e) {
      e.stopPropagation();
      const isActive = mobileMenu.classList.contains('active');
      
      if (isActive) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });
  }
  
  // Fechar menu ao clicar no overlay
  if (mobileMenuOverlay) {
    mobileMenuOverlay.addEventListener('click', function() {
      closeMobileMenu();
    });
  }
  
  // Fechar menu ao clicar em um link
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link, .mobile-profile-link');
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', function() {
      closeMobileMenu();
    });
  });
  
  // Busca no menu mobile
  if (mobileSearchBtn && mobileSearchInput) {
    mobileSearchBtn.addEventListener('click', function() {
      performMobileSearch();
    });
    
    mobileSearchInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        performMobileSearch();
      }
    });
  }
  
  // Fechar menu ao redimensionar a janela para desktop
  window.addEventListener('resize', function() {
    if (window.innerWidth > 968) {
      closeMobileMenu();
    }
  });
  
  function openMobileMenu() {
    mobileMenu.classList.add('active');
    mobileMenuOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    animateHamburger(true);
  }
  
  function closeMobileMenu() {
    mobileMenu.classList.remove('active');
    mobileMenuOverlay.classList.remove('active');
    document.body.style.overflow = '';
    animateHamburger(false);
  }
  
  function animateHamburger(isActive) {
    const spans = hamburgerMenu.querySelectorAll('span');
    if (isActive) {
      spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
    } else {
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
    }
  }
  
  function performMobileSearch() {
    const searchTerm = mobileSearchInput.value.trim();
    if (searchTerm) {
      // Redirecionar para página de busca ou executar busca
      window.location.href = `/buscar?q=${encodeURIComponent(searchTerm)}`;
    }
  }
  
  // Header scroll effect
  let lastScrollY = window.scrollY;
  const header = document.querySelector('.nike-header');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
      header.style.background = 'rgba(255, 255, 255, 0.95)';
      header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
      header.style.background = 'rgba(255, 255, 255, 0.98)';
      header.style.boxShadow = 'none';
    }
    
    lastScrollY = window.scrollY;
  });

  // Scroll animations
  const scrollElements = document.querySelectorAll('.scroll-fade-in, .scroll-slide-in');
  
  const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
      elementTop <=
      (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
  };
  
  const displayScrollElement = (element) => {
    element.classList.add('active');
  };
  
  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el, 1.2)) {
        displayScrollElement(el);
      }
    });
  };
  
  window.addEventListener('scroll', () => {
    handleScrollAnimation();
  });
  
  // Initial check for elements in view
  handleScrollAnimation();

  // Ajustar altura das seções dinamicamente
  function adjustSectionHeights() {
    const heroSection = document.querySelector('.hero');
    const featuresSection = document.querySelector('.features-apple');
    const purposeSection = document.querySelector('.purpose');
    
    const viewportHeight = window.innerHeight;
    const headerHeight = 70;
    
    // Ajustar altura do hero para ocupar tela inteira
    if (heroSection) {
      heroSection.style.minHeight = `${viewportHeight - headerHeight}px`;
    }
    
    // Ajustar outras seções principais
    [featuresSection, purposeSection].forEach(section => {
      if (section) {
        const sectionHeight = Math.max(viewportHeight, section.scrollHeight);
        section.style.minHeight = `${sectionHeight}px`;
      }
    });
  }

  // Executar ao carregar e redimensionar
  adjustSectionHeights();
  window.addEventListener('resize', adjustSectionHeights);

  // Smooth scroll para links internos
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
});