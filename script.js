
const adicionar = document.querySelector('.add');
const cliente = document.getElementById('cliente');

var fechar = document.getElementById('close');


adicionar.addEventListener('click', () => {
    cliente.style.display = 'block';
    cliente.style.animation = '';
});

fechar.addEventListener('click', () => {
    cliente.style.display = 'none';
});

const botaoCadastrar = document.getElementById('btn-cadastro');

const containerClientes = document.getElementById('clientes_Cadastrados');


botaoCadastrar.addEventListener('click', (event) => {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;
    const cpf = document.getElementById('cpf').value;
    const rg = document.getElementById('rg').value;

    if (!nome || !cpf || !rg) {
        alert('Por favor, preencha todos os campos obrigatórios!');
        return;
    }

    const novoCliente = document.createElement('div');
    novoCliente.classList.add('items');

    novoCliente.innerHTML = `
        <h1>Nome:</h1>
        </br>
        <label> ${nome} ${sobrenome}  </label>
        </br>
        <h1>CPF:</h1></br>
        <label> ${cpf}</label>
        <h1>RG:</h1></br>
        <label> ${rg}</label>
    `;

    containerClientes.appendChild(novoCliente);

    cliente.style.display = 'none';
    document.getElementById('cadastroForm').reset();
});






