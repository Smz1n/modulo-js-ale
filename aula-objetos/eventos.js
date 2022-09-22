// let valor = 326.7896;

// document.write(
//     valor.toFixed(2)
// );


// let carro = {
//     cor: "vermelho",
//     modelo: "fusca",
//     acelerar: function (velocidade) {
//         console.log(velocidade +"vrum vrum...");
//         console.log(`${velocidade} vrum vrum...`);
//     },
//     frear: function () {
//         console.log("freando...");
//     }
// };

// carro.acelerar(100);
// carro.acelerar(150);


let aluno = {
    nome: "samuel",
    cpf: "088.625.253-97",
    dataDeNasc: "22/09/2003",
    endereco: {
    logradouro: 'estado do rio',
    numero: 23,
    cidade: ' fortaleza'

},
   frequentar: function() {
    console.log('presente professor');
    
},
concluirMatricula: function() {
    console.log('concluindo');
    return 'concluindo';

},
cancelarMatricula: function() {
    console.log('candelado');
}
};

document.write(aluno.nome);
document.write(aluno.endereco.cidade);

aluno.concluirMatricula();
aluno.frequentar();
