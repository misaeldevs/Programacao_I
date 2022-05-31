/*Questão 05.Leia 10 números inteiros e armazene em um array. 
Em seguida escreva os elementos que são primos e suas respectivas posições no array.
 */

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let n = 10
let numerosPrimos = new Array()
for (let i = 2; i < n; i++) {
    let qtdeDivisores = 0

    for (let b = 2; b < i; b++) {
        if (i % b == 0) {
            qtdeDivisores++
        }
    }

    if (qtdeDivisores % i == 0) {
        numerosPrimos.push(i[i])
    }
}

console.log(numerosPrimos)