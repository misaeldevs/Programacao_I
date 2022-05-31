/*Questão 02. Ler uma sequência de números reais e armazená-los. Determinar o maior elemento dessa sequência. 
A sequência termina quando for digitado o número (0) zero. Ao final, imprimir o vetor resultante.  */

const prompt = require('prompt-sync')()

let numeroInserido = 1
let numerosReais = []
let maiorNumero = 0

while (numeroInserido != 0) {
    numeroInserido = parseFloat((prompt('Digite um número real qualquer: ')))
    numerosReais.push(numeroInserido)
}

for (let i = 0; i < numerosReais.length; i++) {
    if (numerosReais[i] > maiorNumero) {
        maiorNumero = numerosReais[i]
    }
}

console.log(maiorNumero)
console.log(numerosReais)