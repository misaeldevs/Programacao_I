/*Questão 4. Faça um programa que lê quatro valores: n, A, B e C, onde n é um número inteiro e positivo e A, B, e C são quaisquer valores reais. 
O programa deve escrever os valores lidos e: se n = 1, escrever os três valores A, B e C em ordem crescente; 
se n = 2, apresentar o somatório dos três valores; 
se n = 3, escrever o maior entre os três valores; 
se n não for um dos três valores acima, dar uma mensagem informando.
 */

const prompt = require('prompt-sync')()
let n = parseInt(prompt('Digite um número inteiro positivo: '))

if (n == 1) {
    let A = parseFloat(prompt('Digite um número: '))
    let B = parseFloat(prompt('Digite um número: '))
    let C = parseFloat(prompt('Digite um número: '))

    if (A > B && A > C) {
        if (B > C) {
            console.log(C, B, A)
        } else {
            console.log(B, C, A)
        }
    } else if (A < B && A < C) {
        if (B > C) {
            console.log(A, C, B)
        } else {
            console.log(A, B, C)
        }
    } else if (B > A && B > C) {
        if (A > C) {
            console.log(C, A, B)
        } else {
            console.log(A, C, B)
        }
    } else {
        console.log(B, A, C)
    }
} else if (n == 2) {
    let A = parseInt(prompt('Digite um número: '))
    let B = parseInt(prompt('Digite um número: '))
    let C = parseInt(prompt('Digite um número: '))
    console.log(A + B + C)
} else if (n == 3) {
    let A = parseInt(prompt('Digite um número: '))
    let B = parseInt(prompt('Digite um número: '))
    let C = parseInt(prompt('Digite um número: '))

    if (A > B && A > C) {
        console.log(A)
    }
    if (B > A && B > C) {
        console.log(B)
    } else if (C > A && C > B) {
        console.log(C)
    }
} else {
    console.log('Opção Inválida!')
}