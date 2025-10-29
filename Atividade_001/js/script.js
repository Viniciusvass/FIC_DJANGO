// Mensagem simples de interatividade
function mostrarMensagem() {
    alert("Olá! Você clicou no botão da página inicial 😄");
}

// Validação do formulário de contato
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formContato");
    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            alert("Mensagem enviada com sucesso!");
            form.reset();
        });
    }
});
