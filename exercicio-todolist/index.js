
function atualizarQuantidade() {
    document.getElementById('numeros').innerHTML = buscar().length;
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

    let titulos = buscar().map((tarefa) => {
        return tarefa ? tarefa.titulo : "";
    });

    let existe = false;
    titulos.forEach((f) => {
        if (true === f.includes(titulo)){
            existe = true;
            return;
        }
    });

    if(existe == false) {
        salvar(titulo, input_prioridade.value);
    }else{
        alert('Tarefa já existe')
    }

    document.getElementById('input_nova_tarefa').value = '';


    atualizarQuantidade();
    listarTarefas();
}


// vai acontecer assim que o usuario entrar na pagina
listarTarefas();
atualizarQuantidade();