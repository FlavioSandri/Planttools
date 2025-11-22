// Header functionality
document.addEventListener('DOMContentLoaded', function() {
  const hamburgerMenu = document.getElementById('hamburgerMenu');
  const sidebar = document.getElementById('sidebar');
  const sidebarOverlay = document.getElementById('sidebarOverlay');
  
  // Toggle sidebar
  if (hamburgerMenu && sidebar && sidebarOverlay) {
    hamburgerMenu.addEventListener('click', function() {
      sidebar.classList.toggle('active');
      sidebarOverlay.classList.toggle('active');
      document.body.style.overflow = sidebar.classList.contains('active') ? 'hidden' : '';
    });
    
    sidebarOverlay.addEventListener('click', function() {
      sidebar.classList.remove('active');
      sidebarOverlay.classList.remove('active');
      document.body.style.overflow = '';
    });
  }
  
  // Profile dropdown functionality
  const profileContainer = document.querySelector('.profile-container');
  const profileDropdown = document.getElementById('profileDropdown');
  
  if (profileContainer && profileDropdown) {
    let dropdownTimeout;
    
    profileContainer.addEventListener('mouseenter', function() {
      clearTimeout(dropdownTimeout);
      profileDropdown.style.opacity = '1';
      profileDropdown.style.visibility = 'visible';
      profileDropdown.style.transform = 'translateY(0)';
    });
    
    profileContainer.addEventListener('mouseleave', function() {
      dropdownTimeout = setTimeout(function() {
        profileDropdown.style.opacity = '0';
        profileDropdown.style.visibility = 'hidden';
        profileDropdown.style.transform = 'translateY(-10px)';
      }, 300);
    });
    
    profileDropdown.addEventListener('mouseenter', function() {
      clearTimeout(dropdownTimeout);
    });
    
    profileDropdown.addEventListener('mouseleave', function() {
      dropdownTimeout = setTimeout(function() {
        profileDropdown.style.opacity = '0';
        profileDropdown.style.visibility = 'hidden';
        profileDropdown.style.transform = 'translateY(-10px)';
      }, 300);
    });
  }
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