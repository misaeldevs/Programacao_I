/*Questão 03. Faça um programa para controlar o estoque de mercadorias de uma empresa.Inicialmente o programa
 deverá ler dois vetores com 10 posições cada, onde o primeiro corresponde ao código do produto e o segundo 
 corresponde ao total desse produto em estoque. Logo após, o programa deverá ler um conjunto indeterminado de 
 dados contendo o código de um cliente, o código do produto que este deseja comprar, associado a quantidade. 
 Código do cliente igual a zero indica o fim do programa. O programa deverá verificar: 
• Se o código do produto solicitado existe. Se existir, tentar atender o pedido; caso contrário, exibir a mensagem
 Código inexistente. 
• Cada pedido feito por um cliente só pode ser atendido integralmente. Caso isso não seja possível, escrever a mensagem:
"Não temos estoque suficiente desta mercadoria". Se puder atendê-lo, escrever a mensagem: “Pedido atendido. 
Obrigado e volte sempre”; • Efetuar a atualização do estoque somente se o pedido for atendido integralmente; 
• No final do programa, imprimir os códigos dos produtos com seus respectivos estoques atualizados.
 */

const prompt = require('prompt-sync')()

let codigoInseridoCliente = 1
let codigoInseridoProduto = []
let codigoProduto = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let estoqueProduto = [100, 140, 250, 426, 130, 400, 365, 125, 141, 200]
let codigoCliente = []
let qtdeProdutos = []
let indice = 0

while (codigoInseridoCliente != 0) {
    codigoInseridoCliente = Number(prompt('Informe o código do cliente: '))
    codigoCliente.push(codigoInseridoCliente)
    if (codigoInseridoCliente == 0) break
    codigoInseridoProduto.push(prompt('Informe o código do produto: '))

    if (codigoInseridoProduto in codigoProduto) {
        for (let i = 0; i < codigoProduto.length; i++) {
            indice = codigoProduto[i]
        }
        qtdeProdutos = prompt('Informe a quantidade desejada: ')

        if (estoqueProduto[indice] - qtdeProdutos >= 0) {
            estoqueProduto -= qtdeProdutos
            console.log('Obrigado e volte sempre!')

            let i = 0

            while (i < codigoProduto.length) {
                console.log(codigoProduto[i], estoqueProduto[i])
                i += 1
            }

        } else {
            console.log('Não temos estoque suficiente dessa mercadoria.')
        }
    } else {
        console.log('Código inexistente!')
    }
}


// for (let i = 0; i < codigoProduto.length; i++) {

// }

// console.log(codigoProduto)
// console.log(codigoCliente)
// console.log(estoqueProduto)