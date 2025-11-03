import { token, usuario } from "../../../script/verificaLogin.js";

window.addEventListener('DOMContentLoaded', async () => {
    exibirPlantas()
})

async function buscarPlantas() {
    try {
        const response = await fetch(`http://localhost:3000/planttool/v1/plantasUsuario/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`HTTP ${response.status} - ${errorText}`);
        }
        const plantas = await response.json();
        console.log(plantas);
        return plantas;
    } catch (error) {
        console.error('Erro ao buscar plantas do usuário:', error);
    }
}

async function exibirPlantas() {
    let container = document.querySelector('#plants-grid');
    const plantas = await buscarPlantas();


    plantas.forEach(planta => {
        container.innerHTML +=
            `<div class="plant-card">
                    <div class="plant-img">
                        <i class="fas fa-tree"></i>
                    </div>
                    <div class="plant-info">
                        <h3>${planta.userPlanta_nome}</h3>
                        <p>Necessita poda</p>
                    </div>
            </div>`
    })

    editarImg();
}

function editarImg() {
    const imagens = document.querySelectorAll(".plant-img");

    imagens.forEach(imgDiv => {
        // Cria um input de arquivo para cada imagem
        const inputFile = document.createElement("input");
        inputFile.type = "file";
        inputFile.accept = "image/*";
        inputFile.style.display = "none";
        imgDiv.appendChild(inputFile);

        // Quando clicar na imagem → abre o seletor
        imgDiv.addEventListener("click", () => inputFile.click());

        // Quando o usuário escolher um arquivo
        inputFile.addEventListener("change", (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    imgDiv.style.backgroundImage = `url(${event.target.result})`;
                    imgDiv.style.backgroundSize = "cover";
                    imgDiv.style.backgroundPosition = "center";
                    const icon = imgDiv.querySelector("i");
                    if (icon) icon.style.display = "none";
                };
                reader.readAsDataURL(file);
            }
        });
    });
}