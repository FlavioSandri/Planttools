document.addEventListener('DOMContentLoaded', function() {
  const menuLinks = document.querySelectorAll('.menu-link');
  const contentTitle = document.getElementById('content-title');
  const editButton = document.getElementById('edit-button');

  const sectionTitles = {
    'minhas-plantas': 'Minhas Plantas',
    'informacoes': 'Informações Pessoais',
    'posts-salvos': 'Posts Salvos',
    'minhas-receitas': 'Minhas Receitas',
    'configuracoes': 'Configurações'
  };

  const editButtonTexts = {
    'minhas-plantas': 'Adicionar Planta',
    'informacoes': 'Editar Informações',
    'posts-salvos': 'Buscar Posts',
    'minhas-receitas': 'Nova Receita',
    'configuracoes': 'Salvar Alterações'
  };

  menuLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      // Remove classe "active" de todos
      menuLinks.forEach(l => l.classList.remove('active'));
      document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
      });

      // Adiciona classe "active" ao link clicado e à seção correspondente
      this.classList.add('active');
      const targetId = this.getAttribute('data-target');
      document.getElementById(targetId).classList.add('active');

      // Atualiza título e botão
      contentTitle.textContent = sectionTitles[targetId];
      editButton.textContent = editButtonTexts[targetId];
    });
  });

  editButton.addEventListener('click', function() {
    const activeSection = document.querySelector('.content-section.active').id;
    const action = editButton.textContent;
    alert(`Ação: ${action} (${sectionTitles[activeSection]})`);
  });
});
