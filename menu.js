var funcionarios = {}; // Objeto para armazenar a quantidade de entradas e saídas de cada funcionário

function registrar(acao) {
    var nome = document.getElementById("nome").value.trim();
    if (nome === "") {
        alert("Por favor, insira o nome do funcionário.");
        return;
    }

    // Verificar se o funcionário já está registrado, senão, criar um novo registro
    if (!funcionarios[nome]) {
        funcionarios[nome] = { entradas: {}, saidas: {} };
    }

    // Obter o mês atual
    var mesAtual = new Date().toLocaleString('pt-br', { month: 'long' }).toLowerCase();

    // Registrar a entrada ou saída do funcionário e atualizar os registros
    if (acao === 'entrada') {
        if (!funcionarios[nome].entradas[mesAtual]) {
            funcionarios[nome].entradas[mesAtual] = 0;
        }
        funcionarios[nome].entradas[mesAtual]++;
    } else {
        if (!funcionarios[nome].saidas[mesAtual]) {
            funcionarios[nome].saidas[mesAtual] = 0;
        }
        funcionarios[nome].saidas[mesAtual]++;
    }
    atualizarGraficoEntradasSaidasPorFuncionario();

    var atividade = (acao === "entrada") ? "Entrada" : "Saída";
    var timestamp = new Date();
    var logEntry = `<li>${atividade} de ${nome} - ${timestamp.toLocaleString()}</li>`;
    document.getElementById("atividades").innerHTML += logEntry;

    // Limpar o campo de nome após o registro
    document.getElementById("nome").value = "";

    // Agendar a limpeza da lista após 10 segundos
    setTimeout(function() {
        document.getElementById("atividades").innerHTML = "";
    }, 10000); // 10000 milissegundos = 10 segundos
}

function atualizarGraficoEntradasSaidasPorFuncionario() {
    var ctx = document.getElementById('entradasSaidasPorFuncionario').getContext('2d');

    // Criar objetos para armazenar as entradas e saídas de cada mês
    var entradasPorMes = {};
    var saidasPorMes = {};

    // Percorrer os registros de funcionários e contabilizar as entradas e saídas de cada mês
    for (var nome in funcionarios) {
        for (var mes in funcionarios[nome].entradas) {
            if (!entradasPorMes[mes]) entradasPorMes[mes] = 0;
            entradasPorMes[mes] += funcionarios[nome].entradas[mes];
        }
        for (var mes in funcionarios[nome].saidas) {
            if (!saidasPorMes[mes]) saidasPorMes[mes] = 0;
            saidasPorMes[mes] += funcionarios[nome].saidas[mes];
        }
    }

    // Obter os meses e ordená-los
    var meses = Object.keys(entradasPorMes).sort();

    // Obter os dados de entrada e saída para cada mês
    var dataEntradas = meses.map(function(mes) { return entradasPorMes[mes]; });
    var dataSaidas = meses.map(function(mes) { return saidasPorMes[mes]; });

    // Verificar se o gráfico já existe, se sim, atualizar os dados
    if (window.myChart) {
        window.myChart.data.labels = meses;
        window.myChart.data.datasets[0].data = dataEntradas;
        window.myChart.data.datasets[1].data = dataSaidas;
        window.myChart.update();
    } else {
        // Caso contrário, criar um novo gráfico
        window.myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: meses,
                datasets: [{
                    label: 'Entradas',
                    data: dataEntradas,
                    backgroundColor: 'rgba(75, 192, 192, 0.5)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                },
                {
                    label: 'Saídas',
                    data: dataSaidas,
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
}
