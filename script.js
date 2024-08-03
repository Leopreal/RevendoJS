// var, let e const 
var x = 10
var y = 21

if(x > 9) {
    var x = 4
    console.log(x)

}

console.log(x)

let a =10
let b =20

if(b > 15){
    let b = 15
    console.log(b)
}

console.log(b)


// arrow function

const soma = function soma(a, b) {
    return a + b
}

const arrowSoma = (a, b) => a + b

console.log(soma(1, 1))
console.log(arrowSoma( 2, 2))

const saudacao = (nome) => {
    if(nome) {
        return `Olá ${nome}`
    } else {
        return "ola"
    }
}

console.log(saudacao("leo"))
console.log(saudacao())

const testeArrow = () => console.log("teste")

testeArrow()


const user = {
    nome: "LEO",
    falarUserName() {
        var self = this
        // setTimeout(function () {
        //     console.log(self)
        //     console.log("Username:" + self.nome)
        // }, 500)
    }
}

user.falarUserName()

const arr = [1,2,3,4]

const MaioresNumero = arr.filter((numero) => {
    if(numero >= 3) {
        return numero
    }

})

console.log(MaioresNumero)

const users = [
    {nome: "Leo", disponivel: true},
    {nome: "Lucas", disponivel: false},
    {nome: "mateus", disponivel: true},
    {nome: "Hugo", disponivel: false}
]

const UsuariosDisponiveis = users.filter((user) => user.disponivel)

console.log(UsuariosDisponiveis)

// map

const produtos = [
    {nome: "Pano", preco: 19.99, categoria: "limpeza"},
    {nome: "camiseta", preco: 20, categoria: "roupas"},
    {nome: "calca", preco: 50, categoria: "roupas"}

]

produtos.map((item) => {
    if(item.categoria === 'roupas') {
        item.A_venda = true
    }
})

console.log(produtos)

const frutas = ["maca", "pera", "mamao"]

const [f1, f2, f3] = frutas

console.log(f1)

const produto = {
    nome: "camiseta",
    preco: 30,
    cor: "preto"
}

const {
    nome: DetalhesProduto,
    preco,
    cor: corProduto
} = produto

console.log(`o nome do produto é ${DetalhesProduto} com o preco R$${preco} e a cor ${corProduto}`)

// spread operator

const a1 = [1,2,3]
const a2 = [4,5,6]

const a3 = [...a1, ...a2]

console.log(a3)


const NomeCarro = {nome: 'gol'}
const MarcaCarro = {marca: 'vw'}
const kms = {km: 1000}


const carro = {...NomeCarro, ...MarcaCarro, ...kms}

console.log(carro)