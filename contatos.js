document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    const popup = document.getElementById("popup");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Previne o envio padrão do formulário

        // Exibe o pop-up de mensagem enviada
        popup.classList.add("show");

        // Define um temporizador para ocultar o pop-up após alguns segundos (opcional)
        setTimeout(function() {
            popup.classList.remove("show");
            form.reset(); // Limpa os campos do formulário
        }, 5000); // 5000 milissegundos = 5 segundos (ajuste conforme necessário)
    });
});
