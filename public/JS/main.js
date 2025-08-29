// Espera o conteúdo da página carregar completamente antes de executar o script
document.addEventListener('DOMContentLoaded', () => {
    
    // Pega os elementos do HTML com os quais vamos interagir
    const formAgendamento = document.getElementById('formAgendamento');
    const listaAgendamentos = document.getElementById('listaAgendamentos');

    // Carrega os agendamentos salvos no navegador. Se não houver nenhum, cria uma lista vazia.
    const agendamentos = JSON.parse(localStorage.getItem('agendamentosOficina')) || [];

    // Função para mostrar os agendamentos na tela
    const renderizarAgendamentos = () => {
        listaAgendamentos.innerHTML = ''; // Limpa a lista antes de adicionar os itens
        
        // Ordena os agendamentos por data e hora antes de exibi-los
        agendamentos.sort((a, b) => new Date(a.data + 'T' + a.hora) - new Date(b.data + 'T' + b.hora));

        agendamentos.forEach((agendamento, index) => {
            const li = document.createElement('li');
            li.className = 'agendamento-item';

            // Formata a data para o padrão brasileiro (dd/mm/aaaa)
            const dataObj = new Date(agendamento.data + 'T00:00:00'); // Adiciona T00:00 para evitar problemas de fuso horário
            const dataFormatada = dataObj.toLocaleDateString('pt-BR');

            li.innerHTML = `
                <p><strong>Data:</strong> ${dataFormatada}</p>
                <p><strong>Horário:</strong> ${agendamento.hora}</p>
                <p><strong>Descrição:</strong> ${agendamento.descricao}</p>
                <button class="delete-btn" data-index="${index}">Concluído</button>
            `;
            listaAgendamentos.appendChild(li);
        });
    };

    // Adiciona um "ouvinte" para o evento de envio do formulário
    formAgendamento.addEventListener('submit', (e) => {
        e.preventDefault(); // Impede que a página recarregue ao enviar

        // Cria um objeto com os dados do novo agendamento
        const novoAgendamento = {
            data: document.getElementById('data').value,
            hora: document.getElementById('hora').value,
            descricao: document.getElementById('descricao').value
        };

        agendamentos.push(novoAgendamento); // Adiciona na lista
        localStorage.setItem('agendamentosOficina', JSON.stringify(agendamentos)); // Salva no navegador
        renderizarAgendamentos(); // Atualiza a exibição na tela
        formAgendamento.reset(); // Limpa o formulário
    });

    // Adiciona um "ouvinte" para cliques na lista de agendamentos
    listaAgendamentos.addEventListener('click', (e) => {
        // Verifica se o clique foi no botão de deletar
        if (e.target.classList.contains('delete-btn')) {
            const index = e.target.getAttribute('data-index'); // Pega o índice do item a ser removido
            agendamentos.splice(index, 1); // Remove o item da lista
            localStorage.setItem('agendamentosOficina', JSON.stringify(agendamentos)); // Salva a lista atualizada
            renderizarAgendamentos(); // Atualiza a exibição na tela
        }
    });

    // Exibe os agendamentos já salvos assim que a página carrega
    renderizarAgendamentos();
});

// Espera o conteúdo da página carregar completamente antes de executar o script
document.addEventListener('DOMContentLoaded', () => {

    // =========== NOVO: LÓGICA DO MENU SANDUÍCHE ===========
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navMenu = document.getElementById('nav-menu');

    hamburgerBtn.addEventListener('click', () => {
        // Adiciona ou remove a classe 'active' do botão e do menu
        hamburgerBtn.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    // ========================================================


    // Pega os elementos do HTML com os quais vamos interagir
    const formAgendamento = document.getElementById('formAgendamento');
    const listaAgendamentos = document.getElementById('listaAgendamentos');

    // Carrega os agendamentos salvos no navegador. Se não houver nenhum, cria uma lista vazia.
    const agendamentos = JSON.parse(localStorage.getItem('agendamentosOficina')) || [];

    // Função para mostrar os agendamentos na tela
    const renderizarAgendamentos = () => {
        listaAgendamentos.innerHTML = ''; // Limpa a lista antes de adicionar os itens
        
        // Ordena os agendamentos por data e hora antes de exibi-los
        agendamentos.sort((a, b) => new Date(a.data + 'T' + a.hora) - new Date(b.data + 'T' + b.hora));

        agendamentos.forEach((agendamento, index) => {
            const li = document.createElement('li');
            li.className = 'agendamento-item';

            // Formata a data para o padrão brasileiro (dd/mm/aaaa)
            const dataObj = new Date(agendamento.data + 'T00:00:00'); // Adiciona T00:00 para evitar problemas de fuso horário
            const dataFormatada = dataObj.toLocaleDateString('pt-BR');

            li.innerHTML = `
                <p><strong>Data:</strong> ${dataFormatada}</p>
                <p><strong>Horário:</strong> ${agendamento.hora}</p>
                <p><strong>Descrição:</strong> ${agendamento.descricao}</p>
                <button class="delete-btn" data-index="${index}">Concluído</button>
            `;
            listaAgendamentos.appendChild(li);
        });
    };

    // Adiciona um "ouvinte" para o evento de envio do formulário
    formAgendamento.addEventListener('submit', (e) => {
        e.preventDefault(); // Impede que a página recarregue ao enviar

        // Cria um objeto com os dados do novo agendamento
        const novoAgendamento = {
            data: document.getElementById('data').value,
            hora: document.getElementById('hora').value,
            descricao: document.getElementById('descricao').value
        };

        agendamentos.push(novoAgendamento); // Adiciona na lista
        localStorage.setItem('agendamentosOficina', JSON.stringify(agendamentos)); // Salva no navegador
        renderizarAgendamentos(); // Atualiza a exibição na tela
        formAgendamento.reset(); // Limpa o formulário
    });

    // Adiciona um "ouvinte" para cliques na lista de agendamentos
    listaAgendamentos.addEventListener('click', (e) => {
        // Verifica se o clique foi no botão de deletar
        if (e.target.classList.contains('delete-btn')) {
            const index = e.target.getAttribute('data-index'); // Pega o índice do item a ser removido
            agendamentos.splice(index, 1); // Remove o item da lista
            localStorage.setItem('agendamentosOficina', JSON.stringify(agendamentos)); // Salva a lista atualizada
            renderizarAgendamentos(); // Atualiza a exibição na tela
        }
    });

    // Exibe os agendamentos já salvos assim que a página carrega
    renderizarAgendamentos();
});

