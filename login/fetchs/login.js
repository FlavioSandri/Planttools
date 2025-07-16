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

        alert(resp.mensagem)
        console.log(resp.dados)

        localStorage.setItem('dados', JSON.stringify(resp.dados))
        window.location.href = '../../index.html'
    } catch (error) {
        alert(error)
    }
}