// exemplo: manipulação de dados JSON

// objeto JSON inicial
let pessoa = {
    "nome": "João",
    "idade": 30,
    "endereco": {
        "rua": "Rua Principal",
        "numero": 123,
    },
    "telefones": ["1234-5678", "8765-4321"]
};

console.log(pessoa);

// acessar dados
console.log("\nAcessar Dados:");
console.log(pessoa.nome);
console.log(pessoa["idade"]);
console.log(pessoa.endereco.rua);
console.log(pessoa["telefones"][0]);
console.log(pessoa["telefones"][1]);

// adicionar dados
console.log("\nAdicionar Dados:");
pessoa.email = "joao@example.com";
console.log(pessoa);

// modificar dados
console.log("\nModificar Dados:");
pessoa.idade = 31;
pessoa.endereco.rua = "Rua Secundária";
console.log(pessoa);

// remover dados
console.log("\nRemover Dados:");
delete pessoa.telefones;

// existência da propriedade: se a propriedade não existir no objeto, o operador delete não causará um erro, apenas não fará nada.
// o operador delete não pode ser usado para remover variáveis declaradas com var, let ou const.
// ele só funciona para propriedades de objetos.

console.log(pessoa);

// operações com arrays
console.log("\nOperações com Arrays:");
pessoa.hobbies = ["leitura", "esportes"];
console.log(pessoa.hobbies[1]);
pessoa.hobbies.push("viagens");
console.log(pessoa.hobbies);

// iterar sobre as propriedades do objeto
console.log("\nIterar sobre as Propriedades do Objeto:");

// for-in não deve ser usao para iterar sobre arrays se a ordem dos elemntos for importante, pois a ordem de iteração não é garantida
for (let chave in pessoa) {
    console.log(chave + ": " + pessoa[chave]);
}

// converter para o JSON
console.log("\nConveter para o JSON:");
let jsonTexto = JSON.stringify(pessoa);
console.log(jsonTexto);

let objetoPessoa = JSON.parse(jsonTexto);
console.log(objetoPessoa);