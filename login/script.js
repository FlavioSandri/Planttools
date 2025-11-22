// Sistema SIMPLES de login/cadastro
document.addEventListener('DOMContentLoaded', function() {
  console.log('=== SISTEMA DE LOGIN INICIADO ===');
  
  // Elementos principais
  const formActive = document.getElementById('formActive');
  const illustrationTitle = document.getElementById('illustrationTitle');
  const illustrationText = document.getElementById('illustrationText');
  const switchBtn = document.getElementById('switchIllustrationBtn');
  const switchBtnText = document.getElementById('switchBtnText');
  
  // Templates
  const loginTemplate = document.getElementById('loginTemplate');
  const signupTemplate = document.getElementById('signupTemplate');
  
  // Estado atual (começa com login)
  let currentForm = 'login';
  
  // Carrega o formulário inicial
  loadForm('login');
  
  // Função para carregar formulário
  function loadForm(formType) {
    console.log('Carregando formulário:', formType);
    
    // Limpa o container
    formActive.innerHTML = '';
    
    // Escolhe o template correto
    const template = formType === 'login' ? loginTemplate : signupTemplate;
    const formContent = template.content.cloneNode(true);
    
    // Adiciona ao container
    formActive.appendChild(formContent);
    
    // Atualiza a ilustração
    updateIllustration(formType);
    
    // Configura o evento do formulário
    const form = formActive.querySelector('form');
    if (form) {
      form.addEventListener('submit', handleFormSubmit);
    }
    
    currentForm = formType;
    console.log('Formulário carregado com sucesso!');
  }
  
  // Atualiza a ilustração lateral
  function updateIllustration(formType) {
    if (formType === 'login') {
      illustrationTitle.textContent = 'Bem-vindo de volta!';
      illustrationText.textContent = 'Entre na sua conta e continue cuidando das suas plantas';
      switchBtnText.textContent = 'Criar uma conta';
    } else {
      illustrationTitle.textContent = 'Novo por aqui?';
      illustrationText.textContent = 'Cadastre-se e comece sua jornada no cultivo de plantas';
      switchBtnText.textContent = 'Fazer login';
    }
  }
  
  // Manipula o envio do formulário
  function handleFormSubmit(e) {
    e.preventDefault();
    console.log('Formulário enviado:', currentForm);
    
    const form = e.target;
    const inputs = form.querySelectorAll('input[required]');
    let isValid = true;
    
    // Validação básica
    inputs.forEach(input => {
      if (!input.value.trim()) {
        isValid = false;
        input.style.borderColor = '#e74c3c';
      } else {
        input.style.borderColor = '';
      }
    });
    
    // Validação de senha no cadastro
    if (currentForm === 'signup') {
      const password = document.getElementById('Senha');
      const confirmPassword = document.getElementById('ConfirmarSenha');
      
      if (password && confirmPassword && password.value !== confirmPassword.value) {
        isValid = false;
        password.style.borderColor = '#e74c3c';
        confirmPassword.style.borderColor = '#e74c3c';
        alert('⚠️ As senhas não coincidem!');
      }
    }
    
    if (isValid) {
      submitForm(form);
    }
  }
  
  // Processa o formulário
  function submitForm(form) {
    const submitBtn = form.querySelector('.login-btn');
    const originalText = submitBtn.innerHTML;
    
    // Mostra loading
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processando...';
    submitBtn.disabled = true;
    
    // Simula envio (2 segundos)
    setTimeout(() => {
      // Restaura botão
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
      
      // Sucesso!
      if (currentForm === 'login') {
        console.log('✅ Login realizado!');
        alert('🎉 Login realizado com sucesso!');
        // window.location.href = '/dashboard.html';
      } else {
        console.log('✅ Cadastro realizado!');
        alert('🎉 Conta criada com sucesso!');
        // Volta para o login após cadastro
        setTimeout(() => loadForm('login'), 1000);
      }
    }, 2000);
  }
  
  // Evento do botão de troca
  switchBtn.addEventListener('click', function() {
    console.log('Botão de troca clicado!');
    
    // Alterna entre login e cadastro
    const nextForm = currentForm === 'login' ? 'signup' : 'login';
    loadForm(nextForm);
  });
  
  // Debug final
  console.log('=== SISTEMA PRONTO ===');
  console.log('Elementos encontrados:');
  console.log('- Form Active:', formActive);
  console.log('- Switch Button:', switchBtn);
  console.log('- Templates:', loginTemplate, signupTemplate);
});