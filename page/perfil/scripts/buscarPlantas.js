import { salvarAlterções } from "./alterarPlanta.js";

const token = JSON.parse(localStorage.getItem('token'))

let alteracoes = []

window.addEventListener('DOMContentLoaded', async () => {
    
    await exibirPlantas()

    document.querySelector('#edit-button').addEventListener('click', async () => {
        const data = await salvarAlterções(token, alteracoes)

        console.log(document.querySelector('#edit-button'))
        console.log(data)
    })

})

async function buscarPlantas(userToken) {
    try {
        const response = await fetch(`http://localhost:3000/planttool/v1/plantasUsuario/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${userToken}`
            }
        });
        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`HTTP ${response.status} - ${errorText}`);
        }
        const plantas = await response.json();

        console.log(plantas)

        return plantas;
    } catch (error) {
        console.error('Erro ao buscar plantas do usuário:', error);
    }
}

async function exibirPlantas() {
    let container = document.querySelector('#plants-grid');
    const plantas = await buscarPlantas(token);
    const especiesData = await buscaEspecies(token, plantas);

    const nomesEspecies = especiesData.map(item => {
        return item[0].plantaEspecie_nome
    })


    if (!plantas) return

    container.innerHTML = ''
    plantas.forEach((planta, i) => {
        container.innerHTML +=
            `<div class="plant-card-new">
                        <div class="plant-card-header">
                            <button class="add-plant-btn">
                                <i class="fas fa-camera"></i>
                            </button>
                            <h3>${planta.userPlanta_nome}</h3>
                        </div>
                        
                        <div class="plant-image-container">
                            <div class="plant-image">
                                <i class="fas fa-seedling"></i>
                            </div>
                            <div class="plant-progress">
                                <div class="progress-circle">
                                    <div class="progress-bar" data-progress="70"></div>
                                    <div class="progress-text">70%</div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="plant-info-grid">
                            <div class="info-item">
                                <span class="info-label">TIPO</span>
                                <span class="info-value">Vegetal</span>
                            </div>
                            <div class="info-item">
                                <span class="info-label">PLANTA</span>
                                <span class="info-value">${nomesEspecies[i]}</span>
                            </div>
                            <div class="info-item">
                                <span class="info-label">LOCAL</span>
                                <span class="info-value">Horta</span>
                            </div>
                            <div class="info-item">
                                <span class="info-label">M²</span>
                                <span class="info-value">10</span>
                            </div>
                            <div class="info-item">
                                <span class="info-label">PH</span>
                                <span class="info-value">7</span>
                            </div>
                        </div>
                    </div>`
    })

    editarImg();
}

async function buscaEspecies(token, plantas) {
    let especies = []

    try {
        for (let planta of plantas) {
            const response = await fetch(`http://localhost:3000/planttool/v1/especies/${planta.plantaEspecie_id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            
            if (!response.ok) return console.error('Erro ao buscar espécies:', response.statusText);
    
            
            const especiesAchadas = await response.json();

            especies.push(especiesAchadas)    
        }

        return especies;

    } catch (error) {
        
    }
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

                    const idPlanta = imgDiv.parentElement.id
                    alteracoes.push({
                        idPlanta: idPlanta,
                        foto: file
                    })
                };
                reader.readAsDataURL(file);
            }
        });
    });
}