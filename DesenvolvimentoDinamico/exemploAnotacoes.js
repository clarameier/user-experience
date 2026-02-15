// Exemplo de comentários ou anotações em JavaScript

// Este é um comentário de uma linha
let exemploUmaLinha = "Comnentário de uma linha"; // pode ser usado no final do código

/*
    comentário de várias linhas:
    é utilizado principalmente para documentação do código
    ou explicações simples que não são intuitivas no código
*/

/*
A função abaixo soma dois números.
Ela recebe dois parâmetros:
- a: o primeiro número
- b: o segundo número
Retorna a soma de a e b.
*/
function somar(a, b) {
    return a + b; // retorna a soma dos dois números
    
}

// chamada da função somar com exemplos

/**
 * subtai o segundo número do primeiro.
 * 
 * @param {number} a - o número do qual subtrair
 * @param {number} b - o número a ser subtraído
 * @return {number} o resultado da subtração
 * 
 * @example
 * // exemplo de uso:
 * let resultado = subtrair(10, 4);
 * console.log(resultado); // 6
 */
function subtrair(a, b) {
    return a - b;
}

// chamadas de função para exemplificação
let resultadoSoma = somar(40, 2);
console.log(resultadoSoma); // exibe 42

let resultadoSubtracao = subtrair(10, 4);
console.log(resultadoSubtracao); // exibe 6