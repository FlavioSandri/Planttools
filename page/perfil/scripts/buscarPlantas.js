import { salvarAlterções } from "./alterarPlanta.js";

let alteracoes = []

window.addEventListener('DOMContentLoaded', async () => {
    const token = JSON.parse(localStorage.getItem('token'));
    if (!token) {
        console.warn('Token ausente: usuário não está autenticado.');
        return;
    }

    try {
        await exibirPlantas(token)
    } catch (err) {
        console.error('Erro em exibirPlantas:', err);
    }

    const editBtn = document.querySelector('#edit-button');
    if (editBtn) {
        editBtn.addEventListener('click', async () => {
            const data = await salvarAlterções(token, alteracoes)
            console.log(editBtn)
            console.log(data)
        })
    }
})

async function buscarPlantas(userToken) {
    try {
        const response = await fetch(`https://planttool-tcc-production-1d76.up.railway.app/planttool/v1/plantasUsuario/`, {
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
        return plantas;
    } catch (error) {
        console.error('Erro ao buscar plantas do usuário:', error);
        return null;
    }
}

async function exibirPlantas(token) {
    const container = document.querySelector('#plants-grid');
    if (!container) {
        console.warn('Container #plants-grid não encontrado no DOM.');
        return;
    }

    const plantas = await buscarPlantas(token);
    if (!plantas || plantas.length === 0) {
        console.info('Nenhuma planta retornada pela API.');
        return
    }

    const especiesData = await buscaEspecies(token, plantas);
    if (!Array.isArray(especiesData)) {
        console.warn('Especies retornadas inválidas:', especiesData);
    }

    const nomesEspecies = (especiesData || []).map(item => {
        return (item && item[0] && item[0].plantaEspecie_nome) || '—'
    })

    // limpa antes de preencher (evita duplicação se re-renderizar)
    container.innerHTML = '';

    plantas.forEach((planta, i) => {
        container.innerHTML +=
            `<div class="plant-card-new" id="${planta.userPlanta_id || ''}">
                        <div class="plant-card-header">
                            <button class="add-plant-btn">
                                <i class="fas fa-camera"></i>
                            </button>
                            <h3>${planta.userPlanta_nome || 'Sem nome'}</h3>
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
                                <span class="info-value">${nomesEspecies[i] || '—'}</span>
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

    container.innerHTML += `
                    <div class="plant-card-new add-new-card">
                        <div class="add-new-content">
                            <div class="add-new-icon" onclick="window.location.href='../planta/planta.html'">
                                <i class="fas fa-plus"></i>
                            </div>
                            <h3>Adicionar Planta</h3>
                            <p>Clique para adicionar uma nova planta ao seu jardim</p>
                        </div>
                    </div>
    `
    editarImg();
}

async function buscaEspecies(token, plantas) {
    let especies = []
    try {
        for (let planta of plantas) {
            const response = await fetch(`https://planttool-tcc-production-1d76.up.railway.app/planttool/v1/especies/${planta.plantaEspecie_id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });

            if (!response.ok) {
                console.error('Erro ao buscar espécies:', response.status, await response.text());
                especies.push(null);
                continue;
            }

            const especiesAchadas = await response.json();
            especies.push(especiesAchadas || null)
        }
        
        return especies;

    } catch (error) {
        console.error('Erro em buscaEspecies:', error);
        return especies;
    }
}

function editarImg() {
    // seletor ajustado para ".plant-image"
    const imagens = document.querySelectorAll(".plant-image");

    imagens.forEach(imgDiv => {
        const inputFile = document.createElement("input");
        inputFile.type = "file";
        inputFile.accept = "image/*";
        inputFile.style.display = "none";
        imgDiv.appendChild(inputFile);

        imgDiv.addEventListener("click", () => inputFile.click());

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