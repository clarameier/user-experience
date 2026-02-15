// definindo uma string de exemplo
let nome = "Maria Clara Rosa Meier";
console.log("Nome inicial: " + nome);

// usando o método "toLowerCase()" para converter todos os caracteres alfabéticos para minúsculas
let nomeMinusculo = nome.toLowerCase();
console.log("Nome em minúsuclas: " + nomeMinusculo);

// usando o método "toUpperCase()" para converter todos os caracteres alfabéticos para maiúsculos
let nomeMaiusculo = nome.toUpperCase();
console.log("Nome em maiúsuclo: " + nomeMaiusculo);

// outra string com caracteres não alfabéticos
let stringComSimbolos = "Maria Clara Rosa Meier faz aniversário dia 17 de fevereiro!"
console.log("Frase com caracteres alfabéticos e numéricos: " + stringComSimbolos);

// convertendo para minúsculas
let minusculoSimbolos = stringComSimbolos.toLowerCase();
console.log("Frase em minúsculo: " + minusculoSimbolos);

// convertendo para maiúsculas
let maiusculoSimbolos = stringComSimbolos.toUpperCase();
console.log("Frase em maiúsculo: " + maiusculoSimbolos);