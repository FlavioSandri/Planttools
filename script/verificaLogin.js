const img = document.querySelector("#profileIcon")
const dropDown = document.querySelector("#profileDropdown") 
const mudarRota = document.querySelector('#entrar')

window.addEventListener('DOMContentLoaded', () => {
    const token = JSON.parse(localStorage.getItem('token'))
    const usuario = JSON.parse(localStorage.getItem('dadosUsuario'))

    console.log(`${!token || !usuario ? 'sem dados no localStorage':'Usuário já logado'}`)

    if(token || usuario){
        mudarRota.innerText = 'Perfil'
        mudarRota.href = './page/perfil.html'
        criarTag()
        trocarIcone(token, usuario)
    }

})

async function trocarIcone(token, dadosUsuario) {
    const fotoPerfil = document.querySelector('#profileIcon')

    
    try {
        // troque esse IP nathan (ou qualque dev) do futuro.
        if (dadosUsuario) {
            const response = await fetch(`http://localhost:3000/planttool/v1/imagem/usuario/fotoperfil/${dadosUsuario.user_id}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })

            img.src = response.url
        }

    } catch (error) {
        console.log(error)
    }
}

function criarTag() {
    const btn = document.createElement('a')

    btn.textContent = "Sair"
    btn.style.color = "Red"

    btn.addEventListener('click', (event) => {
        event.preventDefault()

        let pergunta = confirm("Você tem certeza?")

        if(pergunta == true) {
            localStorage.removeItem("token")
            localStorage.removeItem("dadosUsuario")

            window.location.reload()
        }
    })

    dropDown.appendChild(btn)

    console.log(btn)
}