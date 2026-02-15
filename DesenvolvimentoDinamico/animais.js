// criação de strings com nomes de animais
let animal1 = "Elefante";
let animal2 = "Girafa";
let animal3 = "Zebra";

// exemplo do método substring()
// pega parte da string 'Elefante', começando no índice 3 até o índice 7
let parteAnimal1 = animal1.substring(3, 7);
console.log("Resultado sustring():", parteAnimal1);

// exemplo do método replace()
// substitui a substring 'ra' por 're' em 'Girafa'
let novoAnimal2 = animal2.replace("ra", "re");
console.log("Resultado replace():", novoAnimal2);

// exemplo do método concat()
// concatena as strings 'Elefante', 'Girafa' e 'Zebra' com espaços entre elas
let animaisJuntos = animal1.concat(", ", animal2, ", ", animal3);
console.log("Resultado concat():", animaisJuntos);