import receitas from "../json/receitasData.js";


console.log('Carregando receitas...');
console.log(receitas);

window.addEventListener('DOMContentLoaded', () => {
    exibirReceitas();
});

function exibirReceitas() {
    const container = document.querySelector('#receitas');

    receitas.forEach(element => {
        container.innerHTML += `
        <div class="plant-card">
            <div class="plant-img" style="background-color: ${element.corFundo};">
                <i class="fas ${element.icone}"></i>
            </div>
        <div class="plant-info">
            <h3>${element.nome}</h3>
            <p>${element.descricao}</p>
        </div>
        </div>
        `
    });

    
}