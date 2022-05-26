/*Questão 03. (OBI, 2016) Dois amigos, Alice e Bob, estão jogando um jogo muito simples, em que um deles grita ou “par” ou “ímpar” 
e o outro imediatamente responde ao contrário, respectivamente “ímpar” ou “par”. Em seguida, ambos exibem ao mesmo tempo uma mão cada um, 
em que alguns dedos estão estendidos e outros dobrados. Então eles contam o número total de dedos estendidos. Se a soma for par, quem gritou “par” ganha. 
Se a soma for ímpar, quem gritou “ímpar” ganha. Por exemplo, suponhamos que a Alice gritou “par” e o Bob respondeu “ímpar”. Em seguida, 
Alice não deixou nenhum dos seus dedos estendidos, ao passo que Bob deixou três dedos estendidos. A soma então é três, que é ímpar, portanto Bob ganhou. 
Seu programa deve determinar quem ganhou, tendo a informação de quem gritou par e o número de dedos estendidos de cada um. 
Entrada: 
A entrada contém três linhas, cada uma com um número inteiro, P, D1 e D2, nesta ordem. Se P = 0 então Alice gritou “par”, ao passo que se P = 1 então
Bob gritou “par”. Os números D1 e D2 indicam, respectivamente, o número de dedos estendidos da Alice e do Bob. Saída: 
Seu programa deverá imprimir uma única linha, contendo um único número inteiro, que deve ser 0 se Alice foi a ganhadora, ou 1 se Bob foi o ganhador. 
Restrições: 
• P = 0 ou P = 1 • 0 ≤ D1 ≤ 5 • 0 ≤ D2 ≤ 5 
 */

const prompt = require('prompt-sync')()
let P = prompt('Informe 0 para Alice par ou 1 para Bob par:')
let D1 = Number(prompt('Informe um número de 0 a 5 para Alice:'))
let D2 = Number(prompt('Informe um número de 0 a 5 para Bob:'))
let soma = D1 + D2

if (soma % 2 == 0) {
    console.log(soma)
    if (P == 0) {
        console.log(0)
    } else {
        console.log(1)
    }
} else {
    if (P == 1) {
        console.log(0)
    } else {
        console.log(1)
    }
}