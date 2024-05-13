document.addEventListener('DOMContentLoaded', function() {
    const userForm = document.getElementById('userForm');

    userForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const senha = document.getElementById('senha').value.trim();
        const confirmarSenha = document.getElementById('confirmarSenha').value.trim();

        if (!nome || !email || !senha || !confirmarSenha) {
            alert('Preencha todos os campos!');
            return;
        }

        if (senha !== confirmarSenha) {
            alert('As senhas não coincidem!');
            return;
        }

        // Aqui você pode adicionar a lógica para enviar os dados do formulário para o servidor

        // Exibir mensagem de sucesso em pop-up
        alert('Usuário cadastrado com sucesso!');

        // Limpar o formulário após o cadastro
        userForm.reset();
    });
});
