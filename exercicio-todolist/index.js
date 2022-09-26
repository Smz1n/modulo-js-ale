
function atualizarQuantidade() {
    document.getElementById('numeros').innerHTML = lista_tarefas.length;
}

function listarTarefas() {
    let conteudo = buscar().sort().map(function (tarefa) {
        return `
    <div>
        <input type="checkbox"> ${tarefa.titulo}

        <span class="badge  
        ${tarefa.prioridade === 'Baixa' && 'bg-primary'} 
        ${tarefa.prioridade === 'Media'  && 'bg-warning'}
        ${tarefa.prioridade === 'Alta' && 'bg-danger'}"
        >${tarefa.prioridade}
        </span>
    </div>
    `;
});

document.getElementById('tarefas').innerHTML = conteudo.join('');

}

function addTarefa() {
    event.preventDefault();

    let titulo = document.getElementById('input_nova_tarefa').value;

    if (titulo.trim() === ''){
        alert ('Tarefa invalida');
        return;
    }

    if(lista_tarefas.includes(titulo)) {
        alert ('Tarefa ja existe');
        return;
    }

    salvar(titulo, input_prioridade.value);

    document.getElementById('input_nova_tarefa').value = '';


    atualizarQuantidade();
    listarTarefas();
}


// vai acontecer assim que o usuario entrar na pagina
listarTarefas();