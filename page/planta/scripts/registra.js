import { token, usuario } from "../../../script/verificaLogin.js";
import { pegarEspeciePlanta } from "./pegarDados.js";

const btn_form = document.querySelector('#registro');

btn_form.addEventListener('click', async (e) => {
    e.preventDefault();

    const data = {
        especieId: document.querySelector('#planta').value,
        nome: document.querySelector('#nome').value
    }

    registrarPlanta(data);
})

async function registrarPlanta(data) {
    try {
        const response = await fetch(`http://localhost:3000/planttool/v1/registrarPlanta`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`HTTP ${response.status} - ${errorText}`);
        }
        alert('Planta registrada com sucesso!');
        return await response.json();
    } catch (error) {
        console.error('Erro ao registrar planta:', error);
    }
}