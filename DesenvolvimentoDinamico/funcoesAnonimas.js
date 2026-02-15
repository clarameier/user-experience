// declaração de uma variável chamada resultado e atribuição de uma função anônima a ela
let somaParametros = function(parametro1, parametro2) {
    console.log("Parâmetro 1: " + parametro1);
    console.log("Parâmetro 2: " + parametro2);

    let resultado = parametro1 + parametro2;

    console.log("Resultado: " + resultado);

    return resultado;
}

// chamada da função anônima atráves da variável
let resultado = somaParametros(5, 10);
console.log("Resultado da chamada da função somarParametros: " + resultado);


// definindo uma função que aceita outra função como argumento
function executarFuncao(funcao, valor1, valor2) {
    console.log("\nExecutando a função passada como argumento: ");
    return funcao(valor1, valor2);
}

// passando a função anônima como argumento para outra função
let resultadoExecucao = executarFuncao(somaParametros, 7, 3);
console.log("Resultado da execução da função passada como argumento: " + resultadoExecucao);

// definindo e chamando uma função anônima imediatamente
let resultadoImediato = (function(a, b){
    console.log("\nFunção de chamada imediata: ");
    return a*b;
})(4,6);
console.log("Resultado da função anônima chamada imediatamente: " + resultadoImediato);