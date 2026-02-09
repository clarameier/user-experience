// exemplo de uso de var, let e const em JavaScript
const externo = "Olá, eu sou uma constante global!";

// declaração de uma variável usando var
function exemploVar() {
    if (true) {
        var mensagem = "Olá, Faculdade Descomplica! Eu sou uma var."
    }
    console.log(mensagem);
}

// chamando uma função exemploVar
exemploVar();

// exemplo de erro e correção
var mensagem1 = "Olá, faculdade Descomplica! Escopo externo!"
console.log(mensagem1);

// declaração de uma variável usando let
function exemploLet() {
    if (true) {
        let mensagem = "Olá, Faculdade Descomplica! Eu sou uma let."
        console.log(mensagem);
    }
}

// chamando a função exemploLet
exemploLet();

// exemplo de erro e correção
let mensagem = "Olá, Descomplica! Let externo!";
console.log(mensagem);

// declaração de uma constante usando const
function exemploConstante() {
    const mensagem = "Olá, Faculdade Descomplica! Eu sou uma constante."
    console.log(mensagem);
}

// chamando a função exemploConst
exemploConstante();

// exemplo externo de const
console.log(externo);

// exemplo externo tentar alterar constante global

// demonstrando o escopo global de var

// demonstrando o escopo de bloco let

// exemplo de escopo inacessível
