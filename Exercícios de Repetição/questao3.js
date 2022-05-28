/*Foi feita uma estatística em algumas capitais brasileiras para coletar dados sobre  acidentes de trânsito.
 Foram obtidos os seguintes dados:
- nome da cidade, números  de veículos, número de acidentes de trânsito com vítimas no ano. 
Finalizar o  programa quando o usuário não quiser 
mais permanecer na pesquisa. 
Deseja-se saber: 
a) qual o maior índice de acidentes e a qual cidade pertence; 
b) Qual a média de veículos nas cinco cidades juntas; 
c) Qual a média de acidentes nas cidades com menos de 50000 veículos.
 */

const prompt = require('prompt-sync')();
const dados = []

let nomeCidade = []
let numeroAcidentes = []
let numeroVeiculos = []
let maiorIndiceAcidentes = 0
let mediaAcidentes
let mediaVeiculos = 0
let continuarPesquisa = 0
let cidade
let maiorNumero = 0
let totalVeiculos = 0
let qtdeCidades = 0
let mediaVeiculosCidades = 0


do {

    nomeCidade.push(prompt('Informe o nome da cidade: '))
    numeroAcidentes.push(Number(prompt('Informe o número de acidentes na cidade: ')))
    numeroVeiculos.push(Number(prompt('Informe o número de veiculos da cidade: ')))
    continuarPesquisa = prompt('Deseja continuar pesquisa? 0 para SIM e 1 para NÃO.')

} while (continuarPesquisa == 0)

for (let i = 0; i < numeroAcidentes.length; i++) {
    if (numeroAcidentes[i] > maiorNumero) {
        maiorNumero = numeroAcidentes[i]
        cidade = nomeCidade[i]
    }
}

for (let i = 0; i < nomeCidade.length; i++) {
    if (numeroVeiculos[i] < 50000) {
        totalVeiculos += numeroAcidentes[i]
        qtdeCidades++
    }
    mediaAcidentes = totalVeiculos / qtdeCidades
}

for (let i = 0; i < numeroVeiculos.length; i++) {
    mediaVeiculos += numeroVeiculos[i]
    mediaVeiculosCidades = mediaVeiculos / qtdeCidades
}


console.log(`O maior índice de acidentes é da cidade ${cidade} de ${maiorNumero}.`)
console.log(`A média de veículos das cidades informadas é de ${mediaVeiculosCidades}.`)
console.log(`A média de acidentes nas cidades com menos de 50.000 veículos é de ${mediaAcidentes}.`)