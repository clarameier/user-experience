// exemplos de operadores lógicos em javascript

// operador E lógico (&&)
const a = true;
const b = false;

const resultadoE1 = a && b; // false
const resultadoE2 = a && true; // true

console.log(`true && false: ${resultadoE1}`); // saída: false
console.log(`true && true: ${resultadoE2}`); // saída: true

// operador OU lógico (||)
const resultadoOU1 = a || b; // true
const resultadoOU2 = b || false; // false

console.log(`true || false: ${resultadoOU1}`); // saída: true
console.log(`false || false: ${resultadoOU2}`); // saída: true

// operador NÃO lógico (!)
const resultadoNAO1 = !a;
const resultadoNAO2 = !b;

console.log(`!true: ${resultadoNAO1}`); // saída: false
console.log(`!false: ${resultadoNAO2}`); // saída: true

// combinações de operadores lógicos
const resultadoComb1 = (a || b) && !b;
const resultadoComb2 = !(a && b) || a;

console.log(`(true || false) && !false: ${resultadoComb1}`); //saída: true
console.log(`!(true && false) || !true: ${resultadoComb2}`); //saída: true
