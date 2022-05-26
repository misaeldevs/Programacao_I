/*Questão 01. Um hotel cobra R$ 60.00 a diária e mais uma taxa de serviços. A taxa de serviços é de: 
🕐 R$ 5.50 por diária, se o número de diárias for maior que 15; 
🕐 R$ 6.00 por diária, se o número de diárias for igual a 15; 
🕐 R$ 8.00 por diária, se o número de diárias for menor que 15. 
Construa um programa que mostre o total da conta de um cliente, tendo como entrada a quantidade de diárias. 
 */

const prompt = require('prompt-sync')()
let qtdeDiarias = prompt('Informe a quantidade de diarias: ')
let valorDiaria = 60.00
let valorTotal

if (qtdeDiarias == 15) {
    valorTotal = valorDiaria * qtdeDiarias + qtdeDiarias * 6.00
} else if (qtdeDiarias < 15) {
    valorTotal = valorDiaria * qtdeDiarias + qtdeDiarias * 8.00
} else {
    valorTotal = valorDiaria * qtdeDiarias + qtdeDiarias * 5.50
}
console.log(valorTotal)