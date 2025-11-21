document.addEventListener("DOMContentLoaded", () => {
    const token = JSON.parse(localStorage.getItem("token"));


    const chatMessages = document.getElementById("chatMessages");

    const fileInput = document.getElementById("fileInput");
    const chatInput = document.getElementById("chatInput");
    const sendBtn = document.getElementById("sendBtn");

    const btnFoto = document.getElementById("btnFoto");
    const btnArquivo = document.getElementById("btnArquivo");

    let selectedImageFile = null;
    let lastUserImageMessage = null;
    let isProcessing = false;

    // ==============================
    // EVENTOS
    // ==============================
    btnFoto.addEventListener("click", () => fileInput.click());
    btnArquivo.addEventListener("click", () => fileInput.click());
    fileInput.addEventListener("change", handleImageUpload);
    sendBtn.addEventListener("click", sendMessage);

    // ==============================
    // QUANDO A IMAGEM É ENVIADA
    // ==============================
    function handleImageUpload(event) {
        const file = event.target.files[0];
        if (!file) return;

        if (!file.type.startsWith("image/")) {
            addBotMessage("📄 Por favor, envie apenas imagens.");
            return;
        }

        selectedImageFile = file;

        const reader = new FileReader();
        reader.onload = e => {
            // Cria a mensagem do usuário com a imagem (AINDA SEM TEXTO)
            lastUserImageMessage = addUserImageBubble(e.target.result);
        };
        reader.readAsDataURL(file);
    }

    // ==============================
    // QUANDO O USUÁRIO CLICA EM "ENVIAR"
    // ==============================
    function sendMessage() {
        if (!selectedImageFile) {
            addBotMessage("⚠️ Primeiro envie uma imagem.");
            return;
        }

        const text = chatInput.value.trim();
        chatInput.value = "";

        // 🔥 Insere o texto dentro da MESMA mensagem da imagem
        if (lastUserImageMessage && text !== "") {
            lastUserImageMessage.querySelector(".message-content").innerHTML += `
                <div class="message-text">${escapeHtml(text)}</div>
            `;
        }

        // Envia imagem + texto para API
        sendToAPI(selectedImageFile, text);

        // Limpa referência
        selectedImageFile = null;
        lastUserImageMessage = null;
    }

    // ==============================
    // ENVIA PARA A API
    // ==============================
    async function sendToAPI(imageFile, text) {

        if (isProcessing) return;

        isProcessing = true;
        showTypingIndicator();

        const form = new FormData();
        form.append("foto", imageFile);
        form.append("text", text);

        console.log(imageFile, text);

        try {
            const response = await fetch("http://localhost:3000/planttool/v1/gemini", {
                method: "POST",
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                body: form
            });

            if (!response.ok) throw new Error(`Erro na API: ${response.statusText}`);


            let data = await response.json();
            data = JSON.parse(data.descricao);
            console.log(data);

            if (data.is_plant === true) {
                let resposta = `${data.message} \n ${data.plant_info.health_status} \n\n Algumas dicas: \n ${data.plant_info.care_tips.map(tip => `- ${tip}`).join('\n')}`

                removeTypingIndicator();
                addBotMessage(resposta);
            } else {
                removeTypingIndicator();
                addBotMessage(data.message);
            }

        } catch (err) {
            removeTypingIndicator();
            addBotMessage("❌ Erro ao enviar para a API.");
        }

        isProcessing = false;
    }

    // ==============================
    // BOLHAS DE MENSAGEM
    // ==============================
    function addUserImageBubble(imgSrc) {
        const wrapper = document.createElement("div");
        wrapper.className = "message user-message";

        wrapper.innerHTML = `
            <div class="message-avatar"><i class="fas fa-user"></i></div>
            <div class="message-content">
                <img src="${imgSrc}" class="chat-image-preview" />
            </div>
        `;

        chatMessages.appendChild(wrapper);
        scrollToBottom();
        return wrapper;
    }

    function addBotMessage(text) {
        const div = document.createElement("div");
        div.className = "message bot-message";

        div.innerHTML = `
            <div class="message-avatar"><i class="fas fa-robot"></i></div>
            <div class="message-content">
                <div class="message-text">${escapeHtml(text)}</div>
            </div>
        `;

        chatMessages.appendChild(div);
        scrollToBottom();
    }

    // ==============================
    // INDICADOR DE DIGITAÇÃO
    // ==============================
    function showTypingIndicator() {
        const div = document.createElement("div");
        div.id = "typingIndicator";
        div.className = "message bot-message";

        div.innerHTML = `
            <div class="message-avatar"><i class="fas fa-robot"></i></div>
            <div class="message-content">
                <div class="typing-indicator">
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                </div>
            </div>
        `;

        chatMessages.appendChild(div);
        scrollToBottom();
    }

    function removeTypingIndicator() {
        const el = document.getElementById("typingIndicator");
        if (el) el.remove();
    }

    // ==============================
    // UTILITÁRIOS
    // ==============================
    function scrollToBottom() {
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function escapeHtml(text) {
        const div = document.createElement("div");
        div.textContent = text;
        return div.innerHTML;
    }

});
