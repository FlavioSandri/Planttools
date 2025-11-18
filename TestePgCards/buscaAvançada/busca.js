// Busca Avançada - Funcionalidades
document.addEventListener('DOMContentLoaded', function() {
    // Elementos
    const searchInput = document.querySelector('.search-input-advanced');
    const searchBtn = document.querySelector('.search-btn-advanced');
    const limparFiltrosBtn = document.querySelector('.limpar-filtros');
    const filtrosSelect = document.querySelectorAll('select');
    const filtrosCheckbox = document.querySelectorAll('input[type="checkbox"]');
    const plantaCards = document.querySelectorAll('.planta-card');
    const paginacaoBtns = document.querySelectorAll('.pagina-btn');
    const ordenacaoSelect = document.getElementById('ordenar');

    // Buscar plantas
    searchBtn.addEventListener('click', realizarBusca);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            realizarBusca();
        }
    });

    // Limpar filtros
    limparFiltrosBtn.addEventListener('click', function() {
        // Limpar inputs
        searchInput.value = '';
        filtrosSelect.forEach(select => select.value = '');
        filtrosCheckbox.forEach(checkbox => checkbox.checked = false);
        
        // Restaurar checkboxes padrão
        document.getElementById('pet-friendly').checked = true;
        
        // Recarregar resultados
        realizarBusca();
    });

    // Aplicar filtros em tempo real
    filtrosSelect.forEach(select => {
        select.addEventListener('change', realizarBusca);
    });

    filtrosCheckbox.forEach(checkbox => {
        checkbox.addEventListener('change', realizarBusca);
    });

    // Ordenação
    ordenacaoSelect.addEventListener('change', function() {
        ordenarPlantas(this.value);
    });

    // Paginação
    paginacaoBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            if (!this.classList.contains('disabled') && !this.classList.contains('active')) {
                // Simular mudança de página
                const paginaAtual = document.querySelector('.pagina-btn.active');
                paginaAtual.classList.remove('active');
                this.classList.add('active');
                
                // Aqui você carregaria os dados da página
                console.log('Mudando para página:', this.textContent);
            }
        });
    });

    // Função principal de busca
    function realizarBusca() {
        const termo = searchInput.value.toLowerCase();
        const filtros = obterFiltros();
        
        // Simular busca - em produção, isso seria uma requisição AJAX
        console.log('Buscando:', termo);
        console.log('Filtros:', filtros);
        
        // Aqui você implementaria a lógica real de filtragem
        filtrarPlantas(termo, filtros);
    }

    // Obter filtros ativos
    function obterFiltros() {
        const filtros = {};
        
        // Filtros de select
        filtrosSelect.forEach(select => {
            if (select.value) {
                filtros[select.id] = select.value;
            }
        });
        
        // Filtros de checkbox
        const checkboxesAtivos = [];
        filtrosCheckbox.forEach(checkbox => {
            if (checkbox.checked) {
                checkboxesAtivos.push(checkbox.id);
            }
        });
        filtros.checkboxes = checkboxesAtivos;
        
        return filtros;
    }

    // Simular filtragem de plantas
    function filtrarPlantas(termo, filtros) {
        let plantasVisiveis = 0;
        
        plantaCards.forEach(card => {
            const nome = card.querySelector('h4').textContent.toLowerCase();
            const descricao = card.querySelector('.planta-descricao').textContent.toLowerCase();
            const dificuldade = card.querySelector('.planta-badge').textContent.toLowerCase();
            
            let corresponde = true;
            
            // Filtro por termo
            if (termo && !nome.includes(termo) && !descricao.includes(termo)) {
                corresponde = false;
            }
            
            // Filtro por dificuldade
            if (filtros.dificuldade && !dificuldade.includes(filtros.dificuldade)) {
                corresponde = false;
            }
            
            // Mostrar/ocultar card
            if (corresponde) {
                card.style.display = 'block';
                plantasVisiveis++;
            } else {
                card.style.display = 'none';
            }
        });
        
        // Atualizar contador
        document.querySelector('.quantidade').textContent = `${plantasVisiveis} plantas encontradas`;
    }

    // Ordenar plantas
    function ordenarPlantas(criterio) {
        const container = document.querySelector('.plantas-grid');
        const cards = Array.from(plantaCards);
        
        cards.sort((a, b) => {
            switch(criterio) {
                case 'nome':
                    return a.querySelector('h4').textContent.localeCompare(b.querySelector