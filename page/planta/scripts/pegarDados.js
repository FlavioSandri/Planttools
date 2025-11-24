window.addEventListener('DOMContentLoaded', () => {
    dadosForm()
});

async function dadosForm() {
    const especies = await pegarEspeciePlanta() ;
    console.log(especies);

    const especie = document.querySelector('#planta');
    if (!especie || !Array.isArray(especies)) return;

    especies.forEach(especieData => {
        const option = document.createElement('option');
        // use a sensible default for value/text based on the returned object
        option.value = especieData.plantaEspecie_id ?? 'sem plantas!';
        option.textContent = especieData.plantaEspecie_nome;
        especie.appendChild(option);
    });
}

export async function pegarEspeciePlanta() {

    try {
        const response = await fetch(`https://planttool-tcc-production-1d76.up.railway.app/planttool/v1/especies`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })

        console.log(response);
        return response.json();

    } catch (error) {
        console.error('Erro ao pegar espécie da planta:', error);
    }

}