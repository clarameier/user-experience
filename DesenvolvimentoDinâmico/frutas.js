// exemplo de uso do método slice()
// temos uma string com várias frutas
let frutas = "maça, banana, laranja, uva, abacaxi";
console.log("Frutas:", frutas);
console.log("Tamanho da string frutas:", frutas.length);

// queremos obter uma parte da string, por exemplo, apenas "banana, laranja"
let parteFrutas = frutas.slice(6, 21);
console.log("Resultado do slice():", parteFrutas);

// exemplo de uso do método trim()
// temos uma string com espaços em branco no início e no final
let frutaComEspaco = "       abacate       ";

// queremos remover os espaços em branco do início e do final da string
let frutaSemEspaco = frutaComEspaco.trim();
console.log("Resultado do trim():", frutaSemEspaco);

// exemplo de uso do método split()
// temos uma string com várias frutas separadas por vírgulas
let listaDeFrutas = "maça, banana, laranja, uva, abacaxi";

// queremos dividir a string em um array de substrings, usando a vírgula como separador
let arrayDeFrutas = listaDeFrutas.split(" , ");
console.log("Resultado do split():", arrayDeFrutas);


