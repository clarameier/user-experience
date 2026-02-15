// criando um array inicial
let frutas = ["maçã", "banana", "laranja", "uva"]; // 0 1 2 3

console.log("Array inicial:", frutas);
console.log("Comprimento do array:", frutas.length);

// usando o método push() para adicionar elementos ao final do array
let novoComprimento = frutas.push("manga", "abacate");
console.log("\nArray atualizado por push():", frutas);
console.log("Novo comprimento do array:", novoComprimento);

// usando o método pop() para remover o último elemento do array
let ultimaFruta = frutas.pop();
console.log("\nArray atualizado por pop():", frutas);
console.log("Última fruta removida:", ultimaFruta);

// usando o método shift() para remover o primeiro elemento do array
let primeiraFruta = frutas.shift();
console.log("\nArray atualizado shift:", frutas);
console.log("Primeira fruta removida:", primeiraFruta);