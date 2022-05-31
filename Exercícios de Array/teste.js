var prompt = require('prompt-sync')();

let codigoClienteInserido = 1;
let codigoProdutoInserido = 1;
let quantidadeComprarInserida = 1;

const codigoProduto = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const estoqueProduto = [100, 140, 250, 426, 130, 400, 365, 125, 141, 200]

while (codigoClienteInserido !== 0) {
    codigoClienteInserido = Number(prompt("Qual o código do cliente: "))
    if (codigoClienteInserido === 0) break

    codigoProdutoInserido = Number(prompt("Qual o código do produto: "))
    if (!codigoProduto.includes(codigoProdutoInserido)) {
        console.log('Código inexistente.');
        break
    }

    let indiceProdutoInserido = codigoProduto.indexOf(codigoProdutoInserido)

    quantidadeComprarInserida = Number(prompt("Qual a quantidade desejada: "))

    if (estoqueProduto[indiceProdutoInserido] < quantidadeComprarInserida) {
        console.log('Não temos estoque suficiente desta mercadoria!')
        break;
    } else {
        console.log('Pedido atendido.  Obrigado e volte sempre')
        estoqueProduto[indiceProdutoInserido] -= quantidadeComprarInserida
    }

    codigoProduto.forEach((codigo) => {
        console.log(`ID: ${codigo} - ${estoqueProduto[codigo - 1]} unidades`);
    })

    console.log('');
}