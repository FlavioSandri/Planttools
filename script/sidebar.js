// Sidebar functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    
    // Verifica se os elementos existem
    if (!hamburgerMenu || !sidebar || !sidebarOverlay) {
        console.error('Elementos do sidebar não encontrados!');
        return;
    }
    
    console.log('Sidebar script carregado!');
    
    // Abrir sidebar
    hamburgerMenu.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleSidebar();
    });
    
    // Fechar sidebar ao clicar no overlay
    sidebarOverlay.addEventListener('click', function() {
        closeSidebar();
    });
    
    // Fechar sidebar ao clicar em um link dentro do sidebar
    sidebar.addEventListener('click', function(e) {
        if (e.target.tagName === 'A') {
            closeSidebar();
        }
    });
    
    // Fechar sidebar ao pressionar ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && sidebar.classList.contains('active')) {
            closeSidebar();
        }
    });
    
    // Previne que cliques dentro do sidebar fechem ele
    sidebar.addEventListener('click', function(e) {
        e.stopPropagation();
    });
    
    function toggleSidebar() {
        const isActive = sidebar.classList.contains('active');
        
        if (isActive) {
            closeSidebar();
        } else {
            openSidebar();
        }
    }
    
    function openSidebar() {
        hamburgerMenu.classList.add('active');
        sidebar.classList.add('active');
        sidebarOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        console.log('Sidebar aberto');
    }
    
    function closeSidebar() {
        hamburgerMenu.classList.remove('active');
        sidebar.classList.remove('active');
        sidebarOverlay.classList.remove('active');
        document.body.style.overflow = '';
        console.log('Sidebar fechado');
    }
    
    // Fechar sidebar ao redimensionar a janela para desktop
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            closeSidebar();
        }
    });
});