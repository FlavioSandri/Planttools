window.addEventListener('DOMContentLoaded', () => {
    const dados = JSON.parse(localStorage.getItem('dados'))

    console.log(`${!dados ? 'sem dados no localStorage':'Dados pegos'}`)
})