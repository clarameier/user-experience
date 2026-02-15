// exemplosArray.js

// criar um array
let array1 = [];
let array2 = new Array();
let array3 = ["maçã", "banana", "uva"];

console.log("Array 1", array1);
console.log("Array 2", array2);
console.log("Array 3", array3);

// adicionando elementos ao array
//array1 = ["teste"];
//array2 = ["teste2"];
//array3 = ["teste3"]; 
// assim substitui a info do array, ao invés de adicionar
//console.log("\nNovo Array 1", array1);
//console.log("Novo Array 2", array2);
//console.log("Novo Array 3", array3);

console.log("\nArray após adicionar elementos:", array1)
array1.push("elemento 0");
array2.push("elemento 0");
array3.push("elemento 3");

console.log("\nNovo Array 1", array1);
console.log("Novo Array 2", array2);
console.log("Novo Array 3", array3);

// acessar elementos de um array
let primeiroElemento = array1[0];
let erro = array1[1]; // vai dar undefined, pq nao existe nenhum segundo valor em array1
let segundoElemento = array2[0];
let terceiroElemento = array3[3];

console.log("\nPrimeiro elemento Array 1:", primeiroElemento);
console.log("Erro:", erro);
console.log("Primeiro elemento Array 2:", segundoElemento);
console.log("Terceiro Elemento Array 3:", terceiroElemento);

// modificar elemento de um array
array1[0] = "novo elemento";
console.log("\nArray 1 após modificar elemento:", array1)