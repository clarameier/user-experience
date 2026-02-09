// crie uma função chamada saudacao, que simplesmente imprime “Olá, mundo!” no console.

function saudacao() {
    console.log("Olá, mundo!");
}
saudacao();

// crie uma função de saudação para aceitar um parâmetro nome. Dentro da nova função, imprima uma mensagem de saudação personalizada que inclua o nome passado como argumento.

function novaSaudacao(nome) {
    console.log("Olá, " + nome + "!");
}

novaSaudacao("Maria Clara");
// Chame a função novaSaudacao() com diferentes nomes como argumento para testar.
novaSaudacao("Luiza");
novaSaudacao("Viviane");
novaSaudacao("João");
novaSaudacao("Brenda");
novaSaudacao("Manoela");

// Crie uma função chamada soma.Esta função deve aceitar dois parâmetros, a e b, e retornar a soma deles.

function soma(a, b) {
    return(a +b)
}

// Chame a função soma com alguns pares de números como argumentos e imprima o resultado no console.
console.log("O resultado da soma é: " + soma(3, 5));
console.log("O resultado da soma é: " + soma(33, 232));
console.log("O resultado da soma é: " + soma(23, 1));
console.log("O resultado da soma é: " + soma(19, 5));
console.log("O resultado da soma é: " + soma(100, 0));
