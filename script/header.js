// Header functionality
document.addEventListener('DOMContentLoaded', function() {
  const hamburgerMenu = document.getElementById('hamburgerMenu');
  const sidebar = document.getElementById('sidebar');
  const sidebarOverlay = document.getElementById('sidebarOverlay');
  
  // Toggle sidebar
  if (hamburgerMenu) {
    hamburgerMenu.addEventListener('click', function() {
      const isSidebarOpen = sidebar.classList.contains('active');
      
      if (isSidebarOpen) {
        closeSidebar();
      } else {
        openSidebar();
      }
    });
  }
  
  // Close sidebar when clicking overlay
  if (sidebarOverlay) {
    sidebarOverlay.addEventListener('click', closeSidebar);
  }
  
  function openSidebar() {
    sidebar.classList.add('active');
    sidebarOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  
  function closeSidebar() {
    sidebar.classList.remove('active');
    sidebarOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }
  
  // Search functionality
  const searchInput = document.querySelector('.search-input');
  const searchBtn = document.querySelector('.search-btn');
  
  if (searchBtn) {
    searchBtn.addEventListener('click', function() {
      performSearch();
    });
  }
  
  if (searchInput) {
    searchInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        performSearch();
      }
    });
  }
  
  function performSearch() {
    const searchTerm = searchInput.value.trim();
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
});