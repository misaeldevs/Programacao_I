/*Elaborar um programa que leia  valores positivos inteiros até que um  número negativo seja informado. 
Ao  final deve ser apresentado a soma  dos valores informados pelo usuário.
 */

const prompt = require('prompt-sync')()
let numbers = 0
let sumNumbers = 0

while (numbers >= 0) {
    numbers = parseInt(prompt('Digite um número inteiro: '))
    if (numbers >= 0) {
        sumNumbers += numbers
    }
}
console.log(sumNumbers)