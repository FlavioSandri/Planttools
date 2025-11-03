export function mostrarNotificacao(mensagem, tipo = "info", duracao = 3000) {
  // Cria o container se não existir
  let container = document.getElementById("notificacoes-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "notificacoes-container";
    document.body.appendChild(container);
  }

  // Cria a notificação
  const notificacao = document.createElement("div");
  notificacao.className = `notificacao ${tipo}`;
  notificacao.textContent = mensagem;

  // Adiciona no container
  container.appendChild(notificacao);

  // Anima a entrada
  setTimeout(() => notificacao.classList.add("visivel"), 10);

  // Remove após o tempo definido
  setTimeout(() => {
    notificacao.classList.remove("visivel");
    setTimeout(() => notificacao.remove(), 300);
  }, duracao);
}