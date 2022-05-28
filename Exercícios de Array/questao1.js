/*Questão 01. Preencha um array de 10 posições com números aleatórios entre 20 e 60. 
Em seguida solicite um número ao usuário e conte quantas vezes o número aparece no array.  */

const prompt = require('prompt-sync')()
const numeros = [20, 22, 22, 35, 35, 35, 48, 48, 59, 60]
qtdeRepeticoes = 0
numeroRecebido = prompt('Insira um número entre 20 e 60: ')

for (let i = 0; i < numeros.length; i++) {
    if (numeroRecebido == numeros[i]) {
        qtdeRepeticoes += 1
    } else {

    }

}
console.log(`O número informado aparece ${qtdeRepeticoes} vezes no array.`)