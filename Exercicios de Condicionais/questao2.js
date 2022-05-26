/*Questão 02. Uma agência bancária possui dois tipos de investimentos. 
Faça um algoritmo que receba o tipo de investimento e seu valor e que calcule e mostre o valor corrigido, de acordo com o tipo de investimento.
Faça o tratamento com a impressão de uma mensagem “Tipo de Investimento inválido!” caso o usuário digite um tipo de investimento inexistente. 
 */
const prompt = require('prompt-sync')()
let tipoInvestimento = prompt('Informe o tipo de investimento (1) Poupança: (2) Fundo de Renda Fixa: ')
let valorInvestido = prompt('Informe o valor a ser investido: ')
let valorCorrigido

if (tipoInvestimento == 1) {
    valorCorrigido = valorInvestido * 1.03
    console.log(`O tipo de investimento foi ${tipoInvestimento}, Poupança e o valor investido foi de R$${valorInvestido}, o qual corrigido fica em R$${valorCorrigido}`)
} else if (tipoInvestimento == 2) {
    valorCorrigido = valorInvestido * 1.04
    console.log(`O tipo de investimento foi ${tipoInvestimento}, Fundo de Renda Fixa e o valor investido foi de R$${valorInvestido}, o qual corrigido fica em R$${valorCorrigido}`)
} else {
    console.log('Tipo de Investimento Inválido!')
}

// switch (tipoInvestimento) {
//     case 1:
//         valorCorrigido = valorInvestido + (valorInvestido * (3 / 100))
//         console.log(valorCorrigido)
//         break;
//     case 2:
//         valorCorrigido = valorInvestido + (valorInvestido * 1.04)
//         break;
//     default:
//         //console.log('Tipo de Investimento Inválido!')
// }