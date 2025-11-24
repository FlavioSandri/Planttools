// --- Constantes e seletores
export const token = JSON.parse(localStorage.getItem("token"));
export const usuario = JSON.parse(localStorage.getItem("dadosUsuario"));
// export getters para sempre ler o valor atual do localStorage
export function getToken() { return JSON.parse(localStorage.getItem("token")); }
export function getUsuario() { return JSON.parse(localStorage.getItem("dadosUsuario")); }

// --- Inicialização
window.addEventListener("DOMContentLoaded", init);

function init() {
  const token = getToken();
  const usuario = getUsuario();

  // procura elementos usando os nomes que existem no index.html
  const profileContainer = document.querySelector('.profile-container');
  const dropDown = profileContainer?.querySelector('.profile-dropdown') || document.querySelector('#profileDropdown');
  const mudarRota = document.getElementById('#entrar') || dropDown?.querySelector('#entrar');
  console.log(mudarRota);

  if (!mudarRota || !dropDown) {
    console.warn('Seletores de perfil não encontrados:', { mudarRota, dropDown });
    return;
  }
  
  
  mudarRota.innerHTML = '<i class="fas fa-user" id="icon"></i> Perfil';
  mudarRota.href = '/page/perfil/perfil.html';
  
  const logado = token && usuario;
  console.log(logado ? "Usuário logado" : "Usuário não logado");

  if (!logado) return;

  criarBotaoSair(dropDown);
}


// --- Função: criar botão "Sair"
function criarBotaoSair(dropDownEl) {
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

  dropDownEl.appendChild(btn);
}
