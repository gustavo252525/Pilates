document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('paymentForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        if (validateForm()) {
            // Aqui você pode adicionar o código para enviar os dados do formulário para o servidor
            alert('Formulário enviado com sucesso!');
            form.reset();
        }
    });

    // Adicionando event listener para o botão de consulta
    const consultarBtn = document.getElementById('consultarBtn');
    consultarBtn.addEventListener('click', consultarPagamento);

    function validateForm() {
        let isValid = true;

        const rgInput = document.getElementById('rg');
        const valorInput = document.getElementById('valor');
        const dataInput = document.getElementById('data');

        const rgError = document.getElementById('rgError');
        const valorError = document.getElementById('valorError');
        const dataError = document.getElementById('dataError');

        if (rgInput.value.trim() === '') {
            rgError.style.display = 'block';
            isValid = false;
        } else {
            rgError.style.display = 'none';
        }

        if (isNaN(valorInput.value) || valorInput.value <= 0) {
            valorError.style.display = 'block';
            isValid = false;
        } else {
            valorError.style.display = 'none';
        }

        const today = new Date();
        const selectedDate = new Date(dataInput.value);

        if (selectedDate > today) {
            dataError.style.display = 'block';
            isValid = false;
        } else {
            dataError.style.display = 'none';
        }

        return isValid;
    }

    function consultarPagamento() {
        const consultaRgInput = document.getElementById('consultaRg');
        const consultaMessage = document.getElementById('consultaMessage');
    
        // Aqui você pode adicionar a lógica para consultar se o pagamento foi realizado
        // Por enquanto, vamos apenas exibir uma mensagem de exemplo
        const pago = Math.random() < 0.5; // Simula se o pagamento foi ou não realizado
    
        if (pago) {
            consultaMessage.textContent = 'O pagamento foi realizado.';
            consultaMessage.classList.add('pago');
            consultaMessage.classList.remove('nao-pago');
        } else {
            consultaMessage.textContent = 'O pagamento ainda não foi realizado.';
            consultaMessage.classList.add('nao-pago');
            consultaMessage.classList.remove('pago');
        }
    }
});
