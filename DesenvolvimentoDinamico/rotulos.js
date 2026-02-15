// imagine que você está organizando uma festa de aniversário.
// os blocos de código são como diferentes áreas da festa, onde diferentes atividades acontecem.
// por exemplo, você pode ter uma área para dançar, uma área para jogos e uma área para comer.

{
    // área para dançar
    console.log("Hora de dançar!");
    //aqui vão as instruções para a pista de dança
}

{
    // área para jogos
    console.log("Vamos jogar!");
    //aqui vão as instruções para os jogos
}

{
    // área para comer
    console.log("Hora de comer!");
    //aqui vão as instruções para o buffet
}

// os rótulos são como etiquetas que você coloca em diferentes atividades durante a festa, para identificá-lo.

// imagine que você tem uma competição de dança e uma competição de jogos acontecendo ao mesmo tempo.

danca:
for (let i = 0; i < 3; i++) {
    jogos:
    for(let j = 0; j < 3; j++) {
        if (i === 1 && j === 1) {
            console.log("A competição de dança foi interrompida!"); // sai da competição de dança
            break danca;
        }
        console.log("Competidor", (i+1), "está dançando enquanto o competidor", (j+1), "está jogando.")
    }
    
}

/*
    o código simula uma situação em que há uma competição de dança e uma competição de jogos acontecendo simultâneamente.
    os loops "for" aninhados representam as duas competições, onde cada competidor está envolvido tanto na dança quanto nos jogos.
    quando uma condição específica é atendida (no caso, i === 1 && j === 1), a competição de dança é interrompida e uma mensagem é exibida, utilizando o rótulo dança para sair do loop da competição de dança.
    isso demonstra o uso dos rótulos par controlar o fluxo do código em situações específicas.
*/
