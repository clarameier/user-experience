// definindo outra função regular com dois parâmetros
function soma(a, b) {
    return a + b;
}

// chamando a função soma e armazenando o resultado em  um variável
let resultado = soma(13, 29);

// exibindo o resultado da função soma
console.log("O resultado da soma é: " + resultado);
console.log("O resultado da soma é: " + soma(13, 29));

// definindo uma função regular usando a palavra-chave 'function'
function saudacao(nome) {
    console.log("Olá, " + nome + "!");
}

// chamando uma função saudação e passando um argumento
saudacao("Maria Clara");

// definindo uma função regular sem parâmetros e sem retorno
function mensagem() {
    console.log("Esta é uma mensagem de boas vindas!");
}

// chamando a função mensagem
saudacao("Maria");
mensagem();