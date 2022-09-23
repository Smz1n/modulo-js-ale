let lista_tarefas = [];

function atualizarQuantidade() {
    document.getElementById('numeros').innerHTML = lista_tarefas.length;
}

function listarTarefas() {
    let conteudo = lista_tarefas.sort().map(function (tarefa) {
        return `
    <div>
        <input type="checkbox"> ${tarefa}
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

    if


    lista_tarefas.push(titulo);

    document.getElementById('input_nova_tarefa').value = '';


    atualizarQuantidade();
    listarTarefas();
}
