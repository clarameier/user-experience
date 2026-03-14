// função que simula uma operação assíncrona de verificação do status de uma casa
function verificarStatusCasa(casa) {
    return new Promise((resolve, reject) => {
        // simulando uma operação assíncrona que leva 2 segundos para ser concluída
        setTimeout(() => {
            const sucesso = Math.random() > 0.5; // simulando sucesso ou falha de forma aleatória
            if (sucesso) {
                resolve(`A casa localizada em ${casa.endereco} está em boas condições!`);
            } else {
                reject(`A casa localizada em ${casa.endereco} precisa de reparos.`);
            }
        }, 2000);
    });
}

// função que simula uma operação assíncrona de inspeção da casa
function inspecionarCasa(casa) {
    return new Promise((resolve) => {
        // simulando uma operação assíncrona que leva 1 segundo para ser concluída
        setTimeout(() => {
            resolve(`Inspeção da casa localizada em ${casa.endereco} concluída.`)
        }, 1000);
    });
}

// função que simula uma operação assíncrona de reparos na casa
function repararCasa(casa) {
    return new Promise((resolve) => {
        // simulando uma operação assíncrona que leva 3 segundos para ser concluída
        setTimeout(() => {
            resolve(`Reparos na casa localizada em ${casa.endereco} foram concluídos.`)
        }, 3000);
    });
}

// classe "casa"
class Casa {
    constructor(endereco, cor, numQuartos, temGaragem) {
        this.endereco = endereco;
        this.cor = cor;
        this.numQuartos = numQuartos;
        this.temGaragem = temGaragem;
    }

    // método para descrever a casa
    descrever() {
        let descricao = `Casa localizada em ${this.endereco}, de cor ${this.cor}, com ${this.numQuartos} quartos `;

        descricao += this.temGaragem ? "e possuí garagem." : "e não possuí garagem.";

        return descricao;
    }

    // método para verificar o status da casa
    verificarStatusCasa() {
        verificarStatusCasa(this)
            .then((resultado) => {
                console.log(resultado); // saída: a casa está em boas condições!
                return inspecionarCasa(this);
            })
            .then((resultadoInspecao) => {
                console.log(resultadoInspecao); // saída: inspeção da casa concluída!
            })
            .catch((erro) => {
                console.error(erro); // saída: a casa precisa de reparos.
                return repararCasa(this);
            })
            .then((resultadoReparo) => {
                if (resultadoReparo) {
                    console.log(resultadoReparo); // saída: reparos na casa foram concluídos!
                    return inspecionarCasa(this);
                }
            })
            .then((resultadoFinalInspecao) => {
                if (resultadoFinalInspecao) {
                    console.log(resultadoFinalInspecao); // saída: inspeção da casa concluída após reparos.
                }
            })
            .catch((erro) => {
                console.error(`Erro final: ${erro}.`);
            });
    }
}

// criação de um objeto (instância da classe Casa)
const minhaCasa = new Casa("Rua A, 123", "azul", 3, true);

// manipulação do objeto e exibição da descrição
console.log(minhaCasa.descrever());

// verificação do status da casa utilizando a promessa
minhaCasa.verificarStatusCasa();