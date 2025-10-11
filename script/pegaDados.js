const mudarRota = document.querySelector('#entrar')

window.addEventListener('DOMContentLoaded', () => {
    const token = JSON.parse(localStorage.getItem('token'))
    const usuario = JSON.parse(localStorage.getItem('dadosUsuario'))

    // console.log(`${!token || !usuario ? 'sem dados no localStorage':'Usuário já logado'}`)

    // if(token || usuario){
    //     mudarRota.innerText = 'Perfil'
    //     mudarRota.href = './page/perfil.html'
    // }

    trocarFoto(token, usuario)
})

// async function trocarFoto(token, dadosUsuario) {
//     const fotoPerfil = document.querySelector('#profileIcon')

//     try {
//         const response = await fetch(`http://localhost:3000/planttool/v1//imagem/usuario/`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': "application/json"
//             },
//             body: JSON.stringify(data)
//         })
//     } catch (error) {
//         console.log(error)
//     }
// }