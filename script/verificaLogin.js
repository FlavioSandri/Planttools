export const token = JSON.parse(localStorage.getItem('token'))
export const usuario = JSON.parse(localStorage.getItem('dadosUsuario'))

const img = document.querySelector("#profileIcon")
const dropDown = document.querySelector("#profileDropdown")
const mudarRota = document.querySelector('#entrar')
const icon = document.querySelector('#icon')

window.addEventListener('DOMContentLoaded', () => {
    console.log(`${!token || !usuario ? 'sem dados no localStorage' : 'Usuário já logado'}`)

    if (token || usuario) {
        mudarRota.innerText = 'Perfil'
        mudarRota.href = 'page/perfil/perfil.html'

        icon.classList.remove('fas')
        icon.classList.remove('fa-sign-in-alt')
        icon.classList.add('fa-solid', 'fa-user')

        criarTag()
        trocarIcone(token, usuario)
    }

})

async function trocarIcone(token, dadosUsuario) {

    try {
        // troque esse IP nathan (ou qualque dev) do futuro.
        if (dadosUsuario) {
            const response = await fetch(`http://localhost:3000/planttool/v1/imagem/usuario/fotoperfil/${dadosUsuario.user_id}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })

            if (response.status !== 200) {
                throw new Error("Não foi possível obter a imagem de perfil.")
            }

            img.src = response.url
        }



    } catch (error) {
        console.error('Erro ao buscar a imagem de perfil:', error)
    }
}

function criarTag() {
    const btn = document.createElement('a')

    btn.classList.add('dropdown-item')
    btn.textContent = "Sair"
    btn.style.color = "Red"

    btn.addEventListener('click', (event) => {
        event.preventDefault()

        let pergunta = confirm("Você tem certeza?")

        if (pergunta == true) {
            localStorage.removeItem("token")
            localStorage.removeItem("dadosUsuario")

            window.location.reload()
        }
    })

    dropDown.appendChild(btn)

    console.log(btn)
}