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
        setTimeout(function () {
            console.log(self)
            console.log("Username:" + self.nome)
        }, 500)
    }
}

user.falarUserName()