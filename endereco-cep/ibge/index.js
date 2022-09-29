fetch('https://servicodados.ibge.gov.br/api/v1/localidades/regioes')
    .then((resposta) => resposta.json())
    .then((regioes) => {
        regioes.forEach( (cadaRegiao) => {
            document.getElementById('regiao').innerHTML += `
            <option value="${cadaRegiao.id}">${cadaRegiao.nome}</option>
            `;
        });
    });

// Funções para aparecer nos campos selecionados: região, Estado e cidade

function escolhaRegiao() {
        let estadoSelec = regiao.value;
fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/regioes/${estadoSelec}/estados`)
    .then( (resposta) => resposta.json() )
    .then( (estados) => {
        estados.innerHTML = `<option> -- Selecione -- </option>`
        estados.forEach( (cadaEstado) => {
            document.getElementById('estado').innerHTML += `
                <option value="${cadaEstado.id}">${cadaEstado.nome}</option>
            `;
        });
    });
}

function escolhaEstado () {
    let cidadeSelec = estado.value;
fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${cidadeSelec}/municipios`)
.then( (resposta) => resposta.json() )
.then( (cidades) => {
    cidades.innerHTML = `<option> -- Selecione -- </option>`
    cidades.forEach( (cadaCidade) => {
        document.getElementById('cidade').innerHTML += `
            <option value="${cadaCidade.id}">${cadaCidade.nome}</option>
        `;
    });
});
}




