const btn_login = document.querySelector('#entrar')

btn_login.addEventListener('click', (event) => {
    event.preventDefault()

    const DATA = {
        email: document.querySelector('#email_login').value,
        senha: document.querySelector('#senha_login').value
    }

    console.log(DATA)

    login(DATA)
})

async function login(data) {

    try {
        const response = await fetch('http://localhost:3000/planttool/v1/login', {
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(data)
        })

        const resp = await response.json()

        console.log(resp.tokenUsuario)
        console.log(resp.dadosUsuario)

        if (resp.tokenUsuario == undefined) {
            throw new Error("Usuário ou senha inválidos, tente novamente",);
        } else {
            localStorage.setItem('token', JSON.stringify(resp.tokenUsuario))
            localStorage.setItem('dadosUsuario', JSON.stringify(resp.dadosUsuario))
            window.location.href = './index.js'
        }
    } catch (error) {
        alert(error)
    }
}