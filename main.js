// Função para exibir/ocultar detalhes adicionais nos cards de temas
function toggleDetalhes(idElemento) {
    const elemento = document.getElementById(idElemento);
    if (elemento) {
        elemento.classList.toggle('escondido');
    }
}

// Log simples ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    console.log("Portal da Sustentabilidade carregado com sucesso.");
});
