// IA Personalizada - Chat Interativo
document.addEventListener('DOMContentLoaded', function() {
    // Elementos principais
    const chatMessages = document.getElementById('chatMessages');
    const chatInput = document.getElementById('chatInput');
    const sendBtn = document.getElementById('sendBtn');
    const uploadBtn = document.getElementById('uploadBtn');
    const fileInput = document.getElementById('fileInput');
    const uploadPreview = document.getElementById('uploadPreview');
    const uploadSection = document.getElementById('uploadSection');
    const novoChatBtn = document.getElementById('novoChat');

    // Estado do chat
    let chatHistory = [];
    let isProcessing = false;

    // Inicialização
    initChat();

    // Event Listeners
    sendBtn.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });

    uploadBtn.addEventListener('click', function() {
        fileInput.click();
    });

    fileInput.addEventListener('change', handleImageUpload);
    novoChatBtn.addEventListener('click', clearChat);

    // Quick Actions
    document.querySelectorAll('.quick-action').forEach(btn => {
        btn.addEventListener('click', function() {
            const action = this.getAttribute('data-action');
            handleQuickAction(action);
        });
    });

    // Exemplo de Perguntas
    document.querySelectorAll('.example-question').forEach(btn => {
        btn.addEventListener('click', function() {
            const question = this.getAttribute('data-question');
            chatInput.value = question;
            chatInput.focus();
        });
    });

    // Ações de Input
    document.getElementById('btnFoto').addEventListener('click', function() {
        fileInput.click();
    });

    // Função de Inicialização
    function initChat() {
        // Adicionar mensagem de boas-vindas se não houver histórico
        if (chatHistory.length === 0) {
            // Mensagem já está no HTML inicial
        }
    }

    // Enviar Mensagem
    function sendMessage() {
        const message = chatInput.value.trim();
        
        if (!message || isProcessing) return;

        // Adicionar mensagem do usuário
        addUserMessage(message);
        chatInput.value = '';
        
        // Simular processamento da IA
        simulateAIResponse(message);
    }

    // Adicionar Mensagem do Usuário
    function addUserMessage(text) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message user-message';
        messageDiv.innerHTML = `
            <div class="message-avatar">
                <i class="fas fa-user"></i>
            </div>
            <div class="message-content">
                <div class="message-text">${escapeHtml(text)}</div>
                <div class="message-time">Agora</div>
            </div>
        `;
        
        chatMessages.appendChild(messageDiv);
        scrollToBottom();
        
        // Adicionar ao histórico
        chatHistory.push({ type: 'user', content: text, timestamp: new Date() });
    }

    // Adicionar Mensagem do Bot
    function addBotMessage(text, options = {}) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message bot-message';
        
        let contentHTML = `
            <div class="message-avatar">
                <i class="fas fa-robot"></i>
            </div>
            <div class="message-content">
                <div class="message-text">${escapeHtml(text)}</div>
        `;

        // Adicionar quick actions se especificado
        if (options.quickActions) {
            contentHTML += `<div class="quick-actions">${options.quickActions}</div>`;
        }

        contentHTML += `<div class="message-time">Agora</div></div>`;
        
        messageDiv.innerHTML = contentHTML;
        chatMessages.appendChild(messageDiv);
        scrollToBottom();
        
        // Adicionar ao histórico
        chatHistory.push({ type: 'bot', content: text, timestamp: new Date() });

        // Re-attach event listeners para novas quick actions
        if (options.quickActions) {
            messageDiv.querySelectorAll('.quick-action').forEach(btn => {
                btn.addEventListener('click', function() {
                    const action = this.getAttribute('data-action');
                    handleQuickAction(action);
                });
            });
        }
    }

    // Simular Resposta da IA
    function simulateAIResponse(userMessage) {
        isProcessing = true;
        sendBtn.disabled = true;

        // Mostrar indicador de digitação
        showTypingIndicator();

        // Simular delay de processamento
        setTimeout(() => {
            removeTypingIndicator();
            
            const response = generateAIResponse(userMessage);
            addBotMessage(response.text, response.options);
            
            isProcessing = false;
            sendBtn.disabled = false;
        }, 1500 + Math.random() * 1000);
    }

    // Gerar Resposta da IA (Simulada)
    function generateAIResponse(userMessage) {
        const lowerMessage = userMessage.toLowerCase();
        
        // Respostas pré-definidas baseadas no conteúdo da mensagem
        if (lowerMessage.includes('suculent') || lowerMessage.includes('suculenta')) {
            return {
                text: "🌵 As suculentas são plantas maravilhosas para iniciantes! Aqui estão os cuidados básicos:\n\n• 💧 Rega: A cada 10-15 dias (deixe o solo secar completamente)\n• ☀️ Luz: Sol pleno ou luz indireta brilhante\n• 🌡️ Temperatura: Entre 15°C e 27°C\n• 🏺 Solo: Bem drenado, específico para cactos e suculentas\n\nLembre-se: É melhor regar de menos do que demais!",
                options: generateQuickActions(['cuidados', 'problemas', 'propagacao'])
            };
        }
        else if (lowerMessage.includes('folha amarela') || lowerMessage.includes('folhas amarelas')) {
            return {
                text: "🟡 Folhas amarelas podem indicar vários problemas:\n\n• 💦 Excesso de água (mais comum)\n• 🏜️ Falta de nutrientes\n• 🐛 Pragas ou doenças\n• ☀️ Excesso de sol direto\n\nConte mais sobre sua planta para um diagnóstico mais preciso!",
                options: generateQuickActions(['diagnostico', 'rega', 'adubacao'])
            };
        }
        else if (lowerMessage.includes('apartamento') || lowerMessage.includes('interior')) {
            return {
                text: "🏢 Para apartamentos, recomendo estas plantas resistentes:\n\n• 🌿 Zamioculca (indestrutível!)\n• 🕷️ Clorofito (purifica o ar)\n• 💚 Jiboia (cresce rápido)\n• 🍃 Espada-de-São-Jorge\n• 🌱 Pau-d'água\n\nTodas se adaptam bem à luz indireta e requerem pouca manutenção!",
                options: generateQuickActions(['luz', 'rega', 'purificacao'])
            };
        }
        else if (lowerMessage.includes('identificar') || lowerMessage.includes('que planta é esta')) {
            return {
                text: "📸 Para identificar sua planta, você pode:\n\n1. Tirar uma foto clara da planta inteira\n2. Fotos das folhas, flores e caule ajudam\n3. Descrever características como tamanho, cor e textura\n\nEnvie uma foto que farei a identificação para você!",
                options: `
                    <button class="quick-action" data-action="upload">
                        <i class="fas fa-camera"></i>
                        Enviar Foto
                    </button>
                    <button class="quick-action" data-action="caracteristicas">
                        <i class="fas fa-list"></i>
                        Descrever Características
                    </button>
                `
            };
        }
        else {
            // Resposta genérica para mensagens não reconhecidas
            return {
                text: "🌱 Obrigado pela sua pergunta! Posso ajudar com:\n\n• Identificação de plantas por foto\n• Cuidados específicos por espécie\n• Diagnóstico de problemas\n• Recomendações de plantas\n\nO que mais você gostaria de saber?",
                options: generateQuickActions(['identificar', 'cuidados', 'problemas', 'sugestoes'])
            };
        }
    }

    // Gerar Ações Rápidas
    function generateQuickActions(actions) {
        const actionLabels = {
            'identificar': ['fas fa-camera', 'Identificar planta'],
            'cuidados': ['fas fa-heart', 'Cuidados básicos'],
            'problemas': ['fas fa-bug', 'Problemas comuns'],
            'sugestoes': ['fas fa-lightbulb', 'Sugestões'],
            'diagnostico': ['fas fa-stethoscope', 'Diagnóstico'],
            'rega': ['fas fa-tint', 'Dicas de rega'],
            'adubacao': ['fas fa-flask', 'Adubação'],
            'luz': ['fas fa-sun', 'Necessidade de luz'],
            'purificacao': ['fas fa-wind', 'Plantas purificadoras'],
            'propagacao': ['fas fa-seedling', 'Como propagar'],
            'upload': ['fas fa-camera', 'Enviar Foto'],
            'caracteristicas': ['fas fa-list', 'Descrever Características']
        };

        let html = '';
        actions.forEach(action => {
            if (actionLabels[action]) {
                html += `
                    <button class="quick-action" data-action="${action}">
                        <i class="${actionLabels[action][0]}"></i>
                        ${actionLabels[action][1]}
                    </button>
                `;
            }
        });
        return html;
    }

    // Manipular Ações Rápidas
    function handleQuickAction(action) {
        const responses = {
            'identificar': "📸 Vamos identificar sua planta! Você pode enviar uma foto ou descrever suas características.",
            'cuidados': "💚 Compartilhe qual planta você tem ou descreva suas características para receber cuidados específicos.",
            'problemas': "🐛 Conte-me sobre os problemas que sua planta está enfrentando para ajudar no diagnóstico.",
            'sugestoes': "💡 Para sugerir plantas ideais, me conte sobre:\n• Seu espaço (apartamento, jardim, etc.)\n• Quantidade de luz disponível\n• Seu nível de experiência\n• Se tem pets ou crianças"
        };

        if (responses[action]) {
            addBotMessage(responses[action], {
                quickActions: generateQuickActions(getRelatedActions(action))
            });
        } else if (action === 'upload') {
            // Focar na seção de upload
            uploadSection.scrollIntoView({ behavior: 'smooth' });
            fileInput.click();
        }
    }

    // Obter Ações Relacionadas
    function getRelatedActions(mainAction) {
        const related = {
            'identificar': ['upload', 'caracteristicas', 'cuidados'],
            'cuidados': ['rega', 'adubacao', 'luz', 'problemas'],
            'problemas': ['diagnostico', 'rega', 'adubacao'],
            'sugestoes': ['luz', 'purificacao', 'cuidados']
        };
        return related[mainAction] || ['identificar', 'cuidados', 'problemas'];
    }

    // Manipular Upload de Imagem
    function handleImageUpload(event) {
        const file = event.target.files[0];
        if (!file) return;

        // Verificar se é imagem
        if (!file.type.startsWith('image/')) {
            addBotMessage("📄 Por favor, envie apenas imagens para identificação de plantas.");
            return;
        }

        // Mostrar preview
        const reader = new FileReader();
        reader.onload = function(e) {
            uploadPreview.innerHTML = `<img src="${e.target.result}" alt="Preview da planta">`;
            uploadPreview.style.display = 'block';

            // Simular identificação da planta
            simulatePlantIdentification(file);
        };
        reader.readAsDataURL(file);
    }

    // Simular Identificação de Planta
    function simulatePlantIdentification(file) {
        isProcessing = true;
        
        // Mostrar mensagem de processamento
        addBotMessage("🔍 Analisando a imagem... Estou identificando sua planta!");

        showTypingIndicator();

        setTimeout(() => {
            removeTypingIndicator();
            
            // Resultado simulado da identificação
            const plantResult = generatePlantIdentificationResult();
            
            const messageDiv = document.createElement('div');
            messageDiv.className = 'message bot-message';
            messageDiv.innerHTML = `
                <div class="message-avatar">
                    <i class="fas fa-robot"></i>
                </div>
                <div class="message-content">
                    <div class="message-text">
                        <strong>Planta Identificada com Sucesso! 🎉</strong>
                    </div>
                    <div class="plant-result">
                        <div class="plant-result-header">
                            <i class="fas fa-seedling"></i>
                            <h5>${plantResult.name}</h5>
                            <span class="plant-confidence">${plantResult.confidence}% de confiança</span>
                        </div>
                        <div class="plant-details">
                            <div class="plant-detail">
                                <span class="detail-label">Nome Científico</span>
                                <span class="detail-value">${plantResult.scientificName}</span>
                            </div>
                            <div class="plant-detail">
                                <span class="detail-label">Família</span>
                                <span class="detail-value">${plantResult.family}</span>
                            </div>
                            <div class="plant-detail">
                                <span class="detail-label">Origem</span>
                                <span class="detail-value">${plantResult.origin}</span>
                            </div>
                            <div class="plant-detail">
                                <span class="detail-label">Dificuldade</span>
                                <span class="detail-value">${plantResult.difficulty}</span>
                            </div>
                        </div>
                    </div>
                    <div class="quick-actions">
                        <button class="quick-action" data-action="cuidados">
                            <i class="fas fa-heart"></i>
                            Ver Cuidados
                        </button>
                        <button class="quick-action" data-action="problemas">
                            <i class="fas fa-bug"></i>
                            Problemas Comuns
                        </button>
                        <button class="quick-action" data-action="propagacao">
                            <i class="fas fa-seedling"></i>
                                                    </button>
                    </div>
                    <div class="message-time">Agora</div>
                </div>
            `;
            
            chatMessages.appendChild(messageDiv);
            scrollToBottom();
            
            // Re-attach event listeners
            messageDiv.querySelectorAll('.quick-action').forEach(btn => {
                btn.addEventListener('click', function() {
                    const action = this.getAttribute('data-action');
                    handleQuickAction(action);
                });
            });
            
            isProcessing = false;
            sendBtn.disabled = false;
            
            // Limpar preview após identificação
            setTimeout(() => {
                uploadPreview.style.display = 'none';
                fileInput.value = '';
            }, 3000);
            
        }, 2000);
    }

    // Gerar Resultado de Identificação Simulado
    function generatePlantIdentificationResult() {
        const plants = [
            {
                name: "Suculenta Echeveria",
                scientificName: "Echeveria elegans",
                family: "Crassulaceae",
                origin: "México",
                difficulty: "Fácil",
                confidence: "95"
            },
            {
                name: "Samambaia Americana",
                scientificName: "Nephrolepis exaltata",
                family: "Lomariopsidaceae", 
                origin: "Américas Tropicais",
                difficulty: "Moderado",
                confidence: "92"
            },
            {
                name: "Zamioculca",
                scientificName: "Zamioculcas zamiifolia", 
                family: "Araceae",
                origin: "África Oriental",
                difficulty: "Muito Fácil",
                confidence: "98"
            },
            {
                name: "Costela de Adão",
                scientificName: "Monstera deliciosa",
                family: "Araceae",
                origin: "América Central",
                difficulty: "Fácil", 
                confidence: "96"
            }
        ];
        
        return plants[Math.floor(Math.random() * plants.length)];
    }

    // Mostrar Indicador de Digitação
    function showTypingIndicator() {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message bot-message';
        typingDiv.id = 'typingIndicator';
        typingDiv.innerHTML = `
            <div class="message-avatar">
                <i class="fas fa-robot"></i>
            </div>
            <div class="message-content">
                <div class="typing-indicator">
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                </div>
            </div>
        `;
        chatMessages.appendChild(typingDiv);
        scrollToBottom();
    }

    // Remover Indicador de Digitação
    function removeTypingIndicator() {
        const typingIndicator = document.getElementById('typingIndicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }

    // Limpar Chat
    function clearChat() {
        if (confirm('Tem certeza que deseja iniciar um novo chat? O histórico atual será perdido.')) {
            chatMessages.innerHTML = `
                <div class="message bot-message">
                    <div class="message-avatar">
                        <i class="fas fa-robot"></i>
                    </div>
                    <div class="message-content">
                        <div class="message-text">
                            Olá! Sou o PlantBot, seu assistente especializado em plantas! 🌱
                            Posso ajudar você a:
                        </div>
                        <div class="quick-actions">
                            <button class="quick-action" data-action="identificar">
                                <i class="fas fa-camera"></i>
                                Identificar planta
                            </button>
                            <button class="quick-action" data-action="cuidados">
                                <i class="fas fa-heart"></i>
                                Cuidados básicos
                            </button>
                            <button class="quick-action" data-action="problemas">
                                <i class="fas fa-bug"></i>
                                Problemas comuns
                            </button>
                            <button class="quick-action" data-action="sugestoes">
                                <i class="fas fa-lightbulb"></i>
                                Sugestões de plantas
                            </button>
                        </div>
                        <div class="message-time">Agora</div>
                    </div>
                </div>
            `;
            
            chatHistory = [];
            uploadPreview.style.display = 'none';
            fileInput.value = '';
            
            // Re-attach event listeners para as quick actions
            document.querySelectorAll('.quick-action').forEach(btn => {
                btn.addEventListener('click', function() {
                    const action = this.getAttribute('data-action');
                    handleQuickAction(action);
                });
            });
        }
    }

    // Rolagem Automática para o Final
    function scrollToBottom() {
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Escape HTML para Prevenir XSS
    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // Inicializar Scroll para o Final
    scrollToBottom();
});
                            