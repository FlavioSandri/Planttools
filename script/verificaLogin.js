// --- Constantes e seletores
export const token = JSON.parse(localStorage.getItem("token"));
export const usuario = JSON.parse(localStorage.getItem("dadosUsuario"));

const img = document.querySelector("#profileIcon");
const dropDown = document.querySelector("#profileDropdown");
const mudarRota = document.querySelector("#entrar");

// --- Inicialização
window.addEventListener("DOMContentLoaded", init);

function init() {
  const logado = token && usuario;

  console.log(logado ? "Usuário logado" : "Usuário não logado");

  if (!logado) return;

  mudarRota.innerHTML = '<i class="fas fa-user" id="icon"></i> Perfil';
  mudarRota.href = "/page/perfil/perfil.html";
  criarBotaoSair();
}


// --- Função: criar botão "Sair"
function criarBotaoSair() {
  const btn = Object.assign(document.createElement("a"), {
    textContent: "Sair",
    href: "#",
    className: "dropdown-item",
    style: "color: red;",
  });

  btn.addEventListener("click", () => {
    if (confirm("Tem certeza que deseja sair?")) {
      localStorage.removeItem("token");
      localStorage.removeItem("dadosUsuario");
      location.reload();
    }
  });

  dropDown.appendChild(btn);
}
