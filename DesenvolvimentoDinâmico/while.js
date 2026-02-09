// imagine que você está fazendo exercícios físicos para se manter saudável.
// você decide fazer flexões até ficar cansado.

// aqui, usaremos um loop "while" para simular esse processo.

let quantidadeFlexoes = 0; // ponto de partida, começa com 0
let cansaco = false; // ponto de partida, começa com não estar cansado

while (!cansaco) { // enquanto não estiver cansado
    quantidadeFlexoes++ // adicione +1 flexão
    console.log("Eu fiz", quantidadeFlexoes, "flexões.");

    if (quantidadeFlexoes === 10) { // se a quantidade de flexões for igual a 10
        cansaco = true; // cansaço vira verdadeiro
    }
}