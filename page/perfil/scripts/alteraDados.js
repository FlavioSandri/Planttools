document.addEventListener('DOMContentLoaded', () => {
    const token = JSON.parse(localStorage.getItem('token'))
    const dados = JSON.parse(localStorage.getItem('dadosUsuario'))
    alterarDadosUsuario(token, dados)
})

function alterarDadosUsuario(token, dadosAlterados) {
    const containerPlantas = document.querySelector('#plants-grid')
    const containerPosts = document.querySelector('#posts-salvos')
    const containerReceitas = document.querySelector('#receitas')
    const containerSettings = document.querySelector('#configuracoes')

    const nome = document.querySelector('#user')
    const email = document.querySelector('#email')
    const infoPessoais = document.querySelector('#info-pessoais')
    const estatisticas = document.querySelector('#estatisticas')
    

    nome.textContent = dadosAlterados.user_nome
    email.textContent = dadosAlterados.user_email

    infoPessoais.innerHTML = `
        <h3>Informações Básicas</h3>
        <p><strong>Nome:</strong> ${dadosAlterados.user_nome}</p>
        <p><strong>Email:</strong> ${dadosAlterados.user_email}</p>
        <p><strong>Telefone:</strong> (11) 99999-9999</p>
        <p><strong>Localização:</strong> São Paulo, SP</p>
    `

    estatisticas.innerHTML = `
        <h3>Estatísticas</h3>
        <p><strong>Plantas: ${containerPlantas.childElementCount}</strong> </p>
        <p><strong>Posts Salvos: ${containerPosts.childElementCount}</strong></p>
        <p><strong>Receitas salvas: ${containerReceitas.childElementCount}</strong></p>
    `

    containerSettings.innerHTML = `
         <div class="form-group">
                        <label for="nome" >Nome Completo</label>
                        <input type="text" id="nome" value="${dadosAlterados.user_nome}">
                    </div>
                    
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" value="${dadosAlterados.user_email}">
                    </div>

                    <div class="form-group">
                        <label for="telefone">Telefone</label>
                        <input type="tel" id="telefone" value="(11) 99999-9999">
                    </div>
                    
                    <div class="form-group">
                        <label for="localizacao">Localização</label>
                        <input type="text" id="localizacao" value="São Paulo, SP">
                    </div>
                    
                    <div class="form-group">
                        <label for="interesses">Interesses</label>
                        <textarea id="interesses" rows="3">Plantas ornamentais, Jardinagem interna, Suculentas, Hortaliças, Plantas medicinais</textarea>
                    </div>
                    
                    <div class="form-group">
                        <label for="notificacoes">Notificações</label>
                        <select id="notificacoes">
                            <option>Receber todas as notificações</option>
                            <option>Somente notificações importantes</option>
                            <option>Não receber notificações</option>
                        </select>
                    </div>

                    <button class="save-btn">
                        <i class="fas fa-save"></i> Salvar Alterações
                    </button>
    `
}