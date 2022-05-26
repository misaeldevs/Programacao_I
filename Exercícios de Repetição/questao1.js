/* Escreva um programa para realizar a soma de n  números considerando a fórmula a seguir. O usuário  deve digitar o limite superior (n). */

const prompt = require('prompt-sync')();

let numeroLimite = prompt('Insira a quantidade de números que serão somados: ')

let somaTotal = 0;

for (let indice = 1; indice <= numeroLimite; indice++) {
    somaTotal += (2 * indice + 5 * indice) ** 2
}
console.log(somaTotal)