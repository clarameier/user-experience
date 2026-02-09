// imagine que você está tentando aprender a andar de bicicleta.
// você decide praticar até conseguir andar por pelo menos 1 minuto sem cair.

// aqui, usaremos um loop "do while" para simular esse processo.

let tempoDeAndar = 0; // ponto de partida, começa com 0
let caiu = false; // ponto de partida, começa com não ter caído

do {
    tempoDeAndar++; // faça um incremento de +1 tempo de andar
    console.log("Andei de bicicleta por", tempoDeAndar, "minutos.");
    
    if (tempoDeAndar === 3) { // se o tempo de andar chegar até 3 (nunca vai passar de 10, por conta do while ser < 10)
        caiu = true; // caia da bicicleta
    }
} while (!caiu && tempoDeAndar < 10); // faça isso tudo enquanto não cair e o tempo o tempo de andar for menor que 10