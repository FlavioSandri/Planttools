const btn_cadastro = document.querySelector('#cadastrar')

btn_cadastro.addEventListener('click', () => {

    const DATA = {
        nome: document.getElementById('Nome').value,
        sobrenome: document.getElementById('Sobrenome').value,
        email: document.getElementById('Email').value,
        senha: document.getElementById('Senha').value
    }

    if (!DATA.nome || !DATA.email || !DATA.senha) {
        alert('Todos os campos devem ser preenchidos!')
    }

    cadastrar(DATA)
})

async function cadastrar(data) {
    try {
        const response = await fetch('http://localhost:3000/planttool/v1/registrarUsuario', {
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(data)
        })

        if (response.ok) {
            alert('Cadastro realizado com sucesso!');
            window.location.href = 'index.html'
        } else {
            alert(`Ops... ${data.message || 'Falha no cadastro'}`)
        }
    } catch (error) {
        console.error('Erro no cadastro:', error.message);
    }
}