// arrows functions

// exemplo básico de uma arrow function que soma dois números
let somar = (a, b) => {
    return a+b;
};

// chamando a função e exibindo o resultado no console
console.log(somar(5, 3));

// exemplo de arrow function com um único parâmetro (não precisa de parênteses)
let dobrar = n => n*2;

// chamando a função e exibindo o resultado no console
console.log(dobrar(5));

// exemplo de uma arrow function usada como callback
let numeros = [1, 2, 3, 4, 5];

// usando arrow function com o métod map para dobrar os valores do array
let numeroDobrados = numeros.map(n => n*2);

// exibindo o array resultante no console
console.log(numeroDobrados);

// arrow function com o corpo de função mais complexo
let saudacao = (nome, idade) => {
    let mensagem = `Olá, meu nome é ${nome} e eu tenho ${idade} anos`;
    return mensagem
};

// chamando a função e exibindo o resultado no console
console.log(saudacao("Maria", 22));