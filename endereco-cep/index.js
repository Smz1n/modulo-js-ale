function buscarEndereco() {
    if (cep.value.length !== 8) {
        return;
    }

    fetch(`https://viacep.com.br/ws/${cep.value}/json`) //aqui e realizado a busca
    .then((resposta) => resposta.json()) //quando a resposta chega a gente extrai o json dela
    .then((endereco) => {
        logradouro.value = endereco.logradouro;
        bairro.value = endereco.bairro;
        cidade.value = endereco.localidade;
        uf.value = endereco.uf;    
    }); //aqui a gente usa o Json extraido da resposta
}