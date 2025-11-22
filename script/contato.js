// Funcionalidades específicas para a página de contatos
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  const submitBtn = contactForm?.querySelector('.submit-btn');
  
  // Validação e envio do formulário
  if (contactForm && submitBtn) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Validar formulário
      if (validateForm()) {
        // Simular envio
        simulateFormSubmission();
      }
    });
  }
  
  // Validação do formulário
  function validateForm() {
    const inputs = contactForm.querySelectorAll('input[required], textarea[required], select[required]');
    let isValid = true;
    
    inputs.forEach(input => {
      if (!input.value.trim()) {
        showError(input, 'Este campo é obrigatório');
        isValid = false;
      } else {
        clearError(input);
      }
      
      // Validação específica para email
      if (input.type === 'email' && input.value.trim()) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(input.value)) {
          showError(input, 'Por favor, insira um email válido');
          isValid = false;
        }
      }
    });
    
    return isValid;
  }
  
  function showError(input, message) {
    clearError(input);
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    errorDiv.style.cssText = `
      color: #e74c3c;
      font-size: 0.8rem;
      margin-top: 5px;
      font-weight: 500;
    `;
    
    input.parentNode.appendChild(errorDiv);
    input.style.borderColor = '#e74c3c';
    input.style.background = 'rgba(231, 76, 60, 0.05)';
  }
  
  function clearError(input) {
    const errorDiv = input.parentNode.querySelector('.error-message');
    if (errorDiv) {
      errorDiv.remove();
    }
    input.style.borderColor = '';
    input.style.background = '';
  }
  
  function simulateFormSubmission() {
    // Mostrar estado de loading
    submitBtn.classList.add('loading');
    submitBtn.innerHTML = '<i class="fas fa-spinner"></i> Enviando...';
    
    // Simular delay de envio
    setTimeout(() => {
      // Mostrar mensagem de sucesso
      showSuccessMessage();
      
      // Resetar formulário
      contactForm.reset();
      
      // Restaurar botão
      submitBtn.classList.remove('loading');
      submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Enviar Mensagem';
    }, 2000);
  }
  
  function showSuccessMessage() {
    // Criar elemento de sucesso
    const successDiv = document.createElement('div');
    successDiv.className = 'form-success show';
    successDiv.innerHTML = `
      <i class="fas fa-check-circle"></i>
      <h4>Mensagem Enviada com Sucesso!</h4>
      <p>Obrigado pelo seu contato. Retornaremos em breve.</p>
    `;
    
    // Inserir antes do formulário
    contactForm.parentNode.insertBefore(successDiv, contactForm);
    
    // Remover após 5 segundos
    setTimeout(() => {
      successDiv.remove();
    }, 5000);
  }
  
  // Animações específicas para elementos de contato
  const contactMethods = document.querySelectorAll('.contact-method');
  contactMethods.forEach(method => {
    method.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-8px)';
    });
    
    method.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
  
  // Efeito de foco nos inputs
  const formInputs = document.querySelectorAll('.form-group input, .form-group textarea, .form-group select');
  formInputs.forEach(input => {
    input.addEventListener('focus', function() {
      this.parentNode.classList.add('focused');
    });
    
    input.addEventListener('blur', function() {
      if (!this.value) {
        this.parentNode.classList.remove('focused');
      }
    });
  });
});

// Footer animations (opcional)
document.addEventListener('DOMContentLoaded', function() {
  // Observa quando o footer entra na viewport
  const footer = document.querySelector('.apple-footer');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
      }
    });
  }, { threshold: 0.1 });
  
  if (footer) {
    observer.observe(footer);
  }
  
  // Smooth scroll para links do footer
  document.querySelectorAll('.footer-link[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});