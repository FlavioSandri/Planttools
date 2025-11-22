// Banco de dados expandido de plantas
const plantsDatabase = {
    'sp': [ // São Paulo - Clima subtropical úmido
        {
            id: 1,
            name: 'Espada-de-São-Jorge',
            scientificName: 'Sansevieria trifasciata',
            icon: 'fas fa-leaf',
            description: 'Planta extremamente resistente e versátil, ideal para iniciantes. Excelente para purificação do ar interior, removendo toxinas como formaldeído e benzeno.',
            sunlight: 'Meia Sombra a Sol Pleno',
            water: 'Baixa (a cada 15-20 dias)',
            temperature: '18-30°C',
            size: 'Pequeno a Médio (30-90cm)',
            care: [
                'Regue apenas quando o solo estiver completamente seco',
                'Suporta bem a seca, evite excesso de água',
                'Fertilize a cada 2 meses na primavera/verão',
                'Pode ser cultivada em ambientes com ar condicionado'
            ],
            recommendations: [
                'Perfeita para seu nível de experiência iniciante',
                'Ideal para cultivo interior conforme seu espaço',
                'Baixa manutenção - combina com seu tempo disponível'
            ],
            plantingSeason: 'Ano todo',
            floweringSeason: 'Raramente floresce em interior',
            match: '95%'
        },
        {
            id: 2,
            name: 'Jiboia',
            scientificName: 'Epipremnum pinnatum',
            icon: 'fas fa-seedling',
            description: 'Planta trepadeira de crescimento rápido, muito popular para ambientes internos. Excelente purificadora de ar e fácil de propagar.',
            sunlight: 'Luz Indireta a Meia Sombra',
            water: 'Moderada (a cada 7-10 dias)',
            temperature: '18-29°C',
            size: 'Médio a Grande (trepadeira)',
            care: [
                'Mantenha o solo levemente úmido',
                'Pode as pontas para incentivar ramificação',
                'Limpe as folhas regularmente com pano úmido',
                'Suporta bem podas frequentes'
            ],
            recommendations: [
                'Crescimento rápido - resultados visíveis em pouco tempo',
                'Fácil propagação - você pode expandir sua coleção',
                'Adapta-se bem ao cultivo interior'
            ],
            plantingSeason: 'Primavera e Verão',
            floweringSeason: 'Raramente floresce em vaso',
            match: '92%'
        },
        {
            id: 3,
            name: 'Cacto Mix',
            scientificName: 'Cactaceae família',
            icon: 'fas fa-tree',
            description: 'Diversas espécies de cactos que são perfeitas para quem busca plantas de baixa manutenção e com apelo decorativo.',
            sunlight: 'Sol Pleno',
            water: 'Muito Baixa (a cada 20-30 dias)',
            temperature: '15-35°C',
            size: 'Pequeno (10-30cm)',
            care: [
                'Regue apenas quando o solo estiver completamente seco',
                'Use solo bem drenado específico para cactos',
                'Evite água nas folhas para prevenir fungos',
                'Fertilize apenas na primavera'
            ],
            recommendations: [
                'Ideal para seu pouco tempo disponível',
                'Perfeito para espaços pequenos',
                'Baixíssima manutenção - regas esparsas'
            ],
            plantingSeason: 'Primavera',
            floweringSeason: 'Varia por espécie (maioria na primavera/verão)',
            match: '88%'
        },
        {
            id: 4,
            name: 'Zamioculca',
            scientificName: 'Zamioculcas zamiifolia',
            icon: 'fas fa-spa',
            description: 'Planta extremamente resistente que sobrevive em condições de pouca luz e regas irregulares. Folhagem brilhante e ornamental.',
            sunlight: 'Sombra a Meia Sombra',
            water: 'Baixa (a cada 15-20 dias)',
            temperature: '18-30°C',
            size: 'Médio (40-60cm)',
            care: [
                'Tolerante à seca - espere o solo secar entre regas',
                'Adapta-se a ambientes com ar condicionado',
                'Pode ser cultivada em vasos pequenos',
                'Crescimento lento, pouca manutenção necessária'
            ],
            recommendations: [
                'Sobrevive em condições de pouca luz',
                'Perfeita para iniciantes com pouca experiência',
                'Ideal para escritórios e ambientes internos'
            ],
            plantingSeason: 'Ano todo',
            floweringSeason: 'Raramente floresce em interior',
            match: '90%'
        },
        {
            id: 5,
            name: 'Peperômia',
            scientificName: 'Peperomia obtusifolia',
            icon: 'fas fa-leaf',
            description: 'Planta compacta com folhas carnudas e brilhantes. Muito resistente e de crescimento moderado, ideal para mesas e pequenos espaços.',
            sunlight: 'Luz Indireta',
            water: 'Moderada (a cada 10-14 dias)',
            temperature: '18-26°C',
            size: 'Pequeno (15-30cm)',
            care: [
                'Prefere solo levemente úmido, não encharcado',
                'Não gosta de correntes de ar frio',
                'Fertilize mensalmente na primavera/verão',
                'Propaga-se facilmente por estacas'
            ],
            recommendations: [
                'Tamanho compacto perfeito para seu espaço',
                'Cuidados moderados adequados ao seu tempo',
                'Folhagem decorativa mesmo sem flores'
            ],
            plantingSeason: 'Primavera',
            floweringSeason: 'Flores pequenas e discretas no verão',
            match: '85%'
        }
    ],
    'rj': [ // Rio de Janeiro - Clima tropical
        {
            id: 6,
            name: 'Costela-de-Adão',
            scientificName: 'Monstera deliciosa',
            icon: 'fas fa-leaf',
            description: 'Planta tropical icônica com folhas grandes e fenestradas. Adora umidade e calor, perfeita para o clima do Rio de Janeiro.',
            sunlight: 'Meia Sombra a Luz Filtrada',
            water: 'Moderada a Alta (a cada 5-7 dias)',
            temperature: '20-32°C',
            size: 'Grande (1-3 metros)',
            care: [
                'Mantenha alta umidade do ar',
                'Forneça suporte para crescimento vertical',
                'Limpe as folhas regularmente',
                'Fertilize quinzenalmente na estação quente'
            ],
            recommendations: [
                'Perfeita para o clima quente e úmido do Rio',
                'Crescimento vigoroso em condições tropicais',
                'Folhagem espetacular para espaços maiores'
            ],
            plantingSeason: 'Primavera e Verão',
            floweringSeason: 'Verão (flores raras em interior)',
            match: '96%'
        },
        {
            id: 7,
            name: 'Antúrio',
            scientificName: 'Anthurium andraeanum',
            icon: 'fas fa-spa',
            description: 'Planta ornamental com flores vermelhas brilhantes que duram semanas. Prospera no clima quente e úmido do Rio.',
            sunlight: 'Luz Filtrada',
            water: 'Moderada (a cada 7-10 dias)',
            temperature: '20-30°C',
            size: 'Médio (40-60cm)',
            care: [
                'Mantenha alta umidade ambiental',
                'Use solo rico em matéria orgânica',
                'Proteja de correntes de ar',
                'Remova flores murchas'
            ],
            recommendations: [
                'Flores o ano todo no clima do Rio',
                'Adora a umidade natural da região',
                'Colorida e decorativa para interiores'
            ],
            plantingSeason: 'Primavera',
            floweringSeason: 'Ano todo em condições ideais',
            match: '90%'
        },
        {
            id: 8,
            name: 'Palmeira Ráfis',
            scientificName: 'Rhapis excelsa',
            icon: 'fas fa-tree',
            description: 'Palmeira de interior muito resistente que se adapta bem ao clima tropical. Cresce em touceiras elegantes.',
            sunlight: 'Meia Sombra a Sombra',
            water: 'Moderada (a cada 7-10 dias)',
            temperature: '18-32°C',
            size: 'Médio a Grande (1-2 metros)',
            care: [
                'Tolerante a diferentes condições de luz',
                'Prefere solo bem drenado',
                'Pode ser cultivada em vasos grandes',
                'Crescimento lento e controlado'
            ],
            recommendations: [
                'Excelente para purificação do ar',
                'Adapta-se bem ao clima quente',
                'Baixa manutenção para seu tamanho'
            ],
            plantingSeason: 'Primavera',
            floweringSeason: 'Raramente floresce em interior',
            match: '87%'
        }
    ],
    'mg': [ // Minas Gerais - Clima tropical de altitude
        {
            id: 9,
            name: 'Lavanda',
            scientificName: 'Lavandula angustifolia',
            icon: 'fas fa-spa',
            description: 'Planta aromática que se adapta bem ao clima ameno de Minas Gerais. Flores perfumadas e propriedades relaxantes.',
            sunlight: 'Sol Pleno',
            water: 'Baixa (a cada 10-15 dias)',
            temperature: '15-25°C',
            size: 'Pequeno a Médio (40-60cm)',
            care: [
                'Solo bem drenado é essencial',
                'Pode após a floração para manter formato',
                'Tolerante à seca uma vez estabelecida',
                'Prefere climas mais amenos'
            ],
            recommendations: [
                'Perfeita para o clima ameno de Minas',
                'Aromática - pode ser usada em sachês e chás',
                'Atrai polinizadores para jardins externos'
            ],
            plantingSeason: 'Outono e Primavera',
            floweringSeason: 'Primavera e Verão',
            match: '94%'
        },
        {
            id: 10,
            name: 'Hortelã',
            scientificName: 'Mentha spicata',
            icon: 'fas fa-leaf',
            description: 'Erva aromática de crescimento vigoroso, perfeita para clima ameno. Uso culinário e medicinal versátil.',
            sunlight: 'Meia Sombra a Sol Pleno',
            water: 'Alta (a cada 3-5 dias)',
            temperature: '15-25°C',
            size: 'Pequeno (20-40cm)',
            care: [
                'Mantenha solo sempre úmido',
                'Plante em vaso separado (invasiva)',
                'Colha frequentemente para incentivar crescimento',
                'Fertilize mensalmente com composto'
            ],
            recommendations: [
                'Crescimento rápido - colheitas frequentes',
                'Uso culinário direto na sua cozinha',
                'Adapta-se bem ao clima mineiro'
            ],
            plantingSeason: 'Primavera',
            floweringSeason: 'Verão',
            match: '89%'
        },
        {
            id: 11,
            name: 'Suculentas Mix',
            scientificName: 'Várias espécies',
            icon: 'fas fa-star',
            description: 'Diversas espécies de suculentas que se adaptam bem ao clima ameno. Baixa manutenção e grande variedade de formas.',
            sunlight: 'Sol Pleno a Meia Sombra',
            water: 'Muito Baixa (a cada 15-25 dias)',
            temperature: '10-28°C',
            size: 'Pequeno (5-20cm)',
            care: [
                'Solo extremamente bem drenado',
                'Regue apenas quando solo estiver seco',
                'Proteja de geadas no inverno',
                'Fáceis de propagar por folhas'
            ],
            recommendations: [
                'Ideal para o clima ameno de Minas',
                'Perfeitas para pequenos espaços',
                'Baixíssima manutenção'
            ],
            plantingSeason: 'Primavera',
            floweringSeason: 'Varia por espécie',
            match: '91%'
        }
    ],
    'rs': [ // Rio Grande do Sul - Clima subtropical
        {
            id: 12,
            name: 'Azaleia',
            scientificName: 'Rhododendron simsii',
            icon: 'fas fa-flower',
            description: 'Arbusto florífero que se adapta bem ao clima mais frio do RS. Floração espetacular na primavera.',
            sunlight: 'Sol Pleno a Meia Sombra',
            water: 'Moderada (a cada 7-10 dias)',
            temperature: '10-25°C',
            size: 'Médio a Grande (60-120cm)',
            care: [
                'Solo ácido e bem drenado',
                'Pode após a floração',
                'Proteja de ventos fortes',
                'Fertilize com adubo para plantas acidófilas'
            ],
            recommendations: [
                'Perfeita para o clima mais frio do RS',
                'Floração abundante na primavera',
                'Resistente a geadas leves'
            ],
            plantingSeason: 'Outono',
            floweringSeason: 'Primavera',
            match: '93%'
        }
    ]
};

// Elementos do modal
const plantModal = document.getElementById('plantModal');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');

// Função para abrir modal com detalhes da planta
function openPlantModal(plantId, state) {
    const plant = plantsDatabase[state].find(p => p.id === plantId) || plantsDatabase['sp'][0];
    
    // Preenche os dados do modal
    document.getElementById('modalIcon').className = plant.icon;
    document.getElementById('modalPlantName').textContent = plant.name;
    document.getElementById('modalMatch').textContent = plant.match + ' de compatibilidade';
    document.getElementById('modalDescription').textContent = plant.description;
    document.getElementById('modalSunlight').textContent = plant.sunlight;
    document.getElementById('modalWater').textContent = plant.water;
    document.getElementById('modalTemperature').textContent = plant.temperature;
    document.getElementById('modalSize').textContent = plant.size;
    document.getElementById('modalPlantingSeason').textContent = plant.plantingSeason;
    document.getElementById('modalFloweringSeason').textContent = plant.floweringSeason;
    
    // Preenche lista de cuidados
    const careList = document.getElementById('modalCareList');
    careList.innerHTML = plant.care.map(item => `<li>${item}</li>`).join('');
    
    // Preence recomendações personalizadas
    const recommendations = document.getElementById('modalRecommendations');
    recommendations.innerHTML = plant.recommendations.map(rec => `
        <div class="recommendation-item">
            <i class="fas fa-check-circle"></i>
            <span>${rec}</span>
        </div>
    `).join('');
    
    // Armazena dados da planta atual para outras funções
    plantModal.currentPlant = plant;
    
    // Mostra o modal
    plantModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Função para fechar modal
function closePlantModal() {
    plantModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Função para adicionar planta à lista do usuário
function addToMyPlants() {
    const plant = plantModal.currentPlant;
    if (plant) {
        // Simula adição às plantas do usuário
        alert(`🌱 ${plant.name} adicionada às suas plantas!`);
        // Aqui você integraria com o backend real
        console.log('Planta adicionada:', plant);
    }
}

// Função para compartilhar planta
function sharePlant() {
    const plant = plantModal.currentPlant;
    if (plant && navigator.share) {
        navigator.share({
            title: `Planta Recomendada: ${plant.name}`,
            text: `Confira esta planta perfeita para você: ${plant.name} - ${plant.description}`,
            url: window.location.href
        });
    } else {
        // Fallback para copiar link
        alert('Link da planta copiado para a área de transferência!');
    }
}

// Event listeners do modal
modalOverlay.addEventListener('click', closePlantModal);
modalClose.addEventListener('click', closePlantModal);

// Fecha modal com ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && plantModal.classList.contains('active')) {
        closePlantModal();
    }
});

// Função para gerar sugestões (atualizada)
function generateSuggestions(formData) {
    const state = formData.get('state');
    const cultivationType = formData.get('cultivationType');
    const experience = formData.get('experience');
    const sunlight = formData.get('sunlight');
    const purpose = formData.get('purpose');
    const spaceSize = formData.get('spaceSize');
    
    // Filtra plantas baseado no estado
    let suggestedPlants = plantsDatabase[state] || plantsDatabase['sp'];
    
    // Aplica filtros progressivos
    if (cultivationType === 'indoor') {
        suggestedPlants = suggestedPlants.filter(plant => 
            ['Espada-de-São-Jorge', 'Jiboia', 'Zamioculca', 'Peperômia', 'Antúrio', 'Palmeira Ráfis'].includes(plant.name)
        );
    }
    
    if (experience === 'beginner') {
        suggestedPlants = suggestedPlants.filter(plant => 
            plant.match >= '90%' || ['Espada-de-São-Jorge', 'Zamioculca', 'Cacto Mix', 'Suculentas Mix'].includes(plant.name)
        );
    }
    
    if (spaceSize === 'small') {
        suggestedPlants = suggestedPlants.filter(plant => 
            plant.size.includes('Pequeno') || plant.size.includes('pequeno')
        );
    }
    
    if (purpose === 'air-purifying') {
        suggestedPlants = suggestedPlants.filter(plant => 
            plant.name === 'Espada-de-São-Jorge' || 
            plant.name === 'Jiboia' || 
            plant.name === 'Palmeira Ráfis'
        );
    }
    
    return suggestedPlants.slice(0, 6); // Retorna até 6 plantas
}

// Função para exibir resultados (atualizada)
function displayResults(plants) {
    const resultsGrid = document.getElementById('resultsGrid');
    const resultsSection = document.getElementById('suggestionsResults');
    const state = document.getElementById('state').value;
    
    resultsGrid.innerHTML = '';
    
    if (plants.length === 0) {
        resultsGrid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-seedling"></i>
                <h3>Nenhuma planta encontrada</h3>
                <p>Tente ajustar os filtros para encontrar plantas mais adequadas.</p>
            </div>
        `;
    } else {
        plants.forEach((plant, index) => {
            const plantCard = document.createElement('div');
            plantCard.className = 'plant-card scroll-slide-in';
            plantCard.setAttribute('data-direction', 'up');
            plantCard.setAttribute('data-delay', index * 0.1);
            plantCard.innerHTML = `
                <div class="plant-match-badge">${plant.match} de compatibilidade</div>
                <div class="plant-icon">
                    <i class="${plant.icon}"></i>
                </div>
                <h3 class="plant-name">${plant.name}</h3>
                <p class="plant-description">${plant.description}</p>
                <ul class="plant-details">
                    ${plant.care.slice(0, 3).map(detail => `<li><i class="fas fa-check"></i>${detail}</li>`).join('')}
                </ul>
                <button class="plant-link" onclick="openPlantModal(${plant.id}, '${state}')">
                    <span>Ver detalhes completos</span>
                    <i class="fas fa-chevron-right"></i>
                </button>
            `;
            resultsGrid.appendChild(plantCard);
        });
    }
    
    // Mostra a seção de resultados
    resultsSection.style.display = 'block';
    resultsSection.scrollIntoView({ behavior: 'smooth' });
    
    // Ativa animações
    setTimeout(() => {
        document.querySelectorAll('.scroll-slide-in').forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('active');
            }, index * 200);
        });
    }, 100);
}

// Função para resetar o formulário
function resetForm() {
    document.getElementById('suggestionsForm').reset();
    document.getElementById('suggestionsResults').style.display = 'none';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Event Listener para o formulário
document.getElementById('suggestionsForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const submitBtn = this.querySelector('.submit-btn');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Analisando...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        const formData = new FormData(this);
        const suggestions = generateSuggestions(formData);
        
        displayResults(suggestions);
        
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }, 1500);
});

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    console.log('Sugestões Inteligentes carregada!');
    
    // Ativa animações on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.scroll-fade-in, .scroll-slide-in').forEach(el => {
        observer.observe(el);
    });
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