document.getElementById('forgotPasswordForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var email = document.getElementById('email').value;
    setTimeout(function() {
        alert("Um e-mail de confirmação foi enviado para " + email);
        window.location.href = "index.html"; // Redirecionar para a página index.html
    }, 1000); 
});
