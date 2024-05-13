// arquivo: registro.js

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita o envio padrão do formulário

        // Validação dos campos
        const nome = document.getElementById('nome').value;
        const rg = document.getElementById('rg').value;
        const dataNascimento = document.getElementById('dataNascimento').value;
        const rua = document.getElementById('rua').value;
        const bairro = document.getElementById('bairro').value;
        const estado = document.getElementById('estado').value;
        const cidade = document.getElementById('cidade').value;
        const cep = document.getElementById('cep').value;
        const telefone = document.getElementById('telefone').value;

        

        // Exemplo de validação simples (apenas verifica se os campos estão preenchidos)
        if (!nome || !rg || !dataNascimento || !rua || !bairro || !estado || !cidade || !cep || !telefone) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        // Se todos os campos estiverem preenchidos, você pode enviar o formulário aqui
        // Por exemplo, você pode fazer uma requisição AJAX para enviar os dados para o servidor
        // Ou pode redirecionar o usuário para outra página usando window.location.href = 'outra_pagina.html';
        
        // Neste exemplo, vou apenas exibir os dados no console para fins de demonstração
        console.log('Nome:', nome);
        console.log('RG:', rg);
        console.log('Data de Nascimento:', dataNascimento);
        console.log('Rua:', rua);
        console.log('Bairro:', bairro);
        console.log('Estado:', estado);
        console.log('Cidade:', cidade);
        console.log('CEP:', cep);
        console.log('Telefone:', telefone);

        // Aqui você pode fazer o que desejar com os dados, como enviar para um servidor, etc.
        // Por enquanto, só vou exibir uma mensagem de sucesso
        alert('Cadastro realizado com sucesso!');
        
        // Você também pode limpar o formulário após o envio
        form.reset();
    });
});
